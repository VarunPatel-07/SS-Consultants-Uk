"use client";

import { CheckCircle2, LoaderCircle, Search } from "lucide-react";
import { useMemo, useState } from "react";

export type QuoteAddress = { id: string; label: string };

export function AddressField({
  addresses,
  isLoading,
  error,
  onSelect,
}: {
  addresses: QuoteAddress[];
  isLoading: boolean;
  error: string;
  onSelect: (address: string) => void;
}) {
  const [query, setQuery] = useState("");
  const filteredAddresses = useMemo(() => {
    const terms = query.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
    return terms.length
      ? addresses.filter(({ label }) => terms.every((term) => label.toLocaleLowerCase().includes(term)))
      : addresses;
  }, [addresses, query]);

  return (
    <div className="mt-6 border-t border-(--ssc-uk-border-color) pt-6">
      <div className="mb-4 flex items-center gap-2 font-jakarta text-sm text-(--ssc-uk-main-highlight-color)">
        <CheckCircle2 size={18} /> UK postcode verified
      </div>
      <label className="font-jakarta text-sm font-semibold text-foreground" htmlFor="boiler-quote-address">
        Search and select your address
      </label>
      <div className="relative mt-2">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--ssc-uk-muted-color)"
          size={18}
        />
        <input
          autoComplete="street-address"
          className="h-13 w-full rounded-lg border border-(--ssc-uk-border-color) bg-[#202825] pl-11 pr-11 font-jakarta text-sm text-foreground outline-none focus:border-(--ssc-uk-main-highlight-color) focus:ring-2 focus:ring-[#5dbbae33]"
          id="boiler-quote-address"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Start typing your house number or street"
          value={query}
        />
        {isLoading && (
          <LoaderCircle
            aria-label="Loading addresses"
            className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-(--ssc-uk-main-highlight-color)"
            size={19}
          />
        )}
        {!isLoading && !error && addresses.length > 0 && (
          <ul
            className="absolute inset-x-0 top-full z-30 mt-2 max-h-60 touch-pan-y overflow-y-auto overscroll-contain rounded-lg border border-(--ssc-uk-border-color) bg-[#202825] p-1 shadow-2xl"
            data-lenis-prevent
            role="listbox">
            {filteredAddresses.map((item) => (
              <li key={item.id}>
                <button
                  className="w-full rounded-md px-3 py-2.5 text-left font-jakarta text-sm leading-5 text-foreground hover:bg-(--ssc-uk-service-card-hover-background-color) hover:text-(--ssc-uk-main-highlight-color)"
                  onClick={() => onSelect(item.label)}
                  type="button">
                  {item.label}
                </button>
              </li>
            ))}
            {filteredAddresses.length === 0 && (
              <li className="px-3 py-4 font-jakarta text-sm text-(--ssc-uk-muted-color)">
                No address matches your search.
              </li>
            )}
          </ul>
        )}
      </div>
      {error && (
        <p className="mt-2 font-jakarta text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
