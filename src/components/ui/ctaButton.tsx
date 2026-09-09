import { GET_BUTTON_STYLE } from "@/utils/constants/common.constants";
import { ButtonEleInterface } from "@/utils/interface//ui-components.interface";
import { ArrowUpRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

function CTAButton({ children, btnStyle, className, href, target, rel, theme = "DARK", ...props }: ButtonEleInterface) {
  const { parentWrapper, childrenWrapper } = GET_BUTTON_STYLE(btnStyle, theme);
  const title = typeof props.title === "string" ? props.title : typeof children === "string" ? children : undefined;

  let wrapperElem: React.ElementType = "button";
  if (href) wrapperElem = "a";
  const Tag = wrapperElem as React.ElementType;

  return (
    <Tag {...props} href={href} target={target} rel={rel} title={title} className={twMerge(parentWrapper, className)}>
      {btnStyle === "CTA_PRIMARY" ? (
        <span className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-(--ssc-uk-main-white-color) text-(--ssc-uk-main-black-color) flex items-center justify-center absolute top-1/2 -left-full -translate-y-1/2 group-hover/btn:left-1.5 transition-all duration-300">
          <ArrowUpRight className="font-semibold" />
        </span>
      ) : (
        <span
          className={twMerge(
            "absolute top-1/2 right-6 -translate-y-1/2 w-2 h-2 min-w-2 min-h-2 block rounded-full group-hover/btn:min-w-full group-hover/btn:min-h-full  group-hover/btn:right-0 transition-all duration-300",
            theme === "DARK" ? "bg-(--ssc-uk-main-white-color)" : "bg-(--ssc-uk-main-highlight-color)",
          )}></span>
      )}
      <span className={twMerge(childrenWrapper, "font-jakarta")}>{children}</span>
      {btnStyle === "CTA_PRIMARY" ? (
        <span className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-(--ssc-uk-main-white-color) text-(--ssc-uk-main-black-color) flex items-center justify-center absolute top-1/2 right-1.5 -translate-y-1/2 group-hover/btn:translate-x-[130%] transition-all duration-300">
          <ArrowUpRight className="font-semibold" />
        </span>
      ) : (
        <span
          className={twMerge(
            "absolute top-1/2 right-6 -translate-y-1/2 min-w-0 min-h-0  block rounded-full group-hover/btn:min-h-2.5 group-hover/btn:min-w-2.5  transition-all duration-500 z-10",
            theme === "DARK" ? "bg-(--ssc-uk-main-highlight-color)" : "bg-(--ssc-uk-main-white-color)",
          )}></span>
      )}
    </Tag>
  );
}

export default CTAButton;
