import { LEGAL_PAGE_DATA } from "@/app/content/pageContent/pageData/legal.data";
import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";

export default function PrivacyPolicyPage() {
  const pageData = LEGAL_PAGE_DATA["/privacy-policy"];

  return (
    <>
      <LegalPageSection title={pageData.title} description={pageData.description} />
      <ConsultationSection />
    </>
  );
}
