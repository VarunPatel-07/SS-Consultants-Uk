"use client";
import { OurServicesSectionInterface } from "@/app/utils/interface/data.interface";
import CommonSectionHeader from "@/components/sections/common/common-section-header";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
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
          {data?.items.map(({ slug, title, description, image, imageAlt }) => (
            <div key={title} className="reveal-animation">
              <a
                className="block overflow-hidden rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) transition-shadow hover:shadow-md md:rounded-xl lg:rounded-2xl transition-all hover:bg-(--ssc-uk-service-card-hover-background-color)"
                href={`/services/${slug}`}>
                <div className="m-2.5 overflow-hidden rounded-lg bg-slate-100 md:rounded-xl lg:rounded-2xl">
                  <Image
                    className="h-49.5 w-full object-cover transition-transform duration-500 hover:scale-105"
                    src={image}
                    alt={imageAlt}
                  />
                </div>
                <div className="flex flex-row items-center justify-center px-2.5 pb-5 pt-3 sm:px-4">
                  <div>
                    <h3 className="text-lg xl:text-xl font-bold leading-tight tracking-tight text-slate-950 font-jakarta">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-7 text-slate-600 font-jakarta">{description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
