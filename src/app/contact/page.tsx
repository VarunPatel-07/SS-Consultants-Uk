import { ContactHeroSection } from "@/components/sections/contact/contact-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { CONTACT_PAGE_DATA } from "@/content/pageContent/pageData/contact.data";
import type { Metadata } from "next";

export const metadata: Metadata = { ...CONTACT_PAGE_DATA.metadata, alternates: { canonical: "/contact" } };

export default function ContactPage() {
  const sections = CONTACT_PAGE_DATA.sections ?? [];

  return (
    <>
      {sections.includes("hero") && CONTACT_PAGE_DATA.hero && <ContactHeroSection data={CONTACT_PAGE_DATA.hero} />}
      <ConsultationSection />
    </>
  );
}
