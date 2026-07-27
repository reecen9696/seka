import { createElement, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useReveal, type RevealOptions } from "./useReveal";

/**
 * Scroll reveal — the one way content enters the page.
 *
 * Wrap a section, a card, or a grid cell and it fades and lifts into place the
 * first time it reaches the viewport, once. The motion styles live in
 * `src/index.css` under `[data-reveal]`; the timing lives in {@link useReveal}.
 *
 *   <Reveal>…</Reveal>                          // the default 18px lift
 *   <Reveal as="article" delay={stagger(i)}>…</Reveal>
 *   <Reveal distance={0}>…</Reveal>             // straight fade, no travel
 *
 * Prefer `as` over an extra wrapper so the DOM stays flat — and reveal joined
 * grids (hairline frames, marquees) as one block rather than cell by cell, or
 * the seams tear open while the cells travel.
 */

/** Elements a Reveal can render as — extend the union if a section needs another. */
type RevealTag =
  | "div"
  | "section"
  | "article"
  | "figure"
  | "aside"
  | "dl"
  | "ul"
  | "li"
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3";

export type RevealProps = RevealOptions & {
  /** Render as this element instead of a wrapper `div`, keeping the DOM flat. */
  as?: RevealTag;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

export function Reveal({
  as = "div",
  className = "",
  style,
  children,
  ...options
}: RevealProps) {
  const reveal = useReveal<HTMLElement>(options);
  return createElement(
    as as ElementType,
    {
      ...reveal,
      className,
      style: { ...style, ...reveal.style },
    },
    children,
  );
}
