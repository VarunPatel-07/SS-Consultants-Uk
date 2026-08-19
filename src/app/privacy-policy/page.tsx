import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";

export default function PrivacyPolicyPage() {
  return <><NavbarSection /><main><LegalPageSection title="Privacy Policy" description="We respect your privacy and only use information shared with us to respond to enquiries and provide our services." /></main><FooterBarSection /></>;
}
