"use client";
import { heatingSolutionDesignForYouDataInterface } from "@/app/utils/interface/data.interface";
import CommonSectionHeader from "@/components/sections/common/common-section-header";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, SERVICE_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function HeatingDesignedSection({ data }: { data: heatingSolutionDesignForYouDataInterface }) {
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
      className={twMerge("bg-background font-jakarta ", SERVICE_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="heating-designed-title">
      <div className="ss-construction-uk-container flex flex-col">
        <CommonSectionHeader data={data?.header} />

        <div className="grid gap-7 md:grid-cols-2">
          {data?.specifications?.map(({ title, description }) => (
            <article
              className={twMerge(
                "reveal-animation flex h-full flex-col border border-(--ssc-uk-main-highlight-color)/40 bg-background p-6 shadow-sm sm:p-7 gap-5",
                COMMON_BORDER_RADIUS,
              )}
              key={title}>
              <CheckCircle2 aria-hidden="true" className="h-7 w-7 text-(--ssc-uk-main-highlight-color)" />
              <h3 className="text-lg md:text-xl xl:text-2xl font-semibold leading-tight text-foreground">{title}</h3>
              <p className="text-sm md:text-base leading-6 text-(--ssc-uk-muted-color) text-pretty">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
