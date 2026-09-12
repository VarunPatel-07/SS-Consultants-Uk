"use client";

import { RichText } from "@/components/common/RichText";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import type { FAQSection } from "@/utils/interface/data.interface";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function FaqIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className={`faq-toggle-icon${isOpen ? " is-open" : ""}`} aria-hidden="true">
      <span className="faq-toggle-icon-line faq-toggle-icon-horizontal" />
      <span className="faq-toggle-icon-line faq-toggle-icon-vertical" />
    </span>
  );
}

export function FaqSection({ data }: { data: FAQSection }) {
  const [openIndex, setOpenIndex] = useState(0);
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
        start: "top 90%",
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
      className={twMerge("bg-background font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="faq-title">
      <div className="ss-construction-uk-container grid gap-10 lg:gap-18 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="self-start lg:sticky lg:top-28">
          <h2 id="faq-title" className="ssc-section-title max-w-[500px]">
            <RichText content={data.header.title} />
          </h2>
          <p className="ssc-section-description mt-7 max-w-[390px]">
            {data.header.description && <RichText content={data.header.description} />}
          </p>
        </div>

        <div className="space-y-3">
          {data.faqsItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                className={`reveal-animation overflow-hidden rounded-lg border bg-(--ssc-uk-gray-background-color) transition-colors duration-300 md:rounded-xl lg:rounded-2xl ${
                  isOpen ? "border-(--ssc-uk-main-highlight-color)" : "border-(--ssc-uk-border-color)"
                }`}
                key={question}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className="text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-[22px]">
                    {question}
                  </span>
                  <FaqIcon isOpen={isOpen} />
                </button>
                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  aria-hidden={!isOpen}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-dashed border-(--ssc-uk-border-color) px-6 pb-6 pt-5 text-base leading-8 text-(--ssc-uk-muted-color) sm:px-7">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
