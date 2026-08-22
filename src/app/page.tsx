import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";
import { AboutSection } from "@/components/sections/homepage/about.section";
import { BoilerOptionsSection } from "@/components/sections/homepage/boiler-options.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { ExperienceSection } from "@/components/sections/homepage/experience.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { HeatingSupportSection } from "@/components/sections/homepage/heating-support.section";
import { HeroSection } from "@/components/sections/homepage/hero.section";
import { ServiceStrip } from "@/components/sections/homepage/service-strip.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { WhyChooseUsSection } from "@/components/sections/homepage/why-choose-us.section";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--ssc-uk-main-white-color)">
      <NavbarSection />
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <HeatingSupportSection />
      <BoilerOptionsSection />
      <TestimonialSection />
      <WhyChooseUsSection />
      <FaqSection />
      <ConsultationSection />
      <FooterBarSection />
    </main>
  );
}
