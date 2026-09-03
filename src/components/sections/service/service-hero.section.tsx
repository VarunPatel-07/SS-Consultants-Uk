"use client";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import type { ServiceHeroSectionInterface } from "@/app/utils/interface/data.interface";
import { RichText } from "@/components/common/RichText";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function ServiceHeroSection({ service }: { service: ServiceHeroSectionInterface }) {
  const animationContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-animation");
    gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
  }, { scope: animationContainer });

  return (
    <section
      className={twMerge(
        "relative border-b border-slate-100 bg-(--ssc-uk-gray-background-color) font-jakarta overflow-hidden",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="service-title">
      <div className="w-full pt-23 lg:pt-18">
        <div ref={animationContainer} className="ss-construction-uk-container grid gap-10 lg:grid-cols-[0.98fr_1.02fr] md:items-center lg:gap-14">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-400 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-slate-900 sm:text-sm bg-(--ssc-uk-main-white-color) w-fit reveal-animation">
              <span className="h-3.5 w-3.5 rounded-full bg-(--ssc-uk-main-highlight-color)" />
              {service.eyebrow}
            </div>
            <h1
              id="service-title"
              className="mt-9 max-w-157.5 font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 text-[35px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px]">
              <RichText content={service.header.title} className="justify-start!" />
            </h1>
            <div className="ssc-section-description mt-7 max-w-130">
              <RichText content={service.header.description ?? []} parentWrapper="gap-0!" />
            </div>

            <div className="mt-9 flex gap-4 flex-wrap reveal-animation">
              <CTAButton btnStyle="CTA_PRIMARY" href="/#contact" className="w-fit">
                Request a Free Quote
              </CTAButton>
              <CTAButton btnStyle="CTA_SECONDARY" theme="DARK" className="w-fit" href="tel:07590514937">
                Call 07590 514937
              </CTAButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-700 reveal-animation">
              {service.reassurance.map((item) => (
                <span className="inline-flex items-center gap-2" key={item}>
                  <CheckCircle2 className="h-4 w-4 text-(--ssc-uk-main-highlight-color)" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 xl:w-full xl:justify-self-end reveal-animation">
            <Image
              className="h-full max-h-100 w-full object-cover object-center lg:max-h-none aspect-square rounded-lg md:rounded-xl lg:rounded-2xl"
              src={service?.heroImage}
              alt="Heating engineer installing a boiler"
              priority
              width={650}
              height={650}
            />
            <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] rounded-lg bg-(--ssc-uk-main-white-color) p-5 shadow-xl sm:bottom-10 sm:left-10 sm:right-auto sm:w-[360px] sm:max-w-none sm:p-6 md:rounded-xl lg:rounded-2xl xl:-left-1/4">
              <h2 className="text-xl font-bold text-slate-950">Service options</h2>
              <div className="mt-4">
                {service.options.map(({ name, price }) => (
                  <div
                    className="flex items-center justify-between gap-4 border-b border-slate-200 py-4 text-sm last:border-b-0"
                    key={name}>
                    <span className="text-slate-700">{name}</span>
                    <strong className="text-slate-950">{price}</strong>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">{service.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
