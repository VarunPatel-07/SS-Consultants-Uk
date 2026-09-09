"use client";
import { RichText } from "@/components/common/RichText";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import type { AboutPrinciplesSectionData } from "@/utils/interfacedata.interface";
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
        start: "top 85%",
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
      className={twMerge("bg-(--ssc-uk-surface-color) font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="principles-title">
      <div className="ss-construction-uk-container">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-12">
          <div className="relative z-10">
            <h2 id="principles-title" className="ssc-section-title max-w-[620px] text-foreground!">
              <RichText
                content={data.header.title}
                className="justify-start!"
                commonChunkClassNames="reveal-text-animation"
              />
            </h2>
            <div className="mt-5 max-w-[620px] text-base leading-7 text-foreground sm:text-lg sm:leading-8">
              <RichText content={data.header.description ?? []} commonChunkClassNames="reveal-text-animation" />
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative aspect-[1.8/1] overflow-hidden rounded-xl border border-(--ssc-uk-border-color) sm:rounded-2xl reveal-text-animation">
              <Image
                className="object-cover"
                src={data.image.src}
                alt={data.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
              />
            </div>
            <div className="relative z-10 -mt-6 mx-4 flex w-fit items-center gap-4 rounded-xl border border-(--ssc-uk-main-highlight-color)/50 bg-background px-5 py-4 shadow-lg sm:mx-6 reveal-text-animation">
              <ShieldCheck className="h-9 w-9 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={1.8} />
              <div>
                <p className="text-2xl font-bold leading-7 text-foreground">{data.badge.title}</p>
                <p className="mt-1 text-sm leading-5 text-(--ssc-uk-muted-color)">{data.badge.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 xl:grid-cols-4 xl:gap-5">
          {data.principles.map(({ number, title, description }) => (
            <article
              className="relative z-10 rounded-xl border border-(--ssc-uk-main-highlight-color)/35 bg-background p-5 shadow-sm reveal-animation sm:p-6 xl:rounded-2xl"
              key={number}>
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-(--ssc-uk-service-card-hover-background-color) font-lora text-3xl font-bold italic text-(--ssc-uk-main-highlight-color)">
                  {number}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-foreground/85">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
