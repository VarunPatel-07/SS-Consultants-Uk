import consultationImage from "@/assets/images/webp/boiler-consultation.webp";
import Image from "next/image";

const PRINCIPLES = [
  {
    number: "01",
    title: "Understand before recommending",
    description: "We assess the property, existing system, hot-water requirements and budget before suggesting a solution.",
  },
  {
    number: "02",
    title: "Clear, honest advice",
    description: "Customers receive practical recommendations without unnecessary products, confusing language or pressure.",
  },
  {
    number: "03",
    title: "Careful workmanship",
    description: "Every installation, service and repair is completed professionally, with proper testing and respect for the customer’s home.",
  },
  {
    number: "04",
    title: "Support after completion",
    description: "We explain the finished system, complete the required registrations and remain available if support is needed.",
  },
];

export function AboutPrinciplesSection() {
  return (
    <section className="bg-(--ssc-uk-consultation-section-background-color) px-4 py-[35px] sm:px-8 sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta text-(--ssc-uk-main-white-color)" aria-labelledby="principles-title">
      <div className="ss-construction-uk-container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 id="principles-title" className="max-w-[570px] text-[35px] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[44px] lg:text-[56px]">
              Built around doing the job <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">properly.</em>
            </h2>
            <p className="mt-6 max-w-[560px] text-base leading-7 text-slate-300 sm:text-lg">
              Good heating work is not only about installing equipment. It is about understanding the property, giving honest advice and completing every detail responsibly.
            </p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
            <Image className="object-cover" src={consultationImage} alt="Heating engineer speaking with homeowners" fill sizes="(max-width: 1023px) 100vw, 55vw" />
          </div>
        </div>

        <div className="mt-14 border-t border-slate-700">
          {PRINCIPLES.map(({ number, title, description }) => (
            <div className="grid gap-3 border-b border-slate-700 py-6 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-6 sm:py-7" key={number}>
              <span className="font-lora text-lg italic text-(--ssc-uk-main-highlight-color)">{number}</span>
              <h3 className="text-lg font-bold text-(--ssc-uk-main-white-color) sm:text-xl">{title}</h3>
              <p className="max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">{description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-xl font-semibold leading-8 text-(--ssc-uk-main-white-color) sm:text-2xl">
          No rushed recommendations. No unnecessary upselling. No corners cut.
        </p>
      </div>
    </section>
  );
}
