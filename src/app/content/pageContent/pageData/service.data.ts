import { SERVICE_CONTENT } from "@/app/content/pageContent/common.data";

export const SERVICE_PAGE_DATA = SERVICE_CONTENT;

export function getServicePageData(slug: string) {
  return SERVICE_PAGE_DATA.find((service) => service.slug === slug);
}

