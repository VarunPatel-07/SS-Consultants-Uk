import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { SERVICE_PAGE_DATA } from "@/content/pageContent/pageData/service";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

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
        <Link
          className="group inline-flex min-h-12 items-center justify-between gap-8 rounded-full border border-(--ssc-uk-border-color) px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-service-card-hover-background-color)"
          href={href}
          key={href}>
          <span>{label}</span>
          <span className="text-base leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function SitemapPage() {
  return (
    <>
      <section className={twMerge("bg-background font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}>
        <div className="w-full py-12">
          <div className="ss-construction-uk-container" aria-labelledby="sitemap-title">
            <div className="max-w-3xl">
              <h1
                id="sitemap-title"
                className=" font-bold leading-[1.04] tracking-[-0.05em] text-foreground text-[35px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px]">
                Explore the full
                <br />
                <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">
                  SS Consultants site.
                </em>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-(--ssc-uk-muted-color) sm:text-lg">
                Every page on the SS Consultants site, in one place - company pages, service pages and everything in
                between, so you can find exactly what you&apos;re looking for.
              </p>
            </div>

            <div className="mt-16 space-y-14 sm:mt-20 sm:space-y-20">
              <div aria-labelledby="company-pages-title">
                <h2 id="company-pages-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Company Pages
                </h2>
                <div className="mt-7">
                  <SitemapLinks links={companyPages} />
                </div>
              </div>

              <div aria-labelledby="services-pages-title">
                <h2 id="services-pages-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Services Pages
                </h2>
                <div className="mt-7">
                  <SitemapLinks
                    links={SERVICE_PAGE_DATA.flatMap(({ serviceHeroSection }) => serviceHeroSection ? [{ label: serviceHeroSection.label, slug: serviceHeroSection.slug }] : []).map(({ label, slug }) => ({ label, href: `/services/${slug}` }))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ConsultationSection />
    </>
  );
}
