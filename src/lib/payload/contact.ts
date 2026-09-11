import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import type { ContactPage } from "@/payload-types";
import type { HeroSection } from "@/utils/interface/data.interface";

export const getContactPage = cache(async (): Promise<ContactPage | null> => {
  try {
    return await (await getPayload({ config })).findGlobal({ slug: "contact-page", depth: 1, draft: false });
  } catch (error) {
    console.error("Unable to load the Contact page from Payload.", error);
    return null;
  }
});

export const getContactHero = cache(async (): Promise<HeroSection | null> => {
  const page = await getContactPage();
  if (!page) return null;
  return {
    eyebrow: page.hero.header.eyebrow || undefined,
    header: {
      title: [
        [{ text: page.hero.header.title }],
        ...(page.hero.header.highlight ? [[{ text: page.hero.header.highlight, variant: "brand" as const }]] : []),
      ],
      description: page.hero.header.description ? [[{ text: page.hero.header.description }]] : [],
    },
    ctas: (page.hero.ctas ?? []).map(({ label, href, btnStyle, target, rel, theme }) => ({
      label, href: href || undefined, variant: btnStyle, target: target || undefined, rel: rel || undefined, theme: theme || undefined,
    })),
  };
});
