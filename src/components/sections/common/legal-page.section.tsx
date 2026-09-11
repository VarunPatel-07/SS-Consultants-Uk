"use client";
import { RichText as PayloadRichText } from "@payloadcms/richtext-lexical/react";
import type { PrivacyPolicy } from "@/payload-types";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function LegalPageSection({
  title,
  description,
  content,
}: {
  title: string;
  description: string;
  content?: PrivacyPolicy["content"];
}) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <section
      ref={animationContainer}
      className={twMerge("ss-construction-uk-container min-h-[55vh] font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="legal-page-title">
      <div className="w-full pt-25! xl:pt-17! pb-12">
        <h1
          id="legal-page-title"
          className="reveal-animation text-[35px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px] font-bold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-(--ssc-uk-muted-color) reveal-animation">{description}</p>
        {content && <PayloadRichText className="legal-rich-text mt-12 max-w-4xl text-base leading-8 text-(--ssc-uk-muted-color) reveal-animation" data={content} />}
      </div>
    </section>
  );
}
