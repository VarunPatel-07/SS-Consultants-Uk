import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";
import { SERVICE_CONTENT } from "@/utils/constants/service.constants";
import Link from "next/link";

const companyPages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

function SitemapLinks({ links }: { links: Array<{ label: string; href: string }> }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ label, href }) => (
        <Link className="group inline-flex min-h-12 items-center justify-between gap-8 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-orange-50" href={href} key={href}>
          <span>{label}</span>
          <span className="text-base leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <NavbarSection />
      <main className="bg-(--ssc-uk-main-white-color) font-jakarta">
        <section className="ss-construction-uk-container py-16 sm:py-24 lg:py-32" aria-labelledby="sitemap-title">
          <div className="max-w-3xl">
            <h1 id="sitemap-title" className="text-[42px] font-bold leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-[58px]">
              Explore every <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">SS Consultants</em> page
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Browse the complete website structure, including company pages and all heating service pages.
            </p>
          </div>

          <div className="mt-16 space-y-14 sm:mt-20 sm:space-y-20">
            <section aria-labelledby="company-pages-title">
              <h2 id="company-pages-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Company Pages</h2>
              <div className="mt-7"><SitemapLinks links={companyPages} /></div>
            </section>

            <section aria-labelledby="services-pages-title">
              <h2 id="services-pages-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Services Pages</h2>
              <div className="mt-7"><SitemapLinks links={SERVICE_CONTENT.map(({ label, slug }) => ({ label, href: `/services/${slug}` }))} /></div>
            </section>
          </div>
        </section>
      </main>
      <ConsultationSection />
      <FooterBarSection />
    </>
  );
}
