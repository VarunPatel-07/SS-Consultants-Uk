"use client";

import { BOILER_QUOTE_STORAGE_KEY } from "@/utils/constants/boiler-quote.constants";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import type {
  BoilerQuoteOption,
  BoilerQuoteProgress,
  BoilerQuoteQuestion,
  BoilerQuoteQuestionSet,
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

// Walks the saved answers through the question map. Stops at the first answer that no longer
// matches the CMS content, so progress saved before an edit is trimmed instead of breaking the flow.
const walkSelections = ({ questions, startQuestionId }: BoilerQuoteQuestionSet, selections: BoilerQuoteSelection[]) => {
  let question: BoilerQuoteQuestion | null = questions[startQuestionId] ?? null;
  for (const [index, selection] of selections.entries()) {
    const option: BoilerQuoteOption | undefined =
      question?.id === selection.questionId ? question.options.find((item) => item.id === selection.optionId) : undefined;
    if (!option) return { question: questions[startQuestionId] ?? null, validCount: index };
    question = option.nextQuestionId ? (questions[option.nextQuestionId] ?? null) : null;
  }
  return { question, validCount: selections.length };
};

// Longest chain of questions still ahead of (and including) this one. The visited set guards
// against loops an editor could create between questions in the CMS.
const remainingQuestionCount = (
  questions: BoilerQuoteQuestionSet["questions"],
  question: BoilerQuoteQuestion | null,
  visited: Set<string> = new Set(),
): number => {
  if (!question || visited.has(question.id)) return 0;
  const nextVisited = new Set(visited).add(question.id);
  return (
    1 +
    Math.max(
      0,
      ...question.options.map((option) =>
        remainingQuestionCount(questions, option.nextQuestionId ? (questions[option.nextQuestionId] ?? null) : null, nextVisited),
      ),
    )
  );
};

// The address and contact details steps that follow the questions.
const FINAL_STEP_COUNT = 2;

const EMPTY_CONTACT = { firstName: "", lastName: "", email: "", mobile: "" };
const EMPTY_PROGRESS: BoilerQuoteProgress = {
  selections: [],
  postcode: "",
  verifiedPostcode: "",
  address: "",
  contact: EMPTY_CONTACT,
};
const subscribeToHydration = () => () => undefined;

export function BoilerQuoteFlow({ questionSet }: { questionSet: BoilerQuoteQuestionSet }) {
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
      if (!saved) return EMPTY_PROGRESS;
      const parsed = JSON.parse(saved) as BoilerQuoteProgress;
      const { validCount } = walkSelections(questionSet, parsed.selections ?? []);
      return validCount === parsed.selections?.length
        ? parsed
        : { ...EMPTY_PROGRESS, selections: parsed.selections.slice(0, validCount) };
    } catch {
      window.localStorage.removeItem(BOILER_QUOTE_STORAGE_KEY);
      return EMPTY_PROGRESS;
    }
  });
  const question = useMemo(
    () => walkSelections(questionSet, progress.selections).question,
    [questionSet, progress.selections],
  );

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
          questionLabel: question.summaryLabel,
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
  const completedSteps = progress.selections.length + (stage === "details" ? 1 : 0);
  const totalSteps =
    progress.selections.length + remainingQuestionCount(questionSet.questions, question) + FINAL_STEP_COUNT;
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
            <QuoteProgressHeader stage={stage} percent={(completedSteps / totalSteps) * 100} />
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
