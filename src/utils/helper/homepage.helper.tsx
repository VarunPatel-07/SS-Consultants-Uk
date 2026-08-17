import { Check } from "lucide-react";
import Image from "next/image";
import { BOILER_BRANDS } from "@/utils/constants/homepage.constants";

export function CheckItem({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-900 sm:text-base">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color)">
        <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      {children}
    </span>
  );
}

export function BrandSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12" aria-hidden={hidden}>
      {BOILER_BRANDS.map(({ name, logo }) => (
        <div className="flex shrink-0 items-center justify-center" key={`${hidden ? "duplicate-" : ""}${name}`}>
          <Image className="h-15" src={logo} alt={hidden ? "" : `${name} logo`} height={60} />
        </div>
      ))}
    </div>
  );
}

export function getServiceBorderClass(index: number) {
  return index > 0 ? "border-t border-slate-200 sm:border-l lg:border-t-0" : "";
}
