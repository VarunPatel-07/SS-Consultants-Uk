import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { LEGAL_PAGE_DATA } from "@/content/pageContent/pageData/legal.data";
import type { Metadata } from "next";

export const metadata: Metadata = { ...LEGAL_PAGE_DATA["/terms-and-conditions"].metadata, alternates: { canonical: "/terms-and-conditions" } };

export default function TermsAndConditionsPage() {
  const pageData = LEGAL_PAGE_DATA["/terms-and-conditions"];

  return (
    <>
      <LegalPageSection title={pageData.title} description={pageData.description} content={pageData.content} />

      <ConsultationSection />
    </>
  );
}
