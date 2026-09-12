import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { getLegalPage, legalMetadata } from "@/lib/payload/legal";
import type { Metadata } from "next";

export function generateMetadata(): Promise<Metadata> {
  return legalMetadata("privacy-policy", "/privacy-policy");
}

export default async function PrivacyPolicyPage() {
  const pageData = await getLegalPage("privacy-policy");
  if (!pageData) return null;

  return (
    <>
      <LegalPageSection title={pageData.title} description={pageData.description || ""} content={pageData.content} />
      <ConsultationSection />
    </>
  );
}
