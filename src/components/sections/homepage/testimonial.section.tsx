"use client";

import type { TestimonialSection } from "@/app/utils/interface/data.interface";
import { RichText } from "@/components/common/RichText";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

export function TestimonialSection({ data }: { data: TestimonialSection }) {
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
      aria-labelledby="testimonial-title">
      <div className="ss-construction-uk-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 id="testimonial-title" className="ssc-section-title">
              <RichText content={data.header.title} commonChunkClassNames="reveal-text-animation" />
            </h2>
            <p className="ssc-section-description mt-6 max-w-2xl">
              {data.header.description && (
                <RichText content={data.header.description} commonChunkClassNames="reveal-text-animation" />
              )}
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              className="testimonials-prev inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-white-color) disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 disabled:opacity-70 reveal-text-animation"
              type="button"
              disabled={isBeginning}
              aria-label="Previous testimonial">
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              className="testimonials-next inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-white-color) disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-300 disabled:opacity-70 reveal-text-animation"
              type="button"
              disabled={isEnd}
              aria-label="Next testimonial">
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          className="mt-10 !overflow-visible"
          modules={[Navigation]}
          navigation={{ prevEl: ".testimonials-prev", nextEl: ".testimonials-next" }}
          onSwiper={updateNavigationState}
          onSlideChange={updateNavigationState}
          spaceBetween={20}
          slidesPerView={1.08}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 2.05, spaceBetween: 24 },
            1200: { slidesPerView: 2.5, spaceBetween: 24 },
          }}>
          {data.items.map(({ quote, name, location, service }) => (
            <SwiperSlide className="!h-auto reveal-animation" key={name}>
              <article className="flex h-full  flex-col rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) p-6 shadow-sm sm:p-7 md:rounded-xl lg:rounded-2xl">
                <div className="w-full h-full flex flex-col items-start justify-between gap-5">
                  <div className="w-full">
                    <div className="flex gap-1 text-(--ssc-uk-main-highlight-color)" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star aria-hidden="true" className="h-5 w-5 fill-current" key={index} />
                      ))}
                    </div>
                    <p className="mt-7 text-left text-base md:text-lg leading-6 md:leading-8 text-slate-900">{quote}</p>
                  </div>
                  <div className="w-full flex items-center gap-4 border-t border-slate-200 pt-5">
                    <div className="text-left">
                      <strong className="block text-base font-bold text-slate-950">{name}</strong>
                      <span className="mt-1 block text-sm text-slate-600">
                        {location} · {service}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
