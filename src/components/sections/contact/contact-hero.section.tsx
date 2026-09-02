"use client";
import HeroBgAbstract from "@/components/sections/common/heroBgAbstract";

import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function ContactHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const animation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: sectionRef.current, start: "top 80%" });
      gsap.fromTo(gsap.utils.toArray(".contact-hero-reveal", sectionRef.current), animation.FROM, animation.TO);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        "relative overflow-hidden bg-(--ssc-uk-main-white-color) px-4 font-jakarta sm:px-8",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="contact-hero-title">
      <HeroBgAbstract />
      <div className="w-full pt-20 py-10 relative">
        <div className="ss-construction-uk-container text-center">
          <h1
            id="contact-hero-title"
            className="contact-hero-reveal text-[35px] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px] font-jakarta">
            Let&apos;s make your home
            <br />
            <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">comfortable.</em>
          </h1>
          <p className="contact-hero-reveal mx-auto mt-7 max-w-2xl text-lg leading-7 text-slate-700 sm:text-xl sm:leading-8 font-jakarta">
            Tell us what you need and we&apos;ll provide clear advice, careful workmanship and dependable heating
            support.
          </p>
          <div className="contact-hero-reveal mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton btnStyle="CTA_PRIMARY" href="#contact">
              Start a Conversation
            </CTAButton>
            <CTAButton btnStyle="CTA_SECONDARY" theme="DARK" href="tel:07590514937">
              Call 07590 514937
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
