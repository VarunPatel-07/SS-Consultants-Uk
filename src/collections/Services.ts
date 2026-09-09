import type { CollectionConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";
import { ctasField, sectionHeader, simpleCardsField, testimonialSectionField } from "@/payload/fields/content";
import { seoFields } from "@/payload/fields/seo";

export const Services: CollectionConfig = {
  slug: "services",
  admin: { defaultColumns: ["title", "slug", "updatedAt"], useAsTitle: "title" },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "label", type: "text", required: true },
    { name: "eyebrow", type: "text" },
    { name: "headline", type: "text", required: true },
    { name: "highlight", type: "text" },
    { name: "ending", type: "text" },
    { name: "description", type: "textarea", required: true },
    { name: "ctaLabel", type: "text", defaultValue: "Get a free quote" },
    {
      name: "options",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "price", type: "text", required: true },
      ],
    },
    { name: "note", type: "textarea" },
    { name: "reassurance", type: "array", fields: [{ name: "text", type: "text", required: true }] },
    sectionHeader("includesHeader", "What is included heading"),
    simpleCardsField("includedItems", "Included items"),
    sectionHeader("solutionsHeader", "Solutions heading"),
    simpleCardsField("specifications", "Specifications"),
    sectionHeader("processHeader", "Process heading"),
    {
      name: "processSteps",
      type: "array",
      fields: [
        { name: "number", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
    ctasField(),
    { name: "faqs", type: "relationship", relationTo: "faqs", hasMany: true },
    testimonialSectionField(),
    ...seoFields,
  ],
};
