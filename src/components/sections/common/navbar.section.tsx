import logo from "@/assets/images/logo/ss-consultants-logo-black-trasperent.png";
import CTAButton from "@/components/ui/ctaButton";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";

export function NavbarSection() {
  return (
    <header className="border-b border-slate-200 bg-(--ssc-uk-main-white-color) font-lora">
      <div className="ss-construction-uk-container flex min-h-[104px] items-center justify-between gap-8">
        <a className="shrink-0" href="#top" aria-label="SS Consultants home">
          <Image className="h-auto w-65" width={260} height={50} src={logo} alt="SS Consultants UK Limited" priority />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          <a className="text-base font-medium text-(--ssc-uk-main-highlight-color)" href="#top">
            Home
          </a>
          <a
            className="inline-flex items-center gap-2 text-base font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)"
            href="#services">
            Services
            <ChevronDown aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          </a>
          <a className="text-base font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="#about">
            About
          </a>
          <a className="text-base font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="#blog">
            Blog
          </a>
          <a className="text-base font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="#contact">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <CTAButton btnStyle="CTA_SECONDARY" theme="LIGHT" href="tel:07590514937">
            <span className="flex items-center gap-3">
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
              <span>07590 514937</span>
            </span>
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
