import type { ReactNode } from "react";

/**
 * Small label preceded by a brand-sky dot, used above section headings.
 * `tone="light"` dims the text for placement on dark surfaces.
 */
export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-x-[9px] ${className}`}>
      <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
      <h6 className={`text-eyebrow ${tone === "light" ? "text-white/70" : ""}`}>
        {children}
      </h6>
    </div>
  );
}
