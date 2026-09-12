import type { CommonPageDataInterface } from "@/utils/interface/data.interface";

export const CONTACT_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Contact SS Consultants",
    description: "Tell us what you need and get clear, practical heating advice.",
  },
  hero: {
    header: {
      title: [[{ text: "Let's make your home" }], [{ text: "comfortable.", variant: "brand" }]],
      description: [
        [
          {
            text: "Tell us what you need and we'll provide clear advice, careful workmanship and dependable heating support.",
          },
        ],
      ],
    },
    ctas: [
      { label: "Start a Conversation", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
  },
  consultation: { email: "info@sscukltd.com", phone: "07590 514937" },
  sections: ["hero", "consultation"],
};
