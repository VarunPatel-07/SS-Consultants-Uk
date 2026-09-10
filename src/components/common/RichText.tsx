import type { TextChunk } from "@/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

const variantClasses: Record<NonNullable<TextChunk["variant"]>, string> = {
  normal: "",
  bold: "font-bold",
  italic: "font-lora italic",
  brand: "font-lora font-bold italic text-(--ssc-uk-main-highlight-color)",
  muted: "text-(--ssc-uk-muted-color)",
};

export function RichText({
  content,
  className = "",
  commonChunkClassNames = "reveal-animation",
  parentWrapper = "",
}: {
  content: TextChunk[][];
  className?: string;
  commonChunkClassNames?: string;
  parentWrapper?: string;
}) {
  return (
    <span
      className={twMerge(
        "flex min-w-0 max-w-full flex-col items-start justify-start gap-3 md:items-start md:justify-start md:gap-4",
        parentWrapper,
      )}>
      {content?.map((line, lineIndex) => (
        <span
          className={twMerge(
            `flex min-w-0 max-w-full flex-wrap items-center justify-center gap-2 md:items-center md:justify-center md:gap-3`,
            className,
          )}
          key={`line-${lineIndex}`}>
          {line?.map((chunk, chunkIndex) => (
            <span
              className={twMerge(
                `${chunk.variant ? variantClasses[chunk.variant] : ""} ${chunk.classNames ?? ""}`,
                commonChunkClassNames,
              )}
              key={`chunk-${lineIndex}-${chunkIndex}`}>
              {chunk.text?.trim()}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
