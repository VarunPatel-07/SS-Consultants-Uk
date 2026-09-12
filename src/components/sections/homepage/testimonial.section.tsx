"use client";

import { RichText } from "@/components/common/RichText";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { TestimonialSectionInterface } from "@/utils/interface/data.interface";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

export function TestimonialSection({ data }: { data: TestimonialSectionInterface }) {
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
      className={twMerge("overflow-hidden bg-background font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
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
          <div className="flex shrink-0 justify-end gap-3 self-end">
            <button
              className="testimonials-prev inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-(--ssc-uk-main-white-color) border-(--ssc-uk-main-white-color) text-(--ssc-uk-main-black-color) transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-cta-button-background) hover:text-(--ssc-uk-main-white-color) disabled:cursor-not-allowed disabled:border-(--ssc-uk-border-color) disabled:bg-(--ssc-uk-surface-color) disabled:text-(--ssc-uk-muted-color) disabled:opacity-70 reveal-text-animation"
              type="button"
              disabled={isBeginning}
              aria-label="Previous testimonial">
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              className="testimonials-next inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-(--ssc-uk-main-white-color) border-(--ssc-uk-main-white-color) text-(--ssc-uk-main-black-color) transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-cta-button-background) hover:text-(--ssc-uk-main-white-color) disabled:cursor-not-allowed disabled:border-(--ssc-uk-border-color) disabled:bg-(--ssc-uk-surface-color) disabled:text-(--ssc-uk-muted-color) disabled:opacity-70 reveal-text-animation"
              type="button"
              disabled={isEnd}
              aria-label="Next testimonial">
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {data.reviewSummary && (
          <div className="mt-8 rounded-xl border border-(--ssc-uk-main-highlight-color) bg-(--ssc-uk-surface-color) p-6">
            <p className="text-xl font-bold text-foreground">Rated {data.reviewSummary.rating}/5 by local homeowners</p>
            <p className="mt-2 text-sm text-(--ssc-uk-muted-color)">
              Google rating • {data.reviewSummary.count} reviews •{" "}
              <a
                href={data.reviewSummary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-(--ssc-uk-main-highlight-color) underline underline-offset-4">
                Read all reviews
              </a>
            </p>
          </div>
        )}
        <Swiper
          className="mt-10 !overflow-visible"
          modules={[Navigation]}
          navigation={{ prevEl: ".testimonials-prev", nextEl: ".testimonials-next" }}
          onSwiper={updateNavigationState}
          onSlideChange={updateNavigationState}
          spaceBetween={20}
          slidesPerView={1.08}
          breakpoints={{
            640: { slidesPerView: 1.25, spaceBetween: 24 },
            1024: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 2.5, spaceBetween: 24 },
          }}>
          {data.items.map(({ quote, name, location, service, date, rating = 5, designation }) => (
            <SwiperSlide className="!h-auto reveal-animation" key={name}>
              <article className="flex h-full flex-col rounded-2xl border border-(--ssc-uk-border-color) bg-background p-6 shadow-[0_2px_4px_rgba(255,255,255,0.06)] sm:p-7">
                <div className="w-full h-full flex flex-col items-start justify-between gap-5">
                  <div className="w-full">
                    <div
                      className="flex gap-1 text-(--ssc-uk-main-highlight-color)"
                      aria-label={`${rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          aria-hidden="true"
                          className={`h-5 w-5 ${index < rating ? "fill-current" : "opacity-30"}`}
                          key={index}
                        />
                      ))}
                    </div>
                    <p className="mt-7 text-left text-lg lg:text-xl leading-8 text-foreground">{quote}</p>
                  </div>
                  <div className="w-full flex items-center gap-4 border-t border-(--ssc-uk-border-color) pt-5">
                    <div className="text-left">
                      <strong className="block text-base font-bold text-foreground">{name}</strong>
                      {(designation || location || service || date) && (
                        <span className="mt-1 block text-sm text-(--ssc-uk-muted-color)">
                          {designation || [location, service].filter(Boolean).join(" · ")}
                          {date && (
                            <>
                              {" "}
                              · <time dateTime={date}>{date}</time>
                            </>
                          )}
                        </span>
                      )}
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
