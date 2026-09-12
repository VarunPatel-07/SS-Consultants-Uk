import type { GlobalConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site settings",
  admin: { group: "Settings" },
  access: { read: anyone, update: authenticated },
  fields: [
    { name: "companyName", type: "text", required: true, defaultValue: "SS Consultants UK Limited" },
    { name: "email", type: "email", required: true },
    {
      name: "phone",
      type: "text",
      required: true,
      admin: { placeholder: "07590 514937", description: "Used as both the displayed phone number and the clickable call link." },
    },
    { name: "address", type: "textarea" },
    { name: "serviceArea", type: "text" },
    { name: "companyNumber", type: "text" },
    { name: "gasSafeNumber", type: "text" },
    {
      name: "testimonialDefaults",
      type: "group",
      label: "Default testimonials section",
      fields: [
        { name: "title", type: "text", required: true, defaultValue: "Trusted in homes" },
        { name: "highlight", type: "text", defaultValue: "across the community." },
        {
          name: "description",
          type: "textarea",
          required: true,
          defaultValue: "Homeowners choose SS Consultants for clear advice, careful workmanship and heating they can rely on.",
        },
      ],
    },
    {
      name: "navigation",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
        { name: "openInNewTab", type: "checkbox", defaultValue: false },
        {
          name: "children",
          type: "array",
          label: "Sub-navigation links",
          admin: { description: "Optional links shown in a dropdown when visitors hover over this navigation item." },
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
            { name: "openInNewTab", type: "checkbox", defaultValue: false },
            {
              name: "nestedChildren",
              type: "array",
              label: "Nested sub-navigation links",
              admin: { description: "Optional second-level links shown beside this sub-navigation item." },
              fields: [
                { name: "label", type: "text", required: true },
                { name: "href", type: "text", required: true },
                { name: "openInNewTab", type: "checkbox", defaultValue: false },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        { name: "platform", type: "text", required: true },
        { name: "url", type: "text", required: true },
      ],
    },
    { name: "footerText", type: "textarea" },
  ],
};
