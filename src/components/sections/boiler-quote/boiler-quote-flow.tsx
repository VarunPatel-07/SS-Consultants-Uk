"use client";

import { BOILER_QUOTE_QUESTIONS, BOILER_QUOTE_STORAGE_KEY } from "@/utils/constants/boiler-quote.constants";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import type {
  BoilerQuoteProgress,
  BoilerQuoteQuestion,
  BoilerQuoteSelection,
} from "@/utils/interface/boiler-quote.interface";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { twMerge } from "tailwind-merge";
import { ContactDetailsStep } from "./contact-details-step";
import { OtpModal } from "./otp-modal";
import { QuoteSuccessModal } from "./quote-success-modal";
import { PostcodeStep } from "./postcode-step";
import { QuoteOptionStep } from "./quote-option-step";
import { QuoteProgressHeader } from "./quote-progress-header";
import { QuoteSelections } from "./quote-selections";
import { QuoteStageTransition } from "./quote-stage-transition";

const resolveQuestion = (selections: BoilerQuoteSelection[]): BoilerQuoteQuestion | null => {
  let questions = BOILER_QUOTE_QUESTIONS;
  for (const selection of selections) {
    const question = questions.find((item) => item.id === selection.questionId);
    const option = question?.options.find((item) => item.id === selection.optionId);
    if (!question || !option) return BOILER_QUOTE_QUESTIONS[0] ?? null;
    questions = option.suboptions;
  }
  return questions[0] ?? null;
};

const EMPTY_CONTACT = { firstName: "", lastName: "", email: "", mobile: "" };
const EMPTY_PROGRESS: BoilerQuoteProgress = {
  selections: [],
  postcode: "",
  verifiedPostcode: "",
  address: "",
  contact: EMPTY_CONTACT,
};
const subscribeToHydration = () => () => undefined;

export function BoilerQuoteFlow() {
  const [modal, setModal] = useState<"otp" | "success" | null>(null);
  const [otpDeliveryFailed, setOtpDeliveryFailed] = useState(false);
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const [progress, setProgress] = useState<BoilerQuoteProgress>(() => {
    if (typeof window === "undefined") return EMPTY_PROGRESS;
    try {
      const saved = window.localStorage.getItem(BOILER_QUOTE_STORAGE_KEY);
      return saved ? (JSON.parse(saved) as BoilerQuoteProgress) : EMPTY_PROGRESS;
    } catch {
      window.localStorage.removeItem(BOILER_QUOTE_STORAGE_KEY);
      return EMPTY_PROGRESS;
    }
  });
  const question = useMemo(() => resolveQuestion(progress.selections), [progress.selections]);

  useEffect(() => {
    if (mounted) window.localStorage.setItem(BOILER_QUOTE_STORAGE_KEY, JSON.stringify(progress));
  }, [progress, mounted]);

  const selectOption = (optionId: string) => {
    if (!question) return;
    const option = question.options.find((item) => item.id === optionId);
    if (!option) return;
    setProgress((current) => ({
      ...current,
      selections: [
        ...current.selections,
        {
          questionId: question.id,
          questionLabel: question.id === "boiler-type" ? "Boiler" : question.label.replace(/[?]$/, ""),
          optionId: option.id,
          optionLabel: option.label,
        },
      ],
    }));
  };

  const editSelection = (index: number) =>
    setProgress((current) => ({
      ...current,
      selections: current.selections.slice(0, index),
      postcode: "",
      verifiedPostcode: "",
      address: "",
      contact: EMPTY_CONTACT,
    }));
  const goBack = () => setProgress((current) => ({ ...current, selections: current.selections.slice(0, -1) }));
  const submitQuoteRequest = async () => {
    const response = await fetch("/api/submit-quote-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progress),
    });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) throw new Error(result.error || "Your quote request could not be saved.");

    setProgress(EMPTY_PROGRESS);
    setModal("success");
  };

  if (!mounted) return <div className="min-h-screen animate-pulse bg-(--ssc-uk-surface-color)" />;

  const stage = question ? "job" : progress.address ? "details" : "address";
  return (
    <main
      className={twMerge(
        "min-h-screen bg-[radial-gradient(circle_at_50%_0%,#1c2622_0%,var(--background)_48%)] text-foreground",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
      )}>
      <div>
        <div className="ss-construction-uk-container py-15!">
          <div className="mb-8 text-center">
            <p className="font-jakarta text-sm font-bold uppercase tracking-[0.22em] text-(--ssc-uk-main-highlight-color)">
              Free, no-obligation estimate
            </p>
            <h1 className="mt-3 font-jakarta text-3xl font-bold tracking-tight sm:text-5xl">
              Get a quote <span className="font-lora italic text-(--ssc-uk-main-highlight-color)">for your home</span>
            </h1>
            <p className="mt-3 font-jakarta text-sm text-(--ssc-uk-muted-color) sm:text-base">
              A few quick questions. No confusing forms.
            </p>
          </div>
          <div className="rounded-xl border border-(--ssc-uk-border-color) bg-[linear-gradient(135deg,#17201c,#111714)] shadow-2xl shadow-black/30">
            <QuoteProgressHeader stage={stage} />
            <div className="grid lg:grid-cols-[minmax(0,1fr)_260px]">
              <QuoteStageTransition key={question?.id ?? (progress.address ? "details" : "address")}>
                {question ? (
                  <QuoteOptionStep question={question} onSelect={selectOption} />
                ) : progress.address ? (
                  <ContactDetailsStep
                    contact={progress.contact ?? EMPTY_CONTACT}
                    onBack={() => setProgress((current) => ({ ...current, address: "" }))}
                    onChange={(contact) => setProgress((current) => ({ ...current, contact }))}
                    onCodeSent={(deliveryFailed) => {
                      setOtpDeliveryFailed(deliveryFailed);
                      setModal("otp");
                    }}
                  />
                ) : (
                  <PostcodeStep
                    postcode={progress.postcode}
                    verifiedPostcode={progress.verifiedPostcode ?? ""}
                    onBack={goBack}
                    onAddressSelected={(address) => setProgress((current) => ({ ...current, address }))}
                    onPostcodeChange={(postcode) =>
                      setProgress((current) => ({
                        ...current,
                        postcode,
                        verifiedPostcode: current.verifiedPostcode === postcode ? current.verifiedPostcode : "",
                        address: current.verifiedPostcode === postcode ? current.address : "",
                      }))
                    }
                    onVerified={(verifiedPostcode) =>
                      setProgress((current) => ({ ...current, postcode: verifiedPostcode, verifiedPostcode }))
                    }
                  />
                )}
              </QuoteStageTransition>
              <QuoteSelections
                address={progress.address}
                selections={progress.selections}
                onEdit={editSelection}
                onEditAddress={() => setProgress((current) => ({ ...current, address: "" }))}
              />
            </div>
          </div>
        </div>
      </div>
      {modal === "otp" && (
        <OtpModal
          deliveryFailed={otpDeliveryFailed}
          mobile={progress.contact?.mobile ?? ""}
          onClose={() => setModal(null)}
          onComplete={submitQuoteRequest}
        />
      )}
      {modal === "success" && <QuoteSuccessModal />}
    </main>
  );
}
