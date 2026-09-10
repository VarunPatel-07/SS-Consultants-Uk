import { GalleryHeroSection } from "@/components/sections/gallery/gallery-hero.section";
import { ConsultationSection } from "@/components/sections/homepage/consultation.section";
import { TestimonialSection } from "@/components/sections/homepage/testimonial.section";
import { GALLERY_PAGE_DATA } from "@/content/pageContent/pageData/gallery.data";
import { getGalleryPage, isPopulatedMedia, normalizePayloadMediaURL } from "@/lib/payload/gallery";
import { getTestimonialSection } from "@/lib/payload/testimonials";
import type { GalleryImage } from "@/utils/interface/gallery.interface";
import type { Metadata } from "next";

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const cmsPage = await getGalleryPage();

  if (!cmsPage?.seo?.title || !cmsPage.seo.description) {
    return { ...GALLERY_PAGE_DATA.metadata, alternates: { canonical: "/gallery" } };
  }

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
  const sections = GALLERY_PAGE_DATA.sections ?? [];
  const cmsImages: GalleryImage[] = (cmsPage?.items ?? []).filter(isPopulatedMedia).flatMap((item) => {
    const imageURL = item.url || item.sizes?.hero?.url || item.sizes?.card?.url;
    return imageURL ? [{ id: String(item.id), image: normalizePayloadMediaURL(imageURL), alt: item.alt }] : [];
  });
  const fallbackGallery = GALLERY_PAGE_DATA.gallery;
  const gallery = fallbackGallery
    ? {
        header: {
          title: cmsPage?.header?.title
            ? [
                [{ text: cmsPage.header.title }],
                ...(cmsPage.header.highlight ? [[{ text: cmsPage.header.highlight, variant: "brand" as const }]] : []),
              ]
            : fallbackGallery.header.title,
          description: cmsPage?.header?.description
            ? [[{ text: cmsPage.header.description }]]
            : fallbackGallery.header.description,
        },
        items: cmsImages.length > 0 ? cmsImages : fallbackGallery.items,
      }
    : undefined;

  return (
    <>
      {sections.includes("hero") && gallery && <GalleryHeroSection data={gallery} />}
      {sections.includes("testimonials") && <TestimonialSection data={testimonials} />}
      <ConsultationSection />
    </>
  );
}
