import boilerRepairImage from "@/assets/images/webp/service/boiler-breakdown-repairs.webp";
import boilerDiagnosisImage from "@/assets/images/webp/service/boiler-servicing.webp";
import boilerBreakdownRepairsHero from "@/assets/images/webp/service/hero-images/boiler-breakdown-repairs.webp";
import boilerComponentImage from "@/assets/images/webp/service/hero-images/boiler-servicing.webp";
import { BOILER_BREAKDOWN_REPAIRS_FAQ_DATA } from "@/content/pageContent/faq.data";
import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";
import type { CommonPageDataInterface } from "@/utils/interface/data.interface";

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
    cta: "Book a Boiler Repair",
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
        image: boilerDiagnosisImage,
      },
      {
        number: "02",
        title: "Same-Day Repairs",
        description: "Fast, dependable repairs completed on the day wherever parts and access allow.",
        tags: "SPEED · PARTS · WORKMANSHIP",
        image: boilerComponentImage,
      },
      {
        number: "03",
        title: "Emergency Callout",
        description: "Priority response when you're left without heating or hot water.",
        tags: "URGENCY · AVAILABILITY · SAFETY",
        image: boilerRepairImage,
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
        description: "We repair all major boiler brands, matching the parts and repair to the fault.",
      },
      {
        title: "Speed of response",
        description: "We aim for same-day callouts where availability allows when heating or hot water fails.",
      },
      {
        title: "Safety first",
        description: "Gas Safe registered engineers check your boiler is safe to run after the repair.",
      },
      {
        title: "Long-term reliability",
        description: "We address the underlying fault to help prevent repeat breakdowns.",
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
  callToActionSection: {
    header: {
      title: [[{ text: "Boiler stopped working?" }], [{ text: "Let’s get your heating back on.", variant: "brand" }]],
      description: [[{ text: "Fast, professional diagnosis and repair from a local Gas Safe registered engineer." }]],
    },
    ctas: [
      { label: "Book a Boiler Repair", href: "#contact", variant: "CTA_PRIMARY" },
      { label: "Call 07590 514937", href: "tel:07590514937", variant: "CTA_SECONDARY" },
    ],
    reassurance: "Fast response • Clear pricing • No unnecessary replacements",
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
