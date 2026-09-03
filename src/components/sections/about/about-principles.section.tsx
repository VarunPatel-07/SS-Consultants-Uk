"use client";
import type { AboutPrinciplesSectionData } from "@/app/utils/interface/data.interface";
import { RichText } from "@/components/common/RichText";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function AboutPrinciplesSection({ data }: { data: AboutPrinciplesSectionData }) {
  const containerRef = useRef<HTMLDivElement>(null);

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
        start: "top 20%",
        end: "bottom top",
        markers: false,
        stagger: 0.2,
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className={twMerge("bg-[#fff8f3] font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="principles-title">
      <div className="ss-construction-uk-container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:gap-20">
          <div className="relative z-10 lg:pb-8">
            <h2 id="principles-title" className="ssc-section-title max-w-[620px] text-slate-950!">
              <RichText
                content={data.header.title}
                className="justify-start!"
                commonChunkClassNames="reveal-text-animation"
              />
            </h2>
            <div className="mt-8 max-w-[560px] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              <RichText content={data.header.description ?? []} commonChunkClassNames="reveal-text-animation" />
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative aspect-[1.7/1] overflow-hidden rounded-xl border border-orange-100 sm:rounded-2xl reveal-text-animation">
              <Image
                className="object-cover"
                src={data.image.src}
                alt={data.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 65vw"
              />
            </div>
            <div className="relative z-10 -mt-1 ml-5 flex w-fit items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)] lg:absolute lg:-bottom-7 lg:left-[-80px] lg:ml-0 lg:px-7 lg:py-5 reveal-text-animation">
              <ShieldCheck className="h-9 w-9 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={1.8} />
              <div>
                <p className="text-base font-bold leading-5 text-slate-950">{data.badge.title}</p>
                <p className="mt-1 text-sm leading-5 text-slate-600">{data.badge.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4 xl:gap-12">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-[148px] hidden h-px bg-(--ssc-uk-main-highlight-color) xl:block reveal-animation"
            aria-hidden="true"
          />
          {data.principles.map(({ number, title, description }) => (
            <article
              className="relative z-10 rounded-xl border border-orange-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] reveal-animation sm:p-7 xl:min-h-[330px] xl:rounded-2xl"
              key={number}>
              <div>
                <span className="ssc-section-title font-lora! italic leading-none text-(--ssc-uk-main-highlight-color)!">
                  {number}
                </span>
              </div>
              <h3 className="mt-7 max-w-[240px] text-2xl font-bold leading-[1.15] tracking-[-0.035em] text-slate-950 sm:mt-10">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-800 sm:mt-4">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
