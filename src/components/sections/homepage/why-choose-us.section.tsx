"use client";

import type { WhyChooseUsSectionData } from "@/app/utils/interface/data.interface";
import whyChooseUsImage from "@/assets/images/webp/why-choose-us.webp";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { CalendarDays, MapPin, ShieldCheck, UserRound, WalletCards } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const FEATURE_ICONS = [ShieldCheck, WalletCards, UserRound, ShieldCheck, CalendarDays, MapPin];

export function WhyChooseUsSection({ data }: { data: WhyChooseUsSectionData }) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = gsap.utils.toArray(".why-choose-us-reveal", containerRef.current);
      const animation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 90%",
      });
      gsap.fromTo(elements, animation.FROM, animation.TO);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className={twMerge("bg-[#020713]", COMMON_SECTION_PADDING_TOP_BOTTOM, COMMON_BORDER_RADIUS)}
      aria-labelledby="why-choose-us-title">
      <div className="ss-construction-uk-container grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20">
        <div className="relative overflow-visible">
          <div
            className={twMerge(
              "overflow-hidden border border-slate-500/60 bg-(--ssc-uk-main-white-color)",
              COMMON_BORDER_RADIUS,
            )}>
            <Image
              className="why-choose-us-reveal h-[430px] w-full object-cover object-center sm:h-[560px] lg:h-[680px]"
              src={whyChooseUsImage}
              alt="SS Consultants heating engineer beside a service van"
            />
          </div>
          <div
            className={twMerge(
              "why-choose-us-reveal absolute -bottom-5 left-4 w-48 border border-slate-200 bg-(--ssc-uk-main-white-color) px-7 py-6 shadow-sm sm:-left-5 sm:w-52 sm:px-8 sm:py-7",
              COMMON_BORDER_RADIUS,
            )}>
            <strong className="block text-4xl font-bold leading-none tracking-tight text-(--ssc-uk-main-highlight-color) sm:text-6xl">
              22+
            </strong>
            <span className="mt-3 block text-base leading-6 text-slate-700">
              Years of trusted
              <br />
              heating expertise
            </span>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <h2 id="why-choose-us-title" className="ssc-section-title max-w-[680px] text-white!">
            <RichText content={data.header.title} commonChunkClassNames="why-choose-us-reveal" parentWrapper="gap-0!" />
          </h2>
          <p className="ssc-section-description mt-7 max-w-[650px] text-slate-200!">
            {data.header.description && (
              <RichText content={data.header.description} commonChunkClassNames="why-choose-us-reveal" />
            )}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.items.map(({ title, description }, index) => {
              const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];

              return (
                <article
                  className={twMerge(
                    "why-choose-us-reveal border border-slate-500 bg-transparent p-5 sm:p-6 flex items-start gap-4",
                    COMMON_BORDER_RADIUS,
                  )}
                  key={title}>
                  <Icon
                    aria-hidden="true"
                    className="min-h-6 min-w-6 text-(--ssc-uk-main-highlight-color)"
                    strokeWidth={1.6}
                  />
                  <div className="-mt-2">
                    <h3 className=" text-base font-bold text-white sm:text-lg">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-slate-200">{description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="why-choose-us-reveal mt-7 flex flex-col gap-4 sm:flex-row">
            <CTAButton btnStyle="CTA_PRIMARY" href="#contact">
              Request a Free Quote
            </CTAButton>
            <CTAButton btnStyle="CTA_SECONDARY" theme="LIGHT" href="tel:07590514937">
              Call 07590 514937
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
