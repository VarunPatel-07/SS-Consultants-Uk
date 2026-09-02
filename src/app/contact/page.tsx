import { ContactHeroSection } from "@/components/sections/contact/contact-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";

export default function ContactPage() {
  const sections = CONTACT_PAGE_DATA.sections ?? [];

  return (
    <>
      {sections.includes("hero") && <ContactHeroSection />}
      {sections.includes("consultation") && <ConsultationSection />}
    </>
  );
}
import { CONTACT_PAGE_DATA } from "@/app/content/pageContent/pageData/contact.data";
