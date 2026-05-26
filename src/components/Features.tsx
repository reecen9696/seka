import { useEffect, useRef, useState, type ReactNode } from "react";
import strategyRoadmap from "../assets/features/strategy-roadmap.png";

const IMG_AI =
  "https://cdn.sanity.io/images/e5ozko3p/production/edd3fd2b4be5b92203b7db12d02de2b00ba1f0b3-2160x1380.jpg?auto=format";
const IMG_SUPPORT =
  "https://cdn.sanity.io/images/e5ozko3p/production/f033800d2fbf0fb0ab041f436527137b0ed0ffa6-2160x1380.jpg?auto=format";

type Card = {
  title: string;
  body: string;
  stat: string;
  statLabel: string;
  visual: ReactNode;
  mobileVisual: ReactNode;
};

function QuoteCard() {
  return (
    <div className="bg-grey-100 ring-black/8 relative isolate flex h-full flex-1 flex-col justify-end gap-y-6 overflow-hidden rounded-[10px] p-8 ring-1 ring-inset">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "19px 19px",
        }}
      />
      <div className="pointer-events-none relative z-10">
        <div className="text-18 !font-heading indent-[-7px] !leading-[1.35] text-black">
          “Most consultants leave you with a strategy. Seka left us with a
          roadmap our team could actually execute. By month two we were
          already shipping the second workflow.”
        </div>
        <div className="mt-3.5 flex items-center gap-x-2 md:mt-4">
          <span className="text-14 font-medium text-black">Operations director</span>
          <span className="text-14">Mid-market services firm</span>
        </div>
      </div>
    </div>
  );
}

function FullImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[10px]">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

const CARDS: Card[] = [
  {
    title: "Strategy and roadmap",
    body: "We map your operations, identify the highest-leverage AI opportunities, and build a prioritised execution plan grounded in what your business actually needs.",
    stat: "2-4 wk",
    statLabel: "Advisory sprint",
    visual: (
      <div className="flex h-full w-full gap-x-4 lg:gap-x-6">
        <div className="aspect-352/460 h-full flex-1 overflow-hidden rounded-[10px]">
          <FullImage src={strategyRoadmap} alt="Strategy and roadmap" />
        </div>
        <div className="flex-1">
          <QuoteCard />
        </div>
      </div>
    ),
    mobileVisual: (
      <div className="aspect-345/451 w-full overflow-hidden rounded-[10px]">
        <FullImage src={strategyRoadmap} alt="Strategy and roadmap" />
      </div>
    ),
  },
  {
    title: "Build and deliver",
    body: "From MVP to full product. Workflow automation, data infrastructure, AI-native tools, scoped, built, and shipped. Not prototyped and abandoned.",
    stat: "Brief",
    statLabel: "To working product",
    visual: <FullImage src={IMG_AI} alt="Build and deliver" />,
    mobileVisual: (
      <div className="aspect-345/220 w-full">
        <FullImage src={IMG_AI} alt="Build and deliver" />
      </div>
    ),
  },
  {
    title: "Talent and teams",
    body: "We augment your team with vetted offshore AI, data, and engineering talent from Sri Lanka, Malaysia, and Indonesia. One specialist or an entire function, cost competitive, embedded, and accountable.",
    stat: "3",
    statLabel: "Offshore talent regions",
    visual: <FullImage src={IMG_SUPPORT} alt="Talent and teams" />,
    mobileVisual: (
      <div className="aspect-345/220 w-full">
        <FullImage src={IMG_SUPPORT} alt="Talent and teams" />
      </div>
    ),
  },
];

function ProgressPills({
  activeIndex,
  activeFill,
}: {
  activeIndex: number;
  activeFill: number;
}) {
  return (
    <div className="mt-8 inline-flex h-9 items-center gap-x-2 self-start rounded-full bg-black/5 px-4">
      {CARDS.map((_, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;
        const width = isActive ? "50px" : "6px";
        const fillPct = isActive ? activeFill * 100 : isPast ? 100 : 0;
        return (
          <div
            key={i}
            className="h-1.5 overflow-hidden rounded-full bg-black/20 transition-[width] duration-300"
            style={{ width, willChange: "width" }}
          >
            <div
              className="h-full bg-black transition-[width] duration-150"
              style={{ width: `${fillPct}%` }}
            />
          </div>
        );
      })}
    </div>
  );
}

