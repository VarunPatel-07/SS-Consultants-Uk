import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`h-11 w-full rounded-xl border border-slate-200 bg-(--ssc-uk-main-white-color) px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-4 focus:ring-slate-950/10 disabled:cursor-not-allowed disabled:bg-slate-100 ${className}`}
      {...props}
    />
  );
}
