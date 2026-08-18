import { FooterBarSection } from "@/components/sections/common/footerbar.section";
import { NavbarSection } from "@/components/sections/common/navbar.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { FaqSection } from "@/components/sections/homepage/faq.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { ServiceHeroSection } from "@/components/sections/service/service-hero.section";
import { InstallationIncludesSection } from "@/components/sections/service/installation-includes.section";
import { HeatingDesignedSection } from "@/components/sections/service/heating-designed.section";
import { WarmerHomeProcessSection } from "@/components/sections/service/warmer-home-process.section";
import { SERVICE_CONTENT, getServiceBySlug } from "@/utils/constants/service.constants";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SERVICE_CONTENT.map(({ slug }) => ({ slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <NavbarSection />
      <ServiceHeroSection service={service} />
      <InstallationIncludesSection />
      <HeatingDesignedSection />
      <WarmerHomeProcessSection />
      <TestimonialSection />
      <FaqSection />
      <ConsultationSection />
      <FooterBarSection />
    </>
  );
}
