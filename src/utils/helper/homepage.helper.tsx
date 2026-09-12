"use client";

import { BOILER_BRANDS } from "@/utils/constants/homepage.constants";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CheckItem({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-foreground sm:text-base">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color)">
        <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
      {children}
    </span>
  );
}

export function getBrandSpacing(viewportWidth: number) {
  if (viewportWidth >= 1200) return 60;
  if (viewportWidth >= 768) return 45;
  return 30;
}

export function BrandSet({ hidden = false }: { hidden?: boolean }) {
  const [spacing, setSpacing] = useState(30);

  useEffect(() => {
    const updateSpacing = () => setSpacing(getBrandSpacing(window.innerWidth));

    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 lg:gap-10 lg:pr-10 xl:gap-20 xl:pr-20" aria-hidden={hidden}>
      {BOILER_BRANDS.map(({ name, logo, alt }) => (
        <div
          className="flex shrink-0 items-center justify-center reveal-animation"
          key={`${hidden ? "duplicate-" : ""}${name}`}>
          <Image className="h-15" src={logo} alt={alt} height={spacing} />
        </div>
      ))}
    </div>
  );
}

export function getServiceBorderClass(index: number) {
  if (index === 0) return "";
  if (index === 1) return "border-t border-(--ssc-uk-border-color) min-[500px]:border-t-0 min-[500px]:border-l lg:border-t-0";
  if (index === 3) return "border-t border-(--ssc-uk-border-color) min-[500px]:border-l lg:border-t-0";
  return "border-t border-(--ssc-uk-border-color) lg:border-l lg:border-t-0";
}
