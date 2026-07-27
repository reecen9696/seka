import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/**
 * The consistent in-page section header, left aligned by default: a short
 * 40px serif heading ("The problem", "Who we are") with optional body copy
 * beneath it. No dot, no secondary headline — the label carries the section
 * and the body explains it.
 *
 * Heading and body reveal on scroll one beat apart, so every section on the
 * site opens the same way without call sites having to ask for it.
 */
export function SectionIntro({
  title,
  children,
  tone = "dark",
  align = "left",
  className = "",
}: {
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
      <Reveal
        as="h2"
        className={`text-h2 !text-[40px] text-balance ${centered ? "mx-auto max-w-[800px]" : "md:max-w-[66.6667%]"}`}
      >
        {title}
      </Reveal>
      {children && (
        <Reveal
          delay={70}
          className={`text-18 flex flex-col gap-y-3 ${centered ? "mx-auto max-w-[680px]" : "md:max-w-[66.6667%]"} ${light ? "text-white/70" : ""}`}
        >
          {children}
        </Reveal>
      )}
    </div>
  );
}
