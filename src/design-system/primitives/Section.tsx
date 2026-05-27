import type { ReactNode } from "react";

export type SectionTone = "surface" | "alt" | "ink";

const TONES: Record<SectionTone, string> = {
  surface: "bg-surface text-black",
  alt: "bg-surface-alt text-black",
  ink: "bg-ink text-white",
};

/**
 * The standard page section — one consistent vertical rhythm plus the page
 * container. Use it for every section so spacing never drifts between sections
 * or pages. `tone` switches the band background.
 */
export function Section({
  children,
  tone = "surface",
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      className={`overflow-clip py-16 md:py-24 ${TONES[tone]} ${className}`}
    >
      <div className={`container ${containerClassName}`}>{children}</div>
    </section>
  );
}
