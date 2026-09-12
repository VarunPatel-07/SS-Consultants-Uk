import type { CollectionConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "FAQ", plural: "FAQs" },
  admin: { defaultColumns: ["question", "page", "published", "sortOrder"], useAsTitle: "question" },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    {
      name: "page",
      type: "select",
      defaultValue: "general",
      options: ["general", "homepage", "about", "boiler-servicing", "boiler-breakdown-repairs", "boiler-installation", "underfloor-heating", "powerflushing", "central-heating"],
      required: true,
      index: true,
    },
    { name: "sortOrder", type: "number", defaultValue: 0, index: true },
    { name: "published", type: "checkbox", defaultValue: true, index: true },
  ],
};
