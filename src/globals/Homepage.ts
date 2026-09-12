import type { GlobalConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";
import {
  ctasField,
  richTextSectionHeader,
  sectionHeader,
  simpleCardsField,
  testimonialSectionField,
} from "@/payload/fields/content";
import { seoFields } from "@/payload/fields/seo";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
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
        ctasField(),
        { name: "reassurance", type: "text" },
        {
          name: "image",
          type: "relationship",
          relationTo: "media",
          admin: { description: "Optional hero image. The existing website image is used when this is empty." },
        },
        {
          name: "statsCard",
          type: "group",
          label: "Statistics card",
          fields: [
            { name: "enabled", type: "checkbox", defaultValue: true, label: "Show statistics card" },
            { name: "value", type: "text", defaultValue: "22+" },
            { name: "label", type: "text", defaultValue: "years" },
            { name: "description", type: "text", defaultValue: "Heating experience" },
          ],
        },
        {
          name: "iconCard",
          type: "group",
          label: "Icon information card",
          fields: [
            { name: "enabled", type: "checkbox", defaultValue: true, label: "Show icon card" },
            { name: "title", type: "text", defaultValue: "Same-day appointments available" },
            { name: "description", type: "text", defaultValue: "Speak directly with an engineer" },
            {
              name: "icon",
              type: "select",
              defaultValue: "calendar",
              options: [
                { label: "Shield", value: "shield" },
                { label: "Sparkles", value: "sparkles" },
                { label: "Calendar", value: "calendar" },
                { label: "Check mark", value: "check" },
                { label: "Map pin", value: "map-pin" },
                { label: "Clock", value: "clock" },
                { label: "Phone", value: "phone" },
                { label: "Wrench", value: "wrench" },
              ],
            },
          ],
        },
        {
          name: "infoItems",
          type: "array",
          label: "Information items",
          maxRows: 4,
          admin: { description: "Information cards displayed below the homepage hero. Choose an icon by name." },
          fields: [
            { name: "title", type: "text", required: true },
            { name: "description", type: "text", required: true },
            {
              name: "icon",
              type: "select",
              required: true,
              defaultValue: "check",
              options: [
                { label: "Shield", value: "shield" },
                { label: "Sparkles", value: "sparkles" },
                { label: "Calendar", value: "calendar" },
                { label: "Check mark", value: "check" },
                { label: "Map pin", value: "map-pin" },
                { label: "Clock", value: "clock" },
                { label: "Phone", value: "phone" },
                { label: "Wrench", value: "wrench" },
              ],
            },
          ],
        },
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
        { name: "calloutTitle", type: "text" },
        { name: "calloutDescription", type: "textarea" },
      ],
    },
    {
      name: "about",
      type: "group",
      fields: [
        richTextSectionHeader(),
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          label: "About image",
          admin: { description: "Choose an existing image or upload a new image for the homepage About section." },
        },
        simpleCardsField("features", "Features"),
        { name: "badgeTitle", type: "text" },
        { name: "badgeDescription", type: "text" },
        { name: "reassurance", type: "text" },
        ctasField(),
      ],
    },
    {
      name: "servicesSection",
      type: "group",
      fields: [sectionHeader(), { name: "services", type: "relationship", relationTo: "services", hasMany: true }],
    },
    {
      name: "boilerOptions",
      type: "group",
      fields: [
        sectionHeader(),
        {
          name: "items",
          type: "array",
          label: "Boiler options",
          fields: [
            { name: "title", type: "text", required: true },
            {
              name: "highlight",
              type: "text",
              label: "Highlight / tagline",
              admin: { description: "Highlighted italic text displayed directly below the boiler title." },
            },
            { name: "description", type: "textarea", required: true },
            {
              name: "note",
              type: "text",
              label: "Best for note",
              admin: { description: "Text displayed after the “Best for:” label." },
            },
            {
              name: "bulletPoints",
              type: "array",
              label: "Bullet points",
              admin: { description: "Add the features displayed with check marks on this boiler card." },
              fields: [{ name: "text", type: "text", label: "Bullet point", required: true }],
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Boiler image",
              admin: {
                description:
                  "Choose an existing image or upload a new image for this boiler card. The current default image is used when this is empty.",
              },
            },
            {
              name: "ctaLabel",
              type: "text",
              label: "CTA button label",
              defaultValue: "Get a Quote for This Boiler",
            },
            {
              name: "popularChoice",
              type: "checkbox",
              label: "Popular choice",
              defaultValue: false,
              admin: { description: "Show the Popular choice badge on this boiler card." },
            },
          ],
        },
      ],
    },
    {
      name: "callToAction",
      type: "group",
      fields: [sectionHeader(), { name: "reassurance", type: "text" }, ctasField()],
    },
    testimonialSectionField(),
    { name: "whyChooseUs", type: "group", fields: [sectionHeader(), simpleCardsField("items", "Reasons")] },
    {
      name: "faqSection",
      type: "group",
      fields: [sectionHeader(), { name: "faqs", type: "relationship", relationTo: "faqs", hasMany: true }],
    },
  ],
};
