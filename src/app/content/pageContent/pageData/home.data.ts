import {
  ABOUT_FEATURES,
  BOILER_BRANDS,
  BOILER_OPTIONS,
  HEATING_SERVICES,
  HEATING_SUPPORT_CARDS,
  TESTIMONIALS,
  WHY_CHOOSE_US_POINTS,
} from "@/app/content/pageContent/common.data";
import { HOME_PAGE_FAQ_DATA } from "@/app/content/pageContent/faq.data";
import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import installingBoilerImage from "@/assets/images/webp/installing-boiler.webp";

export const HOME_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "SS Consultants | Heating Engineers",
    description:
      "Professional boiler installation, servicing and heating support across Hatfield, Hertfordshire and London.",
  },
  hero: {
    eyebrow: "TRUSTED HEATING ENGINEERS ACROSS THE UK",
    header: {
      title: [
        [{ text: "Reliable" }, { text: " heating" }, { text: " solutions,", variant: "brand" }],
        [
          { text: "built" },
          { text: " around" },
          { text: " your" },
          { text: " home's", variant: "brand" },
          { text: " needs.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "22 years of Gas Safe registered engineering experience, delivering professional boiler installation, servicing and heating repairs across Hatfield, Hertfordshire and London, backed by honest advice and dependable workmanship.",
          },
        ],
      ],
    },
    ctas: [
      { label: "Request a Free Quote", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
    services: HEATING_SERVICES.map(({ name, icon }) => ({
      label: name,
      slug: name.toLowerCase().replaceAll(" ", "-"),
      icon,
    })),
    image: { src: installingBoilerImage, alt: "Heating engineer installing a boiler", width: 1100, height: 400 },
  },
  experience: {
    header: {
      title: [
        [
          { text: "Experience" },
          { text: "with" },
          { text: "leading" },
          { text: "boiler", variant: "brand" },
          { text: "brands", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "With 22 years in the trade, we're trusted to install and service heating systems from the UK's leading boiler manufacturers, including Vaillant",
          },
        ],
      ],
    },
    brands: BOILER_BRANDS,
  },

  about: {
    header: {
      title: [
        [{ text: "Heating" }, { text: "expertise," }, { text: "built" }, { text: "on" }],
        [
          { text: "22", variant: "brand" },
          { text: "years", variant: "brand" },
          { text: "you", variant: "brand" },
          { text: "can", variant: "brand" },
          { text: "trust.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "With 22 years of Gas Safe registered experience, SS Consultants delivers dependable boiler, plumbing and central-heating services to homes across Hatfield, Hertfordshire and London, backed by honest advice, careful workmanship and dependable support.",
          },
        ],
        [
          {
            text: "SS Consultants brings 22 years of Gas Safe registered experience to homes across Hatfield, Hertfordshire and London, handling everything from routine servicing and repairs to full installations with honest advice and careful, dependable workmanship.",
          },
        ],
      ],
    },
    cards: ABOUT_FEATURES,
    cta: [
      { label: "Request a Free Quote", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY", theme: "LIGHT" },
    ],
  },
  services: {
    header: {
      title: [
        [{ text: "Complete" }, { text: "heating" }, { text: "Services in" }],
        [
          { text: "Hatfield,", variant: "brand" },
          { text: "Hertfordshire", variant: "brand" },
          { text: "&", variant: "brand" },
          { text: "London", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "From boiler servicing to full heating installations, our Gas Safe registered engineers provide practical advice and careful workmanship for homes across Hatfield, Hertfordshire and London.",
          },
        ],
      ],
    },
    items: HEATING_SUPPORT_CARDS,
  },

  boilersOptions: {
    header: {
      title: [
        [{ text: "Reliable" }, { text: "Vaillant" }, { text: "boilers," }, { text: "matched" }],
        [
          { text: "to your", variant: "brand" },
          { text: "home", variant: "brand" },
          { text: "and", variant: "brand" },
          { text: "budget.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "We supply and install Vaillant's leading range of boilers, matched carefully to your home's size, hot-water demand and budget, so you get a reliable, efficient system built to last, backed by honest advice and dependable, ongoing support.",
          },
        ],
      ],
    },
    brands: BOILER_OPTIONS,
  },
  callToActionSection: {
    header: {
      title: [
        [{ text: "Not sure which" }],
        [
          { text: "boiler suits " },
          {
            text: "your home?",
            variant: "brand",
          },
        ],
      ],
      description: [
        [
          {
            text: `We'll take a look at your property and recommend the right boiler for your home, hot-water needs and budget, backed by clear, honest advice and absolutely no pressure to buy anything, ever.`,
          },
        ],
      ],
    },
    ctas: [
      { label: "Request a Free Assessment", href: "#contact", variant: "CTA_PRIMARY", classNames: "min-w-[300px]" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
  },
  testimonials: {
    header: {
      title: [[{ text: "Trusted in homes" }], [{ text: "across the community.", variant: "brand" }]],
      description: [
        [
          {
            text: "Homeowners choose SS Consultants for clear advice, careful workmanship and reliable support from the first visit to the final check.",
          },
        ],
      ],
    },
    items: TESTIMONIALS,
  },
  whyChooseUs: {
    header: {
      title: [[{ text: "Why homeowners choose" }], [{ text: "SS Consultants.", variant: "brand" }]],
      description: [
        [{ text: "Qualified engineers, honest advice and careful workmanship—from the first visit to the final check." }],
      ],
    },
    items: WHY_CHOOSE_US_POINTS,
  },
  faq: {
    header: {
      title: [[{ text: "Questions about" }], [{ text: "your heating?", variant: "brand" }]],
      description: [[{ text: "Clear answers to the questions homeowners ask us most about boiler installation, servicing and repairs." }]],
    },
    faqsItems: HOME_PAGE_FAQ_DATA,
  },
};
