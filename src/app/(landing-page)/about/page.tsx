import { AboutHeroSection } from "@/components/sections/about/about-hero.section";
import { AboutPrinciplesSection } from "@/components/sections/about/about-principles.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { ExperienceSection } from "@/components/sections/homepage/experience.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { OurServiceSection } from "@/components/sections/homepage/our-service-section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { getAboutPageContent } from "@/lib/payload/about";
import { getTestimonialSection } from "@/lib/payload/testimonials";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return (await getAboutPageContent())?.metadata ?? { alternates: { canonical: "/about" } };
}

export default async function AboutPage() {
  const [page, testimonials] = await Promise.all([
    getAboutPageContent(),
    getTestimonialSection("homepage"),
  ]);
  if (!page) return null;

  return (
    <>
      {page.about && <AboutHeroSection data={page.about} />}
      {page.experience && <ExperienceSection data={page.experience} compact />}
      {page.aboutPrinciples && <AboutPrinciplesSection data={page.aboutPrinciples} />}
      {page.services && <OurServiceSection data={page.services} />}
      <TestimonialSection data={testimonials} />
      {page.faq && <FaqSection data={page.faq} />}
      <ConsultationSection />
    </>
  );
}
