import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";
import { AboutHeroSection } from "@/components/sections/about/about-hero.section";
import { AboutPrinciplesSection } from "@/components/sections/about/about-principles.section";
import { AboutExperienceSection } from "@/components/sections/about/about-experience.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { HeatingSupportSection } from "@/components/sections/homepage/heating-support.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { ExperienceSection } from "@/components/sections/homepage/experience.section";

export default function AboutPage() {
  return (
    <>
      <NavbarSection />
      <main>
        <AboutHeroSection />
        <ExperienceSection flushTop />
        <AboutPrinciplesSection />
        <AboutExperienceSection />
        <HeatingSupportSection />
        <FaqSection />
        <ConsultationSection />
      </main>
      <FooterBarSection />
    </>
  );
}
