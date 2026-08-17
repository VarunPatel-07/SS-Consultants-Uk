import type { StaticImageData } from "next/image";

export interface BoilerOption {
  name: string;
  image: StaticImageData;
  tagline: string;
  description: string;
  features: string[];
  popularChoice?: boolean;
}
