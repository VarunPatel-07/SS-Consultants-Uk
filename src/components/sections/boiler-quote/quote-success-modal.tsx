import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function QuoteSuccessModal() {
  return (
    <div aria-modal="true" className="fixed inset-0 z-100 flex touch-pan-y items-center justify-center overflow-y-auto overscroll-contain bg-black/75 px-4 py-6 backdrop-blur-sm" data-lenis-prevent role="dialog">
      <div className="w-full max-w-md rounded-xl border border-(--ssc-uk-border-color) bg-[linear-gradient(135deg,#17201c,#111714)] p-7 text-center shadow-2xl sm:p-10">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full border-2 border-(--ssc-uk-main-highlight-color) text-(--ssc-uk-main-highlight-color)"><Check size={35} /></span>
        <h2 className="mt-6 font-jakarta text-2xl font-bold">Your quote request is in!</h2>
        <p className="mt-3 font-jakarta text-sm leading-6 text-(--ssc-uk-muted-color)">Thank you. Our team will review your details and contact you about your quote.</p>
        <Link className="mt-7 flex w-full items-center justify-center gap-3 rounded-full border border-[#087f70] bg-(--ssc-uk-cta-button-background) px-6 py-3 font-jakarta text-sm font-bold" href="/">Back to website<ArrowRight className="rounded-full bg-white p-1 text-black" size={25} /></Link>
      </div>
    </div>
  );
}
