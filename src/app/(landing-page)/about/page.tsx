import { AboutHeroSection } from "@/components/sections/about/about-hero.section";
import { AboutPrinciplesSection } from "@/components/sections/about/about-principles.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { ExperienceSection } from "@/components/sections/homepage/experience.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { OurServiceSection } from "@/components/sections/homepage/our-service-section";
import { ABOUT_PAGE_DATA } from "@/content/pageContent/pageData/aboutUs.data";
import type { Metadata } from "next";

export const metadata: Metadata = { ...ABOUT_PAGE_DATA.metadata, alternates: { canonical: "/about" } };

export default function AboutPage() {
  return (
    <>
      {ABOUT_PAGE_DATA.about && <AboutHeroSection data={ABOUT_PAGE_DATA.about} />}
      {ABOUT_PAGE_DATA.experience && <ExperienceSection data={ABOUT_PAGE_DATA.experience} compact />}
      {ABOUT_PAGE_DATA.aboutPrinciples && <AboutPrinciplesSection data={ABOUT_PAGE_DATA.aboutPrinciples} />}

      {ABOUT_PAGE_DATA.services && <OurServiceSection data={ABOUT_PAGE_DATA.services} />}
      {ABOUT_PAGE_DATA.faq && <FaqSection data={ABOUT_PAGE_DATA.faq} />}
      <ConsultationSection />
    </>
  );
}
