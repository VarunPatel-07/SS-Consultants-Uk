import { GalleryGrid } from "@/components/sections/gallery/gallery-grid.section";
import { GALLERY_IMAGES } from "@/utils/constants/gallery.constants";

export function GalleryHeroSection() {
  return (
    <section
      className="bg-(--ssc-uk-main-white-color) py-[35px] sm:py-[50px] lg:py-[60px] min-[1200px]:py-20 font-jakarta"
      aria-labelledby="gallery-title">
      <div className="ss-construction-uk-container">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <h1
            id="gallery-title"
            className="mt-4 text-[35px] font-bold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[42px] lg:text-[56px]">
            A closer look at our
            <br />
            <em className="font-lora font-bold italic text-(--ssc-uk-main-highlight-color)">heating work.</em>
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Browse recent installations, repairs and heating projects from our team.
          </p>
        </div>
        <div className="w-full xl:max-w-[80%] mx-auto">
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </div>
    </section>
  );
}
