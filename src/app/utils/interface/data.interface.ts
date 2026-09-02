import { AboutFeature } from "@/utils/interface/about.interface";
import { BoilerOption } from "@/utils/interface/boiler.interface";
import { HeatingSupportCard } from "@/utils/interface/common.interface";
import { BoilerBrand } from "@/utils/interface/homepage.interface";
import { WhyChooseUsPoint } from "@/utils/interface/why-choose-us.interface";
import type { StaticImageData } from "next/image";
import type {
  CTA,
  FAQItem,
  ProcessStep,
  SectionHeader,
  ServiceItem,
  TestimonialItem,
  TextChunk,
} from "./common.interface";

export interface ImageItem {
  id: string;
  image: StaticImageData | string;
  alt: string;
}

export interface ServicePageData {
  slug: string;
  label: string;
  title: string;
  highlight: string;
  ending: string;
  description: string;
  cta: string;
  heroImage: StaticImageData;
  eyebrow: string;
  options: Array<{ name: string; price: string }>;
  note: string;
  reassurance: string[];
}

export interface OurServicesSectionInterface {
  header: SectionHeader;
  items: HeatingSupportCard[];
}

export interface FAQSection {
  header: SectionHeader;
  faqsItems: FAQItem[];
}

export interface TestimonialSection {
  header: SectionHeader;
  items: TestimonialItem[];
}

export interface ProcessSection {
  header: SectionHeader;
  steps: ProcessStep[];
}

export interface HeroSection {
  header: SectionHeader;
  eyebrow?: string;
  ctas?: Array<{ label: string; href: string; variant: "CTA_PRIMARY" | "CTA_SECONDARY" }>;
  services?: ServiceItem[];
  image?: { src: StaticImageData; alt: string; width: number; height: number };
}

export interface AboutSectionDataInterface {
  header: SectionHeader;
  cta?: { label: string; href: string; variant: "CTA_PRIMARY" | "CTA_SECONDARY"; theme?: "LIGHT" | "DARK" }[];
  cards?: AboutFeature[];
}

export interface ExperienceSectionData {
  header: SectionHeader;
  brands: BoilerBrand[];
}

export interface BoilerOptionsSectionData {
  header: SectionHeader;
  brands: BoilerOption[];
}

export interface callToActionSectionInterface {
  header: SectionHeader;
  ctas: CTA[];
}

export interface WhyChooseUsSectionData {
  header: SectionHeader;
  items: WhyChooseUsPoint[];
}

export interface CommonPageDataInterface {
  metadata?: { title: string; description: string };
  hero?: HeroSection;
  experience?: ExperienceSectionData;
  about?: AboutSectionDataInterface;
  services?: OurServicesSectionInterface;
  boilersOptions?: BoilerOptionsSectionData;
  callToActionSection?: callToActionSectionInterface;
  whyChooseUs?: WhyChooseUsSectionData;
  process?: ProcessSection;
  testimonials?: TestimonialSection;
  faq?: FAQSection;
  gallery?: { items: ImageItem[] };
  consultation?: { email: string; phone: string };
  sections?: string[];
  [key: string]: unknown;
}

export type PageText = TextChunk[][];
