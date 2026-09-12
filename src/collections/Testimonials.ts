import type { CollectionConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: { defaultColumns: ["name", "rating", "designation", "sortOrder"], useAsTitle: "name" },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "quote", type: "textarea", required: true },
    { name: "rating", type: "number", required: true, min: 0, max: 5, defaultValue: 5 },
    { name: "designation", type: "text", admin: { description: "Optional customer role, location or service name." } },
    { name: "sortOrder", type: "number", defaultValue: 0, index: true },
  ],
};
