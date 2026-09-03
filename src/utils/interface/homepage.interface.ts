import type { StaticImageData } from "next/image";

export interface BoilerBrand {
  name: string;
  logo: StaticImageData;
  alt: string;
}

export interface HeatingService {
  name: string;
  icon: StaticImageData;
}
