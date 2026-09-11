import { ContactHeroSection } from "@/components/sections/contact/contact-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { getContactHero, getContactPage } from "@/lib/payload/contact";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage();
  return page ? {
    title: page.seo.title,
    description: page.seo.description,
    alternates: { canonical: page.seo.canonicalPath || "/contact" },
    robots: page.seo.noIndex ? { index: false, follow: false } : undefined,
  } : { alternates: { canonical: "/contact" } };
}

export default async function ContactPage() {
  const hero = await getContactHero();

  return (
    <>
      {hero && <ContactHeroSection data={hero} />}
      <ConsultationSection />
    </>
  );
}
