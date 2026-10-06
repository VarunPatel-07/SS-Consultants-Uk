import { ContactHeroSection } from "@/components/sections/contact/contact-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { getContactHero, getContactPage } from "@/lib/payload/contact";
import { seoMetadata } from "@/lib/payload/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage();
  return page ? seoMetadata(page.seo, "/contact") : { alternates: { canonical: "/contact" } };
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
