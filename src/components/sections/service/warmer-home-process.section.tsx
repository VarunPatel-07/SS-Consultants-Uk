const PROCESS_STEPS = [
  {
    number: "01",
    title: "Home assessment",
    description:
      "We review your existing heating system, property size, insulation, hot-water demand and heating requirements.",
    tags: "PROPERTY · REQUIREMENTS · EXISTING SYSTEM",
  },
  {
    number: "02",
    title: "System recommendation",
    description:
      "We recommend the appropriate boiler, radiators, pipework and controls, followed by a clearly explained quotation.",
    tags: "SYSTEM DESIGN · EQUIPMENT · QUOTATION",
  },
  {
    number: "03",
    title: "Professional installation",
    description:
      "Qualified engineers complete the work carefully, protect the surrounding space and keep disruption to a minimum.",
    tags: "INSTALLATION · WORKMANSHIP · CLEANLINESS",
  },
  {
    number: "04",
    title: "Testing and handover",
    description:
      "The system is tested, balanced and registered. We then explain the controls and leave your home clean and tidy.",
    tags: "TESTING · REGISTRATION · GUIDANCE",
  },
];

export function WarmerHomeProcessSection() {
  return (
    <section
      className="bg-(--ssc-uk-gray-background-color) px-4 py-16 font-jakarta sm:px-6 sm:py-24"
      aria-labelledby="warmer-home-process-title">
      <div className="ss-construction-uk-container flex flex-col gap-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
          <h2 id="warmer-home-process-title" className="ssc-section-title">
            From assessment
            <br />
            <em className="ssc-section-title-highlight">to a warmer home.</em>
          </h2>
          <p className="ssc-section-description">
            A clear four-step process explains what happens after you contact SS Consultants and keeps every stage
            straightforward.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {PROCESS_STEPS.map(({ number, title, description, tags }, index) => {
            const isFinalStep = index === PROCESS_STEPS.length - 1;

            return (
              <article
                className={`flex min-h-[300px] flex-col gap-6 rounded-lg border p-6 sm:p-7 md:rounded-xl lg:rounded-2xl ${
                  isFinalStep
                    ? "border-(--ssc-uk-main-highlight-color) text-slate-950"
                    : "border-slate-200 bg-(--ssc-uk-main-white-color)"
                }`}
                style={
                  isFinalStep
                    ? { backgroundColor: "color-mix(in srgb, var(--ssc-uk-main-highlight-color) 15%, transparent)" }
                    : undefined
                }
                key={number}>
                <span className="font-lora text-4xl leading-none text-(--ssc-uk-main-highlight-color)">{number}</span>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-medium leading-tight text-slate-950">{title}</h3>
                  <p className={`text-sm leading-6 ${isFinalStep ? "text-slate-900" : "text-slate-600"}`}>
                    {description}
                  </p>
                </div>
                <p
                  className={`mt-auto text-xs font-semibold tracking-[0.12em] ${isFinalStep ? "text-slate-800" : "text-slate-500"}`}>
                  {tags}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
