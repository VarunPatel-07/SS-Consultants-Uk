import consultationImage from "@/assets/images/webp/boiler-consultation.webp";
import { CONSULTATION_FEATURES, CONSULTATION_POINTS } from "@/utils/constants/consultation.constants";
import { Check } from "lucide-react";
import Image from "next/image";

export function ConsultationSection() {
  return (
    <section className="font-jakarta" aria-labelledby="consultation-title">
      <div
        className="mx-auto rounded-[2px] px-6 py-10 text-(--ssc-uk-main-white-color) sm:px-12 sm:py-14 lg:px-16 lg:py-16"
        style={{ backgroundColor: "var(--ssc-uk-consultation-section-background-color)" }}>
        <div className="ss-construction-uk-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
            <div>
              <h2
                id="consultation-title"
                className="ssc-section-title ssc-section-title-on-dark max-w-[600px]">
                A new boiler,
                <br />
                <em className="ssc-section-title-highlight">without the hard sell.</em>
              </h2>
              <p className="ssc-section-description ssc-section-description-on-dark mt-7 max-w-[590px]">
                Clear advice, honest pricing and professional installation—so you can choose the right heating system
                for your home without pressure or confusion.
              </p>

              <div className="mt-8 grid max-w-[600px] sm:grid-cols-2">
                {CONSULTATION_POINTS.map((point, index) => (
                  <div
                    className={`flex items-center gap-3 border-slate-600 py-4 text-sm text-slate-100 sm:text-base ${index > 1 ? "border-t" : ""} ${index % 2 === 1 ? "sm:border-l sm:pl-7" : "sm:pr-7"}`}
                    key={point}>
                    <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={2.2} />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-7 max-w-[590px] space-y-4 text-sm leading-6 text-slate-300 sm:text-base">
                <p>Every recommendation is based on your home, usage and budget.</p>
                <p>
                  We assess your current system, explain the available options and recommend only what your home
                  genuinely needs—giving you confidence before any work begins.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[24px]">
              <Image
                className="h-auto w-full object-cover"
                src={consultationImage}
                alt="Heating engineer discussing a boiler installation with homeowners"
              />
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-2xl border border-[#c9c3b1] sm:grid-cols-2 lg:grid-cols-4">
            {CONSULTATION_FEATURES.map(({ label, icon: Icon }, index) => (
              <div
                className={`flex items-center gap-4 px-5 py-5 text-sm text-slate-100 sm:px-6 ${index > 0 ? "border-t border-[#726d60] lg:border-l lg:border-t-0" : ""}`}
                key={label}>
              <Icon aria-hidden="true" className="h-8 w-8 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={1.7} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
