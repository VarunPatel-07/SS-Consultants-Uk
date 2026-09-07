import CallToActionSection from "@/components/sections/common/call-to-action-section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { HeatingDesignedSection } from "@/components/sections/service/heating-designed.section";
import { InstallationIncludesSection } from "@/components/sections/service/installation-includes.section";
import { ServiceHeroSection } from "@/components/sections/service/service-hero.section";
import { WarmerHomeProcessSection } from "@/components/sections/service/warmer-home-process.section";
import { getServicePageData, SERVICE_PAGE_DATA } from "@/content/pageContent/pageData/service";
import { SERVICE_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function generateStaticParams() {
  return SERVICE_PAGE_DATA.flatMap(({ serviceHeroSection }) =>
    serviceHeroSection ? [{ slug: serviceHeroSection.slug }] : [],
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = getServicePageData(slug);

  if (!pageData) notFound();

  return (
    <>
      {pageData?.serviceHeroSection && <ServiceHeroSection service={pageData?.serviceHeroSection} />}
      {pageData?.whatOurServiceInclude && <InstallationIncludesSection data={pageData.whatOurServiceInclude} />}
      {pageData?.heatingSolutionDesignForYou && <HeatingDesignedSection data={pageData?.heatingSolutionDesignForYou} />}
      {pageData?.process && <WarmerHomeProcessSection data={pageData?.process} />}
      {pageData.testimonials && <TestimonialSection data={pageData.testimonials} />}
      {pageData.callToActionSection && (
        <div className={twMerge("w-full", SERVICE_SECTION_PADDING_TOP_BOTTOM)}>
          <CallToActionSection data={pageData.callToActionSection} />
        </div>
      )}
      {pageData?.faq && <FaqSection data={pageData.faq} />}
      <ConsultationSection />
    </>
  );
}
