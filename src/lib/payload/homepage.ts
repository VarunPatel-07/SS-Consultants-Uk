import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import { BOILER_BRANDS, BOILER_OPTIONS, HEATING_SUPPORT_CARDS } from "@/content/pageContent/common.data";
import type { Faq, Homepage, Media, Service } from "@/payload-types";
import type { CTA, SectionHeader, TextChunk } from "@/utils/interface/common.interface";
import type { CommonPageDataInterface } from "@/utils/interface/data.interface";

export type HeroInfoItem = {
  title: string;
  description: string;
  icon: "shield" | "sparkles" | "calendar" | "check" | "map-pin" | "clock" | "phone" | "wrench";
};

export type HomepageHeroVisual = {
  image?: { src: string; alt: string };
  statsCard?: { value: string; label: string; description: string } | null;
  iconCard?: { title: string; description: string; icon: HeroInfoItem["icon"] } | null;
};

export type HomepageContent = Pick<
  CommonPageDataInterface,
  "hero" | "experience" | "about" | "services" | "boilersOptions" | "callToActionSection" | "whyChooseUs" | "faq"
> & { heroInfoItems?: HeroInfoItem[]; heroVisual?: HomepageHeroVisual };

const isMedia = (value: number | Media | null | undefined): value is Media => typeof value === "object" && value !== null;
const isService = (value: number | Service): value is Service => typeof value === "object" && value !== null;
const isFaq = (value: number | Faq): value is Faq => typeof value === "object" && value !== null;

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

const text = (value?: string | null, variant?: TextChunk["variant"]): TextChunk[][] =>
  value ? [[{ text: value, ...(variant ? { variant } : {}) }]] : [];

const toSectionHeader = (header: Homepage["hero"]["header"]): SectionHeader => ({
  title: [...text(header.title), ...text(header.highlight, "brand")],
  description: text(header.description),
});

const toCtas = (ctas: Homepage["hero"]["ctas"]): CTA[] =>
  (ctas ?? []).map(({ label, href, btnStyle, target, rel, theme }) => ({
    label,
    href: href || undefined,
    variant: btnStyle,
    target: target || undefined,
    rel: rel || undefined,
    theme: theme || undefined,
  }));

const toHeroVisual = (hero: Homepage["hero"]): HomepageHeroVisual => ({
  image: isMedia(hero.image) && hero.image.url ? { src: normalizeMediaURL(hero.image.url), alt: hero.image.alt } : undefined,
  statsCard:
    hero.statsCard?.enabled === false || !hero.statsCard?.value || !hero.statsCard.label || !hero.statsCard.description
      ? null
      : { value: hero.statsCard.value, label: hero.statsCard.label, description: hero.statsCard.description },
  iconCard:
    hero.iconCard?.enabled === false || !hero.iconCard?.title || !hero.iconCard.description
      ? null
      : { title: hero.iconCard.title, description: hero.iconCard.description, icon: hero.iconCard.icon || "calendar" },
});

export const getHomepage = cache(async (): Promise<Homepage | null> => {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "homepage", depth: 1 });
  } catch (error) {
    console.error("Unable to load Homepage from Payload.", error);
    return null;
  }
});

export const getHomepageContent = cache(async (): Promise<HomepageContent | null> => {
  const homepage = await getHomepage();
  if (!homepage) return null;

  const services = (homepage.servicesSection.services ?? []).filter(isService);
  const faqs = (homepage.faqSection.faqs ?? [])
    .filter(isFaq)
    .filter((faq) => faq.published !== false)
    .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

  return {
    hero: {
      eyebrow: homepage.hero.header.eyebrow || undefined,
      reassurance: homepage.hero.reassurance || undefined,
      header: toSectionHeader(homepage.hero.header),
      ctas: toCtas(homepage.hero.ctas),
    },
    heroInfoItems: homepage.hero.infoItems?.length ? homepage.hero.infoItems : undefined,
    heroVisual: toHeroVisual(homepage.hero),
    experience: {
      eyebrow: text(homepage.experience.header.eyebrow),
      header: toSectionHeader(homepage.experience.header),
      callout: {
        header: { title: text(homepage.experience.calloutTitle), description: text(homepage.experience.calloutDescription) },
      },
      brands: (homepage.experience.brandNames ?? []).flatMap(({ name }) => {
        const brand = BOILER_BRANDS.find((item) => item.name.toLowerCase() === name.toLowerCase());
        return brand ? [brand] : [];
      }),
    },
    about: {
      eyebrow: text(homepage.about.header.eyebrow),
      header: toSectionHeader(homepage.about.header),
      cards: (homepage.about.features ?? []).map((item, index) => ({
        title: item.title,
        description: item.description,
        icon: (["shield", "umbrella", "calendar", "map"] as const)[index % 4],
      })),
      badge:
        homepage.about.badgeTitle && homepage.about.badgeDescription
          ? { title: text(homepage.about.badgeTitle), description: text(homepage.about.badgeDescription) }
          : undefined,
      reassurance: text(homepage.about.reassurance),
      cta: toCtas(homepage.about.ctas),
    },
    services: {
      header: toSectionHeader(homepage.servicesSection.header),
      items: services.flatMap((service) => {
        const visual = HEATING_SUPPORT_CARDS.find((item) => item.slug === service.slug);
        return visual ? [{ ...visual, title: service.title, description: service.description, ctaLabel: service.ctaLabel || visual.ctaLabel }] : [];
      }),
    },
    boilersOptions: {
      header: toSectionHeader(homepage.boilerOptions.header),
      brands: (homepage.boilerOptions.items ?? []).flatMap((item, index) => {
        const visual = BOILER_OPTIONS[index];
        return visual ? [{ ...visual, name: item.title, description: item.description }] : [];
      }),
    },
    callToActionSection: {
      reassurance: homepage.callToAction.reassurance || undefined,
      header: toSectionHeader(homepage.callToAction.header),
      ctas: toCtas(homepage.callToAction.ctas),
    },
    whyChooseUs: { header: toSectionHeader(homepage.whyChooseUs.header), items: homepage.whyChooseUs.items ?? [] },
    faq: {
      header: toSectionHeader(homepage.faqSection.header),
      faqsItems: faqs.map(({ question, answer }) => ({ question, answer })),
    },
  };
});

export const getHomepageInfoItems = cache(async () => (await getHomepageContent())?.heroInfoItems);
export const getHomepageHeroVisual = cache(async () => (await getHomepageContent())?.heroVisual ?? {});
