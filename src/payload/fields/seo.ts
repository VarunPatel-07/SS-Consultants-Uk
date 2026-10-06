import type { Field } from "payload";

export const createSeoFields = (canonicalPlaceholder = "/"): Field[] => [
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
      {
        name: "image",
        type: "upload",
        relationTo: "media",
        label: "Meta image",
        admin: {
          description:
            "Optional. Shown when this page is shared on social media or messaging apps (1200 × 630 works best). Leave empty to use the default image.",
        },
      },
      { name: "canonicalPath", type: "text", label: "Canonical URL", admin: { placeholder: canonicalPlaceholder } },
      { name: "noIndex", type: "checkbox", label: "Hide from search engines", defaultValue: false },
    ],
  },
];

export const seoFields = createSeoFields();
