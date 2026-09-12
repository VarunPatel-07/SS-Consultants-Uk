import { AirVent, CircleGauge, Flame, House, Settings, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import type { BoilerQuoteIcon, BoilerQuoteQuestion } from "@/utils/interface/boiler-quote.interface";

const icons: Record<BoilerQuoteIcon, typeof Wrench> = { boiler: CircleGauge, flame: Flame, home: House, radiator: AirVent, settings: Settings, shield: ShieldCheck, sparkles: Sparkles, wrench: Wrench };

export function QuoteOptionStep({ question, onSelect }: { question: BoilerQuoteQuestion; onSelect: (optionId: string) => void }) {
  return (
    <section className="p-5 sm:p-7 lg:p-9">
      <p className="font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-(--ssc-uk-main-highlight-color)">{question.eyebrow}</p>
      <h1 className="mt-3 max-w-xl font-jakarta text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{question.label}</h1>
      {question.description && <p className="mt-3 max-w-2xl font-jakarta text-sm leading-6 text-(--ssc-uk-muted-color)">{question.description}</p>}
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {question.options.map((option) => {
          const Icon = option.icon ? icons[option.icon] : Wrench;
          return (
            <button className="group flex min-h-24 items-center gap-4 rounded-xl border border-(--ssc-uk-border-color) bg-[#151a18] p-4 text-left transition hover:border-(--ssc-uk-main-highlight-color) hover:bg-(--ssc-uk-service-card-hover-background-color) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ssc-uk-main-highlight-color)" key={option.id} onClick={() => onSelect(option.id)} type="button">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-(--ssc-uk-border-color) text-(--ssc-uk-main-highlight-color) transition group-hover:border-(--ssc-uk-main-highlight-color)"><Icon size={21} /></span>
              <span><span className="block font-jakarta text-base font-semibold text-foreground">{option.label}</span>{option.description && <span className="mt-1 block font-jakarta text-xs leading-5 text-(--ssc-uk-muted-color)">{option.description}</span>}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
