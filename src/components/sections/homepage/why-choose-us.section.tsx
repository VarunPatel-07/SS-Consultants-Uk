"use client";

import type { WhyChooseUsSectionData } from "@/app/utils/interface/data.interface";
import whyChooseUsImage from "@/assets/images/webp/why-choose-us.webp";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
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
      className={twMerge("bg-(--ssc-uk-gray-background-color)", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="why-choose-us-title">
      <div className="ss-construction-uk-container grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 xl:gap-20">
        <div className="relative overflow-visible">
          <div className="overflow-hidden rounded-lg border border-(--ssc-uk-main-highlight-color)/30 bg-(--ssc-uk-main-white-color) md:rounded-xl lg:rounded-2xl">
            <Image
              className="why-choose-us-reveal h-[430px] w-full object-cover object-center sm:h-[560px] lg:h-[680px]"
              src={whyChooseUsImage}
              alt="SS Consultants heating engineer beside a service van"
            />
          </div>
          <div className="why-choose-us-reveal absolute -bottom-5 left-4 w-48 rounded-2xl border border-slate-200 bg-(--ssc-uk-main-white-color) px-7 py-6 shadow-sm sm:-left-5 sm:w-52 sm:px-8 sm:py-7">
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
          <h2 id="why-choose-us-title" className="ssc-section-title max-w-[680px] text-slate-950!">
            <RichText content={data.header.title} commonChunkClassNames="why-choose-us-reveal" parentWrapper="gap-0!" />
          </h2>
          <p className="ssc-section-description mt-7 max-w-[650px] text-slate-700!">
            {data.header.description && (
              <RichText content={data.header.description} commonChunkClassNames="why-choose-us-reveal" />
            )}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.items.map(({ title, description }, index) => {
              const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];

              return (
                <article
                  className="why-choose-us-reveal rounded-xl border border-slate-200 bg-(--ssc-uk-main-white-color) p-5 sm:p-6"
                  key={title}>
                  <Icon
                    aria-hidden="true"
                    className="h-10 w-10 text-(--ssc-uk-main-highlight-color)"
                    strokeWidth={1.6}
                  />
                  <h3 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">{title}</h3>
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
