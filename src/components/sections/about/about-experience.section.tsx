const EXPERIENCE_STATS = [
  {
    value: "22+",
    label: "Years of heating experience",
    description: "Extensive experience across boiler installations, servicing, repairs and central-heating systems.",
  },
  {
    value: "175+",
    label: "Boilers installed locally",
    description: "Boiler installations completed for homeowners across Hatfield, Hertfordshire and London.",
  },
  {
    value: "50+",
    label: "Five-star customer reviews",
    description: "Positive feedback earned through honest advice, dependable service and careful workmanship.",
  },
  {
    value: "£5 million",
    label: "Public liability insurance",
    description: "Professional protection covering the customer, their property and the work being completed.",
  },
  {
    value: "24 months",
    label: "Workmanship guarantee",
    description: "Every completed boiler installation is supported by a clear 24-month workmanship guarantee.",
  },
  {
    value: "527000",
    label: "Gas Safe registration",
    description: "Gas work completed safely and professionally by qualified Gas Safe-registered engineers.",
  },
];

const STANDARDS = [
  {
    title: "Quality materials and products",
    description: "Reliable boilers, components and heating products selected for long-term performance.",
  },
  {
    title: "Professional engineers and installers",
    description: "Experienced professionals delivering careful installation, testing and customer guidance.",
  },
];

export function AboutExperienceSection() {
  return (
    <>
      <section className="bg-(--ssc-uk-main-white-color) px-4 py-16 font-jakarta sm:px-8 sm:py-20 lg:py-24" aria-labelledby="experience-title">
        <div className="ss-construction-uk-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="experience-title" className="text-[35px] font-bold leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-[46px] lg:text-[56px]">
              Experience you can <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">measure.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Practical experience, professional protection and trusted local workmanship—supported by numbers that matter.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-xl border border-slate-200 md:grid-cols-2 lg:grid-cols-3 lg:rounded-2xl">
            {EXPERIENCE_STATS.map(({ value, label, description }, index) => (
              <article className={`px-6 py-7 sm:px-8 sm:py-8 ${index > 0 ? "border-t border-slate-200 md:border-t" : ""} ${index % 2 === 1 ? "md:border-l" : ""} ${index % 3 !== 0 ? "lg:border-l" : ""} ${index >= 3 ? "lg:border-t" : ""}`} key={label}>
                <p className="text-4xl font-bold leading-none tracking-tight text-slate-950 sm:text-5xl">{value}</p>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--ssc-uk-gray-background-color) px-4 py-14 font-jakarta sm:px-8 sm:py-18" aria-labelledby="standards-title">
        <div className="ss-construction-uk-container">
          <h2 id="standards-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Standards behind every job</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {STANDARDS.map(({ title, description }) => (
              <article className="border-t border-slate-300 pt-5" key={title}>
                <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
