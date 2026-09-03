"use client";
import type { CommonPageDataInterface } from "@/app/utils/interface/page.interface";
import { RichText } from "@/components/common/RichText";
import { GalleryGrid } from "@/components/sections/gallery/gallery-grid.section";
import { gsap } from "@/lib/gsap";
import { COMMON_REVEL_ANIMATION } from "@/utils/constants/animation.constant";
import { COMMON_SECTION_PADDING_TOP_BOTTOM } from "@/utils/constants/common.constants";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function GalleryHeroSection({ data }: { data: NonNullable<CommonPageDataInterface["gallery"]> }) {
  const animationContainer = useRef(null);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-animation");
      gsap.fromTo(elements, COMMON_REVEL_ANIMATION.FROM, COMMON_REVEL_ANIMATION.TO);
    },
    { scope: animationContainer },
  );

  return (
    <section
      ref={animationContainer}
      className={twMerge(
        "bg-(--ssc-uk-main-white-color) font-jakarta",
        COMMON_SECTION_PADDING_TOP_BOTTOM,
        "pb-0!  sm:pb-0! md:pb-0! lg:pb-0! xl:pb-0!",
      )}
      aria-labelledby="gallery-title">
      <div className="w-full pt-20 xl:pt-10">
        <div className="ss-construction-uk-container">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <h1
              id="gallery-title"
              className="mt-4 text-[35px] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[68px]">
              <RichText
                content={data.header.title}
                parentWrapper="items-center! justify-center!"
                commonChunkClassNames="reveal-animation"
              />
            </h1>
            {data.header.description && (
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                <RichText
                  content={data.header.description}
                  parentWrapper="items-center! justify-center!"
                  commonChunkClassNames="reveal-animation"
                />
              </p>
            )}
          </div>
          <div className="reveal-animation w-full xl:max-w-[80%] mx-auto">
            <GalleryGrid images={data.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
