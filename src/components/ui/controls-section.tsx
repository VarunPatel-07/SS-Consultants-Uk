import { Button } from "./button";
import { Input } from "./input";

export function ControlsSection() {
  return (
    <section className="w-full max-w-5xl rounded-lg border border-(--ssc-uk-border-color) bg-background p-6 shadow-xl shadow-slate-200/50 sm:p-10 md:rounded-xl lg:rounded-2xl">
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
            UI components
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple tools for better work.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-(--ssc-uk-muted-color)">
            A flexible button and input pairing for clear, confident calls to action.
          </p>
        </div>

        <div className="rounded-lg bg-(--ssc-uk-surface-color) p-5 sm:p-6 md:rounded-xl lg:rounded-2xl">
          <label className="mb-2 block text-sm font-medium text-(--ssc-uk-muted-color)" htmlFor="email">
            Work email
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Input id="email" name="email" type="email" placeholder="you@company.com" />
            <Button className="shrink-0 sm:px-6">Get started</Button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button variant="secondary">Learn more</Button>
            <Button variant="ghost">Contact us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
