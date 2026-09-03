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
    cta: "Request a Free Quote",
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
        description:
          "We're experts in Heatmiser thermostats, a widely used underfloor heating control system, handling both installation and fault-finding for homes where other engineers have struggled to find the cause.",
      },
      {
        title: "Thermal imaging technology",
        description:
          "Our thermal camera technology lets us identify problem areas in the floor and check which zones are actually active, giving us an accurate diagnosis without needing to lift your flooring at all.",
      },
      {
        title: "Proven track record",
        description:
          "We've helped hundreds of customers resolve underfloor heating issues, including cases where other engineers had already tried and failed to find the fault or fix the system properly beforehand.",
      },
      {
        title: "Fully insured and guaranteed",
        description:
          "All our work is covered by a 24-month warranty, and we carry £5 million public liability insurance, so you have real peace of mind whatever repair your underfloor heating system actually needs.",
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
