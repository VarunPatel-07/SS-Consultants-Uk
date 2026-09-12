import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import type { GalleryPage, Media } from "@/payload-types";

export const getGalleryPage = cache(async (): Promise<GalleryPage | null> => {
  try {
    const payload = await getPayload({ config });

    return await payload.findGlobal({
      slug: "gallery-page",
      depth: 1,
      draft: false,
    });
  } catch (error) {
    console.error("Unable to load the Gallery page from Payload.", error);
    return null;
  }
});

export function isPopulatedMedia(item: number | Media): item is Media {
  return typeof item === "object" && item !== null;
}

export function normalizePayloadMediaURL(url: string): string {
  if (url.startsWith("/")) return url;

  try {
    const parsedURL = new URL(url);

    if (parsedURL.pathname.startsWith("/api/media/")) {
      return `${parsedURL.pathname}${parsedURL.search}`;
    }
  } catch {
    return url;
  }

  return url;
}
