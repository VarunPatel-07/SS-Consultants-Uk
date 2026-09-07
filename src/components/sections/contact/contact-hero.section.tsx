"use client";
import HeroBgAbstract from "@/components/sections/common/heroBgAbstract";

import type { HeroSection as HeroSectionData } from "@/app/utils/interface/data.interface";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function ContactHeroSection({ data }: { data: HeroSectionData }) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <section
      ref={animationContainer}
      className={twMerge(
        "relative overflow-hidden bg-background px-4 font-jakarta sm:px-8",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="contact-hero-title">
      <HeroBgAbstract />
      <div className="w-full pt-25! pb-10 relative">
        <div className="ss-construction-uk-container text-center">
          <h1
            id="contact-hero-title"
            className=" text-[35px] font-bold leading-[1.04] tracking-[-0.045em] text-foreground sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px] font-jakarta">
            <RichText
              content={data.header.title}
              parentWrapper="items-center! justify-center!"
              commonChunkClassNames="reveal-animation"
            />
          </h1>
          {data.header.description && (
            <p className=" mx-auto mt-7 max-w-2xl text-lg leading-7 text-(--ssc-uk-muted-color) sm:text-xl sm:leading-8 font-jakarta">
              <RichText
                content={data.header.description}
                parentWrapper="items-center! justify-center!"
                commonChunkClassNames="reveal-animation"
              />
            </p>
          )}
          <div className=" mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {data.ctas?.map(({ label, href, variant }) => (
              <CTAButton
                key={label}
                className="reveal-animation"
                btnStyle={variant}
                theme={variant === "CTA_SECONDARY" ? "DARK" : undefined}
                href={href}>
                {label}
              </CTAButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
