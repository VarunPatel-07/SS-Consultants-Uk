import { StaticImageData } from "next/image";

export type ANIMATION_DIRECTION = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";

export interface HeatingSupportCard {
  slug: string;
  number: string;
  title: string;
  description: string;
  image?: StaticImageData | string;
  imageAlt: string;
  ctaLabel?: string;
  badge?: string;
}

export interface InstallationInclude {
  number: string;
  title: string;
  description: string;
  tags: string;
  image?: StaticImageData | string;
}

import type { LucideIcon } from "lucide-react";

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
  theme?: "LIGHT" | "DARK";
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
  date?: string;
  quote: string;
  name: string;
  location?: string;
  service?: string;
  rating?: number;
  designation?: string;
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
