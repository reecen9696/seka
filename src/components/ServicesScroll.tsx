import { useEffect, useRef, useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "./services-data";

/**
 * Services as a scroll-driven, sticky-pinned sequence (same mechanic as the
 * Features section): the section pins while the page scrolls through each
 * service, cross-fading the canonical `ServiceCard`. Falls back to a stacked
 * list of the same cards on mobile.
 */
export function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height - viewport;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const total = SERVICES.length;
  const segment = 1 / total;
  const activeIndex = Math.min(total - 1, Math.floor(progress / segment));
  const activeFill = Math.min(1, (progress - activeIndex * segment) / segment);

  // Clicking a tab scrolls to the middle of that service's scroll segment.
  const scrollToService = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const totalScroll = rect.height - window.innerHeight;
    const target = containerTop + ((i + 0.5) / total) * totalScroll;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section className="overflow-clip bg-surface py-16 text-black md:py-32">
      <div className="container">
        <div className="mdx:h-[600vh]" ref={containerRef}>
          {/* Mobile: stacked cards */}
          <div className="mdx:hidden space-y-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.number} service={s} />
            ))}
          </div>

          {/* Desktop: sticky pinned, cross-fading cards */}
          <div
            className="mdx:block sticky hidden"
            style={{ top: 100 }}
          >
            {/* Tabs + progress (indicator, driven by scroll) */}
            <div className="mb-12 flex items-center justify-between gap-x-5">
              <div className="flex gap-x-2">
                {SERVICES.map((s, i) => (
                  <button
                    key={s.number}
                    type="button"
                    aria-current={i === activeIndex}
                    onClick={() => scrollToService(i)}
                    className={`text-button block cursor-pointer rounded-full px-3 py-1.5 transition-colors duration-200 ${
                      i === activeIndex
                        ? "bg-black text-white"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    {s.tab}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-x-4">
                <div className="h-1 w-16 rounded-full bg-black/10">
                  <div
                    className="h-full rounded-full bg-black transition-[width] duration-150"
                    style={{
                      width: `${((activeIndex + activeFill) / total) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-nav-link text-black/80">
                  {activeIndex + 1} / {total}
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="relative">
              {SERVICES.map((s, i) => (
                <div
                  key={s.number}
                  aria-hidden={i !== activeIndex}
                  className="transition-opacity duration-300"
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    position: i === activeIndex ? "relative" : "absolute",
                    inset: i === activeIndex ? undefined : 0,
                    pointerEvents: i === activeIndex ? "auto" : "none",
                  }}
                >
                  <ServiceCard service={s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
