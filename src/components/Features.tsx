import { useEffect, useRef, useState, type ReactNode } from "react";

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
          “Seka dropped an engineer onto our team in under two weeks. Within a
          month they had automated the busywork that was eating our days.”
        </div>
        <div className="mt-3.5 flex items-center gap-x-2 md:mt-4">
          <span className="text-14 font-medium text-black">Operations lead</span>
          <span className="text-14">Logistics &amp; export company</span>
        </div>
      </div>
    </div>
  );
}

function RivePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-gradient-to-br from-[#1a1a1a] to-[#3a3a3a]">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-14 font-medium text-white/40">{label}</span>
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
    title: "Engineers integrated with your team, fast",
    body: "We deploy AI-ready software engineers into your company within two weeks. They don't just advise, they actually build, ship, and iterate alongside your team.",
    stat: "2 wk",
    statLabel: "Avg. time to deploy",
    visual: (
      <div className="flex h-full w-full gap-x-4 lg:gap-x-6">
        <div className="aspect-352/460 h-full flex-1 overflow-hidden rounded-[10px]">
          <RivePlaceholder label="Engineer deployment animation" />
        </div>
        <div className="flex-1">
          <QuoteCard />
        </div>
      </div>
    ),
    mobileVisual: (
      <div className="aspect-345/451 w-full overflow-hidden rounded-[10px]">
        <RivePlaceholder label="Engineer deployment animation" />
      </div>
    ),
  },
  {
    title: "Pre-vetted senior engineers, ready to build",
    body: "We source, screen, and train senior engineers through our 6-stage process before they ever join your team. You get elite AI talent without the hiring risk.",
    stat: "6",
    statLabel: "Stage vetting process",
    visual: <FullImage src={IMG_AI} alt="Senior engineers" />,
    mobileVisual: (
      <div className="aspect-345/220 w-full">
        <FullImage src={IMG_AI} alt="Senior engineers" />
      </div>
    ),
  },
  {
    title: "Automations that compound month over month",
    body: "Your engineer learns your business deeply, builds practical AI automations, and continuously improves how your operations run, so the value compounds over time.",
    stat: "160+",
    statLabel: "Hours saved monthly",
    visual: <RivePlaceholder label="Automation flow animation" />,
    mobileVisual: (
      <div className="aspect-345/220 w-full">
        <RivePlaceholder label="Automation flow animation" />
      </div>
    ),
  },
  {
    title: "Managed service. Cancel anytime.",
    body: "We manage the engagement end-to-end with senior consultant oversight on every project. Need more resources? We scale up. Need to pause? Cancel after your trial month.",
    stat: "30 day",
    statLabel: "Trial commitment",
    visual: <FullImage src={IMG_SUPPORT} alt="Managed service" />,
    mobileVisual: (
      <div className="aspect-345/220 w-full">
        <FullImage src={IMG_SUPPORT} alt="Managed service" />
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
    <section className="overflow-clip bg-[#F6F8F6] pt-0 pb-10 text-black md:pb-20">
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
