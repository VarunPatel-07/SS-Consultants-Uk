import type { BoilerQuoteQuestion } from "@/utils/interface/boiler-quote.interface";

const locationQuestion: BoilerQuoteQuestion = {
  id: "location",
  eyebrow: "A final detail",
  label: "Where will the boiler be installed?",
  description: "Choose the closest match. We can confirm the exact position during your survey.",
  options: [
    { id: "kitchen", label: "Kitchen", icon: "home", suboptions: [] },
    { id: "utility-room", label: "Utility room", icon: "home", suboptions: [] },
    { id: "garage", label: "Garage", icon: "home", suboptions: [] },
    { id: "airing-cupboard", label: "Airing cupboard", icon: "home", suboptions: [] },
    { id: "other", label: "Somewhere else", icon: "settings", suboptions: [] },
  ],
};

const fuelQuestion: BoilerQuoteQuestion = {
  id: "fuel",
  eyebrow: "About your property",
  label: "What fuel does your home use?",
  options: [
    { id: "mains-gas", label: "Mains gas", icon: "flame", suboptions: [locationQuestion] },
    { id: "lpg", label: "LPG", icon: "flame", suboptions: [locationQuestion] },
    { id: "oil", label: "Oil", icon: "flame", suboptions: [locationQuestion] },
    { id: "electric", label: "Electric", icon: "sparkles", suboptions: [locationQuestion] },
    { id: "not-sure", label: "I’m not sure", icon: "settings", suboptions: [locationQuestion] },
  ],
};

const boilerTypeQuestion: BoilerQuoteQuestion = {
  id: "boiler-type",
  eyebrow: "Your boiler",
  label: "Which type of boiler do you need?",
  description: "If you are unsure, choose that option and our engineer will advise you.",
  options: [
    { id: "combi", label: "Combi boiler", icon: "boiler", description: "Heating and hot water from one compact unit", suboptions: [fuelQuestion] },
    { id: "system", label: "System boiler", icon: "radiator", description: "Works with a separate hot-water cylinder", suboptions: [fuelQuestion] },
    { id: "regular", label: "Regular boiler", icon: "home", description: "Traditional boiler with tanks and a cylinder", suboptions: [fuelQuestion] },
    { id: "not-sure", label: "I’m not sure", icon: "settings", description: "We’ll help you choose the right system", suboptions: [fuelQuestion] },
  ],
};

const boilerJobQuestion: BoilerQuoteQuestion = {
  id: "job",
  eyebrow: "Tell us about the job",
  label: "What do you need help with?",
  options: [
    { id: "new-installation", label: "New installation", icon: "sparkles", suboptions: [boilerTypeQuestion] },
    { id: "replacement", label: "Replace my boiler", icon: "boiler", suboptions: [boilerTypeQuestion] },
    { id: "repair", label: "Boiler repair", icon: "wrench", suboptions: [fuelQuestion] },
    { id: "service", label: "Boiler service", icon: "shield", suboptions: [fuelQuestion] },
  ],
};

export const BOILER_QUOTE_QUESTIONS: BoilerQuoteQuestion[] = [
  {
    id: "service",
    eyebrow: "Let’s build your quote",
    label: "What can we help you with?",
    description: "Answer a few quick questions so we can understand the work you need.",
    options: [
      { id: "boilers", label: "Boilers", icon: "boiler", description: "Installation, replacement, repair or servicing", suboptions: [boilerJobQuestion] },
      { id: "central-heating", label: "Central heating", icon: "radiator", description: "Radiators, controls and complete heating systems", suboptions: [fuelQuestion] },
      { id: "other", label: "Something else", icon: "wrench", description: "Tell us about another heating requirement", suboptions: [locationQuestion] },
    ],
  },
];

export const BOILER_QUOTE_STORAGE_KEY = "ssc-boiler-quote-progress-v1";
