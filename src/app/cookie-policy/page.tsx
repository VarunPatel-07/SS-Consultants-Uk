import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { LEGAL_PAGE_DATA } from "@/content/pageContent/pageData/legal.data";

export default function CookiePolicyPage() {
  const pageData = LEGAL_PAGE_DATA["/cookie-policy"];

  return (
    <>
      <LegalPageSection title={pageData.title} description={pageData.description} />
      <ConsultationSection />
    </>
  );
}
