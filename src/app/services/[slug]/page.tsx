import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { HOME_PAGE_DATA } from "@/app/content/pageContent/pageData/home.data";
import { getServicePageData, SERVICE_PAGE_DATA } from "@/app/content/pageContent/pageData/service.data";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { HeatingDesignedSection } from "@/components/sections/service/heating-designed.section";
import { InstallationIncludesSection } from "@/components/sections/service/installation-includes.section";
import { ServiceHeroSection } from "@/components/sections/service/service-hero.section";
import { WarmerHomeProcessSection } from "@/components/sections/service/warmer-home-process.section";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SERVICE_PAGE_DATA.map(({ slug }) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServicePageData(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceHeroSection service={service} />
      <InstallationIncludesSection />
      <HeatingDesignedSection />
      <WarmerHomeProcessSection />
      {HOME_PAGE_DATA.testimonials && <TestimonialSection data={HOME_PAGE_DATA.testimonials} />}
      {HOME_PAGE_DATA.faq && <FaqSection data={HOME_PAGE_DATA.faq} />}
      <ConsultationSection />
    </>
  );
}
