import aboutImage from "@/assets/images/webp/ss-consultant-about-us-section.webp";
import quoteIcon from "@/assets/images/svg/quote.svg";
import CTAButton from "@/components/ui/ctaButton";
import { ABOUT_FEATURES } from "@/utils/constants/about.constants";
import { Phone } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="bg-(--ssc-uk-main-white-color) py-[35px] sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta" aria-labelledby="about-title">
      <div className="ss-construction-uk-container grid gap-6 lg:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-8 lg:gap-11 xl:gap-16">
        <div className="relative overflow-hidden rounded-lg bg-slate-100 md:rounded-xl lg:rounded-2xl">
          <Image
            className="h-full min-h-[480px] w-full object-cover object-center sm:min-h-[590px]"
            src={aboutImage}
            alt="Heating engineer working on a boiler system"
          />
          <div className="absolute bottom-0 right-0 min-w-[190px] rounded-tl-[34px] bg-(--ssc-uk-main-white-color) px-8 py-7 text-left sm:min-w-[230px] sm:px-11 sm:py-9">
            <strong className="block text-5xl font-bold leading-none tracking-tight text-slate-950 sm:text-6xl">
              22+
            </strong>
            <span className="mt-3 block text-base leading-6 text-slate-700">
              Years of heating
              <br />
              experience
            </span>
          </div>
        </div>

        <div>
          <h2
            id="about-title"
            className="ssc-section-title mt-7 max-w-[620px]">
            Heating expertise
            <br />
            <em className="ssc-section-title-highlight">you can rely on.</em>
          </h2>
          <div className="mt-7 max-w-[650px] space-y-4 text-base leading-7 text-slate-700 sm:text-lg">
            <p>
              Based in Hatfield and serving homes across Hertfordshire and London, SS Consultants delivers dependable
              boiler, plumbing and central-heating services with clear advice and careful workmanship.
            </p>
            <p>
              From routine servicing and repairs to complete heating installations, every job is completed to a high
              professional standard—with the same attention whether the work is large or small.
            </p>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-lg border border-slate-200 md:grid-cols-2 md:rounded-xl lg:rounded-2xl">
            {ABOUT_FEATURES.map(({ title, description, icon: Icon }, index) => (
              <div
                className={`flex items-center gap-4 px-5 py-5 ${index > 1 ? "border-t" : ""} ${index % 2 === 1 ? "sm:border-l" : ""} border-slate-200`}
                key={title}>
                <Icon aria-hidden="true" className="h-10 w-10 shrink-0 text-(--ssc-uk-main-highlight-color)" strokeWidth={1.7} />
                <div>
                  <strong className="block text-sm font-bold text-slate-950 sm:text-base">{title}</strong>
                  <span className="mt-1 block text-xs text-slate-600 sm:text-sm">{description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <CTAButton btnStyle="CTA_PRIMARY" href="#contact">
              Learn More About Us
            </CTAButton>
            <CTAButton btnStyle="CTA_SECONDARY" theme="LIGHT" className="" href="tel:07590514937">
              <span className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
                <span className="">Call 07590 514937</span>
              </span>
            </CTAButton>
          </div>
        </div>
      </div>

      <div className="ss-construction-uk-container mt-10! lg:mt-14!">
        <blockquote className="rounded-lg border border-slate-200 bg-slate-50 px-6 py-6 text-lg text-slate-800 sm:px-10 sm:text-xl md:rounded-xl lg:rounded-2xl">
          <Image className="mr-1 -mt-3 inline-block h-12 w-12 align-top" src={quoteIcon} alt="" aria-hidden="true" />
          Every little count and every job is important for us whether you need a complete central heating system
          upgrade or a simple boiler repair, we’re here to help. Plus, for your peace of mind, all our work is fully
          insured with £5 million public liability coverage and every installations comes with a 24-month work
          guarantee.
        </blockquote>
      </div>
    </section>
  );
}
