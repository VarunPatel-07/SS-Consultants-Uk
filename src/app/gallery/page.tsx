import { GALLERY_PAGE_DATA } from "@/app/content/pageContent/pageData/gallery.data";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import { GalleryHeroSection } from "@/components/sections/gallery/gallery-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";

export default function GalleryPage() {
  const sections = GALLERY_PAGE_DATA.sections ?? [];

  return (
    <>
      {sections.includes("hero") && <GalleryHeroSection />}
      {sections.includes("testimonials") && HOME_PAGE_DATA.testimonials && <TestimonialSection data={HOME_PAGE_DATA.testimonials} />}
      {sections.includes("consultation") && <ConsultationSection />}
    </>
  );
}
