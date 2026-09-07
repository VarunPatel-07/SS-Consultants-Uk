import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import underfloorHeatingHero from "@/assets/images/webp/service/hero-images/underfloor-heating.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
import { UNDERFLOOR_HEATING_FAQ_DATA } from "@/content/pageContent/faq.data";
import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";

export const UNDERFLOOR_HEATING_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Underfloor Heating Repair London & Hertfordshire | SS Consultants",
    description:
      "Underfloor heating repairs across North London and Hertfordshire. Thermal imaging diagnostics, Heatmiser specialists, 24-month warranty. Get a free quote.",
  },
  serviceHeroSection: {
    header: {
      title: [
        [{ text: "Underfloor" }, { text: "heating" }],
        [
          { text: "problems,", variant: "brand" },
          { text: "solved.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "With over 22 years of experience and advanced thermal imaging technology, we diagnose and fix underfloor heating faults across Hatfield, Hertfordshire and London—most issues are above the floor, not in the pipework.",
          },
        ],
      ],
    },
    slug: "underfloor-heating",
    label: "Underfloor Heating",
    cta: "Book Underfloor Heating Repairs",
    heroImage: underfloorHeatingHero,
    eyebrow: "Underfloor heating repairs across Hatfield, Hertfordshire & London",
    options: [
      { name: "Thermal imaging survey", price: "Included" },
      { name: "Most faults", price: "No floor lifting" },
    ],
    note: "Most faults can be diagnosed without disturbing your flooring",
    reassurance: ["Gas Safe registered", "Heatmiser specialists", "24-month warranty"],
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
            text: "Cold spots, floors too hot to walk on, or rooms that heat up while the floor stays cold—whatever the symptom, we diagnose the actual cause before recommending any repair to your system, not just a guess.",
          },
        ],
      ],
    },
    installationSteps: [
      {
        number: "01",
        title: "Fault Diagnosis",
        description:
          "Using advanced thermal camera technology, we identify exactly which zones are active and where the problem lies, without needing to guess or start pulling up flooring unnecessarily to find out.",
        tags: "THERMAL IMAGING · ZONES · ACCURACY",
        image: underfloorHeatingImage,
      },
      {
        number: "02",
        title: "Cold Spot & Hot Floor Repairs",
        description:
          "Whether specific areas are staying cold or the whole floor is running too hot, we trace the fault back to its source and carry out the repair needed to restore even, comfortable heating throughout.",
        tags: "DIAGNOSIS · REPAIR · COMFORT",
        image: centralHeatingImage,
      },
      {
        number: "03",
        title: "Thermostat & Wiring Repairs",
        description:
          "We're experienced specialists in Heatmiser thermostats and underfloor heating wiring faults, covering installation, fault-finding and repairs for this widely used control system across the home.",
        tags: "HEATMISER · WIRING · CONTROLS",
        image: boilerInstallationImage,
      },
    ],
  },
  heatingSolutionDesignForYou: {
    header: {
      title: [
        [{ text: "Why" }, { text: "homeowners" }, { text: "trust" }, { text: "us" }],
        [
          { text: "with their", variant: "brand" },
          { text: "underfloor heating.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Underfloor heating faults are rarely as simple as they first appear. Here's why homeowners across Hatfield, Hertfordshire and London trust us to diagnose and fix theirs properly, first time.",
          },
        ],
      ],
    },
    specifications: [
      {
        title: "Heatmiser specialists",
        description: "Specialist installation and fault-finding for Heatmiser thermostats and controls.",
      },
      {
        title: "Thermal imaging technology",
        description: "Thermal imaging helps locate cold areas and check active heating zones.",
      },
      {
        title: "Proven track record",
        description: "Experienced fault-finding for underfloor heating problems, including previously unresolved issues.",
      },
      {
        title: "Fully insured and guaranteed",
        description: "Our work has a 24-month warranty, backed by £5 million public liability insurance.",
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
            text: "A clear four-step process explains exactly what happens after you contact SS Consultants for an underfloor heating repair, from first diagnosis through to a fully working system again.",
          },
        ],
      ],
    },
    steps: [
      {
        number: "01",
        title: "Book a diagnostic visit",
        description:
          "Call us or fill out our online form and we'll arrange a visit to assess your underfloor heating system and talk through the symptoms you've been experiencing in more detail beforehand.",
      },
      {
        number: "02",
        title: "Thermal imaging survey",
        description:
          "We use thermal camera technology to check which zones are active and pinpoint exactly where the fault lies, without needing to lift your flooring to get an accurate diagnosis of the problem.",
      },
      {
        number: "03",
        title: "Fault identified and explained",
        description:
          "We explain what we've found in plain terms, including whether the issue is with your plumbing, wiring or controls, and give you a clear, upfront price before any repair work actually begins.",
      },
      {
        number: "04",
        title: "Repair completed and tested",
        description:
          "We carry out the repair, test the system thoroughly across all zones, and leave you with underfloor heating that's running evenly and reliably again, backed by our 24-month workmanship warranty.",
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
  callToActionSection: {
    header: {
      title: [[{ text: "Underfloor heating not working?" }], [{ text: "Let’s find the fault.", variant: "brand" }]],
      description: [[{ text: "Get specialist help with underfloor heating controls, cold spots and uneven temperatures." }]],
    },
    ctas: [
      { label: "Book Underfloor Heating Repairs", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
    reassurance: "Fault diagnosis • Clear pricing • Heatmiser expertise",
  },
  faq: {
    header: {
      title: [
        [{ text: "Questions" }, { text: "about" }],
        [{ text: "your" }, { text: "underfloor heating?", variant: "brand" }],
      ],
      description: [
        [{ text: "Clear answers to the questions homeowners ask us most about underfloor heating repairs." }],
      ],
    },
    faqsItems: UNDERFLOOR_HEATING_FAQ_DATA,
  },
};
