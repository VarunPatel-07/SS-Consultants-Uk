import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

import type { TestimonialSectionInterface } from "@/utils/interface//data.interface";

type TestimonialPage = "homepage" | "gallery-page" | "service";

export const getTestimonialSection = cache(
  async (page: TestimonialPage, serviceSlug?: string): Promise<TestimonialSectionInterface> => {
    try {
      const payload = await getPayload({ config });
      const [settings, testimonialResults] = await Promise.all([
        payload.findGlobal({ slug: "site-settings", depth: 0 }),
        payload.find({ collection: "testimonials", depth: 0, limit: 100, pagination: false, sort: "sortOrder" }),
      ]);

      let override:
        | {
            title?: string | null;
            highlight?: string | null;
            description?: string | null;
            testimonials?: (number | string | { id: number | string })[] | null;
          }
        | null
        | undefined;

      if (page === "homepage") {
        override = (await payload.findGlobal({ slug: "homepage", depth: 0 })).testimonialsSection;
      } else if (page === "gallery-page") {
        override = (await payload.findGlobal({ slug: "gallery-page", depth: 0 })).testimonialsSection;
      } else if (serviceSlug) {
        override = (
          await payload.find({ collection: "services", where: { slug: { equals: serviceSlug } }, depth: 0, limit: 1 })
        ).docs[0]?.testimonialsSection;
      }

      const selectedIds = new Set(
        override?.testimonials?.map((item) => String(typeof item === "object" ? item.id : item)) ?? [],
      );
      const selectedTestimonials = selectedIds.size
        ? testimonialResults.docs.filter((testimonial) => selectedIds.has(String(testimonial.id)))
        : testimonialResults.docs;

      return {
        header: {
          title: [
            ...(override?.title || settings.testimonialDefaults?.title
              ? [[{ text: override?.title || settings.testimonialDefaults?.title || "" }]]
              : []),
            ...(override?.highlight || settings.testimonialDefaults?.highlight
              ? [
                  [
                    {
                      text: override?.highlight || settings.testimonialDefaults?.highlight || "",
                      variant: "brand" as const,
                    },
                  ],
                ]
              : []),
          ],
          description:
            override?.description || settings.testimonialDefaults?.description
              ? [[{ text: override?.description || settings.testimonialDefaults?.description || "" }]]
              : [],
        },
        items: selectedTestimonials.map((testimonial) => ({
          name: testimonial.name,
          quote: testimonial.quote,
          rating: testimonial.rating,
          designation: testimonial.designation || undefined,
          location: "",
          service: "",
        })),
      };
    } catch (error) {
      console.error("Unable to load testimonials from Payload.", error);
      return {
        header: { title: [], description: [] },
        items: [],
      };
    }
  },
);
