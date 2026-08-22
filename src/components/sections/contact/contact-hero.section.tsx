import CTAButton from "@/components/ui/ctaButton";

export function ContactHeroSection() {
  return (
    <section className="relative overflow-hidden bg-(--ssc-uk-main-white-color) px-4 py-[35px] font-jakarta sm:px-8 sm:py-[50px] lg:py-[60px] min-[1200px]:py-20" aria-labelledby="contact-hero-title">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" aria-hidden="true">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full border-[28px] border-(--ssc-uk-main-highlight-color) blur-sm" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full border-[38px] border-slate-700 blur-sm" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 id="contact-hero-title" className="text-[42px] font-bold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[58px] lg:text-[76px]">
          Let&apos;s <em className="font-lora font-bold italic">make your home</em>
          <br />
          <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">comfortable.</em>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl font-lora text-lg font-bold italic leading-7 text-slate-700 sm:text-xl sm:leading-8">
          Tell us what you need and we&apos;ll provide clear advice, careful workmanship and dependable heating support.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton btnStyle="CTA_PRIMARY" href="#contact">Start a Conversation</CTAButton>
          <CTAButton btnStyle="CTA_SECONDARY" theme="DARK" href="tel:07590514937">Call 07590 514937</CTAButton>
        </div>
      </div>
    </section>
  );
}
