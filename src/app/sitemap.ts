import { SERVICE_CONTENT } from "@/utils/constants/service.constants";
import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_CONTENT.map(({ slug }) => ({
    url: `${SITE_URL}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
