import type { CollectionConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";

const keyField = (description: string) => ({
  type: "text" as const,
  required: true,
  admin: { description },
  validate: (value: string | null | undefined) =>
    !value || /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) || "Use lowercase letters, numbers and hyphens only.",
});

export const QuoteQuestions: CollectionConfig = {
  slug: "quote-questions",
  labels: { singular: "Quote question", plural: "Quote questions" },
  admin: {
    defaultColumns: ["label", "key", "isFirstQuestion", "updatedAt"],
    description: "Questions shown in the Get a quote flow. Link each option to the question that should follow it.",
    group: "Enquiries",
    useAsTitle: "adminTitle",
  },
  access: { create: authenticated, delete: authenticated, read: anyone, update: authenticated },
  hooks: {
    beforeChange: [
      ({ data, originalDoc }) => {
        const label = data.label ?? originalDoc?.label;
        const key = data.key ?? originalDoc?.key;
        if (label && key) data.adminTitle = `${label} (${key})`;
        return data;
      },
    ],
  },
  fields: [
    {
      // Shown in the admin list and the "Next question" picker so questions are identifiable by key too.
      name: "adminTitle",
      type: "text",
      admin: { hidden: true },
    },
    {
      name: "key",
      ...keyField("Stable ID saved with each quote request, for example “fuel”. Avoid changing it once live."),
      unique: true,
      index: true,
    },
    {
      name: "isFirstQuestion",
      type: "checkbox",
      defaultValue: false,
      label: "First question",
      admin: { description: "The flow starts with this question. Only one question should be ticked.", position: "sidebar" },
    },
    { name: "eyebrow", type: "text", required: true, admin: { description: "Small heading above the question." } },
    { name: "label", type: "text", label: "Question", required: true },
    { name: "description", type: "textarea" },
    {
      name: "summaryLabel",
      type: "text",
      admin: { description: "Short label for the “Your selections” sidebar. Defaults to the question." },
    },
    {
      name: "options",
      type: "array",
      minRows: 1,
      required: true,
      admin: { initCollapsed: true },
      fields: [
        { name: "value", ...keyField("Stable ID saved with each quote request, for example “mains-gas”.") },
        { name: "label", type: "text", required: true },
        { name: "description", type: "text" },
        {
          name: "icon",
          type: "select",
          defaultValue: "wrench",
          options: ["boiler", "flame", "home", "radiator", "settings", "shield", "sparkles", "wrench"],
        },
        {
          name: "nextQuestion",
          type: "relationship",
          relationTo: "quote-questions",
          admin: { description: "Leave empty to finish the questions and move on to the address step." },
        },
      ],
    },
  ],
};
