"use client";
import { ExperienceSectionData } from "@/app/utils/interface/data.interface";
import CommonSectionHeader from "@/components/sections/common/common-section-header";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { BrandSet } from "@/utils/helper/homepage.helper";
import { useGSAP } from "@gsap/react";
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
        start: "top 90%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 100%",
        end: "bottom top",
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      className={twMerge("overflow-hidden bg-(--ssc-uk-main-white-color)", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="boiler-brands-title">
      <div className="ss-construction-uk-container">
        <CommonSectionHeader data={data?.header} />
      </div>

      <div className="boiler-brands-marquee" role="region" aria-label="Boiler manufacturers">
        <div className="boiler-brands-marquee-track">
          <BrandSet />
          <BrandSet hidden />
          <BrandSet hidden />
          <BrandSet hidden />
        </div>
      </div>
    </section>
  );
}
