"use client";
import { AboutSectionDataInterface } from "@/app/utils/interface/data.interface";
import aboutUsImage1500X400 from "@/assets/images/webp/ss-consultant-about-us-section-img-1500-400.webp";
import aboutImage from "@/assets/images/webp/ss-consultant-about-us-section.webp";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { CalendarDays, MapPin, ShieldCheck, Umbrella } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const ABOUT_FEATURE_ICONS = { shield: ShieldCheck, umbrella: Umbrella, calendar: CalendarDays, map: MapPin };

export function AboutHeroSection({ data }: { data: AboutSectionDataInterface }) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-text-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );
  return (
    <section
      ref={animationContainer}
      id="about"
      className={twMerge("bg-(--ssc-uk-main-white-color)", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="about-title">
      <div className="ss-construction-uk-container flex flex-col-reverse lg:flex-row items-center justify-center gap-10 md:items-stretch md:gap-8 lg:gap-11 xl:gap-16 pt-23! xl:pt-18!">
        <div className="w-full lg:w-1/2 relative overflow-hidden rounded-lg bg-slate-100 md:rounded-xl lg:rounded-2xl">
          <Image
            className="block h-auto min-h-62.5 max-h-100 w-full object-cover lg:hidden"
            src={aboutUsImage1500X400}
            width={1500}
            height={400}
            alt="Heating engineer installing a boiler system"
          />
          <Image
            className="hidden h-full w-full aspect-square object-cover lg:block"
            src={aboutImage}
            width={900}
            height={900}
            alt="Heating engineer working on a boiler system"
          />
          <div className="absolute bottom-0 right-0 min-w-47.5 rounded-tl-[34px] bg-(--ssc-uk-main-white-color) px-8 py-7 text-left sm:min-w-57.5 sm:px-11 sm:py-9">
            <strong className="block text-4xl font-bold leading-none tracking-tight text-slate-950 sm:text-6xl font-jakarta">
              22+
            </strong>
            <span className="mt-3 block text-base leading-6 text-slate-700 font-jakarta">
              Years of heating
              <br />
              experience
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="w-full h-full flex flex-col items-start justify-center gap-9.5">
            <h2 id="about-title" className="ssc-section-title font-jakarta">
              <RichText
                content={data?.header?.title}
                className="items-start! justify-start!"
                commonChunkClassNames="reveal-text-animation"
              />
            </h2>
            {data?.header?.description && (
              <div className="">
                <p className="leading-8 text-slate-700 text-base lg:text-lg text-pretty font-jakarta space-y-3.5">
                  <RichText
                    content={data?.header?.description}
                    parentWrapper="gap-3!"
                    commonChunkClassNames="reveal-text-animation"
                  />
                </p>
              </div>
            )}

            {data?.cards && (
              <div className="grid w-full overflow-hidden rounded-lg border border-slate-200 sm:grid-cols-2 md:rounded-xl lg:rounded-2xl reveal-text-animation">
                {data?.cards?.map(({ title, description, icon }, index) => {
                  const Icon = ABOUT_FEATURE_ICONS[icon];

                  return (
                    <div
                      className={`flex items-center gap-4 border-slate-200 px-5 py-5 ${index > 0 ? "border-t" : ""} ${index === 1 ? "sm:border-l sm:border-t-0" : index === 3 ? "sm:border-l" : index > 1 ? "sm:border-t" : ""}`}
                      key={title}>
                      <Icon
                        aria-hidden="true"
                        className="h-10 w-10 shrink-0 text-(--ssc-uk-main-highlight-color)"
                        strokeWidth={1.7}
                      />
                      <div>
                        <strong className="block text-sm font-bold text-slate-950 sm:text-base font-jakarta">
                          {title}
                        </strong>
                        <span className="mt-1 block text-xs text-slate-600 sm:text-sm font-jakarta">{description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {data?.cta && (
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                {data?.cta?.map(({ href, label, variant, theme }) => (
                  <CTAButton btnStyle={variant} href={href} key={label} theme={theme} className="reveal-text-animation">
                    {label}
                  </CTAButton>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
