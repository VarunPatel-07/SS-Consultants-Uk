"use client";

import CTAButton from "@/components/ui/ctaButton";
import { BOILER_OPTIONS } from "@/utils/constants/boiler.constants";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export function BoilerOptionsSection() {
  return (
    <section className="overflow-hidden bg-(--ssc-uk-main-white-color) py-[35px] sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta" aria-labelledby="boiler-options-title">
      <div className="ss-construction-uk-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="boiler-options-title"
            className="ssc-section-title">
            Boilers chosen for
            <br />
            <em className="ssc-section-title-highlight">the way you live.</em>
          </h2>
          <p className="ssc-section-description mt-5">
            Reliable, efficient systems selected around your home, hot-water needs and budget.
          </p>
        </div>

        <Swiper
          className="boiler-swiper mt-10 !overflow-visible"
          spaceBetween={20}
          slidesPerView={1.08}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}>
          {BOILER_OPTIONS.map(({ name, image, tagline, description, features, popularChoice }) => (
            <SwiperSlide className="!h-auto" key={name}>
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
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">{name}</h3>
                  <p className="mt-1 font-lora text-lg italic text-(--ssc-uk-main-highlight-color)">{tagline}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-700">
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

        <div className="mt-10 text-center">
          <h3 className="text-lg lg:text-2xl font-bold tracking-tight text-slate-950">Not sure which boiler suits your home?</h3>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            We&apos;ll assess your property and recommend the right system without pressure.
          </p>
          <CTAButton btnStyle="CTA_PRIMARY" className="mx-auto mt-5 max-w-fit" href="#contact">
            Get a Free Quote
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
