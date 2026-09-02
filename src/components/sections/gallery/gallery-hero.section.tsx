"use client";
import { GalleryGrid } from "@/components/sections/gallery/gallery-grid.section";
import { gsap } from "@/lib/gsap";
import { COMMON_SCROLL_TRIGGER_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { GALLERY_IMAGES } from "@/utils/constants/gallery.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function GalleryHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const animation = COMMON_SCROLL_TRIGGER_ANIMATION({ trigger: sectionRef.current, start: "top 80%" });
      gsap.fromTo(gsap.utils.toArray(".gallery-reveal", sectionRef.current), animation.FROM, animation.TO);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={twMerge("bg-(--ssc-uk-main-white-color) font-jakarta", COMMON_SECTION_PADDING_TOP_BOTTOM)}
      aria-labelledby="gallery-title">
      <div className="w-full pt-10">
        <div className="ss-construction-uk-container">
          <div className="gallery-reveal mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <h1
              id="gallery-title"
              className="mt-4 text-[35px] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px]">
              A closer look at our
              <br />
              <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">heating work.</em>
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Browse recent installations, repairs and heating projects from our team.
            </p>
          </div>
          <div className="gallery-reveal w-full xl:max-w-[80%] mx-auto">
            <GalleryGrid images={GALLERY_IMAGES} />
          </div>
        </div>
      </div>
    </section>
  );
}
