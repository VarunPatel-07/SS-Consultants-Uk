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
import { getHomepage, getHomepageContent } from "@/lib/payload/homepage";
import { getTestimonialSection } from "@/lib/payload/testimonials";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepage();

  if (!homepage) return { alternates: { canonical: "/" } };

  return {
    title: homepage.seo.title,
    description: homepage.seo.description,
    alternates: { canonical: homepage.seo.canonicalPath || "/" },
    robots: homepage.seo.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function Home() {
  const [homepage, testimonials] = await Promise.all([getHomepageContent(), getTestimonialSection("homepage")]);

  if (!homepage) return <main className="homepage min-h-screen bg-background" />;

  return (
    <main className="homepage min-h-screen bg-background">
      {homepage.hero && (
        <HeroSection data={homepage.hero} infoItems={homepage.heroInfoItems} visual={homepage.heroVisual} />
      )}
      {homepage.experience && <ExperienceSection data={homepage.experience} />}
      {homepage.about && <AboutSection data={homepage.about} />}
      {homepage.services && <OurServiceSection data={homepage.services} />}
      {homepage.boilersOptions && <BoilerOptionsSection data={homepage.boilersOptions} />}
      {homepage.callToActionSection && <CallToActionSection data={homepage.callToActionSection} />}
      <TestimonialSection data={testimonials} />
      {homepage.whyChooseUs && <WhyChooseUsSection data={homepage.whyChooseUs} />}
      {homepage.faq && <FaqSection data={homepage.faq} />}
      <ConsultationSection />
    </main>
  );
}
