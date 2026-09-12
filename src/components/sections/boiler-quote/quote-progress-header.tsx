import { Check } from "lucide-react";

export function QuoteProgressHeader({ stage }: { stage: "job" | "address" | "details" }) {
  return (
    <header className="border-b border-(--ssc-uk-border-color) px-5 py-4 sm:px-7">
      <div className="flex flex-wrap items-center justify-end gap-4">
        <div className="flex items-center gap-3 text-xs font-jakarta text-(--ssc-uk-muted-color)">
          <span className="flex items-center gap-2 text-foreground">
            <span className="flex size-5 items-center justify-center rounded-full bg-(--ssc-uk-main-highlight-color) text-black">
              <Check size={13} strokeWidth={3} />
            </span>
            Your job
          </span>
          <span className="h-px w-5 bg-(--ssc-uk-border-color)" />
          <span className={stage !== "job" ? "flex items-center gap-2 text-foreground" : "flex items-center gap-2"}>
            <span
              className={
                stage !== "job"
                  ? "size-2 rounded-full bg-(--ssc-uk-main-highlight-color)"
                  : "size-2 rounded-full bg-(--ssc-uk-border-color)"
              }
            />
            Your address
          </span>
          <span className="hidden h-px w-5 bg-(--ssc-uk-border-color) sm:block" />
          <span className={`hidden items-center gap-2 sm:flex ${stage === "details" ? "text-foreground" : ""}`}>
            <span className={`size-2 rounded-full ${stage === "details" ? "bg-(--ssc-uk-main-highlight-color)" : "bg-(--ssc-uk-border-color)"}`} />
            Your details
          </span>
        </div>
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-(--ssc-uk-border-color)">
        <div
          className={`h-full rounded-full bg-(--ssc-uk-main-highlight-color) transition-all duration-500 ${stage === "details" ? "w-full" : stage === "address" ? "w-2/3" : "w-1/3"}`}
        />
      </div>
    </header>
  );
}
