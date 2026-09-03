import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import powerflushingHero from "@/assets/images/webp/service/hero-images/powerflushing.webp";
import powerflushingImage from "@/assets/images/webp/service/powerflushing.webp";
import { POWERFLUSHING_FAQ_DATA } from "@/content/pageContent/faq.data";
import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";

export const POWERFLUSHING_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Powerflushing Hatfield, Herts & London | SS Consultants",
    description:
      "Professional powerflushing to clear sludge, rust and debris from your central heating system, across Hatfield, Hertfordshire and London. Get a free quote today.",
  },
  serviceHeroSection: {
    header: {
      title: [
        [{ text: "Central" }, { text: "heating" }, { text: "problems," }],
        [
          { text: "flushed", variant: "brand" },
          { text: "away.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Professional powerflushing that clears sludge, rust and debris from your central heating system, restoring efficiency and even heat distribution across homes in Hatfield, Hertfordshire and London, backed by honest advice.",
          },
        ],
      ],
    },
    slug: "powerflushing",
    label: "Powerflushing",
    cta: "Request a Free Quote",
    heroImage: powerflushingHero,
    eyebrow: "Powerflushing across Hatfield, Hertfordshire & London",
    options: [{ name: "Powerflush", price: "From £XXX + VAT" }],
    note: "Final pricing confirmed after assessing your system",
    reassurance: ["Gas Safe registered", "All central heating systems", "24-month guarantee"],
  },
  whatOurServiceInclude: {
    header: {
      title: [
        [{ text: "What" }, { text: "our" }, { text: "service" }],
        [
          { text: "can", variant: "brand" },
          { text: "include.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "From a full system clean to ongoing corrosion protection, we tailor the powerflush to your system's age, size and how badly it's affected by built-up sludge and debris over time.",
          },
        ],
      ],
    },
    installationSteps: [
      {
        number: "01",
        title: "Full System Powerflush",
        description:
          "A deep clean using high-velocity flow and specialist cleansing chemicals to clear sludge, rust and debris from your entire central heating system, radiator by radiator, restoring full performance.",
        tags: "FLOW · CHEMICALS · PERFORMANCE",
        image: powerflushingImage,
      },
      {
        number: "02",
        title: "Sludge & Corrosion Removal",
        description:
          "We target the black iron oxide sludge that builds up inside pipework and radiators over time, restoring flow and heat output that's been quietly lost to corrosion and years of buildup.",
        tags: "SLUDGE · CORROSION · FLOW",
        image: centralHeatingImage,
      },
      {
        number: "03",
        title: "Post-Flush Inhibitor Protection",
        description:
          "Once the system is clean, we add a fresh chemical inhibitor to protect against future corrosion and limescale, helping keep your system running efficiently for years to come.",
        tags: "INHIBITOR · PROTECTION · EFFICIENCY",
        image: boilerInstallationImage,
      },
    ],
  },
  heatingSolutionDesignForYou: {
    header: {
      title: [
        [{ text: "Signs" }, { text: "your" }, { text: "system" }, { text: "needs" }],
        [
          { text: "a", variant: "brand" },
          { text: "powerflush.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "A powerflush isn't always obvious when it's needed. Here are the most common signs homeowners notice before they call us out to clean their central heating system properly.",
          },
        ],
      ],
    },
    specifications: [
      {
        title: "Cold radiators or cold spots",
        description:
          "Radiators that stay cold at the bottom or in patches, even with the heating on full, are a classic sign of sludge and debris building up inside your system over several years.",
      },
      {
        title: "Noisy boiler or banging pipes",
        description:
          "Kettling, banging or gurgling noises from your boiler or pipework often mean sludge and limescale are restricting flow and causing your system to work harder than it should.",
      },
      {
        title: "Slow to heat up",
        description:
          "If your radiators take noticeably longer than they used to reach full heat, built-up debris in the system could be reducing efficiency across your whole home and increasing bills.",
      },
      {
        title: "Frequent breakdowns",
        description:
          "A central heating system clogged with sludge puts extra strain on your boiler and pump, increasing the risk of faults, breakdowns and costly repairs further down the line.",
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
            text: "A clear four-step process explains exactly what happens after you contact SS Consultants for a powerflush, keeping every stage straightforward from booking through to a cleaner, quieter system.",
          },
        ],
      ],
    },
    steps: [
      {
        number: "01",
        title: "Book your powerflush",
        description:
          "Call us or fill out our online form and we'll arrange a convenient appointment, giving you a clear idea of timings and what to expect before our engineer arrives at your home.",
      },
      {
        number: "02",
        title: "System assessment",
        description:
          "Our engineer checks your boiler, radiators and pipework before starting, so the powerflush is tailored to your system rather than treated as a generic, one-size-fits-all job.",
      },
      {
        number: "03",
        title: "Full powerflush",
        description:
          "Using specialist equipment and cleansing chemicals, we flush sludge, rust and debris out of your entire central heating system, restoring flow to every radiator in your home.",
      },
      {
        number: "04",
        title: "Inhibitor and test",
        description:
          "We add a fresh corrosion inhibitor, test the system thoroughly across all radiators, and leave your heating running more efficiently and quietly than before we arrived.",
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
      title: [[{ text: "Questions" }, { text: "about" }], [{ text: "powerflushing?", variant: "brand" }]],
      description: [
        [
          {
            text: "Clear answers to the questions homeowners ask us most about powerflushing and central heating performance.",
          },
        ],
      ],
    },
    faqsItems: POWERFLUSHING_FAQ_DATA,
  },
};
