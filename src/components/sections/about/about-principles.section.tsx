"use client";
import consultationImage from "@/assets/images/webp/boiler-consultation.webp";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const PRINCIPLES = [
  {
    number: "01",
    title: "Understand before recommending",
    description: "We assess your property, existing system and requirements before suggesting a solution.",
  },
  {
    number: "02",
    title: "Clear, honest advice",
    description: "Practical recommendations without confusing language or unnecessary upselling.",
  },
  {
    number: "03",
    title: "Careful workmanship",
    description: "Professional installation, proper testing and complete respect for your home.",
  },
  {
    number: "04",
    title: "Support after completion",
    description: "A clear handover and dependable assistance whenever it is required.",
  },
];

export function AboutPrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const animation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: sectionRef.current, start: "top 80%" });
    gsap.fromTo(gsap.utils.toArray(".principles-reveal", sectionRef.current), animation.FROM, animation.TO);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={twMerge("bg-[#fff8f3] px-4 font-jakarta sm:px-8", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="principles-title">
      <div className="ss-construction-uk-container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 xl:gap-20">
          <div className="relative z-10 principles-reveal lg:pb-8">
            <h2
              id="principles-title"
              className="ssc-section-title max-w-[620px] text-slate-950!">
              Built around doing the job <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">properly.</em>
            </h2>
            <p className="mt-8 max-w-[560px] text-base leading-7 text-slate-800 sm:text-lg sm:leading-8">
              Good heating work is not only about installing equipment. It is about understanding the property, giving honest advice and completing every detail responsibly.
            </p>
          </div>

          <div className="relative min-w-0 principles-reveal">
            <div className="relative aspect-[1.7/1] overflow-hidden rounded-xl border border-orange-100 sm:rounded-2xl">
              <Image
                className="object-cover"
                src={consultationImage}
                alt="Heating engineer speaking with homeowners"
                fill
                sizes="(max-width: 1023px) 100vw, 65vw"
              />
            </div>
            <div className="relative z-10 -mt-1 ml-5 flex w-fit items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)] lg:absolute lg:-bottom-7 lg:left-[-80px] lg:ml-0 lg:px-7 lg:py-5">
              <ShieldCheck className="h-9 w-9 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={1.8} />
              <div>
                <p className="text-base font-bold leading-5 text-slate-950">22+ years</p>
                <p className="mt-1 text-sm leading-5 text-slate-600">of trusted heating expertise.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4 xl:gap-12">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-[148px] hidden h-px bg-(--ssc-uk-main-highlight-color) xl:block"
            aria-hidden="true"
          />
          {PRINCIPLES.map(({ number, title, description }) => (
            <article
              className="relative z-10 rounded-xl border border-orange-100 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] principles-reveal sm:p-7 xl:min-h-[330px] xl:rounded-2xl"
              key={number}>
              <div>
                <span className="ssc-section-title font-lora! italic leading-none text-(--ssc-uk-main-highlight-color)!">{number}</span>
              </div>
              <h3 className="mt-7 max-w-[240px] text-2xl font-bold leading-[1.15] tracking-[-0.035em] text-slate-950 sm:mt-10">{title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-800 sm:mt-4">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
