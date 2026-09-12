"use client";

import { useGSAP } from "@gsap/react";
import type { ReactNode } from "react";
import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";

export function QuoteStageTransition({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!stageRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(stageRef.current, { clearProps: "all" });
        return;
      }

      gsap.fromTo(stageRef.current, COMMON_REVEL_ANIMATION.FROM, {
        ...COMMON_REVEL_ANIMATION.TO,
        duration: 0.45,
        stagger: 0,
      });
    },
    { scope: stageRef },
  );

  return <div className="min-h-130" ref={stageRef}>{children}</div>;
}
