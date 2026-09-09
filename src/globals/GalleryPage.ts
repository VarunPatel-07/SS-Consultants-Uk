import type { GlobalConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";
import { sectionHeader, testimonialSectionField } from "@/payload/fields/content";
import { seoFields } from "@/payload/fields/seo";

export const GalleryPage: GlobalConfig = {
  slug: "gallery-page",
  label: "Gallery page",
  admin: { group: "Pages" },
  access: { read: anyone, update: authenticated },
  versions: { drafts: true },
  fields: [
    ...seoFields,
    sectionHeader("header", "Gallery heading"),
    testimonialSectionField(),
    {
      name: "items",
      type: "relationship",
      label: "Gallery images",
      relationTo: "media",
      hasMany: true,
      admin: { description: "Select images in the order they should appear on the Gallery page." },
    },
  ],
};
