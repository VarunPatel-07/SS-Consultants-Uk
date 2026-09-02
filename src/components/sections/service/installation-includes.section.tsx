"use client";
import boilerInstallationImage from "@/assets/images/webp/service/boiler-installation.webp";
import centralHeatingImage from "@/assets/images/webp/service/central-heating.webp";
import underfloorHeatingImage from "@/assets/images/webp/service/underfloor-heating.webp";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { gsap } from "@/lib/gsap";
import Image, { type StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

interface InstallationInclude {
  number: string;
  title: string;
  description: string;
  tags: string;
  image: StaticImageData;
}

const INSTALLATION_INCLUDES: InstallationInclude[] = [
  {
    number: "01",
    title: "Boiler installation or replacement",
    description: "Efficient boiler systems selected and installed around your home, usage and budget.",
    tags: "BOILER · CONTROLS · PIPEWORK",
    image: boilerInstallationImage,
  },
  {
    number: "02",
    title: "New radiator installation",
    description: "Correctly sized and positioned radiators for comfortable, evenly distributed warmth.",
    tags: "RADIATORS · VALVES · BALANCING",
    image: centralHeatingImage,
  },
  {
    number: "03",
    title: "Complete central-heating system",
    description: "A coordinated system covering the boiler, pipework, radiators and heating controls.",
    tags: "DESIGN · INSTALLATION · HANDOVER",
    image: underfloorHeatingImage,
  },
];

export function InstallationIncludesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (!sectionRef.current) return;
    const animation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: sectionRef.current });
    gsap.fromTo(gsap.utils.toArray(".installation-reveal", sectionRef.current), animation.FROM, animation.TO);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={twMerge(
        "bg-(--ssc-uk-main-white-color) px-4 font-jakarta sm:px-6",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}
      aria-labelledby="installation-includes-title"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(15, 23, 42, 0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.055) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}>
      <div className="ss-construction-uk-container flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          <h2 id="installation-includes-title" className="installation-reveal ssc-section-title">
            What your installation
            <br />
            <em className="ssc-section-title-highlight">can include.</em>
          </h2>
          <p className="installation-reveal ssc-section-description">
            From a single boiler replacement to a complete home-heating system, we design and install the right solution for your property.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {INSTALLATION_INCLUDES.map(({ number, title, description, tags, image }) => (
            <article className="installation-reveal overflow-hidden rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) md:rounded-xl lg:rounded-2xl" key={title}>
              <div className="m-1.5 overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
                <Image className="h-[300px] w-full object-cover" src={image} alt={title} />
              </div>
              <div className="flex gap-5 px-6 pb-7 pt-5">
                <span className="shrink-0 font-lora text-4xl leading-none text-(--ssc-uk-main-highlight-color)">{number}</span>
                <div className="flex min-w-0 flex-1 flex-col gap-4">
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-950">{title}</h3>
                  <p className="text-base leading-7 text-slate-600">{description}</p>
                  <p className="mt-auto text-xs font-semibold tracking-[0.16em] text-slate-500">{tags}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
