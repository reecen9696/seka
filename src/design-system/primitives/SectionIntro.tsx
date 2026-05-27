import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

/**
 * The consistent in-page section header: Eyebrow + h2 + optional body, left
 * aligned by default. Replaces the ad-hoc, sometimes-centred section headers
 * that made pages feel different from one another.
 */
export function SectionIntro({
  eyebrow,
  title,
  children,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const light = tone === "light";
  const centered = align === "center";
  return (
    <div
      className={`flex w-full flex-col gap-y-4 ${light ? "text-white" : "text-ink"} ${centered ? "items-center text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Eyebrow tone={tone} className={centered ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`text-h2 text-balance ${centered ? "mx-auto max-w-[800px]" : "max-w-[600px]"}`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`text-18 flex flex-col gap-y-3 ${centered ? "mx-auto max-w-[680px]" : "max-w-[560px]"} ${light ? "text-white/70" : ""}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
