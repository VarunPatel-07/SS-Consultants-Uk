import Image from "next/image";
import { HEATING_SERVICES } from "@/utils/constants/homepage.constants";
import { getServiceBorderClass } from "@/utils/helper/homepage.helper";

export function ServiceStrip() {
  return (
    <section id="services" className="bg-(--ssc-uk-main-white-color) pb-10 font-lora">
      <div className="ss-construction-uk-container grid overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {HEATING_SERVICES.map(({ name, icon }, index) => (
          <a className={`flex min-h-[160px] flex-col items-center justify-center gap-4 px-5 py-7 transition-colors hover:bg-orange-50 ${getServiceBorderClass(index)}`} href="#contact" key={name}>
            <Image className="h-[68px] w-[68px] object-contain" src={icon} alt="" />
            <span className="text-center text-xl font-semibold tracking-tight text-slate-950">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
