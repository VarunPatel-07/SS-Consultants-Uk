import type { ProcessStep } from "@/app/utils/interface/common.interface";

export const OUR_PROCESS_DATA: ProcessStep[] = [
  { number: "01", title: "Home assessment", description: "We review your existing heating system, property size, insulation, hot-water demand and heating requirements.", tags: "PROPERTY · REQUIREMENTS · EXISTING SYSTEM" },
  { number: "02", title: "System recommendation", description: "We recommend the appropriate boiler, radiators, pipework and controls, followed by a clearly explained quotation.", tags: "SYSTEM DESIGN · EQUIPMENT · QUOTATION" },
  { number: "03", title: "Professional installation", description: "Qualified engineers complete the work carefully, protect the surrounding space and keep disruption to a minimum.", tags: "INSTALLATION · WORKMANSHIP · CLEANLINESS" },
  { number: "04", title: "Testing and handover", description: "The system is tested, balanced and registered. We then explain the controls and leave your home clean and tidy.", tags: "TESTING · REGISTRATION · GUIDANCE" },
];

