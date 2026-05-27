import type { ReactNode } from "react";

export type CardTone = "light" | "dark" | "black";

/** Card surface tones used across the site, all on the standard 10px radius. */
const TONES: Record<CardTone, string> = {
  light: "bg-grey-100 text-black", // on light sections
  dark: "bg-white/5 text-white", // translucent, on dark sections
  black: "bg-black text-white", // solid detail card
};

export function Card({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: CardTone;
  className?: string;
}) {
  return (
    <div className={`rounded-lg ${TONES[tone]} ${className}`}>
      {children}
    </div>
  );
}
