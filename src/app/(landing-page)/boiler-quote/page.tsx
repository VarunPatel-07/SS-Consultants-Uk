import type { Metadata } from "next";

import { BoilerQuoteFlow } from "@/components/sections/boiler-quote/boiler-quote-flow";
import { getBoilerQuoteQuestions } from "@/lib/payload/boiler-quote";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";

export const metadata: Metadata = {
  title: "Get a Boiler Quote | SS Consultants UK",
  description: "Tell us what heating work you need and request a free boiler quote.",
  alternates: { canonical: "/boiler-quote" },
};

export default async function BoilerQuotePage() {
  const questionSet = await getBoilerQuoteQuestions();

  if (!questionSet) {
    return (
      <main className={`min-h-screen ${COMMON_SECTION_PADDING_TOP_BOTTOM}`}>
        <div className="ss-construction-uk-container py-15! text-center">
          <h1 className="font-jakarta text-3xl font-bold tracking-tight sm:text-5xl">Get a quote</h1>
          <p className="mt-3 font-jakarta text-sm text-(--ssc-uk-muted-color) sm:text-base">
            Our online quote form is temporarily unavailable. Please contact us and we’ll be happy to help.
          </p>
        </div>
      </main>
    );
  }

  return <BoilerQuoteFlow questionSet={questionSet} />;
}
