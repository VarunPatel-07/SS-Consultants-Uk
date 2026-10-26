import type { CollectionConfig } from "payload";

import { authenticated } from "@/payload/access";
import { notifyAdminOfEnquiry } from "@/payload/hooks/notify-admin";

export const ContactEnquiries: CollectionConfig = {
  slug: "contact-enquiries",
  labels: { singular: "Contact enquiry", plural: "Contact enquiries" },
  admin: {
    defaultColumns: ["firstName", "lastName", "email", "service", "submittedFrom", "status", "createdAt"],
    description: "General enquiries sent through the “Let’s talk about your heating” contact form.",
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
        kind: "Contact enquiry",
        topic: String(doc.service),
        customer: { name: `${doc.firstName} ${doc.lastName}`, email: String(doc.email), phone: (doc.phone as string) || undefined },
        message: (doc.message as string) || undefined,
        submittedFrom: String(doc.submittedFrom),
        sections: [
          {
            title: "Customer details",
            rows: [
              ["Name", `${doc.firstName} ${doc.lastName}`],
              ["Email", doc.email],
              ["Phone", doc.phone],
            ],
          },
          {
            title: "Enquiry details",
            rows: [
              ["Service", doc.service],
            ],
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
        { label: "Closed", value: "closed" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "submittedFrom",
      type: "text",
      label: "Submitted from page",
      required: true,
      index: true,
      admin: { position: "sidebar", readOnly: true, description: "The website page the form was sent from, e.g. /contact." },
    },
    { name: "firstName", type: "text", required: true },
    { name: "lastName", type: "text", required: true },
    { name: "email", type: "email", required: true, index: true },
    { name: "phone", type: "text" },
    { name: "service", type: "text", required: true },
    { name: "subject", type: "text" },
    { name: "message", type: "textarea" },
  ],
};
