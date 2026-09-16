import BgAbstractImage from "@/assets/images/webp/skyphr-hero-background.webp";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
function HeroBgAbstract({ className = "", heroBackGroundGlow }: { className?: string; heroBackGroundGlow?: string }) {
  return (
    <>
      <Image
        width={1500}
        height={1000}
        src={BgAbstractImage}
        alt=""
        title=""
        className={twMerge("w-full h-full absolute inset-0 z-10 object-cover opacity-70 pointer-events-none", className)}
        loading="eager"
        fetchPriority="high"
        priority={true}
      />
      <div
        className={twMerge(
          "w-full aspect-square absolute inset-0 pointer-events-none flex items-center justify-center blur-[200px] rounded-[200%] opacity-7",
          heroBackGroundGlow,
        )}
        style={{
          background: `
radial-gradient(circle at center, rgba(93,187,174,0.6) 0%, rgba(93,187,174,0.3) 30%, transparent 60%),
linear-gradient(to top, #5dbbae 0%, #131313 100%)
`,
        }}
      />
    </>
  );
}

export default HeroBgAbstract;
