import type { ReactNode } from "react";

/**
 * Small rounded pill used for credentials/labels. `tone="light"` sits on dark
 * surfaces (founder cards); `tone="dark"` is filled on light surfaces;
 * `tone="outline"` is a hairline pill on light surfaces (industry/filter tags).
 */
export function Tag({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark" | "outline";
}) {
  const tones = {
    light: "bg-white/10 text-white/60",
    dark: "bg-black/5 text-black/60",
    outline: "border border-black/10 text-black/70",
  }[tone];
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[13px] leading-none ${tones}`}
    >
      {children}
    </span>
  );
}
