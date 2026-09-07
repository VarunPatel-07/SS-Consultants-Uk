"use client";
import type { ServiceHeroSectionInterface } from "@/app/utils/interface/data.interface";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function ServiceHeroSection({ service }: { service: ServiceHeroSectionInterface }) {
  const animationContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <section
      className={twMerge(
        "relative border-b border-(--ssc-uk-border-color) bg-(--ssc-uk-gray-background-color) font-jakarta overflow-hidden",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="service-title">
      <div className="w-full pt-23 lg:pt-18">
        <div
          ref={animationContainer}
          className="ss-construction-uk-container grid gap-10 lg:grid-cols-[0.98fr_1.02fr] md:items-center lg:gap-14">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-(--ssc-uk-border-color) px-4 py-2 text-xs font-semibold tracking-[0.08em] text-foreground sm:text-sm bg-background w-fit reveal-animation">
              <span className="h-3.5 w-3.5 rounded-full bg-(--ssc-uk-cta-button-background)" />
              {service.eyebrow}
            </div>
            <h1
              id="service-title"
              className="mt-9 max-w-157.5 font-bold leading-[1.04] tracking-[-0.045em] text-foreground text-[35px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px]">
              <RichText content={service.header.title} className="justify-start!" />
            </h1>
            <div className="ssc-section-description mt-7 max-w-130">
              <RichText content={service.header.description ?? []} parentWrapper="gap-0!" />
            </div>

            <div className="mt-9 flex gap-4 flex-wrap reveal-animation">
              <CTAButton btnStyle="CTA_PRIMARY" href="#contact" className="w-fit">
                {service.cta}
              </CTAButton>
              <CTAButton btnStyle="CTA_SECONDARY" theme="LIGHT" className="w-fit" href="tel:07590514937">
                Call 07590 514937
              </CTAButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 text-sm text-foreground/90 reveal-animation">
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
              className={twMerge(
                "h-auto max-h-100 w-full object-cover object-center lg:h-full lg:max-h-none aspect-square",
                COMMON_BORDER_RADIUS,
              )}
              src={service?.heroImage}
              alt={`Engineer carrying out ${service.label.toLowerCase()}`}
              priority
              width={650}
              height={650}
            />
            <div
              className={twMerge(
                "relative mt-4 w-full border border-(--ssc-uk-main-highlight-color)/40 bg-background p-5 shadow-xl sm:p-6 lg:absolute lg:bottom-10 lg:left-10 lg:mt-0 lg:w-[390px] lg:max-w-[calc(100%-2.5rem)] xl:-left-1/4",
                COMMON_BORDER_RADIUS,
              )}>
              <h2 className="text-xl font-bold text-foreground">Service options</h2>
              <div className="mt-4">
                {service.options.map(({ name, price }) => (
                  <div
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-(--ssc-uk-border-color) py-4 text-base last:border-b-0"
                    key={name}>
                    <span className="text-(--ssc-uk-muted-color)">{name}</span>
                    <strong className="shrink-0 text-lg font-bold text-foreground sm:text-xl">{price}</strong>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground/85">{service.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
