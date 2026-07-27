import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * Centered section intro: optional eyebrow, an h2, and a supporting paragraph.
 * Matches the pattern in CompaniesIntro / WhoWeAre. Use `tone="light"` on
 * dark backgrounds. Each line reveals a beat after the one above it.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-y-4 text-center ${className}`}
    >
      {eyebrow && (
        <Reveal distance={10}>
          <Eyebrow tone={tone} className="justify-center pb-1">
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={eyebrow ? 70 : 0}
        className={`text-h2 mx-auto w-full max-w-[840px] text-balance ${light ? "text-white" : ""}`}
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={eyebrow ? 140 : 70}
          className={`text-18 mx-auto w-full max-w-[680px] ${light ? "text-white/70" : "text-black/70"}`}
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
