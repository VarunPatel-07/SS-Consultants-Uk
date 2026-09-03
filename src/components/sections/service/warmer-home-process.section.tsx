"use client";
import { ProcessSection } from "@/app/utils/interface/data.interface";
import CommonSectionHeader from "@/components/sections/common/common-section-header";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function WarmerHomeProcessSection({ data }: { data: ProcessSection }) {
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
      className={twMerge("bg-(--ssc-uk-gray-background-color) font-jakarta ", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="warmer-home-process-title">
      <div className="ss-construction-uk-container flex flex-col">
        <CommonSectionHeader data={data?.header} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data?.steps.map(({ number, title, description }, index) => {
            const isFinalStep = index === data?.steps.length - 1;

            return (
              <article
                className={`reveal-animation flex flex-col gap-6 rounded-lg border p-6 sm:p-7 md:rounded-xl lg:rounded-2xl ${
                  isFinalStep
                    ? "border-(--ssc-uk-main-highlight-color) text-slate-950"
                    : "border-slate-200 bg-(--ssc-uk-main-white-color)"
                }`}
                style={
                  isFinalStep
                    ? { backgroundColor: "color-mix(in srgb, var(--ssc-uk-main-highlight-color) 15%, transparent)" }
                    : undefined
                }
                key={number}>
                <span className="font-lora text-2xl md:text-4xl leading-none text-(--ssc-uk-main-highlight-color)">
                  {number}
                </span>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg lg:text-xl font-bold leading-tight text-slate-950">{title}</h3>
                  <p
                    className={`text-sm lg:text-base leading-6.5 ${isFinalStep ? "text-slate-900" : "text-slate-600"}`}>
                    {description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
