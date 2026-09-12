import type { Field } from "payload";

export const sectionHeader = (name = "header", label = "Section heading"): Field => ({
  name,
  type: "group",
  label,
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "highlight", type: "text", admin: { description: "Optional words displayed with the brand style." } },
    { name: "description", type: "textarea" },
  ],
});

export const richTextSectionHeader = (name = "header", label = "Section heading"): Field => ({
  name,
  type: "group",
  label,
  fields: [
    { name: "eyebrow", type: "text" },
    { name: "title", type: "text", required: true },
    { name: "highlight", type: "text", admin: { description: "Optional words displayed with the brand style." } },
    {
      name: "description",
      type: "richText",
      admin: { description: "Use separate paragraphs to add spacing between blocks of text." },
    },
  ],
});

export const ctasField = (name = "ctas"): Field => ({
  name,
  type: "array",
  label: "CTA buttons",
  admin: { description: "Add a button label and destination, then choose its visual style and link behaviour." },
  fields: [
    { name: "label", type: "text", required: true },
    { name: "href", type: "text", admin: { description: "Optional. Without an href, the CTA renders as a button." } },
    {
      name: "btnStyle",
      dbName: "variant",
      label: "Button style",
      type: "select",
      defaultValue: "CTA_PRIMARY",
      options: [
        { label: "Primary", value: "CTA_PRIMARY" },
        { label: "Secondary", value: "CTA_SECONDARY" },
      ],
      required: true,
    },
    {
      name: "target",
      type: "select",
      defaultValue: "_self",
      options: [
        { label: "Same tab (_self)", value: "_self" },
        { label: "New tab (_blank)", value: "_blank" },
        { label: "Parent frame (_parent)", value: "_parent" },
        { label: "Top frame (_top)", value: "_top" },
      ],
    },
    {
      name: "rel",
      type: "text",
      admin: { description: "Optional link relationship, for example: noopener noreferrer." },
    },
    {
      name: "theme",
      type: "select",
      defaultValue: "DARK",
      options: [
        { label: "Light", value: "LIGHT" },
        { label: "Dark", value: "DARK" },
      ],
    },
  ],
});

export const simpleCardsField = (name: string, label: string): Field => ({
  name,
  type: "array",
  label,
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
  ],
});

export const testimonialSectionField = (name = "testimonialsSection"): Field => ({
  name,
  type: "group",
  label: "Testimonials section",
  admin: { description: "Leave the heading empty to use the default from Site settings. Select testimonials to override the default list for this page." },
  fields: [
    { name: "title", type: "text" },
    { name: "highlight", type: "text", admin: { description: "Optional words displayed with the brand style." } },
    { name: "description", type: "textarea" },
    { name: "testimonials", type: "relationship", relationTo: "testimonials", hasMany: true },
  ],
});
