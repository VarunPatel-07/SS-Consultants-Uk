"use client";

import { getPhoneHref, useSiteSettings } from "@/components/providers/site-settings-provider";
import { BOILER_SERVICES } from "@/content/pageContent/common.data";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { toUKPhoneE164, UK_PHONE_ERROR } from "@/utils/mobile-number";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function ConsultationSection({ serviceName }: { serviceName?: string }) {
  const siteSettings = useSiteSettings();
  const [subject, setSubject] = useState("");
  const [selectedService, setSelectedService] = useState(serviceName ?? "");
  useEffect(() => {
    const selectBoiler = (event: Event) => {
      const name = (event as CustomEvent<unknown>).detail;
      if (typeof name === "string") {
        setSelectedService(name);
        setSubject(`Quote for ${name}`);
      }
    };
    window.addEventListener("boiler-quote-requested", selectBoiler);
    return () => window.removeEventListener("boiler-quote-requested", selectBoiler);
  }, []);
  const containerRef = useRef<HTMLElement>(null);
  const email = siteSettings.email;
  const phone = siteSettings.phone;

  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent">("idle");
  const [submitError, setSubmitError] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  // The contact number is optional, but when given it must be a UK number.
  const phoneIsValid = !contactPhone.trim() || toUKPhoneE164(contactPhone) !== null;
  const showPhoneError = phoneTouched && !phoneIsValid;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const service = formData.get("service")?.toString().trim() ?? "";
    if (!phoneIsValid) {
      setPhoneTouched(true);
      return;
    }
    setSubmitState("sending");
    setSubmitError("");
    try {
      const response = await fetch("/api/submit-contact-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: contactPhone,
          service,
          subject: subject || (service ? `Enquiry about ${service}` : "Enquiry from website"),
          message: formData.get("message"),
          submittedFrom: window.location.pathname,
          website: formData.get("website"),
        }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "We couldn’t send your enquiry. Please try again or call us.");
      form.reset();
      setContactPhone("");
      setPhoneTouched(false);
      setSelectedService(serviceName ?? "");
      setSubject("");
      setSubmitState("sent");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "We couldn’t send your enquiry. Please try again or call us.");
      setSubmitState("idle");
    }
  };

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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-1">
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
                    href={getPhoneHref(phone)}>
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
            onSubmit={(event) => void handleSubmit(event)}>
            <input aria-hidden="true" autoComplete="off" className="hidden" name="website" tabIndex={-1} type="text" />
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              <label className="block text-base font-medium text-(--ssc-uk-muted-color)">
                <input
                  className="block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-(--ssc-uk-muted-color) focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  aria-label="First Name"
                  required
                />
              </label>
              <label className="block text-base font-medium text-(--ssc-uk-muted-color)">
                <input
                  className="block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-(--ssc-uk-muted-color) focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  required
                />
              </label>
              <label className="block text-base font-medium text-(--ssc-uk-muted-color) md:col-span-2">
                <input
                  className="block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-(--ssc-uk-muted-color) focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  required
                />
              </label>
              <label className="block text-base font-medium text-(--ssc-uk-muted-color) md:col-span-2">
                <input
                  className={twMerge(
                    "block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-(--ssc-uk-muted-color) focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)]",
                    showPhoneError && "border-red-500 focus:border-red-500 focus:shadow-[0_1px_0_#ef4444]",
                  )}
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel-national"
                  maxLength={20}
                  placeholder="Contact Number (UK)"
                  aria-label="Contact Number"
                  aria-invalid={showPhoneError}
                  aria-describedby={showPhoneError ? "contact-phone-error" : undefined}
                  value={contactPhone}
                  onBlur={() => setPhoneTouched(true)}
                  onChange={(event) => {
                    if (/^[\d\s()+-]*$/.test(event.target.value)) setContactPhone(event.target.value);
                  }}
                />
                {showPhoneError && (
                  <span className="mt-2 block text-sm font-normal text-red-400" id="contact-phone-error" role="alert">
                    {UK_PHONE_ERROR}
                  </span>
                )}
              </label>

              <label className="block text-base font-medium text-(--ssc-uk-muted-color) md:col-span-2">
                <select
                  className="block w-full appearance-none rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors focus:border-(--ssc-uk-main-highlight-color)"
                  name="service"
                  aria-label="Service required"
                  value={selectedService}
                  onChange={(event) => {
                    const value = event.target.value;
                    setSelectedService(value);
                    setSubject(value ? `Enquiry about ${value}` : "");
                  }}
                  required>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {BOILER_SERVICES.map(({ label }) => (
                    <option value={label} key={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-base font-medium text-(--ssc-uk-muted-color) md:col-span-2">
                <textarea
                  className="block w-full rounded-none border-0 border-b border-(--ssc-uk-border-color) bg-transparent px-0 py-3 text-foreground outline-none transition-colors placeholder:text-(--ssc-uk-muted-color) focus:border-(--ssc-uk-main-highlight-color) focus:shadow-[0_1px_0_var(--ssc-uk-main-highlight-color)] resize-none"
                  name="message"
                  rows={4}
                  placeholder="Type your message here (optional)"
                  aria-label="Your Message (optional)"
                />
              </label>
            </div>

            <div className="pt-8 text-center">
              <button
                className="w-full rounded-full bg-(--ssc-uk-main-white-color) px-6 py-4 text-base font-bold text-(--ssc-uk-main-black-color) transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitState === "sending"}
                type="submit">
                {submitState === "sending" ? "Sending…" : "Send Enquiry"}
              </button>
              {submitError ? (
                <p className="mt-6 text-sm text-red-400" role="alert">
                  {submitError}
                </p>
              ) : submitState === "sent" ? (
                <p className="mt-6 text-sm text-(--ssc-uk-main-highlight-color)" role="status">
                  Thank you — your enquiry has been sent. We’ll be in touch shortly.
                </p>
              ) : (
                <p className="mt-6 text-sm text-(--ssc-uk-muted-color)">
                  Your details are only used to respond to your enquiry.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
