"use client";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { AboutSectionDataInterface } from "@/utils/interface/data.interface";
import { useGSAP } from "@gsap/react";
import { CalendarDays, MapPin, ShieldCheck, Umbrella } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const ABOUT_FEATURE_ICONS = { shield: ShieldCheck, umbrella: Umbrella, calendar: CalendarDays, map: MapPin };

export function AboutSection({ data }: { data: AboutSectionDataInterface }) {
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
      <div
        className={twMerge(
          "ss-construction-uk-container grid items-stretch gap-10",
          data.image && "lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20",
        )}>
        {data.image && (
          <div className="relative overflow-visible">
            <div className={twMerge("overflow-hidden bg-(--ssc-uk-surface-color)", COMMON_BORDER_RADIUS)}>
              <Image
                className="why-choose-us-reveal aspect-square h-full w-full object-cover object-center reveal-animation"
                src={data.image.src}
                width={data.image.width || 900}
                height={data.image.height || 900}
                alt={data.image.alt}
                unoptimized={typeof data.image.src === "string" && /\.svg(?:\?|$)/i.test(data.image.src)}
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
        )}

        <div className="h-full flex flex-col items-start justify-center gap-7 lg:gap-9 xl:gap-10">
          <h2 id="about-title" className="mt-4 max-w-3xl ssc-section-title text-white!">
            <RichText
              content={data.header.title}
              commonChunkClassNames="reveal-text-animation"
              parentWrapper="!gap-0"
            />
          </h2>
          {data?.header?.description && (
            <p className="max-w-3xl space-y-3 ssc-section-description text-white!">
              <RichText
                content={data.header.description}
                commonChunkClassNames="reveal-text-animation"
                className="whitespace-pre-line"
              />
            </p>
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
              {data?.cta?.map(({ label, variant, ...cta }) => (
                <CTAButton btnStyle={variant} key={label} {...cta} className="reveal-text-animation">
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
              className="text-(--ssc-uk-muted-color) font-jakarta"
            />
          )}
        </div>
      </div>
    </section>
  );
}
