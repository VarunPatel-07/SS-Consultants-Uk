"use client";

import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function ConsultationSection({ data }: { data?: CommonPageDataInterface["consultation"] }) {
  const [subject, setSubject] = useState("");
  useEffect(() => {
    const selectBoiler = (event: Event) => {
      const name = (event as CustomEvent<unknown>).detail;
      if (typeof name === "string") setSubject(`Quote for ${name}`);
    };
    window.addEventListener("boiler-quote-requested", selectBoiler);
    return () => window.removeEventListener("boiler-quote-requested", selectBoiler);
  }, []);
  const containerRef = useRef<HTMLElement>(null);
  const email = data?.email ?? "info@sscukltd.com";
  const phone = data?.phone ?? "07590 514937";

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const titleSec = gsap.utils.toArray(".reveal-text-animation");
      const getTitleAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom top",
      });
      gsap.fromTo(titleSec, getTitleAnimations.FROM, getTitleAnimations.TO);

      // //  Now We will Write the GSAP Code for the Card Reveal Animations.
      const cards = gsap.utils.toArray(".reveal-animation");
      const getCardAnimations = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom top",
        // markers: true,
      });
      gsap.fromTo(cards, getCardAnimations.FROM, getCardAnimations.TO);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className={twMerge("bg-(--ssc-uk-gray-background-color) font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="consultation-title">
      <div className="ss-construction-uk-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="consultation-title" className="ssc-section-title reveal-animation">
            Let&apos;s <em className="ssc-section-title-highlight">Talk</em>
            <br />
            About Your <em className="ssc-section-title-highlight">Heating</em>
          </h2>
          <p className="ssc-section-description mx-auto mt-6 max-w-2xl reveal-animation">
            Tell us what you need and our team will get back to you with clear, practical advice.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-295 gap-6 lg:grid-cols-[1fr_1.06fr] md:items-stretch">
          <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="contact-reveal rounded-lg px-7 py-9 text-black lg:px-14 lg:py-10 border border-(--ssc-uk-border-color) bg-white md:rounded-xl lg:rounded-2xl reveal-animation">
              <div className="w-full h-full flex flex-col items-start justify-center">
                <div>
                  <p className="text-sm text-(--ssc-uk-main-black-color)">Email us</p>
                  <a
                    className="mt-2 block break-all text-2xl font-bold tracking-tight transition-all text-(--ssc-uk-main-black-color) hover:underline sm:text-3xl"
                    href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>

                <div>
                  <p className="mt-10 text-sm text-(--ssc-uk-main-black-color)">Call us</p>
                  <a
                    className="mt-2 block text-2xl font-bold tracking-tight text-(--ssc-uk-main-black-color) hover:underline sm:text-3xl transition-all"
                    href={`tel:${phone.replace(/\s/g, "")}`}>
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-reveal rounded-lg border border-(--ssc-uk-border-color) px-7 py-9 lg:px-14 lg:py-10 bg-background md:rounded-xl lg:rounded-2xl reveal-animation">
              <div className="w-full h-full flex flex-col items-start justify-center">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Our Service Area</h3>

                <div className="mt-7 space-y-6 text-(--ssc-uk-muted-color)">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Hatfield &amp; Hertfordshire</h4>
                    <p className="mt-1 max-w-md leading-7">Local boiler installation, servicing and heating support.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">London</h4>
                    <p className="mt-1 max-w-md leading-7">
                      Professional heating services across London and surrounding areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            className="contact-reveal rounded-lg border border-(--ssc-uk-border-color) px-7 py-9 sm:px-9 sm:py-10 bg-background md:rounded-xl lg:rounded-2xl reveal-animation"
            action={`mailto:${email}`}
            method="post"
            encType="text/plain">
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              <label className="block text-base font-medium text-(--ssc-uk-muted-color)">
                First Name
                <input
                  className="mt-3 block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]"
                  type="text"
                  name="name"
                  required
                />
              </label>
              <label className="block text-base font-medium text-(--ssc-uk-muted-color)">
                Last Name
                <input
                  className="mt-3 block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]"
                  type="text"
                  name="name"
                  required
                />
              </label>
              <label className="block text-base font-medium text-(--ssc-uk-muted-color) md:col-span-2">
                Your Email
                <input
                  className="mt-3 block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]"
                  type="email"
                  name="email"
                  required
                />
              </label>
              <label className="block text-base font-medium text-(--ssc-uk-muted-color) md:col-span-2">
                Your Contact No.
                <input
                  className="mt-3 block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]"
                  type="tel"
                  name="phone"
                />
              </label>

              <label className="block text-base font-medium text-(--ssc-uk-muted-color) md:col-span-2">
                Your Message <span className="text-sm text-(--ssc-uk-muted-color)">(optional)</span>
                <textarea
                  className="mt-3 block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)] resize-none"
                  name="message"
                  rows={4}
                />
              </label>
            </div>

            <div className="pt-8 text-center">
              <button
                className="w-full rounded-full bg-(--ssc-uk-main-white-color) px-6 py-4 text-base font-bold text-(--ssc-uk-main-black-color) transition-colors cursor-pointer"
                type="submit">
                Send Enquiry
              </button>
              <p className="mt-6 text-sm text-(--ssc-uk-muted-color)">
                Your details are only used to respond to your enquiry.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
