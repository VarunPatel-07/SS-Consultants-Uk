import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export interface LegalPageData extends CommonPageDataInterface {
  title: string;
  description: string;
}

export const LEGAL_PAGE_DATA: Record<string, LegalPageData> = {
  "/cookie-policy": {
    title: "Cookie Policy",
    description: "This page explains how cookies may be used to help the website work effectively and improve your browsing experience.",
    metadata: { title: "Cookie Policy", description: "How SS Consultants uses cookies." },
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "We respect your privacy and only use information shared with us to respond to enquiries and provide our services.",
    metadata: { title: "Privacy Policy", description: "The SS Consultants privacy policy." },
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions",
    description: "Our services are provided with clear communication, professional workmanship and agreed terms for each project.",
    metadata: { title: "Terms & Conditions", description: "SS Consultants terms and conditions." },
  },
};

