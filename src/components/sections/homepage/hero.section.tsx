"use client";

import { CTAButton } from "@/components/common/CTAButton";
import { RichText } from "@/components/common/RichText";
import type { HeroInfoItem, HomepageHeroVisual } from "@/lib/payload/homepage";
import type { HeroSection as HeroSectionData } from "@/utils/interface/data.interface";
import { CalendarDays, Check, Clock, MapPin, Phone, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";

import installingBoilerImage from "@/assets/images/webp/installing-boiler-1700X900.webp";
import HeroBgAbstract from "@/components/sections/common/heroBgAbstract";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
const INFO_ICONS = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  calendar: CalendarDays,
  check: Check,
  "map-pin": MapPin,
  clock: Clock,
  phone: Phone,
  wrench: Wrench,
};

export function HeroSection({
  data,
  infoItems,
  visual,
}: {
  data: HeroSectionData;
  infoItems?: HeroInfoItem[];
  visual?: HomepageHeroVisual;
}) {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const heroImage = visual?.image;
  const statsCard =
    visual?.statsCard === undefined
      ? { value: "22+", label: "years", description: "Heating experience" }
      : visual.statsCard;
  const iconCard =
    visual?.iconCard === undefined
      ? {
          title: "Same-day appointments available",
          description: "Speak directly with an engineer",
          icon: "calendar" as const,
        }
      : visual.iconCard;
  const IconCardIcon = iconCard ? INFO_ICONS[iconCard.icon] : CalendarDays;

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-(--ssc-uk-border-color)/80 bg-background pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14">
      <HeroBgAbstract className="opacity-20" />
      <div ref={animationContainer} className="ss-construction-uk-container relative z-10 overflow-hidden">
        <div className="flex items-stretch flex-col min-[921px]:flex-row gap-12 lg:gap-8 xl:gap-14">
          <div className="w-full min-[921px]:w-1/2 flex min-w-0 flex-col items-start text-left pl-0.5">
            <div className="w-full lg:h-full flex flex-col items-start justify-start lg:justify-center gap-7 xl:gap-12">
              <div className="reveal-animation inline-flex items-center rounded-full border border-(--ssc-uk-main-highlight-color) px-4 py-2 font-jakarta font-semibold tracking-[0.08em] text-foreground ss-construction-uk-hero-eyebrow">
                {data.eyebrow}
              </div>
              <h1 className="font-jakarta font-bold leading-[1.02] tracking-[-0.055em] text-foreground ss-construction-uk--hero-title lg:mt-6 inline">
                <RichText content={data.header.title} parentWrapper="inline!" className="inline!" />
              </h1>
              <p className="font-jakarta text-lg xl:text-xl leading-relaxed text-foreground/90">
                {data.header.description && <RichText content={data.header.description} />}
              </p>
              <div className="flex w-full flex-row flex-wrap gap-3 sm:w-auto sm:flex-row">
                {data.ctas?.map((cta) => (
                  <CTAButton key={cta.label} classNames="reveal-animation" {...cta} />
                ))}
              </div>
              {data.reassurance && (
                <p className="font-jakarta text-sm text-(--ssc-uk-muted-color) lg:text-base xl:text-lg">
                  {data.reassurance}
                </p>
              )}
            </div>
          </div>

          <div className="relative w-full min-[921px]:w-1/2 mx-auto lg:mx-0 lg:justify-self-end">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(255,90,31,0.13),transparent_68%)]" />
            <div
              className={twMerge(
                "reveal-animation overflow-hidden  bg-(--ssc-uk-surface-color) shadow-[0_24px_60px_rgba(8,13,25,0.12)]",
                COMMON_BORDER_RADIUS,
              )}>
              {(heroImage || data.image) && (
                <>
                  <Image
                    src={heroImage?.src || data.image!.src}
                    width={540}
                    height={570}
                    className="aspect-540/570 w-full object-cover object-center hidden min-[921px]:block"
                    alt={heroImage?.alt || data.image!.alt}
                    priority
                  />
                  <Image
                    src={installingBoilerImage}
                    width={1500}
                    height={600}
                    className="aspect-1500/600 min-h-75 w-full object-cover object-center block min-[921px]:hidden"
                    alt={heroImage?.alt || data.image!.alt}
                    priority
                  />
                </>
              )}
            </div>
            {statsCard && (
              <div
                className={twMerge(
                  "reveal-animation absolute right-4 top-2 bg-(--ssc-uk-surface-color) px-5 py-4 text-center shadow-[0_14px_35px_rgba(8,13,25,0.14)] sm:right-6 sm:top-6",
                  COMMON_BORDER_RADIUS,
                )}>
                <strong className="block font-jakarta text-4xl font-bold leading-none text-(--ssc-uk-main-highlight-color)">
                  {statsCard.value}
                </strong>
                <span className="mt-1 block font-jakarta text-sm font-semibold text-foreground">{statsCard.label}</span>
                <span className="mt-2 block border-t border-(--ssc-uk-border-color) pt-2 font-jakarta text-xs text-(--ssc-uk-muted-color)">
                  {statsCard.description}
                </span>
              </div>
            )}
            {iconCard && (
              <div
                className={twMerge(
                  "reveal-animation absolute bottom-2 left-4 flex max-w-[calc(100%-2rem)] items-center gap-3  bg-(--ssc-uk-surface-color) px-4 py-4 shadow-[0_14px_35px_rgba(8,13,25,0.14)] sm:bottom-6 sm:left-6 sm:px-5",
                  COMMON_BORDER_RADIUS,
                )}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color)">
                  <IconCardIcon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <span className="font-jakarta">
                  <strong className="block text-sm font-semibold leading-tight text-foreground sm:text-base">
                    {iconCard.title}
                  </strong>
                  <span className="mt-1 block text-xs text-(--ssc-uk-muted-color) sm:text-sm">
                    {iconCard.description}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
        {infoItems && (
          <div
            className={twMerge(
              "mt-8 grid overflow-hidden border border-(--ssc-uk-border-color) bg-(--ssc-uk-surface-color)/80 min-[500px]:grid-cols-2 lg:mt-10 lg:grid-cols-4",
              COMMON_BORDER_RADIUS,
            )}>
            {infoItems?.map(({ title, description, icon }, index) => {
              const Icon = INFO_ICONS[icon];

              return (
                <div
                  className={twMerge(
                    "flex items-center gap-4 border-(--ssc-uk-border-color) px-5 py-5 sm:px-6 lg:py-7 reveal-animation",
                    index > 0 && "max-[499px]:border-t",
                    index > 0 && "min-[500px]:border-l",
                    index >= 2 && "min-[500px]:max-lg:border-t",
                    index >= 2 && "lg:border-t-0",
                  )}
                  key={title}>
                  <Icon className="h-9 w-9 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={1.8} />
                  <div className="font-jakarta">
                    <strong className="block text-sm font-semibold text-foreground sm:text-base">{title}</strong>
                    <span className="mt-1 block text-xs text-(--ssc-uk-muted-color) sm:text-sm">{description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
