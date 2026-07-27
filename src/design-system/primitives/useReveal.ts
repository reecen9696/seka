import { useEffect, useRef, useState, type CSSProperties, type TransitionEvent } from "react";

/**
 * The machinery behind {@link Reveal} — when content is released, not how it
 * moves. The motion itself lives in `src/index.css` under `[data-reveal]`.
 *
 * Three things keep it off the scroll path:
 *  - one shared IntersectionObserver for the whole page, not one per element;
 *  - each element is unobserved the moment it lands, so the observer's work
 *    shrinks as you scroll rather than growing;
 *  - only opacity and transform animate, and `will-change` is dropped once the
 *    transition finishes.
 */

/** A reveal never fires twice, so its callback is stored per element and dropped on use. */
const PENDING = new WeakMap<Element, () => void>();

let observer: IntersectionObserver | undefined;

function getObserver() {
  observer ??= new IntersectionObserver(
    (entries, io) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        const onEnter = PENDING.get(entry.target);
        PENDING.delete(entry.target);
        onEnter?.();
      }
    },
    {
      // Fire a little before the element is fully on screen: by the time you
      // have scrolled to it, it has already arrived. Any more than this and
      // the motion reads as chasing the scroll.
      rootMargin: "0px 0px -8% 0px",
      threshold: 0,
    },
  );
  return observer;
}

function observeOnce(el: Element, onEnter: () => void) {
  PENDING.set(el, onEnter);
  getObserver().observe(el);
  return () => {
    PENDING.delete(el);
    getObserver().unobserve(el);
  };
}

/**
 * `hidden` → `in` starts the transition; `in` → `done` strips the attribute
 * once it has landed, leaving the element with no reveal styling at all.
 */
type RevealState = "hidden" | "in" | "done";

export type RevealOptions = {
  /** Start offset in ms. Stagger siblings with {@link stagger}; keep it under ~200ms. */
  delay?: number;
  /** How far it travels, in px. `0` is a straight fade. Defaults to the 18px token. */
  distance?: number;
  /** Transition length in ms. Defaults to the 420ms token — quick on purpose. */
  duration?: number;
};

/**
 * Row-wise stagger for grids: cells in a row start 60ms apart and every row
 * starts fresh, so a nine-cell grid never runs half a second behind the scroll.
 */
export function stagger(index: number, columns = 3, step = 60) {
  return (index % columns) * step;
}

/**
 * The hook behind {@link Reveal}. Use it when the element already exists and
 * you do not want an extra wrapper in the DOM — spread the result onto it.
 * Call it once per element (it holds a ref), so lists want `<Reveal>` instead.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({
  delay = 0,
  distance,
  duration,
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);
  // Without observer support, start revealed rather than hidden forever.
  const [state, setState] = useState<RevealState>(() =>
    typeof IntersectionObserver === "undefined" ? "done" : "hidden",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    return observeOnce(el, () => setState("in"));
  }, []);

  // Overrides ride on custom properties so the animation itself stays in CSS.
  const vars: Record<string, string> = {};
  if (delay) vars["--reveal-delay"] = `${delay}ms`;
  if (distance != null) vars["--reveal-y"] = `${distance}px`;
  if (duration != null) vars["--reveal-duration"] = `${duration}ms`;

  return {
    ref,
    // Dropping the attribute at the end also drops `will-change`.
    "data-reveal": state === "done" ? undefined : state,
    style: vars as CSSProperties,
    onTransitionEnd: (event: TransitionEvent<T>) => {
      // Ignore transitions bubbling up from children (hover states, and so on).
      if (event.target !== event.currentTarget) return;
      if (event.propertyName !== "opacity") return;
      setState("done");
    },
  };
}
