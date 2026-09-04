"use client";

import logo from "@/assets/images/logo/ss-consultants-logo-black-trasperent.png";
import CTAButton from "@/components/ui/ctaButton";
import { BOILER_SERVICES } from "@/content/pageContent/common.data";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function NavbarSection() {
  const navBarContainer = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isServicesActive = pathname.startsWith("/services");
  const isAboutActive = pathname.startsWith("/about");
  const isGalleryActive = pathname.startsWith("/gallery");
  const isContactActive = pathname.startsWith("/contact");

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

  useGSAP(() => {
    const navbarInnerWrapper = navBarContainer.current?.querySelector(".navbar-inner-wrapper");
    if (navbarInnerWrapper) {
      gsap.to(navBarContainer.current, {
        maxWidth: "100%",
        top: "0px",
        borderRadius: "10px",
        duration: 0.6,
        borderBottom: "0px",
        boxShadow: "0 1px 0 rgba(15, 23, 42, 0.04)",
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(navbarInnerWrapper, {
        padding: "20px 0px",
        duration: 0.6,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
    }
    const animationElement = navBarContainer.current?.querySelector(".bg-animation-element");
    if (animationElement) {
      gsap.to(animationElement, {
        opacity: 1,
        duration: 0.5,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top -100",
          toggleActions: "play none none reverse",
        },
      });
    }
  });

  return (
    <>
      <nav
        ref={navBarContainer}
        className="fixed left-1/2 top-0 z-50 w-full max-w-full -translate-x-1/2 border-b border-slate-200/80 bg-[#FBFAF8]/90 font-jakarta backdrop-blur">
        <div className="ss-construction-uk-container min-[1200px]:px-0! relative z-10">
          <div className="navbar-inner-wrapper flex items-center justify-between gap-4 px-0 py-3 min-[1025px]:gap-8 min-[1025px]:py-7">
            <Link className="shrink-0" href="/" aria-label="SS Consultants home">
              <Image
                className="h-auto w-32.5 min-[1024px]:w-42 min-[1200px]:w-50 min-[1400px]:w-65"
                width={260}
                height={50}
                src={logo}
                alt="SS Consultants UK Limited"
                priority
              />
            </Link>

            <div className="hidden items-center gap-9 min-[1024px]:flex" aria-label="Main navigation">
              <Link
                className={`text-base font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isHomeActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
                href="/"
                aria-current={isHomeActive ? "page" : undefined}>
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}>
                <button
                  className={`inline-flex items-center gap-2 text-base font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isServicesActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  onClick={() => setIsServicesOpen((open) => !open)}>
                  Services
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    strokeWidth={1.8}
                  />
                </button>
                <div
                  className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 transition-all duration-200 ${isServicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
                  <div className="rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) p-3 shadow-xl md:rounded-xl lg:rounded-2xl">
                    {BOILER_SERVICES.map(({ label, slug }) => (
                      <Link
                        className={`block rounded-lg px-4 py-3 text-base transition-colors hover:bg-slate-100 hover:text-(--ssc-uk-main-highlight-color) ${pathname === `/services/${slug}` ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-700"}`}
                        href={`/services/${slug}`}
                        key={slug}>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                className={`text-base font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isAboutActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
                href="/about"
                aria-current={isAboutActive ? "page" : undefined}>
                About
              </Link>
              <Link
                className={`text-base font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isGalleryActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
                href="/gallery"
                aria-current={isGalleryActive ? "page" : undefined}>
                Gallery
              </Link>
              <Link
                className={`text-base font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isContactActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
                href="/contact"
                aria-current={isContactActive ? "page" : undefined}>
                Contact
              </Link>
            </div>

            <div className="hidden items-center gap-3 min-[1024px]:flex xl:gap-5">
              <Link
                className="h-11.25 w-11.25 items-center justify-center rounded-full border border-slate-950 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-highlight-color) hidden min-[1024px]:inline-flex  min-[1200px]:hidden"
                href="tel:07590514937"
                aria-label="Call SS Consultants">
                <Phone aria-hidden="true" className="h-[17px] w-[17px]" strokeWidth={1.8} />
              </Link>
              <CTAButton
                btnStyle="CTA_SECONDARY"
                theme="LIGHT"
                href="tel:07590514937"
                className="hidden min-[1200px]:flex">
                <span className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
                  <span>07590 514937</span>
                </span>
              </CTAButton>
              <CTAButton btnStyle="CTA_PRIMARY" href="#contact" className="">
                Get a Quote
              </CTAButton>
            </div>

            <div className="flex items-center gap-2 min-[1024px]:hidden">
              <Link
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-950 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-highlight-color)"
                href="tel:07590514937"
                aria-label="Call SS Consultants">
                <Phone aria-hidden="true" className="h-[17px] w-[17px]" strokeWidth={1.8} />
              </Link>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--ssc-uk-main-highlight-color) text-white transition-colors hover:bg-orange-600"
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <span className="bg-animation-element pointer-events-none absolute inset-0 z-0 h-full w-full bg-(--ssc-uk-main-white-color) opacity-20 blur-2xl" />
      </nav>

      <div
        className={`fixed inset-0 z-55 hidden h-full w-full bg-black/50 transition-opacity duration-300 max-[1023px]:block ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden="true"
        onClick={closeMenu}
      />
      <div
        id="mobile-navigation"
        className={`fixed inset-y-0 left-0 z-60 hidden h-dvh w-full flex-col overflow-y-auto bg-(--ssc-uk-main-white-color) px-5 pb-8 font-jakarta shadow-xl transition-transform duration-300 max-w-95 max-[1023px]:flex ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobile navigation">
        <div className="flex min-h-18 shrink-0 items-center justify-between border-b border-slate-200">
          <Link href="/" aria-label="SS Consultants home" onClick={closeMenu}>
            <Image className="h-auto w-[185px]" src={logo} alt="SS Consultants UK Limited" />
          </Link>
          <button
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-highlight-color)"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-0 pt-6">
          <Link
            className={`border-b border-slate-200 py-5 text-lg font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isHomeActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
            href="/"
            aria-current={isHomeActive ? "page" : undefined}
            onClick={closeMenu}>
            Home
          </Link>
          <div className="border-b border-slate-200">
            <button
              className={`flex w-full items-center justify-between py-5 text-left text-lg font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isServicesActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
              type="button"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((open) => !open)}>
              Services
              <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isServicesOpen ? "max-h-96 pb-3 opacity-100" : "max-h-0 opacity-0"}`}>
              {BOILER_SERVICES.map(({ label, slug }) => (
                <Link
                  className={`block py-2 pl-3 text-base transition-colors hover:text-(--ssc-uk-main-highlight-color) ${pathname === `/services/${slug}` ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-600"}`}
                  href={`/services/${slug}`}
                  key={slug}
                  onClick={closeMenu}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            className={`border-b border-slate-200 py-5 text-lg font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isAboutActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
            href="/about"
            aria-current={isAboutActive ? "page" : undefined}
            onClick={closeMenu}>
            About
          </Link>
          <Link
            className={`border-b border-slate-200 py-5 text-lg font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isGalleryActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
            href="/gallery"
            aria-current={isGalleryActive ? "page" : undefined}
            onClick={closeMenu}>
            Gallery
          </Link>
          <Link
            className={`border-b border-slate-200 py-5 text-lg font-medium transition-colors hover:text-(--ssc-uk-main-highlight-color) ${isContactActive ? "text-(--ssc-uk-main-highlight-color)" : "text-slate-950"}`}
            href="/contact"
            aria-current={isContactActive ? "page" : undefined}
            onClick={closeMenu}>
            Contact
          </Link>
        </div>
        <CTAButton
          btnStyle="CTA_SECONDARY"
          theme="LIGHT"
          className="mt-7 w-full justify-center"
          href="tel:07590514937"
          onClick={closeMenu}>
          <span className="flex items-center gap-3">
            <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.4} />
            <span>07590 514937</span>
          </span>
        </CTAButton>
        <CTAButton
          btnStyle="CTA_PRIMARY"
          className="mt-3 w-full justify-center"
          href="#contact"
          onClick={closeMenu}>
          Get a Quote
        </CTAButton>
      </div>
    </>
  );
}
