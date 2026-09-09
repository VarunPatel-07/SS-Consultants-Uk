import { GALLERY_IMAGES } from "@/content/pageContent/common.data";
import type { CommonPageDataInterface } from "@/utils/interfacepage.interface";

export const GALLERY_PAGE_DATA: CommonPageDataInterface = {
  metadata: {
    title: "Heating Work Gallery",
    description: "Examples of boiler, central heating and underfloor heating work.",
  },
  gallery: {
    header: {
      title: [[{ text: "A closer look at our" }], [{ text: "heating work.", variant: "brand" }]],
      description: [[{ text: "Browse recent installations, repairs and heating projects from our team." }]],
    },
    items: GALLERY_IMAGES,
  },
  sections: ["hero", "gallery", "testimonials", "consultation"],
};
