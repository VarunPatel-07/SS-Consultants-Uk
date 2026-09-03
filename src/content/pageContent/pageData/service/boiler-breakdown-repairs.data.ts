import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import boilerBreakdownRepairsHero from "@/assets/images/webp/service/hero-images/boiler-breakdown-repairs.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
import { BOILER_BREAKDOWN_REPAIRS_FAQ_DATA } from "@/content/pageContent/faq.data";
import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";

export const BOILER_BREAKDOWN_REPAIRS_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Boiler Breakdown Repairs | SS Consultants, Hatfield",
    description:
      "Fast, Gas Safe registered boiler breakdown repairs across Hatfield, Hertfordshire and London. Same-day callouts where available. Book your repair today.",
  },
  serviceHeroSection: {
    header: {
      title: [
        [{ text: "Boiler" }, { text: "broken" }, { text: "down?" }],
        [
          { text: "We'll" },
          { text: "get" },
          { text: "it" },
          { text: "fixed,", variant: "brand" },
          { text: "fast.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Fast, dependable boiler breakdown repairs from Gas Safe registered engineers, covering all major boiler brands across Hatfield, Hertfordshire and London.",
          },
        ],
      ],
    },
    slug: "boiler-breakdown-repairs",
    label: "Boiler Breakdown Repairs",
    cta: "Book a Repair",
    heroImage: boilerBreakdownRepairsHero,
    eyebrow: "Boiler breakdown repairs across Hatfield, Hertfordshire & London",
    options: [{ name: "Diagnostic callout", price: "£80  + VAT" }],
    note: "Repair costs quoted after diagnosis",
    reassurance: ["Gas Safe registered", "All major boiler brands", "Fast response times"],
  },
  whatOurServiceInclude: {
    header: {
      title: [
        [
          { text: "What" },
          { text: "our" },
          { text: "repair" },
          { text: "service" },
          { text: "can", variant: "brand" },
          { text: "include.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "From a quick fault diagnosis to a same-day fix, we tailor the repair to what's actually wrong with your boiler.",
          },
        ],
      ],
    },
    installationSteps: [
      {
        number: "01",
        title: "Fault Diagnosis",
        description: "A thorough on-site inspection to identify exactly what's causing your boiler to break down.",
        tags: "DIAGNOSIS · TESTING · REPORTING",
        image: boilerInstallationImage,
      },
      {
        number: "02",
        title: "Same-Day Repairs",
        description: "Fast, dependable repairs completed on the day wherever parts and access allow.",
        tags: "SPEED · PARTS · WORKMANSHIP",
        image: centralHeatingImage,
      },
      {
        number: "03",
        title: "Emergency Callout",
        description: "Priority response when you're left without heating or hot water.",
        tags: "URGENCY · AVAILABILITY · SAFETY",
        image: underfloorHeatingImage,
      },
    ],
  },
  heatingSolutionDesignForYou: {
    header: {
      title: [
        [
          { text: "Repairs" },
          { text: "tailored" },
          { text: "to" },
          { text: "your" },
          { text: "boiler.", variant: "brand" },
        ],
      ],
      description: [
        [
          {
            text: "Every breakdown has a different cause. We diagnose the fault properly before recommending a fix, so you get a repair that actually solves the problem, not just a quick patch.",
          },
        ],
      ],
    },
    specifications: [
      {
        title: "Boiler brand & fault",
        description:
          "We repair all major boiler brands, including Vaillant, Worcester Bosch, Baxi, Ideal and Main, matching the right parts and approach to the specific fault rather than a one-size-fits-all fix applied to every callout.",
      },
      {
        title: "Speed of response",
        description:
          "When your heating or hot water is out, we prioritise getting an engineer to you as quickly as possible, aiming for same-day callouts wherever we can, so you're not left without heating for long.",
      },
      {
        title: "Safety first",
        description:
          "Every repair includes the checks needed to confirm your boiler is safe to keep running once we're done, carried out by fully qualified, Gas Safe registered engineers you can trust in your home.",
      },
      {
        title: "Long-term reliability",
        description:
          "We aim to fix the underlying fault, not just the symptom, to help prevent the same breakdown happening again, saving you the cost and hassle of repeat callouts for the same recurring problem.",
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
            text: "A clear four-step process explains exactly what happens after you contact SS Consultants for a boiler repair, keeping every stage straightforward from booking through to a safely running boiler.",
          },
        ],
      ],
    },
    steps: [
      {
        number: "01",
        title: "Book your repair",
        description:
          "Call us or fill out our simple online form and we'll arrange a callout as quickly as possible, including same-day visits where availability allows, so your heating is out for as little time as possible.",
      },
      {
        number: "02",
        title: "Fault diagnosis",
        description:
          "Our Gas Safe registered engineer inspects your boiler on-site to identify exactly what's causing the breakdown, using proper diagnostic checks rather than guesswork or unnecessary part swaps.",
      },
      {
        number: "03",
        title: "Clear, upfront quote",
        description:
          "We explain the fault in plain terms and give you a clear, upfront price for the repair before any work begins, so there are no surprises on the invoice once the job is done.",
      },
      {
        number: "04",
        title: "Repair and test",
        description:
          "We carry out the repair using quality parts, test your boiler thoroughly under normal operation, and leave your heating and hot water running safely before we head off.",
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
        [{ text: "your" }, { text: "heating?", variant: "brand" }],
      ],
      description: [
        [{ text: "Clear answers to the questions homeowners ask us most about boiler breakdowns and repairs." }],
      ],
    },
    faqsItems: BOILER_BREAKDOWN_REPAIRS_FAQ_DATA,
  },
};
