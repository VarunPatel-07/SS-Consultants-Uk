import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";
import { GalleryHeroSection } from "@/components/sections/gallery/gallery-hero.section";

export default function GalleryPage() {
  return (
    <>
      <NavbarSection />
      <main>
        <GalleryHeroSection />
      </main>
      <TestimonialSection />
      <ConsultationSection />
      <FooterBarSection />
    </>
  );
}
