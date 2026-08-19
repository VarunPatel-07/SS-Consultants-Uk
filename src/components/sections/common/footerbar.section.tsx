import logo from "@/assets/images/logo/ss-consultants-logo-black-trasperent.png";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/boiler-installation" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Boiler Installation", href: "/services/boiler-installation" },
  { label: "Boiler Servicing", href: "/services/boiler-servicing" },
  { label: "Underfloor Heating", href: "/services/underfloor-heating" },
  { label: "Central Heating", href: "/services/central-heating" },
  { label: "Boiler Repairs", href: "/services/boiler-breakdown-repairs" },
];

export function FooterBarSection() {
  return (
    <footer
      className="overflow-hidden px-4 pt-14 font-jakarta text-slate-300 sm:px-8 sm:pt-20"
      style={{ backgroundColor: "var(--ssc-uk-consultation-section-background-color)" }}>
      <div className="ss-construction-uk-container">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.9fr_1.15fr_1.2fr] lg:gap-14">
          <div>
            <Link className="inline-block" href="/" aria-label="SS Consultants home">
              <Image className="h-auto w-60 brightness-0 invert sm:w-68" src={logo} alt="SS Consultants UK Limited" />
            </Link>
            <p className="mt-7 max-w-md text-base leading-7">
              Professional boiler installation, servicing and heating solutions delivered with clear advice, careful workmanship and dependable support.
            </p>

            <div className="mt-9 flex gap-12 border-t border-slate-700 pt-8 text-base">
              <span className="group inline-flex items-center gap-4" aria-label="Facebook">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color) transition-colors group-hover:bg-(--ssc-uk-main-highlight-color) group-hover:text-(--ssc-uk-main-white-color)">
                  <FacebookIcon />
                </span>
              </span>
              <span className="group inline-flex items-center gap-4" aria-label="Instagram">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color) transition-colors group-hover:bg-(--ssc-uk-main-highlight-color) group-hover:text-(--ssc-uk-main-white-color)">
                  <InstagramIcon />
                </span>
              </span>
            </div>
          </div>

          <FooterLinkColumn title="Navigation" links={navigationLinks} />

          <div>
            <h2 className="text-2xl font-bold text-slate-100">Services</h2>
            <div className="mt-5 h-1 w-12 bg-(--ssc-uk-main-highlight-color)" />
            <ul className="mt-5">
              {serviceLinks.map(({ label, href }) => (
                <li className="border-b border-slate-700 last:border-b-0" key={label}>
                  <a className="block py-4 text-base transition-colors hover:text-(--ssc-uk-main-highlight-color)" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-100">Contact</h2>
            <div className="mt-5 h-1 w-12 bg-(--ssc-uk-main-highlight-color)" />
            <div className="mt-6 space-y-7">
              <a className="flex items-center gap-5 text-base transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="tel:07590514937">
                <Phone className="h-6 w-6 shrink-0 text-(--ssc-uk-main-highlight-color)" />
                07590 514937
              </a>
              <a className="flex items-center gap-5 text-base transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="mailto:info@sscukltd.com">
                <Mail className="h-6 w-6 shrink-0 text-(--ssc-uk-main-highlight-color)" />
                info@sscukltd.com
              </a>
              <div className="flex items-center gap-5 text-base">
                <MapPin className="h-6 w-6 shrink-0 text-(--ssc-uk-main-highlight-color)" />
                Hatfield, Hertfordshire &amp; London
              </div>
            </div>
            <p className="mt-9 border-t border-slate-700 pt-7 text-base text-(--ssc-uk-main-highlight-color)">
              Need urgent heating help? Call us directly.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-slate-700 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SS Consultants UK Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a className="transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/privacy-policy">Privacy Policy</a>
            <a className="border-l border-slate-600 pl-6 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/terms-and-conditions">Terms &amp; Conditions</a>
            <a className="border-l border-slate-600 pl-6 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/cookie-policy">Cookie Policy</a>
            <a className="border-l border-slate-600 pl-6 transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/sitemap">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.2c0-1 .3-1.7 1.8-1.7H17V2.4c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.8H7v3.5h3V22h3.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FooterLinkColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
      <div className="mt-5 h-1 w-12 bg-(--ssc-uk-main-highlight-color)" />
      <ul className="mt-5">
        {links.map(({ label, href }) => (
          <li className="border-b border-slate-700 last:border-b-0" key={label}>
            <a className="block py-4 text-base transition-colors hover:text-(--ssc-uk-main-highlight-color)" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
