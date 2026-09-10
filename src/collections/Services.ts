import type { CollectionConfig, Field } from "payload";

import { authenticated, anyone } from "@/payload/access";
import { ctasField, sectionHeader, simpleCardsField, testimonialSectionField } from "@/payload/fields/content";
import { createSeoFields } from "@/payload/fields/seo";

const imageUpload = (name: string, label: string, description: string): Field => ({
  name,
  type: "upload",
  relationTo: "media",
  label,
  admin: { description },
});

export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Service", plural: "Services" },
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    description: "Create the homepage service card and the complete service detail page from one clearly organised form.",
    useAsTitle: "title",
  },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  versions: { drafts: true },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "1. Setup",
          description: "Internal details used to identify this service and create its website URL.",
          fields: [
            { name: "title", type: "text", label: "Service name", required: true, admin: { description: "Example: Boiler Servicing. This is also the record name in the admin panel." } },
            { name: "slug", type: "text", label: "Page URL slug", required: true, unique: true, index: true, admin: { description: "Example: boiler-servicing creates /services/boiler-servicing." } },
            { name: "label", type: "text", label: "Form and navigation label", required: true, admin: { description: "Short service name used in forms and navigation." } },
          ],
        },
        {
          label: "2. Homepage Card",
          description: "Controls how this service appears in the Services section on the homepage.",
          fields: [
            {
              name: "homepageCard",
              type: "group",
              label: "Homepage service card",
              fields: [
                { name: "title", type: "text", label: "Card title", required: true },
                { name: "description", type: "textarea", label: "Card description", required: true },
                imageUpload("image", "Card image", "Upload the image shown on this service's homepage card."),
                { name: "ctaLabel", type: "text", label: "Button label", defaultValue: "View service" },
                { name: "badge", type: "text", label: "Optional badge", admin: { description: "Example: Same-day available. Leave empty to hide it." } },
              ],
            },
          ],
        },
        {
          label: "3. Service Hero",
          description: "The first section visitors see at the top of this service page.",
          fields: [
            { name: "eyebrow", type: "text", label: "Small text above heading" },
            { name: "headline", type: "text", label: "Heading — first line", required: true },
            { name: "highlight", type: "text", label: "Heading — highlighted words" },
            { name: "ending", type: "text", label: "Heading — final words" },
            { name: "description", type: "textarea", label: "Hero description", required: true },
            imageUpload("heroImage", "Service hero image", "Upload the large image displayed beside the service heading."),
            { name: "ctaLabel", type: "text", label: "Main button label", defaultValue: "Get a free quote" },
            {
              name: "options",
              type: "array",
              label: "Service options and prices",
              admin: { description: "Optional pricing rows displayed over the hero image." },
              fields: [
                { name: "name", type: "text", label: "Option name", required: true },
                { name: "price", type: "text", label: "Price", required: true },
              ],
            },
            { name: "note", type: "textarea", label: "Pricing note" },
            {
              name: "reassurance",
              type: "array",
              label: "Trust points below buttons",
              fields: [{ name: "text", type: "text", required: true }],
            },
          ],
        },
        {
          label: "4. Included Services",
          description: "The image cards under “What our service can include”.",
          fields: [
            sectionHeader("includesHeader", "Section heading"),
            {
              name: "includedItems",
              type: "array",
              label: "Included service cards",
              fields: [
                { name: "number", type: "text", label: "Step number", required: true },
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
                imageUpload("image", "Card image", "Upload the image displayed at the top of this card."),
              ],
            },
          ],
        },
        {
          label: "5. Tailored Solutions",
          description: "The feature cards explaining how this service is tailored to the customer.",
          fields: [sectionHeader("solutionsHeader", "Section heading"), simpleCardsField("specifications", "Solution cards")],
        },
        {
          label: "6. Process",
          description: "The numbered step-by-step process section.",
          fields: [
            sectionHeader("processHeader", "Section heading"),
            {
              name: "processSteps",
              type: "array",
              label: "Process steps",
              fields: [
                { name: "number", type: "text", required: true },
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea", required: true },
              ],
            },
          ],
        },
        {
          label: "7. CTA, Reviews & FAQs",
          description: "Choose the page call-to-action, FAQs and testimonials.",
          fields: [
            sectionHeader("ctaHeader", "Call-to-action section heading"),
            { name: "ctaReassurance", type: "text", label: "Call-to-action reassurance text" },
            ctasField(),
            sectionHeader("faqHeader", "FAQ section heading"),
            { name: "faqs", type: "relationship", relationTo: "faqs", hasMany: true, label: "Service FAQs" },
            testimonialSectionField(),
          ],
        },
        {
          label: "8. SEO",
          description: "Search result title, description and canonical URL for this service page.",
          fields: createSeoFields("/services/boiler-servicing"),
        },
      ],
    },
  ],
};
