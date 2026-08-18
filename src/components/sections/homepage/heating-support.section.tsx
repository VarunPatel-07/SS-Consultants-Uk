import boilerBreakdownRepairsImage from "@/assets/images/webp/service/boiler-breakdown-repairs.webp";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import boilerServicingImage from "@/assets/images/webp/service/boiler-servicing.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
import powerFlushingImage from "@/assets/images/webp/service/powerflushing.webp";
import { ArrowRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

interface HeatingSupportCard {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const HEATING_SUPPORT_CARDS: HeatingSupportCard[] = [
  {
    slug: "boiler-servicing",
    number: "01",
    title: "Boiler Servicing",
    description: "Routine maintenance that keeps your boiler safe, efficient and working reliably.",
    image: boilerServicingImage,
  },
  {
    slug: "boiler-breakdown-repairs",
    number: "02",
    title: "Boiler Breakdown Repairs",
    description: "Fast fault-finding and dependable repairs when your heating stops working.",
    image: boilerBreakdownRepairsImage,
  },
  {
    slug: "boiler-installation",
    number: "03",
    title: "Boiler Installation",
    description: "Professional installation of efficient boiler systems suited to your home.",
    image: boilerInstallationImage,
  },
  {
    slug: "underfloor-heating",
    number: "04",
    title: "Underfloor Heating",
    description: "Comfortable, evenly distributed heating designed and installed with care.",
    image: underfloorHeatingImage,
  },
  {
    slug: "powerflushing",
    number: "05",
    title: "Powerflushing",
    description: "Deep system cleaning that removes sludge and improves heating performance.",
    image: powerFlushingImage,
  },
  {
    slug: "central-heating",
    number: "06",
    title: "Central Heating",
    description: "Complete heating solutions, upgrades and repairs for dependable home comfort.",
    image: centralHeatingImage,
  },
];

export function HeatingSupportSection() {
  return (
    <section id="heating-services" className="bg-(--ssc-uk-main-white-color) px-4 py-16 font-jakarta sm:px-6 sm:py-20" aria-labelledby="heating-support-title">
      <div className="ss-construction-uk-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="heating-support-title" className="ssc-section-title">
            Complete heating support,
            <br />
            <em className="ssc-section-title-highlight">from one trusted team.</em>
          </h2>
          <p className="ssc-section-description mx-auto mt-5 max-w-2xl">
            From routine servicing to complete heating installations, our experienced engineers provide practical advice and careful workmanship for every home.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {HEATING_SUPPORT_CARDS.map(({ slug, number, title, description, image }) => (
            <a className="block overflow-hidden rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) transition-shadow hover:shadow-md md:rounded-xl lg:rounded-2xl" href={`/services/${slug}`} key={title}>
              <div className="m-2.5 overflow-hidden rounded-lg bg-slate-100 md:rounded-xl lg:rounded-2xl">
                <Image className="h-[198px] w-full object-cover transition-transform duration-500 hover:scale-105" src={image} alt={title} />
              </div>
              <div className="grid grid-cols-[36px_1fr_24px] gap-3 px-2.5 pb-5 pt-1 sm:gap-4 sm:px-3">
                <span className="pt-0.5 text-base font-bold text-(--ssc-uk-main-highlight-color)">{number}</span>
                <div>
                  <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{description}</p>
                </div>
                <span className="mt-9 text-(--ssc-uk-main-highlight-color) transition-transform hover:translate-x-1" aria-hidden="true">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
