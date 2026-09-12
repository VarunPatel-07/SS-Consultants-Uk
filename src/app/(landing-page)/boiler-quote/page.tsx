import type { Metadata } from "next";

import { BoilerQuoteFlow } from "@/components/sections/boiler-quote/boiler-quote-flow";

export const metadata: Metadata = {
  title: "Get a Boiler Quote | SS Consultants UK",
  description: "Tell us what heating work you need and request a free boiler quote.",
  alternates: { canonical: "/boiler-quote" },
};

export default function BoilerQuotePage() {
  return <BoilerQuoteFlow />;
}
