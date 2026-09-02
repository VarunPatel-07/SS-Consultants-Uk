"use client";
import type { HeroSection as HeroSectionData } from "@/app/utils/interface/data.interface";
import { CTAButton } from "@/components/common/CTAButton";
import { RichText } from "@/components/common/RichText";
import Image from "next/image";

import HeroBgAbstract from "@/components/sections/common/heroBgAbstract";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function HeroSection({ data }: { data: HeroSectionData }) {
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
      id="top"
      className={twMerge("bg-(--ssc-uk-main-white-color) relative overflow-hidden", COMMON_SECTION_PADDING_TOP_BOTTOM)}>
      <HeroBgAbstract />
      <div ref={animationContainer} className="ss-construction-uk-container pt-23! xl:pt-18!">
        <div className="w-full relative z-10 flex flex-col items-center text-center gap-9 md:gap-11 lg:gap-14">
          <div className="inline-flex items-center rounded-full border border-slate-400 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-slate-900 sm:text-sm reveal-animation font-jakarta">
            {data.eyebrow}
          </div>
          <h1 className="max-w-250  font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 text-[35px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px] flex flex-col gap-4 items-center justify-center font-jakarta">
            <RichText content={data.header.title} parentWrapper="items-center! justify-center!" />
          </h1>
          <p className="max-w-190 text-pretty leading-7 text-slate-700 text-base md:text-lg xl:text-xl font-jakarta">
            {data.header.description && <RichText content={data.header.description} />}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {data.ctas?.map((cta) => (
              <CTAButton key={cta.label} classNames="reveal-animation" {...cta} />
            ))}
          </div>
          <div
            id="services"
            className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-4 py-4 reveal-animation">
            {data.services?.map(({ label, icon }) => (
              <div className="flex items-center gap-4" key={label}>
                {icon && (
                  <Image
                    src={icon}
                    width={40}
                    height={40}
                    className="w-6.5 h-6.5 md:w-8.5 md:h-8.5 lg:h-10 lg:w-10 object-contain"
                    alt=""
                  />
                )}
                <a
                  className="transition-colors hover:text-(--ssc-uk-main-highlight-color) font-lora text-base md:text-lg lg:text-xl text-slate-950"
                  href="#contact">
                  {label}
                </a>
              </div>
            ))}
          </div>
          <div className="w-full relative aspect-1540/400 reveal-animation">
            {data.image && (
              <Image
                src={data.image.src}
                width={data.image.width}
                height={data.image.height}
                className="aspect-video object-cover object-center max-h-100 rounded-lg bg-slate-100 md:rounded-xl lg:rounded-2xl mx-auto"
                alt={data.image.alt}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
