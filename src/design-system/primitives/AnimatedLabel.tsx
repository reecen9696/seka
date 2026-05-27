import type { ReactNode } from "react";

/**
 * The vertical slide-up hover effect shared by every primary CTA on the site.
 * Renders the label twice and swaps them on `group-hover`, so it must live
 * inside an element carrying the `group` class (e.g. {@link Button}).
 */
export function AnimatedLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative">
      <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-[200%]">
        {children}
      </span>
      <span className="absolute inset-0 flex translate-y-[200%] items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}
