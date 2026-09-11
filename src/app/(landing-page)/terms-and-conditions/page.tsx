import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { getLegalPage, legalMetadata } from "@/lib/payload/legal";
import type { Metadata } from "next";

export function generateMetadata(): Promise<Metadata> {
  return legalMetadata("terms-and-conditions", "/terms-and-conditions");
}

export default async function TermsAndConditionsPage() {
  const pageData = await getLegalPage("terms-and-conditions");
  if (!pageData) return null;

  return (
    <>
      <LegalPageSection title={pageData.title} description={pageData.description || ""} content={pageData.content} />

      <ConsultationSection />
    </>
  );
}
