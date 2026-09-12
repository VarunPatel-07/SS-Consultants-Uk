import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import { BOILER_SERVICES, NAVIGATION_LINKS } from "@/content/pageContent/common.data";

export type NavigationLink = {
  label: string;
  href: string;
  openInNewTab?: boolean | null;
  children?: NavigationLink[] | null;
};

export type WebsiteSettings = {
  navigation: NavigationLink[];
  email: string;
  phone: string;
};

export const DEFAULT_NAVIGATION: NavigationLink[] = NAVIGATION_LINKS.map((item) => ({
  ...item,
  children:
    item.label === "Services"
      ? BOILER_SERVICES.map((service) => ({ label: service.label, href: `/services/${service.slug}` }))
      : undefined,
}));

export const DEFAULT_WEBSITE_SETTINGS: WebsiteSettings = {
  navigation: DEFAULT_NAVIGATION,
  email: "info@sscukltd.com",
  phone: "07590 514937",
};

export const getWebsiteSettings = cache(async (): Promise<WebsiteSettings> => {
  try {
    const payload = await getPayload({ config });
    const settings = await payload.findGlobal({ slug: "site-settings", depth: 0 });

    const navigation = settings.navigation?.length
      ? settings.navigation.map((item) => ({
          label: item.label,
          href: item.href,
          openInNewTab: item.openInNewTab,
          children: item.children?.map((child) => ({
            label: child.label,
            href: child.href,
            openInNewTab: child.openInNewTab,
            children: child.nestedChildren,
          })),
        }))
      : DEFAULT_NAVIGATION;

    return {
      navigation,
      email: settings.email || DEFAULT_WEBSITE_SETTINGS.email,
      phone: settings.phone || DEFAULT_WEBSITE_SETTINGS.phone,
    };
  } catch (error) {
    console.error("Unable to load site settings from Payload.", error);
    return DEFAULT_WEBSITE_SETTINGS;
  }
});

export const getSiteNavigation = cache(async () => (await getWebsiteSettings()).navigation);
