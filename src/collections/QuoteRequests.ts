import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access";
import { notifyAdminOfEnquiry } from "@/payload/hooks/notify-admin";

type QuoteAnswer = { question?: string; answer?: string };

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
  hooks: {
    afterChange: [
      notifyAdminOfEnquiry((doc) => ({
        kind: "Quote request",
        topic: `Boiler quote · ${doc.postcode}`,
        customer: { name: `${doc.firstName} ${doc.lastName}`, email: String(doc.email), phone: String(doc.mobile) },
        submittedFrom: "/boiler-quote",
        sections: [
          {
            title: "Customer details",
            rows: [
              ["Name", `${doc.firstName} ${doc.lastName}`],
              ["Email", doc.email],
              ["Phone", doc.mobile],
              ["Mobile verified", doc.mobileVerification === "sms-verified" ? "Yes — SMS code confirmed" : "No — development flow"],
            ],
          },
          {
            title: "Property",
            rows: [
              ["Postcode", doc.postcode],
              ["Address", doc.address],
            ],
          },
          {
            title: "Their answers",
            rows: ((doc.answers as QuoteAnswer[] | undefined) ?? []).map(({ question, answer }) => [question ?? "Question", answer]),
          },
        ],
      })),
    ],
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
      options: [
        { label: "Verified by SMS code", value: "sms-verified" },
        { label: "Code entered — development flow", value: "development-code-entered" },
      ],
      admin: { position: "sidebar", readOnly: true },
    },
  ],
};
