"use client";

import { TESTIMONIALS } from "@/utils/constants/testimonial.constants";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function TestimonialSection() {
  return (
    <section
      className="overflow-hidden bg-(--ssc-uk-main-white-color) py-16 font-jakarta sm:py-20"
      aria-labelledby="testimonial-title">
      <div className="ss-construction-uk-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 id="testimonial-title" className="ssc-section-title">
              Trusted in homes
              <br />
              <em className="ssc-section-title-highlight">across the community.</em>
            </h2>
            <p className="ssc-section-description mt-6 max-w-2xl">
              Homeowners choose SS Consultants for clear advice, careful workmanship and reliable support from the first
              visit to the final check.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              className="testimonials-prev inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-white-color)"
              type="button"
              aria-label="Previous testimonial">
              <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              className="testimonials-next inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-300 text-slate-950 transition-colors hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-main-highlight-color) hover:text-(--ssc-uk-main-white-color)"
              type="button"
              aria-label="Next testimonial">
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Swiper
          className="mt-10 !overflow-visible"
          modules={[Navigation]}
          navigation={{ prevEl: ".testimonials-prev", nextEl: ".testimonials-next" }}
          spaceBetween={20}
          slidesPerView={1.08}
          breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 24 }, 1024: { slidesPerView: 3, spaceBetween: 24 } }}>
          {TESTIMONIALS.map(({ quote, name, location, service }) => (
            <SwiperSlide className="!h-auto" key={name}>
              <article className="flex h-full min-h-[340px] flex-col rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) p-6 shadow-sm sm:p-7 md:rounded-xl lg:rounded-2xl">
                <div className="flex gap-1 text-(--ssc-uk-main-highlight-color)" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star aria-hidden="true" className="h-5 w-5 fill-current" key={index} />
                  ))}
                </div>
                <p className="mt-7 text-left text-lg leading-8 text-slate-900">{quote}</p>
                <div className="mt-auto flex items-center gap-4 border-t border-slate-200 pt-5">
                  <div className="text-left">
                    <strong className="block text-base font-bold text-slate-950">{name}</strong>
                    <span className="mt-1 block text-sm text-slate-600">
                      {location} · {service}
                    </span>
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
