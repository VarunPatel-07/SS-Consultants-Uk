"use client";
import { WhatOurServiceInclude } from "@/app/utils/interface/data.interface";
import CommonSectionHeader from "@/components/sections/common/common-section-header";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function InstallationIncludesSection({ data }: { data: WhatOurServiceInclude }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom top",
        stagger: 0.2,
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className={twMerge("bg-(--ssc-uk-main-white-color) font-jakarta ", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="installation-includes-title"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15, 23, 42, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.055) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}>
      <div className="ss-construction-uk-container flex flex-col">
        <CommonSectionHeader data={data?.header} />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data?.installationSteps?.map(({ number, title, description, tags, image }) => (
            <article
              className="reveal-animation overflow-hidden rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) md:rounded-xl lg:rounded-2xl"
              key={title}>
              <div className="m-1.5 overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
                <Image className="h-[150px] md:h-[200px] lg:h-[300px] w-full object-cover" src={image} alt={title} />
              </div>
              <div className="flex flex-col items-start justify-start lg:flex-row gap-5 px-6 pb-7 pt-5">
                <span className="shrink-0 font-lora text-2xl md:text-4xl leading-none text-(--ssc-uk-main-highlight-color)">
                  {number}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-4">
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-950">{title}</h3>
                  <p className="text-base leading-7 text-slate-600">{description}</p>
                  {/* <p className="mt-auto text-xs font-semibold tracking-[0.16em] text-slate-500">{tags}</p> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
