import { useDebounce } from "@/hooks/useDebounce";
import { ArrowLeft, ArrowRight, LoaderCircle, MapPin } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { AddressField, type QuoteAddress } from "./address-field";

type AutocompleteResponse = { status: number; result: string[] | null };
type ValidationResponse = { status: number; result: boolean };

type PostcodeStepProps = {
  postcode: string;
  verifiedPostcode: string;
  onBack: () => void;
  onPostcodeChange: (value: string) => void;
  onVerified: (postcode: string) => void;
  onAddressSelected: (value: string) => void;
};

const compactPostcode = (value: string) => value.replace(/\s/g, "");

export function PostcodeStep({
  postcode,
  verifiedPostcode,
  onBack,
  onPostcodeChange,
  onVerified,
  onAddressSelected,
}: PostcodeStepProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState("");
  const [addresses, setAddresses] = useState<QuoteAddress[]>([]);
  const [addressError, setAddressError] = useState("");
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(false);
  const requestNumber = useRef(0);

  const loadAddresses = useDebounce(async (value: string) => {
    setIsLoadingAddresses(true);
    setAddressError("");
    try {
      const response = await fetch(`/api/ideal-postcodes?postcode=${encodeURIComponent(value)}`);
      const data = (await response.json()) as { addresses?: QuoteAddress[]; error?: string };
      if (!response.ok) throw new Error(data.error || "Address lookup failed.");
      setAddresses(data.addresses ?? []);
      if (!data.addresses?.length) setAddressError("No addresses were found for this postcode.");
    } catch (lookupError) {
      setAddresses([]);
      setAddressError(lookupError instanceof Error ? lookupError.message : "Address lookup failed.");
    } finally {
      setIsLoadingAddresses(false);
    }
  }, 450);

  const searchPostcodes = useDebounce(async (value: string, request: number) => {
    try {
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(compactPostcode(value))}/autocomplete?limit=6`,
      );
      const data = (await response.json()) as AutocompleteResponse;
      if (request !== requestNumber.current) return;
      setSuggestions(response.ok && Array.isArray(data.result) ? data.result : []);
    } catch {
      if (request === requestNumber.current) setError("Postcode suggestions are temporarily unavailable.");
    } finally {
      if (request === requestNumber.current) setIsSearching(false);
    }
  }, 450);

  const changePostcode = (value: string) => {
    const formatted = value.toUpperCase();
    onPostcodeChange(formatted);
    setError("");
    setSuggestions([]);
    const request = ++requestNumber.current;
    if (compactPostcode(formatted).length > 2) {
      setIsSearching(true);
      searchPostcodes(formatted, request);
    } else {
      setIsSearching(false);
    }
  };

  const verifyPostcode = async (value: string) => {
    const candidate = value.trim().toUpperCase();
    if (!candidate) return;
    setIsValidating(true);
    setError("");
    setSuggestions([]);
    try {
      const response = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(compactPostcode(candidate))}/validate`,
      );
      const data = (await response.json()) as ValidationResponse;
      if (!response.ok || data.result !== true) {
        setError("Enter a valid UK postcode.");
        return;
      }
      onPostcodeChange(candidate);
      onVerified(candidate);
    } catch {
      setError("We couldn’t verify the postcode. Please try again.");
    } finally {
      setIsValidating(false);
    }
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    void verifyPostcode(postcode);
  };
  const isVerified = compactPostcode(postcode) === compactPostcode(verifiedPostcode) && Boolean(verifiedPostcode);

  useEffect(() => {
    if (isVerified) loadAddresses(verifiedPostcode);
  }, [isVerified, loadAddresses, verifiedPostcode]);

  return (
    <section className="p-5 sm:p-7 lg:p-9">
      <span className="flex size-12 items-center justify-center rounded-full border border-(--ssc-uk-border-color) text-(--ssc-uk-main-highlight-color)">
        <MapPin size={23} />
      </span>
      <p className="mt-6 font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-(--ssc-uk-main-highlight-color)">
        Your address
      </p>
      <h1 className="mt-3 font-jakarta text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        What is your postcode?
      </h1>
      <p className="mt-3 max-w-xl font-jakarta text-sm leading-6 text-(--ssc-uk-muted-color)">
        We use your postcode to check coverage and find your property. You’ll choose the full address on the next
        screen.
      </p>
      <form className="mt-8 max-w-lg" onSubmit={submit}>
        <label className="font-jakarta text-sm font-semibold text-foreground" htmlFor="boiler-quote-postcode">
          Postcode
        </label>
        <div className="relative">
          <input
            aria-describedby={error ? "boiler-quote-postcode-error" : undefined}
            aria-expanded={suggestions.length > 0}
            aria-invalid={Boolean(error)}
            aria-controls="boiler-quote-postcode-suggestions"
            autoComplete="postal-code"
            autoFocus
            className="mt-2 h-13 w-full rounded-lg border border-(--ssc-uk-border-color) bg-[#202825] px-4 pr-11 font-jakarta text-base uppercase text-foreground outline-none transition placeholder:normal-case placeholder:text-(--ssc-uk-muted-color) focus:border-(--ssc-uk-main-highlight-color) focus:ring-2 focus:ring-[#5dbbae33]"
            id="boiler-quote-postcode"
            onChange={(event) => changePostcode(event.target.value)}
            placeholder="For example, AL10 0AA"
            role="combobox"
            value={postcode}
          />
          {isSearching && (
            <LoaderCircle
              aria-label="Searching postcodes"
              className="absolute right-4 top-1/2 mt-1 animate-spin text-(--ssc-uk-main-highlight-color)"
              size={19}
            />
          )}
          {suggestions.length > 0 && (
            <ul
              className="absolute z-20 mt-2 max-h-60 w-full touch-pan-y overflow-y-auto overscroll-contain rounded-lg border border-(--ssc-uk-border-color) bg-[#202825] p-1 shadow-xl"
              data-lenis-prevent
              id="boiler-quote-postcode-suggestions"
              role="listbox">
              {suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    aria-selected={postcode === suggestion}
                    className="w-full rounded-md px-3 py-2.5 text-left font-jakarta text-sm text-foreground hover:bg-(--ssc-uk-service-card-hover-background-color) hover:text-(--ssc-uk-main-highlight-color) cursor-pointer"
                    onClick={() => void verifyPostcode(suggestion)}
                    role="option"
                    type="button">
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {error && (
          <p className="mt-2 font-jakarta text-xs text-red-300" id="boiler-quote-postcode-error" role="alert">
            {error}
          </p>
        )}
        <p className="mt-2 font-jakarta text-xs text-(--ssc-uk-muted-color)">Your progress is saved on this device.</p>
        {isVerified && (
          <AddressField
            addresses={addresses}
            error={addressError}
            isLoading={isLoadingAddresses}
            onSelect={onAddressSelected}
          />
        )}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <button
            className="flex items-center gap-2 font-jakarta text-sm font-semibold text-foreground hover:text-(--ssc-uk-main-highlight-color)"
            onClick={onBack}
            type="button">
            <ArrowLeft size={18} />
            Back
          </button>
          <button
            className="flex items-center gap-3 rounded-full border border-[#087f70] bg-(--ssc-uk-cta-button-background) px-6 py-3 font-jakarta text-sm font-bold text-white transition hover:border-(--ssc-uk-main-highlight-color) disabled:cursor-not-allowed disabled:opacity-55"
            disabled={isValidating || !postcode.trim()}
            type="submit">
            {isValidating ? "Verifying…" : isVerified ? "Postcode verified" : "Find address"}
            <ArrowRight className="rounded-full bg-white p-1 text-black" size={25} />
          </button>
        </div>
      </form>
    </section>
  );
}
