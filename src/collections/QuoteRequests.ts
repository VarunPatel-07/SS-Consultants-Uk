import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access";

export const QuoteRequests: CollectionConfig = {
  slug: "quote-requests",
  labels: { singular: "Quote request", plural: "Quote requests" },
  admin: {
    defaultColumns: ["firstName", "lastName", "email", "mobile", "status", "createdAt"],
    description: "Boiler and heating quotation requests submitted through the website.",
    group: "Enquiries",
    useAsTitle: "email",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      required: true,
      options: [
        { label: "New", value: "new" },
        { label: "Contacted", value: "contacted" },
        { label: "Quote prepared", value: "quote-prepared" },
        { label: "Closed", value: "closed" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "firstName", type: "text", required: true },
    { name: "lastName", type: "text", required: true },
    { name: "email", type: "email", required: true, index: true },
    { name: "mobile", type: "text", required: true, index: true },
    { name: "postcode", type: "text", required: true },
    { name: "address", type: "textarea", required: true },
    {
      name: "answers",
      type: "array",
      required: true,
      fields: [
        { name: "questionId", type: "text", required: true, admin: { hidden: true } },
        { name: "question", type: "text", label: "Question", required: true },
        { name: "optionId", type: "text", required: true, admin: { hidden: true } },
        { name: "answer", type: "text", label: "Customer answer", required: true },
      ],
    },
    {
      name: "mobileVerification",
      type: "select",
      defaultValue: "development-code-entered",
      required: true,
      options: [{ label: "Code entered — development flow", value: "development-code-entered" }],
      admin: { position: "sidebar", readOnly: true },
    },
  ],
};
