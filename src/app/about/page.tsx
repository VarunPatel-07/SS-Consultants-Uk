import { ABOUT_PAGE_DATA } from "@/app/content/pageContent/pageData/aboutUs.data";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import { AboutHeroSection } from "@/components/sections/about/about-hero.section";
import { AboutPrinciplesSection } from "@/components/sections/about/about-principles.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { ExperienceSection } from "@/components/sections/homepage/experience.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { OurServiceSection } from "@/components/sections/homepage/our-service-section";

export default function AboutPage() {
  const sections = ABOUT_PAGE_DATA.sections ?? [];

  return (
    <>
      {HOME_PAGE_DATA.about && <AboutHeroSection data={HOME_PAGE_DATA.about} />}
      {sections.includes("experience") && HOME_PAGE_DATA.experience && (
        <ExperienceSection data={HOME_PAGE_DATA.experience} />
      )}
      {sections.includes("principles") && <AboutPrinciplesSection />}

      {HOME_PAGE_DATA.services && <OurServiceSection data={HOME_PAGE_DATA.services} />}
      {sections.includes("faq") && ABOUT_PAGE_DATA.faq && <FaqSection data={ABOUT_PAGE_DATA.faq} />}
      {sections.includes("consultation") && <ConsultationSection />}
    </>
  );
}
