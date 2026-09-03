import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import centralHeatingHero from "@/assets/images/webp/service/hero-images/central-heating.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
import { CENTRAL_HEATING_FAQ_DATA } from "@/content/pageContent/faq.data";
import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";

export const CENTRAL_HEATING_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Central Heating Installation | SS Consultants, Hatfield",
    description:
      "Full central heating installation, extension and upgrades from Gas Safe registered engineers across Hatfield, Hertfordshire and London. Get a free quote today.",
  },
  serviceHeroSection: {
    header: {
      title: [
        [{ text: "Central" }, { text: "heating," }],
        [
          { text: "designed" },
          { text: "and" },
          { text: "installed", variant: "brand" },
          { text: "right.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Full central heating installation from Gas Safe registered engineers—boiler, radiators, pipework and controls, designed as one system and fitted to a high standard across Hatfield, Hertfordshire and London.",
          },
        ],
      ],
    },
    slug: "central-heating",
    label: "Central Heating",
    cta: "Request a Free Quote",
    heroImage: centralHeatingHero,
    eyebrow: "Central heating installations across Hatfield, Hertfordshire & London",
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
        [{ text: "What" }, { text: "our" }, { text: "installation" }],
        [
          { text: "can", variant: "brand" },
          { text: "include.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Whether you're installing central heating for the first time, extending an existing system, or replacing an outdated one, we design the right setup for your home before any work begins.",
          },
        ],
      ],
    },
    installationSteps: [
      {
        number: "01",
        title: "New Central Heating System",
        description:
          "For homes without existing central heating, or moving on from storage heaters and electric alternatives, we design and install a complete system from scratch, room by room, to a high standard.",
        tags: "DESIGN · BOILER · RADIATORS",
        image: centralHeatingImage,
      },
      {
        number: "02",
        title: "Central Heating Extension",
        description:
          "Extending your existing system to cover a loft conversion, extension or additional rooms, matched carefully to your current boiler capacity, pipework and controls, without compromising performance.",
        tags: "EXTENSION · CAPACITY · CONTROLS",
        image: underfloorHeatingImage,
      },
      {
        number: "03",
        title: "Full System Upgrade",
        description:
          "Replacing an old, inefficient central heating system with modern radiators, pipework and controls, improving performance, comfort and running costs across your entire home.",
        tags: "UPGRADE · EFFICIENCY · COMFORT",
        image: boilerInstallationImage,
      },
    ],
  },
  heatingSolutionDesignForYou: {
    header: {
      title: [
        [{ text: "What" }, { text: "a" }, { text: "well-designed" }],
        [
          { text: "system", variant: "brand" },
          { text: "includes.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "A central heating system works best when every part is sized and specified correctly from the start, not added piece by piece over time as problems appear and multiply.",
          },
        ],
      ],
    },
    specifications: [
      {
        title: "Correctly sized boiler",
        description:
          "Your boiler is matched to your home's size, insulation and hot-water demand, avoiding an underpowered system that struggles or an oversized one that wastes energy and money.",
      },
      {
        title: "Balanced radiators throughout",
        description:
          "Radiators are sized and positioned room by room, then balanced properly so heat is distributed evenly across your home rather than concentrated in just a few rooms.",
      },
      {
        title: "Zoned heating controls",
        description:
          "Modern thermostats and zone controls let you heat different parts of your home independently, improving comfort and helping reduce unnecessary energy use and waste.",
      },
      {
        title: "Efficient pipework layout",
        description:
          "Pipework is planned and routed thoughtfully throughout your home, supporting reliable flow and consistent temperatures to every radiator on the system, year-round.",
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
            text: "A clear four-step process explains what happens after you contact SS Consultants for a central heating installation, from the first visit through to a finished, tested system.",
          },
        ],
      ],
    },
    steps: [
      {
        number: "01",
        title: "Home assessment",
        description:
          "We visit your property to assess its size, insulation, existing heating (if any) and hot-water demand, so any design we propose is based on how your home actually performs.",
      },
      {
        number: "02",
        title: "System design and quote",
        description:
          "We design the right central heating system for your home and provide a clear, fixed-price quotation, explaining exactly what's included before any work actually begins.",
      },
      {
        number: "03",
        title: "Professional installation",
        description:
          "Qualified engineers carry out the installation carefully, protecting your home throughout with dust sheets and covers, and keeping disruption to a minimum every day.",
      },
      {
        number: "04",
        title: "Testing and handover",
        description:
          "The finished system is tested and balanced across every radiator in your home. We then explain the controls in plain terms and leave everything clean and tidy before we go.",
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
            text: "Homeowners choose SS Consultants for clear advice, careful workmanship and reliable support from the first visit to the final check.",
          },
        ],
      ],
    },
    items: TESTIMONIALS,
  },
  faq: {
    header: {
      title: [[{ text: "Questions" }, { text: "about" }], [{ text: "central heating?", variant: "brand" }]],
      description: [
        [
          {
            text: "Clear answers to the questions homeowners ask us most about central heating installation, extensions and upgrades.",
          },
        ],
      ],
    },
    faqsItems: CENTRAL_HEATING_FAQ_DATA,
  },
};
