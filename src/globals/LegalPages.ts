import type { GlobalConfig } from "payload";

import { authenticated, anyone } from "@/payload/access";
import { seoFields } from "@/payload/fields/seo";

const createLegalPage = (slug: string, label: string): GlobalConfig => ({
  slug,
  label,
  admin: { group: "Legal pages" },
  access: { read: anyone, update: authenticated },
  versions: { drafts: true },
  fields: [
    ...seoFields,
    { name: "title", type: "text", label: "Page title", required: true },
    { name: "description", type: "textarea", label: "Page introduction" },
    {
      name: "content",
      type: "richText",
      label: "Page content",
      required: true,
      admin: { description: "Use this editor for headings, paragraphs, lists and links." },
    },
  ],
});

export const PrivacyPolicy = createLegalPage("privacy-policy", "Privacy Policy");
export const TermsAndConditions = createLegalPage("terms-and-conditions", "Terms & Conditions");
export const CookiePolicy = createLegalPage("cookie-policy", "Cookie Policy");
