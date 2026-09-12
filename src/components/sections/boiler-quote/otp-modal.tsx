"use client";

import { ArrowRight, Smartphone, X } from "lucide-react";
import { useRef, useState } from "react";

export function OtpModal({ deliveryFailed, mobile, onClose, onComplete }: { deliveryFailed: boolean; mobile: string; onClose: () => void; onComplete: () => Promise<void> }) {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const updateDigit = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    setDigits((current) => current.map((item, itemIndex) => itemIndex === index ? digit : item));
    if (digit && index < 5) inputs.current[index + 1]?.focus();
  };
  const complete = digits.every(Boolean);
  const submit = async () => {
    setIsSubmitting(true);
    setError("");
    try {
      await onComplete();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Your request could not be submitted.");
      setIsSubmitting(false);
    }
  };
  return (
    <div aria-modal="true" className="fixed inset-0 z-100 flex touch-pan-y items-center justify-center overflow-y-auto overscroll-contain bg-black/75 px-4 py-6 backdrop-blur-sm" data-lenis-prevent role="dialog">
      <div className="relative w-full max-w-md rounded-xl border border-(--ssc-uk-border-color) bg-[linear-gradient(135deg,#17201c,#111714)] p-6 text-center shadow-2xl sm:p-8">
        <button aria-label="Close verification" className="absolute right-4 top-4 text-(--ssc-uk-muted-color) hover:text-white" onClick={onClose} type="button"><X /></button>
        <Smartphone className="mx-auto text-(--ssc-uk-main-highlight-color)" size={34} />
        <h2 className="mt-5 font-jakarta text-xl font-bold">Verify your mobile number</h2>
        <p className="mt-2 font-jakarta text-sm leading-6 text-(--ssc-uk-muted-color)">
          {deliveryFailed ? "SMS delivery is unavailable in this development flow. Enter any six-digit code to continue." : <>Enter the six-digit code sent to<br /><strong className="text-foreground">{mobile}</strong></>}
        </p>
        <div className="mt-6 flex justify-center gap-2">
          {digits.map((digit, index) => <input aria-label={`OTP digit ${index + 1}`} className="size-11 rounded-lg border border-(--ssc-uk-border-color) bg-[#202825] text-center font-jakarta text-lg outline-none focus:border-(--ssc-uk-main-highlight-color)" inputMode="numeric" key={index} maxLength={1} onChange={(event) => updateDigit(index, event.target.value)} onKeyDown={(event) => { if (event.key === "Backspace" && !digit && index > 0) inputs.current[index - 1]?.focus(); }} ref={(element) => { inputs.current[index] = element; }} value={digit} />)}
        </div>
        {!deliveryFailed && <p className="mt-4 font-jakarta text-xs text-(--ssc-uk-muted-color)">Development flow: the entered code is not checked with Twilio.</p>}
        {error && <p className="mt-4 font-jakarta text-xs text-red-300" role="alert">{error}</p>}
        <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-[#087f70] bg-(--ssc-uk-cta-button-background) px-6 py-3 font-jakarta text-sm font-bold disabled:cursor-not-allowed disabled:opacity-50" disabled={!complete || isSubmitting} onClick={() => void submit()} type="button">{isSubmitting ? "Saving request…" : "Submit request"}<ArrowRight className="rounded-full bg-white p-1 text-black" size={25} /></button>
      </div>
    </div>
  );
}
