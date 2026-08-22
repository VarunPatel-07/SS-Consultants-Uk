import { BrandSet } from "@/utils/helper/homepage.helper";

export function ExperienceSection() {
  return (
    <section className="overflow-hidden bg-(--ssc-uk-main-white-color) py-[35px] sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta" aria-labelledby="boiler-brands-title">
      <div className="ss-construction-uk-container">
        <h2
          id="boiler-brands-title"
          className="text-center text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Experience with leading boiler systems
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600">
          Trusted to install and service heating systems from the UK&apos;s leading boiler manufacturers.
        </p>
      </div>

      <div className="boiler-brands-marquee mt-10" role="region" aria-label="Boiler manufacturers">
        <div className="boiler-brands-marquee-track">
          <BrandSet />
          <BrandSet hidden />
          <BrandSet hidden />
          <BrandSet hidden />
        </div>
      </div>
    </section>
  );
}
