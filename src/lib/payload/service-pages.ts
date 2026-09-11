import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import type { Faq, Media, Service } from "@/payload-types";
import type { CTA, SectionHeader, TextChunk } from "@/utils/interface/common.interface";
import type { CommonPageDataInterface } from "@/utils/interface/data.interface";

const isMedia = (value: number | Media | null | undefined): value is Media =>
  typeof value === "object" && value !== null;
const isFaq = (value: number | Faq): value is Faq => typeof value === "object" && value !== null;

const mediaURL = (media: number | Media | null | undefined) => {
  if (!isMedia(media) || !media.url) return undefined;
  if (media.url.startsWith("/")) return media.url;
  try {
    const url = new URL(media.url);
    return url.pathname.startsWith("/api/media/") ? `${url.pathname}${url.search}` : media.url;
  } catch {
    return media.url;
  }
};

const text = (value?: string | null, variant?: TextChunk["variant"]): TextChunk[][] =>
  value ? [[{ text: value, ...(variant ? { variant } : {}) }]] : [];

const sectionHeader = (header: { title: string; highlight?: string | null; description?: string | null }): SectionHeader => ({
  title: [...text(header.title), ...text(header.highlight, "brand")],
  description: text(header.description),
});

const ctas = (items: Service["ctas"]): CTA[] =>
  (items ?? []).map(({ label, href, btnStyle, target, rel, theme }) => ({
    label,
    href: href || undefined,
    variant: btnStyle,
    target: target || undefined,
    rel: rel || undefined,
    theme: theme || undefined,
  }));

export const getPayloadService = cache(async (slug: string): Promise<Service | null> => {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "services",
      depth: 1,
      draft: false,
      limit: 1,
      where: { slug: { equals: slug } },
    });
    return result.docs[0] ?? null;
  } catch (error) {
    console.error(`Unable to load service “${slug}” from Payload.`, error);
    return null;
  }
});

export const getPayloadServiceSlugs = cache(async (): Promise<string[]> => {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({ collection: "services", draft: false, depth: 0, limit: 100, select: { slug: true } });
    return result.docs.map(({ slug }) => slug);
  } catch {
    return [];
  }
});

export const getPayloadServiceLinks = cache(async (): Promise<Array<{ label: string; href: string }>> => {
  try {
    const payload = await getPayload({ config });
    const result = await payload.find({ collection: "services", draft: false, depth: 0, limit: 100, select: { slug: true, label: true } });
    return result.docs.map(({ slug, label }) => ({ label, href: `/services/${slug}` }));
  } catch {
    return [];
  }
});

export const getPayloadServicePageData = cache(async (slug: string): Promise<CommonPageDataInterface | null> => {
  const service = await getPayloadService(slug);
  if (!service) return null;

  const heroImage = mediaURL(service.heroImage);
  const faqs = (service.faqs ?? []).filter(isFaq).filter((faq) => faq.published !== false);

  return {
    metadata: {
      title: service.seo.title,
      description: service.seo.description,
      alternates: { canonical: service.seo.canonicalPath || `/services/${service.slug}` },
      robots: service.seo.noIndex ? { index: false, follow: false } : undefined,
    },
    serviceHeroSection: {
      header: {
        title: [...text(service.headline), ...text(service.highlight, "brand"), ...text(service.ending)],
        description: text(service.description),
      },
      slug: service.slug,
      label: service.label,
      cta: service.ctaLabel || "Get a free quote",
      heroImage,
      eyebrow: service.eyebrow || "",
      options: service.options ?? [],
      note: service.note || "",
      reassurance: (service.reassurance ?? []).map(({ text: value }) => value),
    },
    whatOurServiceInclude: {
      header: sectionHeader(service.includesHeader),
      installationSteps: (service.includedItems ?? []).map((item) => ({
        number: item.number,
        title: item.title,
        description: item.description,
        tags: "",
        image: mediaURL(item.image),
      })),
    },
    heatingSolutionDesignForYou: {
      header: sectionHeader(service.solutionsHeader),
      specifications: service.specifications ?? [],
    },
    process: {
      header: sectionHeader(service.processHeader),
      steps: service.processSteps ?? [],
    },
    callToActionSection: {
      header: sectionHeader(service.ctaHeader),
      reassurance: service.ctaReassurance || undefined,
      ctas: ctas(service.ctas),
    },
    faq: {
      header: sectionHeader(service.faqHeader),
      faqsItems: faqs.map(({ question, answer }) => ({ question, answer })),
    },
  };
});
