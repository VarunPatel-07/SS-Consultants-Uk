import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import CallToActionSection from "@/components/sections/common/call-to-action-section";
import { AboutSection } from "@/components/sections/homepage/about.section";
import { BoilerOptionsSection } from "@/components/sections/homepage/boiler-options.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { ExperienceSection } from "@/components/sections/homepage/experience.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { HeroSection } from "@/components/sections/homepage/hero.section";
import { OurServiceSection } from "@/components/sections/homepage/our-service-section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { WhyChooseUsSection } from "@/components/sections/homepage/why-choose-us.section";

export default function Home() {

  return (
    <main className="min-h-screen bg-(--ssc-uk-main-white-color)">
      {HOME_PAGE_DATA.hero && <HeroSection data={HOME_PAGE_DATA.hero} />}
      {HOME_PAGE_DATA.experience && <ExperienceSection data={HOME_PAGE_DATA.experience} />}
      {HOME_PAGE_DATA.about && <AboutSection data={HOME_PAGE_DATA.about} />}
      {HOME_PAGE_DATA?.services && <OurServiceSection data={HOME_PAGE_DATA?.services} />}
      {HOME_PAGE_DATA.boilersOptions && <BoilerOptionsSection data={HOME_PAGE_DATA?.boilersOptions} />}
      {HOME_PAGE_DATA.callToActionSection && <CallToActionSection data={HOME_PAGE_DATA.callToActionSection} />}
      {HOME_PAGE_DATA.testimonials && <TestimonialSection data={HOME_PAGE_DATA.testimonials} />}
      {HOME_PAGE_DATA.whyChooseUs && <WhyChooseUsSection data={HOME_PAGE_DATA.whyChooseUs} />}
      {HOME_PAGE_DATA.faq && <FaqSection data={HOME_PAGE_DATA.faq} />}
      <ConsultationSection />
    </main>
  );
}
