"use client";
import { OUR_PROCESS_DATA } from "@/app/content/pageContent/ourProcess.data";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function WarmerHomeProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (!sectionRef.current) return;
    const animation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: sectionRef.current });
    gsap.fromTo(gsap.utils.toArray(".process-reveal", sectionRef.current), animation.FROM, animation.TO);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        "bg-(--ssc-uk-gray-background-color) px-4 font-jakarta sm:px-6",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="warmer-home-process-title">
      <div className="ss-construction-uk-container flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          <h2 id="warmer-home-process-title" className="process-reveal ssc-section-title">
            From assessment
            <br />
            <em className="ssc-section-title-highlight">to a warmer home.</em>
          </h2>
          <p className="process-reveal ssc-section-description">
            A clear four-step process explains what happens after you contact SS Consultants and keeps every stage
            straightforward.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {OUR_PROCESS_DATA.map(({ number, title, description, tags }, index) => {
            const isFinalStep = index === OUR_PROCESS_DATA.length - 1;

            return (
              <article
                className={`process-reveal flex flex-col gap-6 rounded-lg border p-6 sm:p-7 md:rounded-xl lg:rounded-2xl ${
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
                <span className="font-lora text-4xl leading-none text-(--ssc-uk-main-highlight-color)">{number}</span>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-medium leading-tight text-slate-950">{title}</h3>
                  <p className={`text-sm leading-6 ${isFinalStep ? "text-slate-900" : "text-slate-600"}`}>
                    {description}
                  </p>
                </div>
                <p
                  className={`mt-auto text-xs font-semibold tracking-[0.12em] ${isFinalStep ? "text-slate-800" : "text-slate-500"}`}>
                  {tags}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
