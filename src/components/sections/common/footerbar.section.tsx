"use client";

import logo from "@/assets/images/logo/ss-consultants-logo-iteration-2.png";
import { getPhoneHref, useSiteSettings } from "@/components/providers/site-settings-provider";
import type { NavigationLink } from "@/lib/payload/site-settings";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FooterBarSection() {
  const { email, navigation, phone } = useSiteSettings();
  const linkGroups = createFooterLinkGroups(navigation);

  return (
    <footer
      className="w-full bg-(--ssc-uk-main-black-color)! overflow-hidden  pt-10 font-jakarta text-foreground/85 sm:px-8 sm:pt-12"
      style={{ backgroundColor: "var(--ssc-uk-consultation-section-background-color)" }}>
      <div className="ss-construction-uk-container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link className="inline-block" href="/" aria-label="SS Consultants home">
              <Image className="h-auto w-68 max-w-full sm:w-76" src={logo} alt="SS Consultants UK Limited" />
            </Link>
            <p className="mt-5 max-w-md text-[17px] leading-7">
              Professional boiler installation, servicing and heating solutions delivered with clear advice, careful
              workmanship and dependable support.
            </p>

            <div className="mt-5 flex gap-6 border-t border-(--ssc-uk-border-color) pt-5 text-base">
              <span className="group inline-flex items-center gap-4" aria-label="Facebook">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color) transition-colors group-hover:bg-(--ssc-uk-cta-button-background) group-hover:text-(--ssc-uk-main-white-color)">
                  <FacebookIcon />
                </span>
              </span>
              <span className="group inline-flex items-center gap-4" aria-label="Instagram">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color) transition-colors group-hover:bg-(--ssc-uk-cta-button-background) group-hover:text-(--ssc-uk-main-white-color)">
                  <InstagramIcon />
                </span>
              </span>
            </div>
          </div>

          {linkGroups.map((group, index) => (
            <FooterLinkColumn title={group.title} links={group.links} key={`${group.title}-${index}`} />
          ))}

          <div>
            <h2 className="text-lg font-bold text-foreground">Contact</h2>
            <div className="mt-4 space-y-5">
              <a
                className="flex items-center gap-3 text-[17px] transition-colors hover:text-(--ssc-uk-main-highlight-color)"
                href={getPhoneHref(phone)}>
                <Phone className="h-6 w-6 shrink-0 text-(--ssc-uk-main-highlight-color)" />
                {phone}
              </a>
              <a
                className="flex items-center gap-3 text-[17px] transition-colors hover:text-(--ssc-uk-main-highlight-color)"
                href={`mailto:${email}`}>
                <Mail className="h-6 w-6 shrink-0 text-(--ssc-uk-main-highlight-color)" />
                {email}
              </a>
              <div className="flex items-center gap-3 text-[17px]">
                <MapPin className="h-6 w-6 shrink-0 text-(--ssc-uk-main-highlight-color)" />
                Hatfield, Hertfordshire &amp; London
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 border-t border-(--ssc-uk-border-color) py-6 text-base lg:flex-row lg:items-center lg:justify-between">
          <p className="text-center">© {new Date().getFullYear()} SS Consultants UK Ltd. All rights reserved.</p>
          <div className="grid w-full max-w-sm grid-cols-2 items-center gap-x-6 gap-y-3 text-center sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
            <a className="transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="/privacy-policy">
              Privacy Policy
            </a>
            <a
              className="sm:border-l sm:border-(--ssc-uk-border-color) sm:pl-6 transition-colors hover:text-(--ssc-uk-main-highlight-color)"
              href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>
            <a
              className="sm:border-l sm:border-(--ssc-uk-border-color) sm:pl-6 transition-colors hover:text-(--ssc-uk-main-highlight-color)"
              href="/cookie-policy">
              Cookie Policy
            </a>
            <a
              className="sm:border-l sm:border-(--ssc-uk-border-color) sm:pl-6 transition-colors hover:text-(--ssc-uk-main-highlight-color)"
              href="/sitemap">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkGroup = {
  title: string;
  links: NavigationLink[];
};

function createFooterLinkGroups(navigation: NavigationLink[]): FooterLinkGroup[] {
  const groups: FooterLinkGroup[] = [];
  const topLevelLinks = navigation.filter((item) => !item.children?.length);

  if (topLevelLinks.length) groups.push({ title: "Navigation", links: topLevelLinks });

  const addChildGroups = (items: NavigationLink[]) => {
    items.forEach((item) => {
      if (!item.children?.length) return;

      const directLinks = item.children.filter((child) => !child.children?.length);
      if (directLinks.length) groups.push({ title: item.label, links: directLinks });
      addChildGroups(item.children);
    });
  };

  addChildGroups(navigation);
  return groups;
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

function FooterLinkColumn({ title, links }: { title: string; links: ReadonlyArray<NavigationLink> }) {
  return (
    <div>
      <details className="group lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-foreground [&::-webkit-details-marker]:hidden">
          {title}
          <ChevronDown aria-hidden="true" className="h-5 w-5 transition-transform group-open:rotate-180" />
        </summary>

        <ul className="mt-5">
          {links.map(({ label, href, openInNewTab }) => (
            <li className="border-b border-(--ssc-uk-border-color) last:border-b-0" key={label}>
              <a
                className="block py-3 text-[17px] transition-colors hover:text-(--ssc-uk-main-highlight-color)"
                href={href}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                target={openInNewTab ? "_blank" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </details>

      <div className="hidden lg:block">
        <h2 className="text-lg font-bold text-foreground">{title}</h2>

        <ul className="mt-5">
          {links.map(({ label, href, openInNewTab }) => (
            <li className="w-fit" key={label}>
              <a
                className="block py-2 text-[17px] transition-colors hover:text-(--ssc-uk-main-highlight-color)"
                href={href}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                target={openInNewTab ? "_blank" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
