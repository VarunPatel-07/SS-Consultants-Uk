import type { Field } from "payload";

export const seoFields: Field[] = [
  {
    name: "seo",
    type: "group",
    label: "SEO / Meta settings",
    fields: [
      {
        name: "title",
        type: "text",
        label: "Meta title",
        required: true,
        maxLength: 100,
        admin: { components: { Description: "@/payload/components/CharacterCount#CharacterCount" } },
      },
      {
        name: "description",
        type: "textarea",
        label: "Meta description",
        required: true,
        maxLength: 500,
        admin: { components: { Description: "@/payload/components/CharacterCount#CharacterCount" } },
      },
      { name: "canonicalPath", type: "text", label: "Canonical URL", admin: { placeholder: "/about" } },
      { name: "noIndex", type: "checkbox", label: "Hide from search engines", defaultValue: false },
    ],
  },
];
