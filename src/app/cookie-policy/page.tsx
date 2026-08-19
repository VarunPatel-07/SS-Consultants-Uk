import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { LegalPageSection } from "@/components/sections/common/legal-page.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";

export default function CookiePolicyPage() {
  return <><NavbarSection /><main><LegalPageSection title="Cookie Policy" description="This page explains how cookies may be used to help the website work effectively and improve your browsing experience." /></main><FooterBarSection /></>;
}
