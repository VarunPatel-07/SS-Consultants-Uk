import { StaticImageData } from "next/image";

export type ANIMATION_DIRECTION = "TOP_LEFT" | "TOP_RIGHT" | "BOTTOM_LEFT" | "BOTTOM_RIGHT";

export interface HeatingSupportCard {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
}
