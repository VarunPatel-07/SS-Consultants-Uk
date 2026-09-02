"use client";

import type { FAQSection } from "@/app/utils/interface/data.interface";
import { RichText } from "@/components/common/RichText";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
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
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const elements = gsap.utils.toArray(".faq-reveal", sectionRef.current);
      const animation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: sectionRef.current,
        start: "top 80%",
      });
      gsap.fromTo(elements, animation.FROM, animation.TO);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={twMerge("bg-(--ssc-uk-main-white-color) font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="faq-title">
      <div className="ss-construction-uk-container grid gap-12 md:grid-cols-[0.82fr_1.18fr] md:gap-20">
        <div className="faq-reveal self-start md:sticky md:top-28">
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
                className={`faq-reveal overflow-hidden rounded-lg border bg-(--ssc-uk-gray-background-color) transition-colors duration-300 md:rounded-xl lg:rounded-2xl ${
                  isOpen ? "border-(--ssc-uk-main-highlight-color)" : "border-slate-200"
                }`}
                key={question}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className="text-lg font-medium leading-tight tracking-[-0.02em] text-slate-950 sm:text-xl">
                    {question}
                  </span>
                  <FaqIcon isOpen={isOpen} />
                </button>
                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  aria-hidden={!isOpen}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-dashed border-slate-300 px-6 pb-6 pt-5 text-base leading-8 text-slate-700 sm:px-7">
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
