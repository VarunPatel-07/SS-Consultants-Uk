import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import type { AboutPage, Faq, Media, Service } from "@/payload-types";
import type { CTA, SectionHeader, TextChunk } from "@/utils/interface/common.interface";
import type { CommonPageDataInterface } from "@/utils/interface/data.interface";

const isMedia = (value: number | Media | null | undefined): value is Media => typeof value === "object" && value !== null;
const isService = (value: number | Service): value is Service => typeof value === "object" && value !== null;
const isFaq = (value: number | Faq): value is Faq => typeof value === "object" && value !== null;
const text = (value?: string | null, variant?: TextChunk["variant"]): TextChunk[][] =>
  value ? [[{ text: value, ...(variant ? { variant } : {}) }]] : [];
const header = (value: { title: string; highlight?: string | null; description?: string | null }): SectionHeader => ({
  title: [...text(value.title), ...text(value.highlight, "brand")],
  description: text(value.description),
});
const normalizeMediaURL = (url: string) => {
  if (url.startsWith("/")) return url;
  try {
    const parsedURL = new URL(url);
    if (parsedURL.pathname.startsWith("/api/media/")) return `${parsedURL.pathname}${parsedURL.search}`;
  } catch {
    return url;
  }
  return url;
};
const media = (value: number | Media | null | undefined) =>
  isMedia(value) && value.url
    ? {
        src: normalizeMediaURL(value.url),
        alt: value.alt,
        width: value.width || undefined,
        height: value.height || undefined,
      }
    : undefined;
const ctas = (items: AboutPage["hero"]["ctas"]): CTA[] =>
  (items ?? []).map(({ label, href, btnStyle, target, rel, theme }) => ({
    label, href: href || undefined, variant: btnStyle, target: target || undefined, rel: rel || undefined, theme: theme || undefined,
  }));

export const getAboutPage = cache(async (): Promise<AboutPage | null> => {
  try {
    return await (await getPayload({ config })).findGlobal({ slug: "about-page", depth: 2, draft: false });
  } catch (error) {
    console.error("Unable to load the About page from Payload.", error);
    return null;
  }
});

export const getAboutPageContent = cache(async (): Promise<CommonPageDataInterface | null> => {
  const page = await getAboutPage();
  if (!page) return null;
  const principleImage = media(page.principles.image);

  return {
    metadata: {
      title: page.seo.title,
      description: page.seo.description,
      alternates: { canonical: page.seo.canonicalPath || "/about" },
      robots: page.seo.noIndex ? { index: false, follow: false } : undefined,
    },
    about: {
      eyebrow: text(page.hero.header.eyebrow),
      header: header(page.hero.header),
      image: media(page.hero.image),
      cards: (page.hero.features ?? []).map((item, index) => ({
        title: item.title,
        description: item.description,
        icon: (["shield", "umbrella", "calendar", "map"] as const)[index % 4],
      })),
      badge: page.hero.badgeTitle && page.hero.badgeDescription
        ? { title: text(page.hero.badgeTitle), description: text(page.hero.badgeDescription) }
        : undefined,
      reassurance: text(page.hero.reassurance),
      cta: ctas(page.hero.ctas),
    },
    aboutPrinciples: principleImage
      ? {
          header: header(page.principles.header),
          image: principleImage,
          badge: { title: page.principles.badgeTitle || "", description: page.principles.badgeDescription || "" },
          principles: page.principles.items ?? [],
        }
      : undefined,
    experience: {
      eyebrow: text(page.experience.header.eyebrow),
      header: header(page.experience.header),
      callout: { header: { title: text(page.principles.calloutTitle), description: text(page.principles.calloutDescription) } },
      brands: (page.experience.brandLogos ?? []).flatMap((logo) =>
        isMedia(logo) && logo.url
          ? [{ name: logo.alt || logo.filename || String(logo.id), logo: normalizeMediaURL(logo.url), alt: logo.alt, width: logo.width || undefined, height: logo.height || undefined }]
          : [],
      ),
    },
    services: {
      header: header(page.servicesSection.header),
      items: (page.servicesSection.services ?? []).filter(isService).map((service) => ({
        slug: service.slug,
        number: "",
        title: service.homepageCard?.title || service.title,
        description: service.homepageCard?.description || "",
        image: isMedia(service.homepageCard?.image) && service.homepageCard.image.url
          ? normalizeMediaURL(service.homepageCard.image.url)
          : undefined,
        imageAlt: isMedia(service.homepageCard?.image) ? service.homepageCard.image.alt : "",
        ctaLabel: service.homepageCard?.ctaLabel || "View service",
        badge: service.homepageCard?.badge || undefined,
      })),
    },
    faq: {
      header: header(page.faqSection.header),
      faqsItems: (page.faqSection.faqs ?? []).filter(isFaq).filter((faq) => faq.published !== false).map(({ question, answer }) => ({ question, answer })),
    },
  };
});
