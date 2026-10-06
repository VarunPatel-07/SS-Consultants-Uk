import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import { seoMetadata } from "./seo";
import type { Config } from "@/payload-types";

export type LegalPageSlug = "privacy-policy" | "terms-and-conditions" | "cookie-policy";
export type LegalPageData = Config["globals"][LegalPageSlug];

export const getLegalPage = cache(async (slug: LegalPageSlug): Promise<LegalPageData | null> => {
  try {
    return await (await getPayload({ config })).findGlobal({ slug, depth: 1, draft: false });
  } catch (error) {
    console.error(`Unable to load ${slug} from Payload.`, error);
    return null;
  }
});

export const legalMetadata = async (slug: LegalPageSlug, canonical: string) => {
  const page = await getLegalPage(slug);
  return page ? seoMetadata(page.seo, canonical) : { alternates: { canonical } };
};
