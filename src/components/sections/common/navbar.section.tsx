"use client";

import logo from "@/assets/images/logo/ss-consultants-logo-black-trasperent.png";
import CTAButton from "@/components/ui/ctaButton";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const BOILER_SERVICES = [
  { label: "Boiler Servicing", slug: "boiler-servicing" },
  { label: "Boiler Breakdown Repairs", slug: "boiler-breakdown-repairs" },
  { label: "Boiler Installation", slug: "boiler-installation" },
  { label: "Underfloor Heating", slug: "underfloor-heating" },
  { label: "Powerflushing", slug: "powerflushing" },
  { label: "Central Heating", slug: "central-heating" },
];

export function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-(--ssc-uk-main-white-color) font-lora">
      <div className="ss-construction-uk-container flex min-h-[104px] items-center justify-between gap-8">
        <Link className="shrink-0" href="/#top" aria-label="SS Consultants home">
          <Image className="h-auto w-65" width={260} height={50} src={logo} alt="SS Consultants UK Limited" priority />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          <Link className="text-base font-medium text-(--ssc-uk-main-highlight-color)" href="/#top">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}>
            <button
              className="inline-flex items-center gap-2 text-base font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)"
              type="button"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              onClick={() => setIsServicesOpen((open) => !open)}>
              Services
              <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} strokeWidth={1.8} />
            </button>
            <div className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 transition-all duration-200 ${isServicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
              <div className="rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) p-3 shadow-xl md:rounded-xl lg:rounded-2xl">
                {BOILER_SERVICES.map(({ label, slug }) => (
                  <Link className="block rounded-lg px-4 py-3 text-base text-slate-700 transition-colors hover:bg-slate-100 hover:text-(--ssc-uk-main-highlight-color)" href={`/services/${slug}`} key={slug}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className="text-base font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/#about">
            About
          </Link>
          <Link className="text-base font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/#contact">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <CTAButton btnStyle="CTA_SECONDARY" theme="LIGHT" href="tel:07590514937">
            <span className="flex items-center gap-3">
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
              <span>07590 514937</span>
            </span>
          </CTAButton>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-highlight-color) lg:hidden"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[55] bg-slate-950/30 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
        onClick={closeMenu}
      />
      <nav
        id="mobile-navigation"
        className={`fixed inset-y-0 left-0 z-[60] flex h-dvh w-[min(88vw,380px)] flex-col overflow-y-auto bg-(--ssc-uk-main-white-color) px-6 pb-8 shadow-xl transition-transform duration-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobile navigation">
        <div className="flex min-h-[104px] shrink-0 items-center justify-between border-b border-slate-200">
          <Link href="/#top" aria-label="SS Consultants home" onClick={closeMenu}>
            <Image className="h-auto w-56" src={logo} alt="SS Consultants UK Limited" />
          </Link>
          <button
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-highlight-color)"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col gap-1 pt-7">
          <Link className="border-b border-slate-200 py-4 text-lg font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/#top" onClick={closeMenu}>
            Home
          </Link>
          <div className="border-b border-slate-200">
            <button
              className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)"
              type="button"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((open) => !open)}>
              Services
              <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isServicesOpen ? "max-h-96 pb-3 opacity-100" : "max-h-0 opacity-0"}`}>
              {BOILER_SERVICES.map(({ label, slug }) => (
                <Link className="block py-2 pl-3 text-base text-slate-600 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href={`/services/${slug}`} key={slug} onClick={closeMenu}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link className="border-b border-slate-200 py-4 text-lg font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/#about" onClick={closeMenu}>
            About
          </Link>
          <Link className="border-b border-slate-200 py-4 text-lg font-medium text-slate-950 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/#contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <CTAButton btnStyle="CTA_SECONDARY" theme="LIGHT" className="mt-7 w-full justify-center" href="tel:07590514937" onClick={closeMenu}>
          <span className="flex items-center gap-3">
            <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
            <span>07590 514937</span>
          </span>
        </CTAButton>
      </nav>
    </header>
  );
}
