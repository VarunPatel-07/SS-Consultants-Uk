import { ButtonHTMLAttributes } from "react";

export interface ButtonEleInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  btnStyle: "CTA_PRIMARY" | "CTA_SECONDARY";
  href?: string;
  target?: string;
  rel?: string;
  theme?: "LIGHT" | "DARK";
}
