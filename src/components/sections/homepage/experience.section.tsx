"use client";
import { RichText } from "@/components/common/RichText";
import CTAButton from "@/components/ui/ctaButton";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_BORDER_RADIUS, COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { ExperienceSectionData } from "@/utils/interface/data.interface";
import { useGSAP } from "@gsap/react";
import { CircleHelp } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

export function ExperienceSection({ data, compact = false }: { data: ExperienceSectionData; compact?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calloutCta = data.callout.cta;

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 60%",
        end: "bottom top",
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );
  return (
    <section
      ref={containerRef}
      className={twMerge(
        "overflow-hidden bg-(--ssc-uk-surface-color) font-jakarta",
        compact ? "py-10! md:py-12! xl:py-14!" : COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="boiler-brands-title">
      <div className="ss-construction-uk-container">
        <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.35fr_0.65fr] lg:gap-8">
          <div>
            <h2 id="boiler-brands-title" className="max-w-3xl ssc-section-title">
              <RichText
                content={data.header.title}
                commonChunkClassNames="reveal-text-animation"
                parentWrapper="!gap-0"
                className="justify-start! "
              />
            </h2>
            <p className="mt-5 max-w-2xl ssc-section-description">
              <RichText
                content={data.header.description ?? []}
                commonChunkClassNames="reveal-text-animation"
                parentWrapper="!gap-0"
                className="justify-start!"
              />
            </p>
          </div>
          <div
            className={twMerge(
              "flex items-start gap-4 border border-(--ssc-uk-border-color) bg-(--ssc-uk-service-card-hover-background-color) p-5",
              COMMON_BORDER_RADIUS,
            )}>
            <span className="h-16 w-16 shrink-0 items-center justify-center rounded-full bg-(--ssc-uk-service-card-hover-background-color) text-4xl font-bold text-(--ssc-uk-main-highlight-color) hidden md:inline-flex ">
              <CircleHelp aria-hidden="true" className="h-9 w-9" strokeWidth={1.8} />
            </span>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                <RichText
                  content={data.callout.header.title}
                  commonChunkClassNames="reveal-text-animation"
                  parentWrapper="!gap-0"
                />
              </h3>
              <p className="mt-2 text-base leading-6 text-(--ssc-uk-muted-color)">
                <RichText
                  content={data.callout.header.description ?? []}
                  commonChunkClassNames="reveal-text-animation"
                  parentWrapper="!gap-0"
                />
              </p>
              {calloutCta && (
                <CTAButton
                  btnStyle={calloutCta.variant}
                  href={calloutCta.href}
                  className="mt-4 w-fit reveal-text-animation">
                  {calloutCta.label}
                </CTAButton>
              )}
            </div>
          </div>
        </div>

        {data?.brands?.length !== 0 && (
          <Swiper
            className="mt-7"
            role="region"
            aria-label="Boiler manufacturers"
            modules={[Autoplay]}
            autoplay={{ delay: 1800, disableOnInteraction: false, pauseOnMouseEnter: false }}
            loop
            allowTouchMove={false}
            simulateTouch={false}
            speed={700}
            spaceBetween={12}
            slidesPerView={1.5}
            breakpoints={{
              480: { slidesPerView: 2.25 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}>
            {data.brands.map(({ name, logo, alt, width, height }) => (
              <SwiperSlide className="reveal-animation" key={name}>
                <div
                  className={twMerge(
                    "flex h-24 min-w-0 items-center justify-center border border-(--ssc-uk-border-color) bg-white px-4 py-5",
                    COMMON_BORDER_RADIUS,
                  )}>
                  <Image
                    className="h-15 w-full object-contain object-center"
                    src={logo}
                    alt={alt}
                    width={width || 240}
                    height={height || 60}
                    unoptimized={typeof logo === "string" && /\.svg(?:\?|$)/i.test(logo)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}
