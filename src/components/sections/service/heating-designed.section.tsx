const SPECIFICATIONS = [
  {
    title: "Correct boiler sizing",
    description:
      "A boiler selected around your property size, insulation levels, number of rooms and expected hot-water demand. This helps avoid an underpowered system or unnecessary energy use.",
  },
  {
    title: "Suitable pipework",
    description:
      "Correct pipe sizes and thoughtful routing help maintain reliable water flow throughout the system. We consider the layout of your home so each part works smoothly together.",
  },
  {
    title: "Balanced radiator output",
    description:
      "Radiators are sized and positioned to distribute warmth effectively across each room. The result is more even comfort, fewer cold spots and better control over everyday heating.",
  },
  {
    title: "Efficient system flow",
    description:
      "The system is configured to help your boiler operate efficiently and maintain consistent temperatures. Controls, valves and circulation are considered as one coordinated system.",
  },
];

export function HeatingDesignedSection() {
  return (
    <section
      className="bg-(--ssc-uk-main-white-color) px-4 py-16 font-jakarta sm:px-6 sm:py-24"
      aria-labelledby="heating-designed-title">
      <div className="ss-construction-uk-container flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          <h2 id="heating-designed-title" className="ssc-section-title">
            Heating designed
            <br />
            <em className="ssc-section-title-highlight">around your home.</em>
          </h2>
          <p className="ssc-section-description">
            A central-heating system performs best when every component works together. We assess your property, heating
            requirements and existing system before recommending the right solution.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          {SPECIFICATIONS.map(({ title, description }) => (
            <article
              className="flex h-full flex-col rounded-lg border border-slate-200 bg-(--ssc-uk-main-white-color) p-6 shadow-sm sm:p-7 gap-3 md:rounded-xl lg:rounded-2xl"
              key={title}>
              <h3 className="text-lg md:text-xl font-semibold leading-tight text-slate-950">{title}</h3>
              <p className="text-sm md:text-base leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
