import aboutImage from "@/assets/images/webp/ss-consultant-about-us-section.webp";
import CTAButton from "@/components/ui/ctaButton";
import { ABOUT_FEATURES } from "@/utils/constants/about.constants";
import { Phone } from "lucide-react";
import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="bg-(--ssc-uk-main-white-color) py-[35px] sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta" aria-labelledby="about-hero-title">
      <div className="ss-construction-uk-container grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-14">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-50 md:rounded-xl lg:rounded-2xl">
          <Image
            className="h-full w-full object-cover object-center"
            src={aboutImage}
            alt="Heating engineer working on a boiler system"
            priority
          />
          <div className="absolute bottom-0 right-0 min-w-[175px] rounded-tl-[34px] bg-(--ssc-uk-main-white-color) px-7 py-6 text-left sm:min-w-[220px] sm:px-10 sm:py-8">
            <strong className="block text-5xl font-bold leading-none tracking-tight text-slate-950 sm:text-6xl">22+</strong>
            <span className="mt-3 block text-base leading-6 text-slate-700">
              Years of heating
              <br />
              experience
            </span>
          </div>
        </div>

        <div>
          <h1 id="about-hero-title" className="max-w-[650px] text-[35px] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[60px]">
            Heating expertise
            <br />
            <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">you can rely on.</em>
          </h1>

          <div className="mt-7 max-w-[650px] space-y-4 text-base leading-7 text-slate-700 sm:text-lg">
            <p>
              Based in Hatfield and serving homes across Hertfordshire and London, SS Consultants delivers dependable
              boiler, plumbing and central-heating services with clear advice and careful workmanship.
            </p>
            <p>
              From routine servicing and repairs to complete heating installations, every job is completed to a high
              professional standard—with the same attention whether the work is large or small.
            </p>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-lg border border-slate-200 md:grid-cols-2 md:rounded-xl lg:rounded-2xl">
            {ABOUT_FEATURES.map(({ title, description, icon: Icon }, index) => (
              <div
                className={`flex items-center gap-4 border-slate-200 px-5 py-5 ${index > 0 ? "border-t" : ""} ${index === 1 ? "md:border-t-0 md:border-l" : ""} ${index === 3 ? "md:border-l" : ""}`}
                key={title}>
                <Icon aria-hidden="true" className="h-10 w-10 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={1.7} />
                <div>
                  <strong className="block text-sm font-bold text-slate-950 sm:text-base">{title}</strong>
                  <span className="mt-1 block text-xs text-slate-600 sm:text-sm">{description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <CTAButton btnStyle="CTA_PRIMARY" href="/#about">Learn More About Us</CTAButton>
            <CTAButton btnStyle="CTA_SECONDARY" theme="LIGHT" href="tel:07590514937">
              <span className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                <span>Call 07590 514937</span>
              </span>
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
