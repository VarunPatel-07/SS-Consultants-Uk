import boilerImage from "@/assets/images/webp/installing-boiler.webp";
import CTAButton from "@/components/ui/ctaButton";
import { CheckItem } from "@/utils/helper/homepage.helper";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="top" className="bg-(--ssc-uk-main-white-color) font-jakarta">
      <div className="ss-construction-uk-container grid gap-10 lg:grid-cols-[0.98fr_1.02fr] md:items-center md:gap-14 py-10!">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-400 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-slate-900 sm:text-sm">
            <span className="h-3.5 w-3.5 rounded-full bg-(--ssc-uk-main-highlight-color)" />
            TRUSTED HEATING ENGINEERS ACROSS THE UK
          </div>
          <h1 className="mt-9 max-w-[630px] text-[35px] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[60px]">
            Reliable heating.
            <br />
            Built around <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">your home.</em>
          </h1>
          <p className="mt-8 max-w-[610px] text-lg leading-8 text-slate-700 sm:text-xl">
            Professional boiler installation, servicing and heating repairs delivered with clear advice, careful
            workmanship and dependable support.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton btnStyle="CTA_PRIMARY" href="#contact">
              Request a Free Quote
            </CTAButton>
            <CTAButton btnStyle="CTA_SECONDARY" theme="DARK" href="tel:07590514937">
              Call 07590 514937
            </CTAButton>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-7">
            <CheckItem>Gas Safe engineers</CheckItem>
            <span className="hidden h-6 w-px bg-slate-300 sm:block" />
            <CheckItem>Clear, honest pricing</CheckItem>
            <span className="hidden h-6 w-px bg-slate-300 sm:block" />
            <CheckItem>Reliable local support</CheckItem>
          </div>
        </div>

          <div className="relative rounded-lg bg-slate-200 md:rounded-xl lg:rounded-2xl">
          <Image
            className="h-full max-h-100 w-full object-cover object-center lg:max-h-none aspect-square rounded-lg md:rounded-xl lg:rounded-2xl"
            src={boilerImage}
            alt="Heating engineer installing a boiler"
            priority
            width={650}
            height={650}
          />
          <div className="absolute bottom-7 left-6 rounded-lg bg-(--ssc-uk-main-white-color) px-6 py-5 shadow-lg sm:left-7 md:rounded-xl lg:rounded-2xl">
            <strong className="block text-5xl font-bold leading-none text-slate-950">22+</strong>
            <span className="mt-3 block text-base leading-6 text-slate-900">
              Years of heating
              <br />
              expertise
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
