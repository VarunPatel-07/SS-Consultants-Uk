import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import boilerInstallationHero from "@/assets/images/webp/service/hero-images/boiler-installation.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
import { BOILER_INSTALLATION_FAQ_DATA } from "@/content/pageContent/faq.data";
import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";
import type { CommonPageDataInterface } from "@/utils/interfacepage.interface";

export const BOILER_INSTALLATION_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Boiler Installation Hatfield, Herts & London | SS Consultants",
    description:
      "Gas Safe registered boiler installation across Hatfield, Hertfordshire and London. Free survey, fixed-price quotes and a 24-month guarantee. Get a free quote.",
  },
  serviceHeroSection: {
    header: {
      title: [
        [{ text: "A" }, { text: "new" }, { text: "boiler," }],
        [
          { text: "installed" },
          { text: "the" },
          { text: "right", variant: "brand" },
          { text: "way.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Professional boiler installation from Gas Safe registered engineers, matching the right system to your home, hot-water needs and budget, with honest advice and dependable workmanship across Hatfield, Hertfordshire and London.",
          },
        ],
      ],
    },
    slug: "boiler-installation",
    label: "Boiler Installation",
    cta: "Get a Boiler Installation Quote",
    heroImage: boilerInstallationHero,
    eyebrow: "Boiler installation across Hatfield, Hertfordshire & London",
    options: [
      { name: "Home survey", price: "Free" },
      { name: "Fixed-price quotation", price: "No hidden costs" },
    ],
    note: "Every quote is based on your home and heating needs",
    reassurance: ["Gas Safe registered", "Free home survey", "24-month guarantee"],
  },
  whatOurServiceInclude: {
    header: {
      title: [
        [{ text: "What" }, { text: "your" }, { text: "installation" }],
        [
          { text: "can", variant: "brand" },
          { text: "include.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "From a single boiler replacement to a complete home-heating system, we design and install the right solution for your property, taking your home's size, layout and hot-water demand fully into account.",
          },
        ],
      ],
    },
    installationSteps: [
      {
        number: "01",
        title: "Boiler installation or replacement",
        description:
          "Efficient boiler systems selected and installed around your home, usage and budget, whether you're replacing a failing boiler or upgrading to a more efficient model, with everything fitted to a high standard.",
        tags: "BOILER · CONTROLS · PIPEWORK",
        image: boilerInstallationImage,
      },
      {
        number: "02",
        title: "New radiator installation",
        description:
          "Correctly sized and positioned radiators for comfortable, evenly distributed warmth throughout your home, with valves and balancing set up properly so every room heats evenly and reliably, room by room.",
        tags: "RADIATORS · VALVES · BALANCING",
        image: centralHeatingImage,
      },
      {
        number: "03",
        title: "Complete central-heating system",
        description:
          "A coordinated system covering the boiler, pipework, radiators and heating controls, designed and installed as one unit rather than a collection of separately fitted parts bolted together over time.",
        tags: "DESIGN · INSTALLATION · HANDOVER",
        image: underfloorHeatingImage,
      },
    ],
  },
  heatingSolutionDesignForYou: {
    header: {
      title: [
        [
          { text: "Heating" },
          { text: "designed" },
          { text: "around" },
          { text: "your" },
          { text: "home.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "A central heating system performs best when every component works together. We assess your property, heating requirements and existing system before recommending the right solution for your home.",
          },
        ],
      ],
    },
    specifications: [
      {
        title: "Correct boiler sizing",
        description: "We match boiler output to your property and hot-water needs to avoid unnecessary energy use.",
      },
      {
        title: "Suitable pipework",
        description: "Correct pipe sizes and routing support reliable water flow throughout your home.",
      },
      {
        title: "Balanced radiator output",
        description: "We size and balance radiators for even warmth and fewer cold spots.",
      },
      {
        title: "Efficient system flow",
        description: "Controls, valves and circulation work together for consistent heating performance.",
      },
    ],
  },
  process: {
    header: {
      title: [
        [{ text: "From" }, { text: "assessment" }, { text: "to" }],
        [{ text: "a" }, { text: "warmer", variant: "brand" }, { text: "home.", variant: "brand" }],
      ],
      description: [
        [
          {
            text: "A clear four-step process explains what happens after you contact SS Consultants and keeps every stage straightforward, from the first assessment through to a fully installed, tested heating system.",
          },
        ],
      ],
    },
    steps: [
      {
        number: "01",
        title: "Home assessment",
        description:
          "We review your existing heating system, property size, insulation, hot-water demand and heating requirements in person, so any recommendation we make is based on how your home actually performs.",
      },
      {
        number: "02",
        title: "System recommendation",
        description:
          "We recommend the appropriate boiler, radiators, pipework and controls for your home, followed by a clearly explained quotation with no hidden costs, vague pricing or unexplained line items to worry about.",
      },
      {
        number: "03",
        title: "Professional installation",
        description:
          "Qualified engineers complete the work carefully, protect the surrounding space with dust sheets and covers, and keep disruption to your home and daily routine to an absolute minimum throughout the job.",
      },
      {
        number: "04",
        title: "Testing and handover",
        description:
          "The system is tested, balanced and registered with the relevant authority once installation is complete. We then explain the controls in plain terms and leave your home clean and tidy before we head off.",
      },
    ],
  },
  testimonials: {
    header: {
      title: [
        [{ text: "Trusted" }, { text: "in" }, { text: "homes" }],
        [{ text: "across the community.", variant: "brand" }],
      ],
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
        [{ text: "Not sure which boiler is right for your home?" }],
        [{ text: "Let’s find the right fit.", variant: "brand" }],
      ],
      description: [
        [
          {
            text: "Get a clear recommendation based on your property, hot-water needs and budget—without any pressure to buy.",
          },
        ],
      ],
    },
    ctas: [
      { label: "Help Me Choose a Boiler", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
    reassurance: "Free advice • No obligation • Local Gas Safe engineers",
  },
  faq: {
    header: {
      title: [
        [{ text: "Questions" }, { text: "about" }],
        [{ text: "your" }, { text: "new boiler?", variant: "brand" }],
      ],
      description: [[{ text: "Clear answers to the questions homeowners ask us most about boiler installation." }]],
    },
    faqsItems: BOILER_INSTALLATION_FAQ_DATA,
  },
};
