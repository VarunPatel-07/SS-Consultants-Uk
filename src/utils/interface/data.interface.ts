import { AboutFeature } from "@/utils/interface/about.interface";
import { BoilerOption } from "@/utils/interface/boiler.interface";
import type {
  CTA,
  FAQItem,
  ProcessStep,
  SectionHeader,
  ServiceItem,
  TestimonialItem,
  TextChunk,
} from "@/utils/interface/common.interface";
import { HeatingSupportCard, InstallationInclude } from "@/utils/interface/common.interface";
import { BoilerBrand } from "@/utils/interface/homepage.interface";
import { WhyChooseUsPoint } from "@/utils/interface/why-choose-us.interface";
import { Metadata } from "next";
import type { StaticImageData } from "next/image";

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
  heroImage?: StaticImageData | string;
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

export interface TestimonialSectionInterface {
  reviewSummary?: { rating: number; count: number; url: string };
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
  reassurance?: string;
  ctas?: CTA[];
  services?: ServiceItem[];
  image?: { src: StaticImageData; alt: string; width: number; height: number };
}

export interface AboutSectionDataInterface {
  header: SectionHeader;
  image?: { src: StaticImageData | string; alt: string; width?: number; height?: number };
  eyebrow?: TextChunk[][];
  badge?: { title: TextChunk[][]; description: TextChunk[][] };
  reassurance?: TextChunk[][];
  cta?: CTA[];
  cards?: AboutFeature[];
}

export interface AboutPrinciplesSectionData {
  header: SectionHeader;
  image: { src: StaticImageData | string; alt: string };
  badge: { title: string; description: string };
  principles: { number: string; title: string; description: string }[];
}

export interface ExperienceSectionData {
  header: SectionHeader;
  eyebrow: TextChunk[][];
  callout: { header: SectionHeader; cta?: CTA };
  brands: BoilerBrand[];
}

export interface BoilerOptionsSectionData {
  header: SectionHeader;
  brands: BoilerOption[];
}

export interface callToActionSectionInterface {
  reassurance?: string;
  header: SectionHeader;
  ctas: CTA[];
}

export interface WhyChooseUsSectionData {
  header: SectionHeader;
  items: WhyChooseUsPoint[];
}

export interface ServiceHeroSectionInterface {
  header: SectionHeader;
  slug: string;
  label: string;
  cta: string;
  heroImage?: StaticImageData | string;
  eyebrow: string;
  options: Array<{ name: string; price: string }>;
  note: string;
  reassurance: string[];
}

export interface WhatOurServiceInclude {
  header: SectionHeader;
  installationSteps: InstallationInclude[];
}

export interface heatingSolutionDesignForYouDataInterface {
  header: SectionHeader;
  specifications: { title: string; description: string }[];
}

export interface CommonPageDataInterface {
  metadata?: Metadata;
  hero?: HeroSection;
  service?: ServiceHeroSectionInterface;
  experience?: ExperienceSectionData;
  about?: AboutSectionDataInterface;
  aboutPrinciples?: AboutPrinciplesSectionData;
  services?: OurServicesSectionInterface;
  boilersOptions?: BoilerOptionsSectionData;
  callToActionSection?: callToActionSectionInterface;
  whyChooseUs?: WhyChooseUsSectionData;
  process?: ProcessSection;
  testimonials?: TestimonialSectionInterface;
  faq?: FAQSection;
  gallery?: { header: SectionHeader; items: ImageItem[] };
  consultation?: { email: string; phone: string };
  sections?: string[];
  serviceHeroSection?: ServiceHeroSectionInterface;
  whatOurServiceInclude?: WhatOurServiceInclude;
  heatingSolutionDesignForYou?: heatingSolutionDesignForYouDataInterface;
  [key: string]: unknown;
}

export type PageText = TextChunk[][];
