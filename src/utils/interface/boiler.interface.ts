import type { StaticImageData } from "next/image";

export interface BoilerOption {
  name: string;
  image: StaticImageData | string;
  imageAlt?: string;
  tagline: string;
  bestFor?: string;
  description: string;
  features: string[];
  ctaLabel?: string;
  popularChoice?: boolean;
}
