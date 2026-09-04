import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import installingBoilerImage from "@/assets/images/webp/installing-boiler-740X790.webp";
import {
  ABOUT_FEATURES,
  BOILER_BRANDS,
  BOILER_OPTIONS,
  HEATING_SERVICES,
  HEATING_SUPPORT_CARDS,
  TESTIMONIALS,
  WHY_CHOOSE_US_POINTS,
} from "@/content/pageContent/common.data";
import { HOME_PAGE_FAQ_DATA } from "@/content/pageContent/faq.data";

export const HOME_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Gas Safe Boiler Engineers Hatfield | SS Consultants UK",
    description:
      "Gas Safe registered engineers with 22+ years' experience. Boiler installation, servicing and repairs across Hatfield, Hertfordshire and London. Get a free quote.",
  },
  hero: {
    eyebrow: "GAS SAFE REGISTERED • HATFIELD, HERTFORDSHIRE & LONDON",
    header: {
      title: [
        [
          { text: "Reliable" },
          { text: " boiler" },
          { text: " &" },
          { text: "heating" },
          { text: " services," },
          { text: "when", variant: "brand" },
          { text: "your", variant: "brand" },
          { text: "home", variant: "brand" },
          { text: "needs", variant: "brand" },
          { text: "them", variant: "brand" },
          { text: "most.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "From same-day repairs and annual servicing to complete boiler installations, our Gas Safe registered engineers deliver honest advice, clear pricing and dependable workmanship across Hatfield, Hertfordshire and London.",
          },
        ],
      ],
    },
    ctas: [
      { label: "Get a Free Quote", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
    services: HEATING_SERVICES.map(({ name, icon }) => ({
      label: name,
      slug: name.toLowerCase().replaceAll(" ", "-"),
      icon,
    })),
    image: {
      src: installingBoilerImage,
      alt: "Gas Safe registered engineer installing a boiler in a UK home",
      width: 1100,
      height: 400,
    },
  },
  experience: {
    eyebrow: [[{ text: "Multi-brand boiler expertise" }]],
    header: {
      title: [[{ text: "Whatever your boiler," }], [{ text: "we know what to look for.", variant: "brand" }]],
      description: [
        [
          {
            text: "We repair, service and install heating systems from leading boiler manufacturers across the UK.",
          },
        ],
      ],
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

  about: {
    eyebrow: [[{ text: "Why homeowners choose SS Consultants" }]],
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
            text: "SS Consultants UK Ltd is a Gas Safe registered heating company based in Hatfield, serving homes across Hertfordshire and London. With 22 years of experience, our engineers install, service and repair boilers of every make and size.",
          },
        ],
        [
          {
            text: "Every job is carried out with honest, upfront advice and careful, dependable workmanship, backed by £5m public liability insurance and a 24-month guarantee on every installation, service and repair we complete.",
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
    reassurance: [
      [
        { text: "Gas Safe Registered" },
        { text: "•" },
        { text: "£5M Public Liability Insurance" },
        { text: "•" },
        { text: "24-Month Workmanship Guarantee" },
      ],
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
            text: "From compact combis to premium connected systems, our Gas Safe registered engineers help you choose and install the right Vaillant boiler for your home, hot-water needs and budget, with honest advice and careful, dependable workmanship throughout.",
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
            text: "Homeowners across Hatfield, Hertfordshire and London choose SS Consultants for clear advice, careful workmanship and heating they can rely on.",
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
        [
          {
            text: "Qualified engineers, honest advice and careful workmanship—from the first visit to the final check.",
          },
        ],
      ],
    },
    items: WHY_CHOOSE_US_POINTS,
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
  consultation: { email: "info@sscukltd.com", phone: "07590 514937" },
};
