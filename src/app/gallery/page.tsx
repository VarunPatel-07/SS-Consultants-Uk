import { GalleryHeroSection } from "@/components/sections/gallery/gallery-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { GALLERY_PAGE_DATA } from "@/content/pageContent/pageData/gallery.data";
import { HOME_PAGE_DATA } from "@/content/pageContent/pageData/home.data";
import type { Metadata } from "next";

export const metadata: Metadata = { ...GALLERY_PAGE_DATA.metadata, alternates: { canonical: "/gallery" } };

export default function GalleryPage() {
  const sections = GALLERY_PAGE_DATA.sections ?? [];

  return (
    <>
      {sections.includes("hero") && GALLERY_PAGE_DATA.gallery && (
        <GalleryHeroSection data={GALLERY_PAGE_DATA.gallery} />
      )}
      {sections.includes("testimonials") && HOME_PAGE_DATA.testimonials && (
        <TestimonialSection data={HOME_PAGE_DATA.testimonials} />
      )}
      <ConsultationSection />
    </>
  );
}
