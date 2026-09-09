"use client";
import CommonSectionHeader from "@/components/sections/common/common-section-header";
import CtaServiceButton from "@/components/ui/ctaServiceBtn";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { OurServicesSectionInterface } from "@/utils/interfacedata.interface";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function OurServiceSection({ data }: { data: OurServicesSectionInterface }) {
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
        start: "top 60%",
        end: "bottom top",
        markers: false,
        stagger: 0.2,
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      id="heating-services"
      className={twMerge("bg-(--ssc-uk-gray-background-color)", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="heating-support-title">
      <div className="ss-construction-uk-container">
        <CommonSectionHeader data={data?.header} />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data?.items.map(({ slug, title, description, image, imageAlt, ctaLabel, badge }) => (
            <div key={title} className="reveal-animation">
              <article
                className={twMerge(
                  "flex h-full flex-col overflow-hidden border border-(--ssc-uk-border-color) bg-background transition-shadow hover:shadow-md",
                  COMMON_BORDER_RADIUS,
                )}>
                <div
                  className={twMerge(
                    "relative m-2.5 shrink-0 overflow-hidden bg-(--ssc-uk-surface-color)",
                    "rounded-lg md:rounded-xl lg:rounded-2xl",
                  )}>
                  <Image
                    className="h-49.5 w-full object-cover transition-transform duration-500 hover:scale-105"
                    src={image}
                    alt={imageAlt}
                  />
                  {badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-(--ssc-uk-cta-button-background) px-4 py-2 text-xs font-bold uppercase text-white font-jakarta">
                      {badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-2.5 pb-5 pt-3 sm:px-4">
                  <div className="flex flex-1 flex-col">
                    <h3 className="text-lg xl:text-xl font-bold leading-tight tracking-tight text-foreground font-jakarta">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-7 text-foreground/85 font-jakarta">{description}</p>
                    <div className="mt-auto pt-5">
                      <CtaServiceButton
                        label={ctaLabel ?? `View ${title}`}
                        href={`/services/${slug}`}
                        className="w-fit"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
