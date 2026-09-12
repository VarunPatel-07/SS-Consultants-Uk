// components/SmoothScroll.tsx
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "@/lib/gsap";
import { LenisRef, ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000); // Convert seconds to milliseconds
    }

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    // Route transitions replace the content inside the persistent Lenis root.
    // Recalculate its dimensions after Next has committed the new page.
    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.stop();

    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        lenis.resize();
        ScrollTrigger.refresh();
        lenis.start();
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  return (
    <ReactLenis ref={lenisRef} root options={{ autoRaf: false }}>
      <main className="w-full h-auto skyphr-main-wrapper">{children}</main>
    </ReactLenis>
  );
}
