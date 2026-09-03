import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export type TextVariant = "normal" | "bold" | "italic" | "brand" | "muted";

export interface TextChunk {
  text: string;
  variant?: TextVariant;
  classNames?: string;
}

export interface SectionHeader {
  title: TextChunk[][];
  description?: TextChunk[][];
}

export interface CTA {
  label: string;
  href?: string;
  variant: "CTA_PRIMARY" | "CTA_SECONDARY";
  external?: boolean;
  classNames?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export interface ServiceItem {
  slug: string;
  label: string;
  icon?: StaticImageData;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  location: string;
  service: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}
