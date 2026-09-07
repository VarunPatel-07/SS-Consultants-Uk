"use client";
import { AboutSectionDataInterface } from "@/app/utils/interface/data.interface";
import aboutImage from "@/assets/images/webp/ss-consultant-about-us-section.webp";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { CalendarDays, MapPin, ShieldCheck, Umbrella } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const ABOUT_FEATURE_ICONS = { shield: ShieldCheck, umbrella: Umbrella, calendar: CalendarDays, map: MapPin };

export function AboutHeroSection({ data }: { data: AboutSectionDataInterface }) {
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

      //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom top",
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      id="about"
      className={twMerge("bg-(--ssc-uk-surface-color)", COMMON_SECTION_PADDING_TOP_BOTTOM, COMMON_BORDER_RADIUS)}
      aria-labelledby="about-title">
      <div className="ss-construction-uk-container grid items-stretch gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20 pt-23! xl:pt-18!">
        <div className="relative overflow-visible">
          <div className={twMerge("overflow-hidden bg-(--ssc-uk-surface-color)", COMMON_BORDER_RADIUS)}>
            <Image
              className="why-choose-us-reveal aspect-square h-full w-full object-cover object-center reveal-animation"
              src={aboutImage}
              width={900}
              height={900}
              alt="Heating engineer working on a boiler system"
            />
          </div>
          {data.badge && (
            <div
              className={twMerge(
                "why-choose-us-reveal absolute bottom-6 left-4 w-52 border border-(--ssc-uk-border-color) bg-(--ssc-uk-surface-color) px-6 py-6 shadow-sm lg:-left-7 reveal-animation",
                COMMON_BORDER_RADIUS,
              )}>
              <strong className="block text-4xl font-bold leading-none text-(--ssc-uk-main-highlight-color) sm:text-5xl">
                <RichText content={data.badge.title} commonChunkClassNames="reveal-text-animation" />
              </strong>
              <span className="mt-3 block text-base text-(--ssc-uk-muted-color)">
                <RichText content={data.badge.description} commonChunkClassNames="reveal-text-animation" />
              </span>
            </div>
          )}
        </div>

        <div className="h-full flex flex-col items-start justify-center gap-7 lg:gap-9 xl:gap-10">
          <h2 id="about-title" className="ssc-section-title font-jakarta">
            <RichText
              content={data?.header?.title}
              className="items-start! justify-start!"
              commonChunkClassNames="reveal-text-animation"
            />
          </h2>
          {data?.header?.description && (
            <div className="">
              <p className="leading-8 lg:leading-9 text-foreground/90 text-lg text-pretty font-jakarta space-y-3.5">
                <RichText
                  content={data?.header?.description}
                  parentWrapper="gap-3!"
                  commonChunkClassNames="reveal-text-animation"
                />
              </p>
            </div>
          )}

          {data?.cards && (
            <div
              className={twMerge(
                "grid w-full overflow-hidden border border-(--ssc-uk-border-color) sm:grid-cols-2",
                COMMON_BORDER_RADIUS,
              )}>
              {data?.cards?.map(({ title, description, icon }, index) => {
                const Icon = ABOUT_FEATURE_ICONS[icon];

                return (
                  <div
                    className={`flex items-center gap-4 border-(--ssc-uk-border-color) px-5 py-5 reveal-text-animation ${index > 0 ? "max-sm:border-t" : ""} ${index % 2 === 1 ? "sm:border-l" : ""} ${index >= 2 ? "sm:border-t" : ""}`}
                    key={title}>
                    <Icon
                      aria-hidden="true"
                      className="h-10 w-10 shrink-0 text-(--ssc-uk-main-highlight-color)"
                      strokeWidth={1.7}
                    />
                    <div>
                      <strong className="block text-sm font-bold text-white sm:text-base font-jakarta">{title}</strong>
                      <span className="mt-1 block text-xs text-(--ssc-uk-muted-color) sm:text-sm font-jakarta">
                        {description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {data?.cta && (
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              {data?.cta?.map(({ href, label, variant, theme }) => (
                <CTAButton btnStyle={variant} href={href} key={label} theme={theme} className="reveal-text-animation">
                  {label}
                </CTAButton>
              ))}
            </div>
          )}
          {data.reassurance && (
            <RichText
              content={data.reassurance}
              commonChunkClassNames="reveal-text-animation"
              parentWrapper="!gap-2"
              className="text-foreground/90 text-base font-medium leading-7 font-jakarta"
            />
          )}
        </div>
      </div>
    </section>
  );
}
