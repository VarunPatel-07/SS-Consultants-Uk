import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";

export default function TermsAndConditionsPage() {
  return <><NavbarSection /><main><LegalPageSection title="Terms & Conditions" description="Our services are provided with clear communication, professional workmanship and agreed terms for each project." /></main><FooterBarSection /></>;
}
