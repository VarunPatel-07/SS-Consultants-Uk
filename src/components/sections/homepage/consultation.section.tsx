"use client";

import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const EMAIL_ADDRESS = "info@sscukltd.com";
const PHONE_NUMBER = "07590 514937";

export function ConsultationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const elements = gsap.utils.toArray(".contact-reveal", sectionRef.current);
      const animation = COMMON_SCROLL_TRIGGER_ANIMATION({
        trigger: sectionRef.current,
        start: "top 85%",
      });
      gsap.fromTo(elements, animation.FROM, animation.TO);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={twMerge("bg-(--ssc-uk-gray-background-color) font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="consultation-title">
      <div className="ss-construction-uk-container">
        <div className="contact-reveal mx-auto max-w-3xl text-center">
          <h2 id="consultation-title" className="ssc-section-title">
            Let&apos;s <em className="ssc-section-title-highlight">Talk</em>
            <br />
            About Your <em className="ssc-section-title-highlight">Heating</em>
          </h2>
          <p className="ssc-section-description mx-auto mt-6 max-w-2xl">
            Tell us what you need and our team will get back to you with clear, practical advice.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-295 gap-6 md:grid-cols-[1fr_1.06fr] md:items-stretch">
          <div className="grid gap-6">
            <div className="contact-reveal rounded-lg px-7 py-9 text-(--ssc-uk-main-white-color) sm:px-14 sm:py-14 bg-(--ssc-uk-consultation-section-background-color) md:rounded-xl lg:rounded-2xl">
              <p className="text-sm text-slate-300">Email us</p>
              <a
                className="mt-2 block break-all text-2xl font-bold tracking-tight transition-colors hover:text-(--ssc-uk-main-highlight-color) hover:underline sm:text-3xl"
                href={`mailto:${EMAIL_ADDRESS}`}>
                {EMAIL_ADDRESS}
              </a>

              <p className="mt-10 text-sm text-slate-300">Call us</p>
              <a
                className="mt-2 block text-2xl font-bold tracking-tight transition-colors hover:text-(--ssc-uk-main-highlight-color) hover:underline sm:text-3xl"
                href="tel:07590514937">
                {PHONE_NUMBER}
              </a>
            </div>

            <div className="contact-reveal rounded-lg border border-slate-300 px-7 py-9 sm:px-14 sm:py-10 bg-(--ssc-uk-main-white-color) md:rounded-xl lg:rounded-2xl">
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">Our Service Area</h3>

              <div className="mt-7 space-y-6 text-slate-700">
                <div>
                  <h4 className="text-lg font-bold text-slate-950">Hatfield &amp; Hertfordshire</h4>
                  <p className="mt-1 max-w-md leading-7">Local boiler installation, servicing and heating support.</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-950">London</h4>
                  <p className="mt-1 max-w-md leading-7">
                    Professional heating services across London and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            className="contact-reveal rounded-lg border border-slate-300 px-7 py-9 sm:px-9 sm:py-10 bg-(--ssc-uk-main-white-color) md:rounded-xl lg:rounded-2xl"
            action={`mailto:${EMAIL_ADDRESS}`}
            method="post"
            encType="text/plain">
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              <label className="block text-base text-slate-600">
                Your Name
                <input
                  className="mt-3 block w-full border-0 border-b border-slate-300 bg-transparent px-0 pb-3 outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color)"
                  type="text"
                  name="name"
                  required
                />
              </label>
              <label className="block text-base text-slate-600">
                Your Email
                <input
                  className="mt-3 block w-full border-0 border-b border-slate-300 bg-transparent px-0 pb-3 outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color)"
                  type="email"
                  name="email"
                  required
                />
              </label>
              <label className="block text-base text-slate-600 sm:col-span-2">
                Your Contact No.
                <input
                  className="mt-3 block w-full border-0 border-b border-slate-300 bg-transparent px-0 pb-3 outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color)"
                  type="tel"
                  name="phone"
                />
              </label>
              <label className="block text-base text-slate-600 sm:col-span-2">
                Subject
                <input
                  className="mt-3 block w-full border-0 border-b border-slate-300 bg-transparent px-0 pb-3 outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color)"
                  type="text"
                  name="subject"
                  required
                />
              </label>
              <label className="block text-base text-slate-600 sm:col-span-2">
                Your Message <span className="text-sm text-slate-400">(optional)</span>
                <textarea
                  className="mt-3 block w-full border-0 border-b border-slate-300 bg-transparent px-0 pb-3 outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color) resize-none"
                  name="message"
                  rows={4}
                />
              </label>
            </div>

            <div className="pt-14 text-center">
              <button
                className="w-full rounded-full bg-(--ssc-uk-main-black-color) px-6 py-4 text-base font-bold text-(--ssc-uk-main-white-color) transition-colors hover:bg-(--ssc-uk-main-highlight-color)"
                type="submit">
                Send Enquiry
              </button>
              <p className="mt-6 text-sm text-slate-500">Your details are only used to respond to your enquiry.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
