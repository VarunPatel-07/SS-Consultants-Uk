"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Are your engineers Gas Safe registered?",
    answer:
      "Yes. Our engineers are Gas Safe registered and all boiler installation, servicing and repair work is completed in line with current UK safety requirements.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover homes across the local area. Get in touch with your postcode and we’ll confirm availability for your property.",
  },
  {
    question: "How much does a new boiler installation cost?",
    answer:
      "The cost depends on your home, boiler choice and installation requirements. We provide a clear, tailored quote before any work begins.",
  },
  {
    question: "How long does a boiler installation take?",
    answer:
      "Most standard boiler installations are completed within one day, although larger or more complex systems may take longer.",
  },
  {
    question: "Do your installations include a guarantee?",
    answer:
      "Yes. Your installation includes the relevant manufacturer guarantee, along with our commitment to careful workmanship and reliable support.",
  },
  {
    question: "Can you repair and service my existing boiler?",
    answer:
      "Yes. We can service and repair most domestic boiler systems and will explain the recommended work clearly before proceeding.",
  },
];

function FaqIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className={`faq-toggle-icon${isOpen ? " is-open" : ""}`} aria-hidden="true">
      <span className="faq-toggle-icon-line faq-toggle-icon-horizontal" />
      <span className="faq-toggle-icon-line faq-toggle-icon-vertical" />
    </span>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-(--ssc-uk-main-white-color) py-16 font-jakarta sm:py-24" aria-labelledby="faq-title">
      <div className="ss-construction-uk-container grid gap-12 md:grid-cols-[0.82fr_1.18fr] md:gap-20">
        <div>
          <h2 id="faq-title" className="ssc-sction-title max-w-[500px]">
            Questions about
            <br />
            <em className="ssc-section-title-highlight">your heating?</em>
          </h2>
          <p className="ssc-section-description mt-7 max-w-[390px]">
            Clear answers to the questions homeowners ask us most about boiler installation, servicing and repairs.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                className={`overflow-hidden rounded-lg border bg-(--ssc-uk-gray-background-color) transition-colors duration-300 md:rounded-xl lg:rounded-2xl ${
                  isOpen ? "border-(--ssc-uk-main-highlight-color)" : "border-slate-200"
                }`}
                key={question}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className="text-lg font-medium leading-tight tracking-[-0.02em] text-slate-950 sm:text-xl">{question}</span>
                  <FaqIcon isOpen={isOpen} />
                </button>
                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  aria-hidden={!isOpen}>
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-dashed border-slate-300 px-6 pb-6 pt-5 text-base leading-8 text-slate-700 sm:px-7">{answer}</p>
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
