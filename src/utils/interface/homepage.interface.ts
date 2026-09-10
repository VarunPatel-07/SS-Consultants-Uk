import type { StaticImageData } from "next/image";

export interface BoilerBrand {
  name: string;
  logo: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HeatingService {
  name: string;
  icon: StaticImageData;
}
