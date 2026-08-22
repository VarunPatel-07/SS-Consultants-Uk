import whyChooseUsImage from "@/assets/images/webp/why-choose-us.webp";
import { WHY_CHOOSE_US_POINTS } from "@/utils/constants/why-choose-us.constants";
import { Check } from "lucide-react";
import Image from "next/image";

export function WhyChooseUsSection() {
  return (
    <section
      className="bg-(--ssc-uk-consultation-section-background-color) py-[35px] sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta"
      aria-labelledby="why-choose-us-title">
      <div className="ss-construction-uk-container grid gap-12 md:grid-cols-[0.98fr_1.02fr] md:items-center md:gap-16">
        <div className="overflow-hidden rounded-lg bg-(--ssc-uk-main-white-color) md:rounded-xl lg:rounded-2xl">
          <Image
            className="h-full min-h-[520px] w-full object-cover object-center sm:min-h-[700px]"
            src={whyChooseUsImage}
            alt="SS Consultants heating engineer beside a service van"
          />
        </div>

        <div>
          <h2
            id="why-choose-us-title"
            className="ssc-section-title max-w-[680px] text-(--ssc-uk-main-white-color)!">
            Why homeowners choose
            <br />
            <em className="ssc-section-title-highlight">SS Consultants.</em>
          </h2>
          <p className="ssc-section-description mt-7 max-w-[650px] text-(--ssc-uk-main-white-color)!">
            Qualified engineers, honest advice and careful workmanship—from the first visit to the final check.
          </p>

          <div className="mt-8">
            {WHY_CHOOSE_US_POINTS.map(({ title, description }) => (
              <div className="flex gap-4 border-b border-slate-200 py-4 first:pt-0 last:border-b-0" key={title}>
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color)">
                  <Check aria-hidden="true" className="h-3 w-3" strokeWidth={2.4} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-(--ssc-uk-main-white-color) sm:text-lg">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-(--ssc-uk-main-white-color) sm:text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
