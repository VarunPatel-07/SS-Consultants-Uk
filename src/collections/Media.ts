import type { CollectionConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Gallery image", plural: "Gallery images" },
  admin: {
    description: "Upload an image and provide accessible alternative text.",
    group: "Website content",
    useAsTitle: "filename",
  },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  upload: {
    adminThumbnail: "thumbnail",
    displayPreview: true,
    focalPoint: true,
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, position: "centre", formatOptions: { format: "webp" } },
      { name: "card", width: 800, height: 600, position: "centre", formatOptions: { format: "webp" } },
      { name: "hero", width: 1600, height: 900, position: "centre", formatOptions: { format: "webp" } },
    ],
    mimeTypes: ["image/jpeg", "image/png", "image/webp", "image/avif", "image/svg+xml"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alternative text",
      required: true,
      admin: { description: "Briefly describe the image for accessibility and search engines." },
    },
  ],
};
