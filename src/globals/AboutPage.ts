import type { GlobalConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";
import { ctasField, sectionHeader, simpleCardsField } from "@/payload/fields/content";
import { seoFields } from "@/payload/fields/seo";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  label: "About page",
  admin: { group: "Pages" },
  access: { read: anyone, update: authenticated },
  versions: { drafts: true },
  fields: [
    ...seoFields,
    {
      name: "hero",
      type: "group",
      fields: [
        sectionHeader(),
        { name: "image", type: "upload", relationTo: "media", label: "About hero image" },
        simpleCardsField("features", "Trust features"),
        { name: "badgeTitle", type: "text" },
        { name: "badgeDescription", type: "text" },
        { name: "reassurance", type: "text" },
        ctasField(),
      ],
    },
    {
      name: "principles",
      type: "group",
      fields: [
        sectionHeader(),
        { name: "image", type: "upload", relationTo: "media", label: "Principles image" },
        { name: "badgeTitle", type: "text" },
        { name: "badgeDescription", type: "text" },
        {
          name: "items",
          type: "array",
          fields: [
            { name: "number", type: "text", required: true },
            { name: "title", type: "text", required: true },
            { name: "description", type: "textarea", required: true },
          ],
        },
        { name: "calloutTitle", type: "text", admin: { description: "Heading for the boiler-brand callout." } },
        { name: "calloutDescription", type: "textarea", admin: { description: "Description for the boiler-brand callout." } },
      ],
    },
    {
      name: "experience",
      type: "group",
      fields: [
        sectionHeader(),
        {
          name: "brandLogos",
          type: "upload",
          relationTo: "media",
          hasMany: true,
          label: "Brand logos",
          admin: {
            description:
              "Choose existing brand logos or upload new images. Use SVG logos where possible for sharper results and better performance.",
          },
        },
      ],
    },
    { name: "servicesSection", type: "group", fields: [sectionHeader(), { name: "services", type: "relationship", relationTo: "services", hasMany: true }] },
    { name: "faqSection", type: "group", fields: [sectionHeader(), { name: "faqs", type: "relationship", relationTo: "faqs", hasMany: true }] },
  ],
};
