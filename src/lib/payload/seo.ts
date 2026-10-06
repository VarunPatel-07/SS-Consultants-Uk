import type { Metadata } from "next";

import type { Media } from "@/payload-types";
import { DEFAULT_META_IMAGE, SITE_NAME } from "@/utils/constants/seo.constants";
import { normalizePayloadMediaURL } from "./gallery";

type Seo = {
  title: string;
  description: string;
  canonicalPath?: string | null;
  noIndex?: boolean | null;
  image?: number | Media | null;
};

const metaImage = (image: Seo["image"]) => {
  if (!image || typeof image !== "object" || !image.url) return DEFAULT_META_IMAGE;
  return {
    url: normalizePayloadMediaURL(image.url),
    width: image.width ?? undefined,
    height: image.height ?? undefined,
    alt: image.alt,
  };
};

// Next.js replaces (not merges) the layout's openGraph, so every field is set again here.
export const seoMetadata = (seo: Seo, fallbackCanonical: string): Metadata => {
  const canonical = seo.canonicalPath || fallbackCanonical;
  const image = metaImage(seo.image);
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [image.url] },
  };
};
