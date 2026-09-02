"use client";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function LegalPageSection({ title, description }: { title: string; description: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (!sectionRef.current) return;
    const animation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: sectionRef.current, start: "top 90%" });
    gsap.fromTo(gsap.utils.toArray(".legal-reveal", sectionRef.current), animation.FROM, animation.TO);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={twMerge("ss-construction-uk-container min-h-[55vh] font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="legal-page-title">
      <div className="w-full py-12">
        <h1
          id="legal-page-title"
          className="legal-reveal text-[35px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px] font-bold tracking-tight text-slate-950">
          {title}
        </h1>
        <p className="legal-reveal mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
        <Link
          className="legal-reveal mt-8 inline-block text-base font-semibold text-(--ssc-uk-main-highlight-color) hover:underline"
          href="/contact">
          Contact us about this policy →
        </Link>
      </div>
    </section>
  );
}
