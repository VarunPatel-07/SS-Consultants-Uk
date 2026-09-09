import type { GlobalConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";
import { ctasField, sectionHeader } from "@/payload/fields/content";
import { seoFields } from "@/payload/fields/seo";

export const ContactPage: GlobalConfig = {
  slug: "contact-page",
  label: "Contact page",
  admin: { group: "Pages" },
  access: { read: anyone, update: authenticated },
  versions: { drafts: true },
  fields: [
    ...seoFields,
    { name: "hero", type: "group", fields: [sectionHeader(), ctasField()] },
    {
      name: "contactSection",
      type: "group",
      fields: [
        sectionHeader(),
        { name: "email", type: "email" },
        { name: "phone", type: "text" },
      ],
    },
  ],
};
