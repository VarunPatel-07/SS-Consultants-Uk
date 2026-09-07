import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import boilerDiagnosisImage from "@/assets/images/webp/service/boiler-servicing.webp";
import boilerComponentImage from "@/assets/images/webp/service/hero-images/boiler-servicing.webp";
import boilerServicingHero from "@/assets/images/webp/service/hero-images/boiler-servicing.webp";
import boilerRepairImage from "@/assets/images/webp/service/boiler-breakdown-repairs.webp";
import { BOILER_SERVICE_FAQ_DATA } from "@/content/pageContent/faq.data";
import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";

export const BOILER_SERVICING_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Boiler Servicing in Hatfield, Herts & London | SS Consultants",
    description:
      "Gas Safe registered boiler servicing from £80. Annual maintenance, repairs and landlord gas safety checks across Hatfield, Hertfordshire and London. Book today.",
  },
  serviceHeroSection: {
    header: {
      title: [
        [{ text: "Keep" }, { text: "your" }, { text: "boiler" }],
        [
          { text: "safe,", variant: "brand" },
          { text: "efficient", variant: "brand" },
        ],
        [{ text: "and" }, { text: "reliable.", variant: "brand" }],
      ],
      description: [
        [
          {
            text: "Professional servicing and dependable repairs for all leading boiler brands, completed by Gas Safe registered engineers with over 22 years of experience across Hatfield, Hertfordshire and London, backed by honest advice, fixed pricing, £5m insurance cover and careful, dependable workmanship.",
          },
        ],
      ],
    },
    slug: "boiler-servicing",
    label: "Boiler Servicing",

    cta: "Book a Boiler Service",
    heroImage: boilerServicingHero,
    eyebrow: "Boiler servicing across Hatfield, Hertfordshire & London",
    options: [
      { name: "Essential inspection", price: "£80 + VAT" },
      { name: "Full maintenance", price: "£120 + VAT" },
    ],
    note: "Parts charged separately where required",
    reassurance: [": Gas Safe registered", "All major boiler brands", "Clear, fixed-price options"],
  },
  whatOurServiceInclude: {
    header: {
      title: [
        [
          { text: "What" },
          { text: "Our" },
          { text: "service" },
          { text: "can", variant: "brand" },
          { text: "include.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "From a routine annual check to a full maintenance visit, we tailor the service to your boiler's age, brand and condition.",
          },
        ],
      ],
    },
    installationSteps: [
      {
        number: "01",
        title: "Essential Inspection",
        description: "A thorough visual and safety check that confirms your boiler is running safely and efficiently",
        tags: "SAFETY · COMBUSTION · EFFICIENCY",
        image: boilerDiagnosisImage,
      },
      {
        number: "02",
        title: "Full Maintenance Service",
        description: "A deeper clean and inspection that keeps your boiler performing reliably for longer.",
        tags: "CLEANING · PARTS · PERFORMANCE",
        image: boilerComponentImage,
      },
      {
        number: "03",
        title: "Landlord Gas Safety Check",
        description: "A certified inspection for rental properties, with your CP12 certificate provided on completion.",
        tags: "COMPLIANCE · CERTIFICATE · TENANTS",
        image: boilerRepairImage,
      },
    ],
  },
  heatingSolutionDesignForYou: {
    header: {
      title: [
        [
          { text: "Servicing" },
          { text: "tailored" },
          { text: "to" },
          { text: "your", variant: "brand" },
          { text: "boiler.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Every boiler ages differently. We assess its brand, condition and usage before recommending the right level of service, so you get an approach that actually suits your system, not a generic checklist.",
          },
        ],
      ],
    },
    specifications: [
      {
        title: "Boiler brand & age",
        description: "We tailor the service to your boiler’s make, model and age, following manufacturer guidance.",
      },
      {
        title: "Usage and condition",
        description: "We assess usage and wear before recommending an essential inspection or full maintenance service.",
      },
      {
        title: "Safety and compliance",
        description: "Our Gas Safe engineers complete safety checks and provide landlord certification where required.",
      },
      {
        title: "Ongoing reliability",
        description: "Regular servicing helps catch faults early and supports your manufacturer’s warranty requirements.",
      },
    ],
  },
  process: {
    header: {
      title: [
        [
          { text: "Our" },
          { text: "simple" },
          { text: "4-step", variant: "brand" },
          { text: "service", variant: "brand" },
          { text: "process.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "A clear four-step process explains exactly what happens after you contact SS Consultants for a boiler service, keeping every stage straightforward from booking through to a safely running boiler.",
          },
        ],
      ],
    },
    steps: [
      {
        number: "01",
        title: "Book your service",
        description:
          "Call us or fill out our simple online form and we'll arrange a convenient appointment that fits your schedule, with clear timings agreed upfront so you know exactly when our engineer will arrive.",
      },
      {
        number: "02",
        title: "Choose Essential or Full",
        description:
          "Based on your boiler's age, condition and how it's used, we recommend either an Essential Inspection or a Full Maintenance service, explaining the difference clearly before any work begins.",
      },
      {
        number: "03",
        title: "Thorough inspection and clean",
        description:
          "Our Gas Safe registered engineer completes the service to manufacturer standards, checking safety, efficiency and performance, and cleaning the parts that need it for reliable running.",
      },
      {
        number: "04",
        title: "Report and advice",
        description:
          "We explain what we found in plain terms, complete any paperwork including gas safety certificates where needed, and leave your boiler clean, safe and running reliably before we go.",
      },
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
  callToActionSection: {
    header: {
      title: [[{ text: "Time for your annual boiler service?" }], [{ text: "Keep your heating running reliably.", variant: "brand" }]],
      description: [[{ text: "Book a professional boiler inspection and service with a local Gas Safe registered engineer." }]],
    },
    ctas: [
      { label: "Book a Boiler Service", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
    reassurance: "All major brands • Clear pricing • Local Gas Safe engineers",
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
    faqsItems: BOILER_SERVICE_FAQ_DATA,
  },
};
