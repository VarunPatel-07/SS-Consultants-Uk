"use client";
import { HEATING_SERVICES } from "@/utils/constants/homepage.constants";
import { getServiceBorderClass } from "@/utils/helper/homepage.helper";
import Image from "next/image";

export function ServiceStrip() {
  return (
    <div id="services" className="bg-(--ssc-uk-main-white-color) pt-8 md:pt-12 lg:pt-16 xl:pt-25 font-lora w-full">
      <div className="w-full">
        <div className="grid overflow-hidden rounded-lg border border-slate-200 min-[500px]:grid-cols-2 md:rounded-xl lg:grid-cols-4 lg:rounded-2xl">
          {HEATING_SERVICES.map(({ name, icon }, index) => (
            <a
              className={`flex md:min-h-40 flex-col items-center justify-center gap-4 px-3 py-7 transition-colors hover:bg-orange-50 ${getServiceBorderClass(index)}`}
              href="#contact"
              key={name}>
              <Image className="h-10 w-10 object-contain" src={icon} alt="" />
              <span className="text-center text-base font-semibold tracking-tight text-slate-950">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
