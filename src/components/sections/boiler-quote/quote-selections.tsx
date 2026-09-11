"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import type { BoilerQuoteSelection } from "@/utils/interface/boiler-quote.interface";

export function QuoteSelections({ selections, address, onEdit, onEditAddress }: { selections: BoilerQuoteSelection[]; address?: string; onEdit: (index: number) => void; onEditAddress?: () => void }) {
  const sidebarRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        sidebarRef.current?.querySelectorAll("[data-selection-row]") ?? [],
        { autoAlpha: 0, x: 10 },
        { autoAlpha: 1, x: 0, duration: 0.32, ease: "power2.out", stagger: 0.04 },
      );
    },
    { scope: sidebarRef, dependencies: [selections.length, address] },
  );

  return (
    <aside className="border-t border-(--ssc-uk-border-color) p-5 sm:p-7 lg:border-l lg:border-t-0" ref={sidebarRef}>
      <h2 className="font-jakarta text-sm font-bold text-foreground">Your selections</h2>
      <div className="mt-4 divide-y divide-(--ssc-uk-border-color)">
        {selections.map((selection, index) => (
          <div className="flex items-end justify-between gap-4 py-3 first:pt-0" data-selection-row key={selection.questionId}>
            <div><span className="block font-jakarta text-xs text-(--ssc-uk-muted-color)">{selection.questionLabel}</span><span className="mt-1 block font-jakarta text-sm text-foreground">{selection.optionLabel}</span></div>
            <button className="font-jakarta text-xs text-(--ssc-uk-main-highlight-color) underline underline-offset-2 hover:text-white" onClick={() => onEdit(index)} type="button">Edit</button>
          </div>
        ))}
        {address && (
          <div className="flex items-end justify-between gap-4 py-3" data-selection-row>
            <div><span className="block font-jakarta text-xs text-(--ssc-uk-muted-color)">Address</span><span className="mt-1 block font-jakarta text-sm leading-5 text-foreground">{address}</span></div>
            <button className="font-jakarta text-xs text-(--ssc-uk-main-highlight-color) underline underline-offset-2 hover:text-white" onClick={onEditAddress} type="button">Edit</button>
          </div>
        )}
      </div>
    </aside>
  );
}
