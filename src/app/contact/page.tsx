import { NavbarSection } from "@/components/sections/common/navbar.section";
import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";

export default function ContactPage() {
  return (
    <>
      <NavbarSection />
      <main>
        <ContactHeroSection />
        <ConsultationSection />
      </main>
      <FooterBarSection />
    </>
  );
}
