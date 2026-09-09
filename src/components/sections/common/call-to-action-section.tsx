"use client";
import { CTAButton } from "@/components/common/CTAButton";
import { RichText } from "@/components/common/RichText";
import HeroBgAbstract from "@/components/sections/common/heroBgAbstract";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS } from "@/utils/constants/common.constants";
import { callToActionSectionInterface } from "@/utils/interfacedata.interface";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

function CallToActionSection({ data }: { data: callToActionSectionInterface }) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      if (animationContainer.current) {
        const elements = gsap.utils.toArray(".reveal-text-animation, .reveal-animation");
        const { FROM, TO } = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: animationContainer.current });
        gsap.fromTo(elements, FROM, TO);
      }
    },
    { scope: animationContainer },
  );

  return (
    <div className={twMerge("w-full")}>
      <div className="ss-construction-uk-container">
        <div
          className={twMerge(
            "w-full h-auto px-4 py-8 lg:py-13 md:px-8 lg:px-10  relative border border-(--ssc-uk-border-color) overflow-hidden flex flex-col items-center gap-10",
            COMMON_BORDER_RADIUS,
          )}>
          <HeroBgAbstract heroBackGroundGlow="opacity-70!" />
          <div
            ref={animationContainer}
            className="w-ful h-full relative z-20 flex flex-col items-center lg:max-w-4xl mx-auto justify-center">
            <div className="mx-auto max-w-4xl text-center">
              <h2 id="heating-support-title" className="ssc-section-title font-jakarta">
                <RichText
                  content={data?.header?.title}
                  parentWrapper="items-center!"
                  commonChunkClassNames="reveal-text-animation"
                />
              </h2>
              {data?.header?.description && (
                <p className="ssc-section-description mx-auto mt-5 max-w-3xl font-jakarta text-pretty">
                  <RichText content={data?.header?.description} commonChunkClassNames="reveal-text-animation" />
                </p>
              )}
            </div>

            <div className="w-full flex flex-col items-stretch justify-center gap-4 mx-auto pt-10 sm:flex-row sm:items-center sm:gap-6">
              {data?.ctas?.map((button) => (
                <CTAButton
                  key={button.label}
                  {...button}
                  classNames={twMerge(
                    button?.classNames,
                    "reveal-animation w-full min-w-0 max-w-full sm:w-auto sm:max-w-fit",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;
