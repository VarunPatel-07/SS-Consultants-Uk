"use client";
import { ExperienceSectionData } from "@/app/utils/interface/data.interface";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { CircleHelp } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function ExperienceSection({ data }: { data: ExperienceSectionData }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom top",
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      className={twMerge(
        "overflow-hidden bg-(--ssc-uk-main-white-color) font-jakarta",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="boiler-brands-title">
      <div className="ss-construction-uk-container">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <div>
            <h2 id="boiler-brands-title" className="mt-5 max-w-3xl ssc-section-title">
              <RichText
                content={data.header.title}
                commonChunkClassNames="reveal-text-animation"
                parentWrapper="!gap-0"
                className="justify-start! "
              />
            </h2>
            <p className="mt-5 max-w-2xl ssc-section-description">
              <RichText
                content={data.header.description ?? []}
                commonChunkClassNames="reveal-text-animation"
                parentWrapper="!gap-0"
                className="justify-start!"
              />
            </p>
          </div>
          <div
            className={twMerge(
              "flex items-start gap-5 border border-(--ssc-uk-main-highlight-color) p-6",
              COMMON_BORDER_RADIUS,
            )}>
            <span className="h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-4xl font-bold text-(--ssc-uk-main-highlight-color) hidden md:inline-flex ">
              <CircleHelp aria-hidden="true" className="h-9 w-9" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-950">
                <RichText
                  content={data.callout.header.title}
                  commonChunkClassNames="reveal-text-animation"
                  parentWrapper="!gap-0"
                />
              </h3>
              <p className="mt-2 text-base leading-6 text-slate-700">
                <RichText
                  content={data.callout.header.description ?? []}
                  commonChunkClassNames="reveal-text-animation"
                  parentWrapper="!gap-0"
                />
              </p>
              <CTAButton
                btnStyle={data.callout.cta.variant}
                href={data.callout.cta.href}
                className="mt-4 w-fit reveal-text-animation">
                {data.callout.cta.label}
              </CTAButton>
            </div>
          </div>
        </div>

        <div
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          role="region"
          aria-label="Boiler manufacturers">
          {data.brands.slice(0, 6).map(({ name, logo, alt }) => (
            <div
              className={twMerge(
                "flex items-center justify-center border border-slate-200 bg-white p-5 reveal-animation",
                COMMON_BORDER_RADIUS,
              )}
              key={name}>
              <Image className="h-15 w-auto" src={logo} alt={alt} height={60} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
