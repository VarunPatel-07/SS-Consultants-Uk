import { GALLERY_IMAGES } from "@/app/content/pageContent/common.data";
import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";

export const GALLERY_PAGE_DATA: CommonPageDataInterface = {
  metadata: { title: "Heating Work Gallery", description: "Examples of boiler, central heating and underfloor heating work." },
  gallery: { items: GALLERY_IMAGES },
  sections: ["hero", "gallery", "testimonials", "consultation"],
};

