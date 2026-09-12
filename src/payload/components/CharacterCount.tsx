"use client";

import { useField } from "@payloadcms/ui";
import type { FieldDescriptionClientProps } from "payload";

export function CharacterCount({ field, path }: FieldDescriptionClientProps) {
  const { value } = useField<string>({ path });
  const maxLength = "maxLength" in field && typeof field.maxLength === "number" ? field.maxLength : 0;
  const used = typeof value === "string" ? value.length : 0;
  const remaining = Math.max(maxLength - used, 0);

  return (
    <div
      style={{
        color: used > maxLength ? "var(--theme-error-500)" : "var(--theme-elevation-500)",
        display: "flex",
        fontSize: "0.8rem",
        justifyContent: "flex-end",
        marginTop: "0.35rem",
      }}
    >
      {used}/{maxLength} characters ({remaining} remaining)
    </div>
  );
}
