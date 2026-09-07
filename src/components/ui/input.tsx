import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-11 w-full rounded-xl border border-(--ssc-uk-border-color) bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-(--ssc-uk-muted-color) focus:border-(--ssc-uk-border-color) focus:ring-4 focus:ring-slate-950/10 disabled:cursor-not-allowed disabled:bg-(--ssc-uk-surface-color) ${className}`}
      {...props}
    />
  );
}
