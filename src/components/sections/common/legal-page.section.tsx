import Link from "next/link";

export function LegalPageSection({ title, description }: { title: string; description: string }) {
  return (
    <section className="ss-construction-uk-container min-h-[55vh] py-[35px] sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta" aria-labelledby="legal-page-title">
      <h1 id="legal-page-title" className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
      <Link className="mt-8 inline-block text-base font-semibold text-(--ssc-uk-main-highlight-color) hover:underline" href="/contact">
        Contact us about this policy →
      </Link>
    </section>
  );
}
