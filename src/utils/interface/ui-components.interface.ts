import { ButtonHTMLAttributes } from "react";

export interface ButtonEleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "CTA_PRIMARY" | "CTA_SECONDARY";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  theme?: "LIGHT" | "DARK";
}
