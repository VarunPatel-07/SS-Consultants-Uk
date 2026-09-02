"use client";

import { BoilerOptionsSectionData } from "@/app/utils/interface/data.interface";
import CommonSectionHeader from "@/components/sections/common/common-section-header";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

export function BoilerOptionsSection({ data }: { data: BoilerOptionsSectionData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigationState = (swiper: { isBeginning: boolean; isEnd: boolean }) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 25%",
        end: "bottom top",
        // markers: true,
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
      aria-labelledby="boiler-options-title">
      <div className="ss-construction-uk-container">
        <CommonSectionHeader data={data?.header} />

        <div className="mb-5 flex justify-end gap-3 lg:hidden">
          <button
            className="boiler-options-prev inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-white-color) disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 disabled:opacity-70"
            type="button"
            disabled={isBeginning}
            aria-label="Previous boiler option">
            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            className="boiler-options-next inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-white-color) disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 disabled:opacity-70"
            type="button"
            disabled={isEnd}
            aria-label="Next boiler option">
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <Swiper
          className="boiler-swiper mt-3 !overflow-visible"
          modules={[Navigation]}
          navigation={{ prevEl: ".boiler-options-prev", nextEl: ".boiler-options-next" }}
          onSwiper={updateNavigationState}
          onSlideChange={updateNavigationState}
          spaceBetween={20}
          slidesPerView={1.08}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}>
          {data.brands.map(({ name, image, tagline, description, features, popularChoice }) => (
            <SwiperSlide className="!h-auto reveal-animation" key={name}>
              <article className="relative flex h-full flex-col rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) p-3 shadow-sm md:rounded-xl lg:rounded-2xl">
                {popularChoice && (
                  <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-tl-2xl rounded-tr-2xl bg-(--ssc-uk-main-highlight-color) px-8 py-2 text-sm font-semibold text-(--ssc-uk-main-white-color)">
                    Popular choice
                  </span>
                )}
                <div className="relative z-20 overflow-hidden rounded-lg bg-slate-100 md:rounded-xl lg:rounded-2xl">
                  <Image className="h-[220px] w-full object-cover object-center" src={image} alt={`${name} boiler`} />
                </div>
                <div className="flex flex-1 flex-col px-1 pb-2 pt-4">
                  <span className="mb-3 block h-1 w-7 rounded-full bg-(--ssc-uk-main-highlight-color)" />
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-950">{name}</h3>
                  <p className="mt-1 font-lora text-lg md:text-xl italic text-(--ssc-uk-main-highlight-color)">
                    {tagline}
                  </p>
                  <p className="mt-3 text-base md:text-lg leading-6 text-slate-600">{description}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm md:text-base text-slate-700">
                    {features.map((feature) => (
                      <li className="flex items-start gap-2" key={feature}>
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-(--ssc-uk-main-highlight-color)"
                          strokeWidth={2.4}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
