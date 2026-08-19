import type { StaticImageData } from "next/image";

export interface GalleryImage {
  id: string;
  image: StaticImageData | string;
  alt: string;
}
