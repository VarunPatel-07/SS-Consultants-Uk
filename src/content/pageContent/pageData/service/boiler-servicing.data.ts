import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import boilerServicingHero from "@/assets/images/webp/service/hero-images/boiler-servicing.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
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
        image: boilerInstallationImage,
      },
      {
        number: "02",
        title: "Full Maintenance Service",
        description: "A deeper clean and inspection that keeps your boiler performing reliably for longer.",
        tags: "CLEANING · PARTS · PERFORMANCE",
        image: centralHeatingImage,
      },
      {
        number: "03",
        title: "Landlord Gas Safety Check",
        description: "A certified inspection for rental properties, with your CP12 certificate provided on completion.",
        tags: "COMPLIANCE · CERTIFICATE · TENANTS",
        image: underfloorHeatingImage,
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
        description:
          "We service all major boiler brands, including Vaillant, Worcester Bosch, Baxi, Ideal, Main and more, adjusting our approach to the specific model and following the manufacturer's own guidelines throughout. An older boiler or a less common model often needs a slightly different process than a newer, mainstream unit, and our engineers know the differences well enough to service each one correctly, safely and without unnecessary guesswork.",
      },
      {
        title: "Usage and condition",
        description:
          "Heavier-use households, larger families and older boilers often benefit from a fuller maintenance visit rather than just a basic check, since more use and more years in service tend to bring more wear, more sediment and a higher chance of small issues developing. We look at how your boiler is actually used day to day, not just its make and model, before recommending whether an essential inspection or a full maintenance service is the better fit.",
      },
      {
        title: "Safety and compliance",
        description:
          "Every service we carry out includes the checks needed to confirm your boiler is operating safely, from flue and ventilation checks to combustion analysis and gas rate testing, all carried out by fully qualified, Gas Safe registered engineers. Where a landlord gas safety certificate is required, we complete the inspection to the correct standard and provide the paperwork you need, so your property stays compliant without any extra chasing on your part.",
      },
      {
        title: "Ongoing reliability",
        description:
          "Regular servicing catches small issues, like a failing seal, a dirty filter or a slightly inefficient burner, before they turn into a full breakdown that leaves you without heating or hot water. Staying on top of annual servicing also helps your boiler run more efficiently, keeps energy bills lower over time, and protects any manufacturer warranty that depends on proof of regular, professional maintenance being carried out.",
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