export function Features() {
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

  const segment = 1 / CARDS.length;
  const rawIndex = Math.min(
    CARDS.length - 1,
    Math.floor(progress / segment),
  );
  const activeFill = Math.min(1, (progress - rawIndex * segment) / segment);
  const activeIndex = rawIndex;

  return (
    <section className="overflow-clip bg-[#F6F8F6] pt-12 pb-12 text-black md:py-[82px]">
      <div className="container">
        <div className="mdx:h-[400vh]" ref={containerRef}>
          {/* Mobile: stacked */}
          <div className="mdx:hidden space-y-20">
            {CARDS.map((card, i) => (
              <div key={i}>
                <div className="mb-5 flex flex-col gap-y-4">
                  {card.mobileVisual}
                </div>
                <h2 className="text-h5">{card.title}</h2>
                <div className="text-16 mt-2">{card.body}</div>
                <div className="mt-6">
                  <div
                    className="font-heading font-light leading-[1.1] text-black"
                    style={{
                      fontSize: "clamp(3.5rem, 8vw, 4.5rem)",
                      letterSpacing: "clamp(-0.1125rem, -0.2vw, -0.0875rem)",
                    }}
                  >
                    {card.stat}
                  </div>
                  <div className="text-16 mt-1.5">{card.statLabel}</div>
                </div>
                {i === 0 && (
                  <div className="mt-6 sm:hidden">
                    <QuoteCard />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: sticky pinned */}
          <div
            className="mdx:sticky mdx:flex hidden aspect-1248/460 justify-between gap-x-6 overflow-hidden pl-6 xl:gap-x-8 xl:pl-11"
            style={{ top: 266 }}
          >
            <div className="bg-black/8 absolute inset-y-0 left-0 h-full w-px" />

            {/* Text column */}
            <div className="h-full w-full max-w-[28%] shrink-0 py-4 xl:max-w-[359px]">
              <div className="relative flex h-full w-full flex-col justify-between gap-y-6">
                <div>
                  <div className="relative">
                    {CARDS.map((card, i) => (
                      <div
                        key={i}
                        className="transition-opacity duration-300"
                        style={{
                          opacity: i === activeIndex ? 1 : 0,
                          position: i === activeIndex ? "relative" : "absolute",
                          inset: i === activeIndex ? undefined : 0,
                          pointerEvents: i === activeIndex ? "auto" : "none",
                        }}
                      >
                        <h2 className="text-h5">{card.title}</h2>
                        <div className="text-16 mdx:min-h-[72px] mt-2 text-black/80">
                          {card.body}
                        </div>
                      </div>
                    ))}
                  </div>
                  <ProgressPills
                    activeIndex={activeIndex}
                    activeFill={activeFill}
                  />
                </div>
                <div className="relative">
                  {CARDS.map((card, i) => (
                    <div
                      key={i}
                      className="transition-opacity duration-300"
                      style={{
                        opacity: i === activeIndex ? 1 : 0,
                        position: i === activeIndex ? "relative" : "absolute",
                        inset: i === activeIndex ? undefined : 0,
                        pointerEvents: i === activeIndex ? "auto" : "none",
                      }}
                    >
                      <div
                        className="font-heading font-light leading-[1.1] tracking-[-0.1125rem] text-black"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                      >
                        {card.stat}
                      </div>
                      <div className="text-16">{card.statLabel}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual column */}
            <div className="aspect-720/460 relative z-20 flex w-full max-w-[720px] gap-x-4 lg:gap-x-6">
              {CARDS.map((card, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex h-full w-full transition-[opacity,transform] duration-500"
                  style={{
                    zIndex: i === activeIndex ? 10 : 0,
                    opacity: i === activeIndex ? 1 : 0,
                    transform:
                      i === activeIndex ? "none" : "translateX(10px)",
                  }}
                >
                  {card.visual}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
