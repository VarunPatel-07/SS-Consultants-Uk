import Image from "next/image";
import { ArrowRight, Check, Phone } from "lucide-react";
import boilerImage from "@/assets/images/webp/installing-boiler.webp";
import { Button } from "@/components/ui/button";

function CheckItem({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-900 sm:text-base">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#ff5108] text-[#ff5108]"><Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} /></span>
      {children}
    </span>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="bg-white font-jakarta">
      <div className="ss-construction-uk-container grid gap-12 pb-8 pt-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:gap-14 lg:pb-7 lg:pt-6">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-400 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-slate-900 sm:text-sm">
            <span className="h-3.5 w-3.5 rounded-full bg-[#ff5108]" />
            TRUSTED HEATING ENGINEERS ACROSS THE UK
          </div>
          <h1 className="mt-9 max-w-[630px] text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-6xl xl:text-[76px]">
            Reliable heating.<br />
            Built around <em className="font-lora font-bold italic text-[#ff5108]">your home.</em>
          </h1>
          <p className="mt-8 max-w-[610px] text-lg leading-8 text-slate-700 sm:text-xl">
            Professional boiler installation, servicing and heating repairs delivered with clear advice, careful workmanship and dependable support.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button className="h-14 rounded-xl bg-[#ff5108] px-7 text-base hover:bg-[#e64905]">Request a Free Quote <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" strokeWidth={2} /></Button>
            <a className="inline-flex h-14 items-center justify-center gap-3 rounded-xl border border-slate-950 px-6 text-base font-semibold text-slate-950 transition-colors hover:bg-slate-50" href="tel:07590514937">
              <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
              Call 07590 514937
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-7">
            <CheckItem>Gas Safe engineers</CheckItem>
            <span className="hidden h-6 w-px bg-slate-300 sm:block" />
            <CheckItem>Clear, honest pricing</CheckItem>
            <span className="hidden h-6 w-px bg-slate-300 sm:block" />
            <CheckItem>Reliable local support</CheckItem>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[30px] bg-slate-200 lg:h-[635px]">
          <Image className="h-full w-full object-cover object-center" src={boilerImage} alt="Heating engineer installing a boiler" priority />
          <div className="absolute bottom-7 left-6 rounded-2xl bg-white px-6 py-5 shadow-lg sm:left-7">
            <strong className="block text-5xl font-bold leading-none text-slate-950">15+</strong>
            <span className="mt-3 block text-base leading-6 text-slate-900">Years of heating<br />expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
