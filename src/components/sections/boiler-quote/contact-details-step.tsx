"use client";

import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { BoilerQuoteProgress } from "@/utils/interface/boiler-quote.interface";
import { isUKMobileNumber } from "@/utils/uk-mobile";

type Contact = BoilerQuoteProgress["contact"];

export function ContactDetailsStep({ contact, onBack, onChange, onCodeSent }: { contact: Contact; onBack: () => void; onChange: (contact: Contact) => void; onCodeSent: (deliveryFailed: boolean) => void }) {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const [mobileTouched, setMobileTouched] = useState(false);
  const mobileIsValid = isUKMobileNumber(contact.mobile);
  const showMobileError = mobileTouched && !mobileIsValid;
  const field = (key: keyof Contact, label: string, type = "text", autoComplete?: string) => (
    <label className="font-jakarta text-sm font-semibold text-foreground">{label}<input autoComplete={autoComplete} className="mt-2 h-13 w-full rounded-lg border border-(--ssc-uk-border-color) bg-[#202825] px-4 font-jakarta text-sm font-normal text-foreground outline-none focus:border-(--ssc-uk-main-highlight-color) focus:ring-2 focus:ring-[#5dbbae33]" onChange={(event) => onChange({ ...contact, [key]: event.target.value })} type={type} value={contact[key]} /></label>
  );
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!mobileIsValid) {
      setMobileTouched(true);
      setError("Enter a valid UK mobile number, for example 07123 456789.");
      return;
    }
    setIsSending(true);
    setError("");
    try {
      const response = await fetch("/api/send-quote-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile: contact.mobile }),
      });
      const result = (await response.json()) as { error?: string; sent?: boolean; developmentFallback?: boolean };
      if (!response.ok) throw new Error(result.error || "The verification code could not be sent.");
      onCodeSent(result.developmentFallback === true || result.sent === false);
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : "The verification code could not be sent.");
    } finally {
      setIsSending(false);
    }
  };
  const complete = Object.values(contact).every((value) => value.trim()) && mobileIsValid;
  return (
    <section className="p-5 sm:p-7 lg:p-9">
      <span className="flex size-12 items-center justify-center rounded-full border border-(--ssc-uk-border-color) text-(--ssc-uk-main-highlight-color)"><UserRound size={23} /></span>
      <p className="mt-6 font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-(--ssc-uk-main-highlight-color)">Your details</p>
      <h1 className="mt-3 font-jakarta text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Where can we reach you?</h1>
      <p className="mt-3 font-jakarta text-sm text-(--ssc-uk-muted-color)">Enter your details so we can prepare and discuss your quote.</p>
      <form className="mt-8 grid max-w-2xl gap-5 sm:grid-cols-2" onSubmit={submit}>
        {field("firstName", "First name", "text", "given-name")}{field("lastName", "Last name", "text", "family-name")}
        <div className="sm:col-span-2">{field("email", "Email address", "email", "email")}</div>
        <label className="font-jakarta text-sm font-semibold text-foreground sm:col-span-2">
          Mobile number
          <input
            aria-describedby={showMobileError ? "mobile-number-error" : "mobile-number-hint"}
            aria-invalid={showMobileError}
            autoComplete="tel-national"
            className={`mt-2 h-13 w-full rounded-lg border bg-[#202825] px-4 font-jakarta text-sm font-normal text-foreground outline-none focus:ring-2 ${showMobileError ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-(--ssc-uk-border-color) focus:border-(--ssc-uk-main-highlight-color) focus:ring-[#5dbbae33]"}`}
            inputMode="tel"
            maxLength={20}
            onBlur={() => setMobileTouched(true)}
            onChange={(event) => {
              const value = event.target.value;
              if (/^[\d\s()+-]*$/.test(value)) {
                onChange({ ...contact, mobile: value });
                if (isUKMobileNumber(value)) setError("");
              }
            }}
            placeholder="07123 456789"
            required
            type="tel"
            value={contact.mobile}
          />
          {showMobileError ? (
            <span className="mt-2 block font-jakarta text-xs font-normal text-red-400" id="mobile-number-error" role="alert">
              Enter a valid UK mobile number, for example 07123 456789.
            </span>
          ) : (
            <span className="mt-2 block font-jakarta text-xs font-normal text-(--ssc-uk-muted-color)" id="mobile-number-hint">
              UK mobile numbers only (07 or +44 7).
            </span>
          )}
        </label>
        {error && <p className="font-jakarta text-xs text-red-300 sm:col-span-2" role="alert">{error}</p>}
        <div className="mt-3 flex items-center justify-between sm:col-span-2"><button className="flex items-center gap-2 font-jakarta text-sm font-semibold hover:text-(--ssc-uk-main-highlight-color)" onClick={onBack} type="button"><ArrowLeft size={18} />Back</button><button className="flex items-center gap-3 rounded-full border border-[#087f70] bg-(--ssc-uk-cta-button-background) px-6 py-3 font-jakarta text-sm font-bold disabled:cursor-not-allowed disabled:opacity-55" disabled={!complete || isSending} type="submit">{isSending ? "Sending…" : "Send verification code"}<ArrowRight className="rounded-full bg-white p-1 text-black" size={25} /></button></div>
      </form>
    </section>
  );
}
