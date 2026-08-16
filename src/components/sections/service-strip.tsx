import Image from "next/image";
import boilerInstallationIcon from "@/assets/images/svg/flame-device-icon.svg";
import boilerServicingIcon from "@/assets/images/svg/boiler-servicing-icon.svg";
import underfloorHeatingIcon from "@/assets/images/svg/underfloor-heating-icon.svg";
import centralHeatingIcon from "@/assets/images/svg/central-heating-icon.svg";

const services = [
  ["Boiler Installation", boilerInstallationIcon],
  ["Boiler Servicing", boilerServicingIcon],
  ["Underfloor Heating", underfloorHeatingIcon],
  ["Central Heating", centralHeatingIcon],
] as const;

export function ServiceStrip() {
  return (
    <section id="services" className="bg-white pb-10 font-lora">
      <div className="ss-construction-uk-container grid overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(([name, icon], index) => (
          <a className={`flex min-h-[160px] flex-col items-center justify-center gap-4 px-5 py-7 transition-colors hover:bg-orange-50 ${index > 0 ? "border-t border-slate-200 sm:border-l lg:border-t-0" : ""}`} href="#contact" key={name}>
            <Image className="h-[68px] w-[68px] object-contain" src={icon} alt="" />
            <span className="text-center text-xl font-semibold tracking-tight text-slate-950">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
