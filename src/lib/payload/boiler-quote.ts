import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import type { QuoteQuestion } from "@/payload-types";
import type { BoilerQuoteQuestion, BoilerQuoteQuestionSet } from "@/utils/interface/boiler-quote.interface";

const relationId = (value: number | QuoteQuestion | null | undefined) =>
  typeof value === "object" && value !== null ? value.id : value;

export const getBoilerQuoteQuestions = cache(async (): Promise<BoilerQuoteQuestionSet | null> => {
  try {
    const payload = await getPayload({ config });
    // Depth 0 keeps nextQuestion as an ID; the client walks the flat map instead of a nested tree.
    const { docs } = await payload.find({ collection: "quote-questions", depth: 0, pagination: false, sort: "createdAt" });
    const keysById = new Map(docs.map((doc) => [doc.id, doc.key]));
    const start = docs.find((doc) => doc.isFirstQuestion) ?? docs[0];
    if (!start) return null;

    const questions = Object.fromEntries(
      docs.map((doc): [string, BoilerQuoteQuestion] => [
        doc.key,
        {
          id: doc.key,
          eyebrow: doc.eyebrow,
          label: doc.label,
          description: doc.description || undefined,
          summaryLabel: doc.summaryLabel || doc.label.replace(/[?]$/, ""),
          options: (doc.options ?? []).map((option) => {
            const nextId = relationId(option.nextQuestion);
            return {
              id: option.value,
              label: option.label,
              description: option.description || undefined,
              icon: option.icon || undefined,
              nextQuestionId: nextId === undefined || nextId === null ? undefined : keysById.get(nextId),
            };
          }),
        },
      ]),
    );

    return { startQuestionId: start.key, questions };
  } catch (error) {
    console.error("Unable to load quote questions from Payload.", error);
    return null;
  }
});
