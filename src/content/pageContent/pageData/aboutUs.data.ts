import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { ABOUT_FEATURES, BOILER_BRANDS, HEATING_SUPPORT_CARDS } from "@/content/pageContent/common.data";
import { HOME_PAGE_FAQ_DATA } from "@/content/pageContent/faq.data";
import consultationImage from "@/assets/images/webp/boiler-consultation.webp";

export const ABOUT_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "About SS Consultants",
    description: "Heating expertise, clear advice and dependable workmanship.",
  },
  about: {
    eyebrow: [[{ text: "Why homeowners choose SS Consultants" }]],
    header: {
      title: [
        [{ text: "Heating expertise," }, { text: "built on" }],
        [{ text: "22 years you can trust.", variant: "brand" }],
      ],
      description: [
        [
          {
            text: "With 22 years of Gas Safe registered experience, SS Consultants delivers dependable boiler, plumbing and central-heating services to homes across Hatfield, Hertfordshire and London, backed by honest advice and careful workmanship.",
          },
        ],
      ],
    },
    cards: ABOUT_FEATURES,
    cta: [
      { label: "Request a Free Quote", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY", theme: "LIGHT" },
    ],
    badge: { title: [[{ text: "22+ years" }]], description: [[{ text: "Heating experience" }]] },
    reassurance: [[{ text: "Gas Safe Registered" }, { text: "•" }, { text: "£5M Public Liability Insurance" }, { text: "•" }, { text: "24-Month Workmanship Guarantee" }]],
  },
  aboutPrinciples: {
    header: {
      title: [[{ text: "Built around doing the job" }], [{ text: "properly.", variant: "brand" }]],
      description: [[{ text: "Good heating work is not only about installing equipment. It is about understanding the property, giving honest advice and completing every detail responsibly." }]],
    },
    image: { src: consultationImage, alt: "Heating engineer speaking with homeowners" },
    badge: { title: "22+ years", description: "of trusted heating expertise." },
    principles: [
      { number: "01", title: "Understand before recommending", description: "We assess your property, existing system and requirements before suggesting a solution." },
      { number: "02", title: "Clear, honest advice", description: "Practical recommendations without confusing language or unnecessary upselling." },
      { number: "03", title: "Careful workmanship", description: "Professional installation, proper testing and complete respect for your home." },
      { number: "04", title: "Support after completion", description: "A clear handover and dependable assistance whenever it is required." },
    ],
  },
  experience: {
    eyebrow: [[{ text: "Multi-brand boiler expertise" }]],
    header: {
      title: [[{ text: "Whatever your boiler," }], [{ text: "we know what to look for.", variant: "brand" }]],
      description: [[{ text: "We repair, service and install heating systems from leading boiler manufacturers across the UK." }]],
    },
    callout: {
      header: {
        title: [[{ text: "Can’t see your boiler brand?" }]],
        description: [[{ text: "Send us the make and model and we’ll confirm whether we can help." }]],
      },
      cta: { label: "Ask an Engineer", href: "#contact", variant: "CTA_SECONDARY" },
    },
    brands: BOILER_BRANDS,
  },
  services: {
    header: { title: [[{ text: "Heating services for your home" }]] },
    items: HEATING_SUPPORT_CARDS,
  },
  faq: {
    header: {
      title: [[{ text: "Questions about" }], [{ text: "your heating?", variant: "brand" }]],
      description: [
        [
          {
            text: "Clear answers to the questions homeowners ask us most about boiler installation, servicing and repairs.",
          },
        ],
      ],
    },
    faqsItems: HOME_PAGE_FAQ_DATA,
  },
};
