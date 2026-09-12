import { GalleryHeroSection } from "@/components/sections/gallery/gallery-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { getGalleryPage, isPopulatedMedia, normalizePayloadMediaURL } from "@/lib/payload/gallery";
import { getTestimonialSection } from "@/lib/payload/testimonials";
import type { GalleryImage } from "@/utils/interface/gallery.interface";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const cmsPage = await getGalleryPage();

  if (!cmsPage) return { alternates: { canonical: "/gallery" } };

  return {
    title: cmsPage.seo.title,
    description: cmsPage.seo.description,
    alternates: { canonical: cmsPage.seo.canonicalPath || "/gallery" },
    robots: cmsPage.seo.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function GalleryPage() {
  const cmsPage = await getGalleryPage();
  const testimonials = await getTestimonialSection("gallery-page");
  const cmsImages: GalleryImage[] = (cmsPage?.items ?? []).filter(isPopulatedMedia).flatMap((item) => {
    const imageURL = item.url || item.sizes?.hero?.url || item.sizes?.card?.url;
    return imageURL ? [{ id: String(item.id), image: normalizePayloadMediaURL(imageURL), alt: item.alt }] : [];
  });
  const gallery = cmsPage
    ? {
        header: {
          title: [
            [{ text: cmsPage.header.title }],
            ...(cmsPage.header.highlight ? [[{ text: cmsPage.header.highlight, variant: "brand" as const }]] : []),
          ],
          description: cmsPage.header.description ? [[{ text: cmsPage.header.description }]] : [],
        },
        items: cmsImages,
      }
    : undefined;

  return (
    <>
      {gallery && <GalleryHeroSection data={gallery} />}
      <TestimonialSection data={testimonials} />
      <ConsultationSection />
    </>
  );
}
