import { useEffect, useRef, useState } from "react";
import { ArrowLink } from "../design-system/primitives/ArrowLink";

type Service = {
  number: string;
  title: string;
  summary: string;
  listLabel?: string;
  list?: string[];
  bestFor: string;
  img: string;
};

const SERVICES: Service[] = [
  {
    number: "Service 01",
    title: "AI strategy and roadmap",
    summary:
      "Audit your operations, find the highest-leverage AI opportunities, and leave with a prioritised roadmap your team can actually execute.",
    listLabel: "What this includes",
    list: [
      "Operations audit and AI readiness assessment",
      "Identification of highest-ROI automation and AI opportunities",
      "Prioritised 90-day and 12-month execution roadmap",
      "Vendor and tooling recommendations",
      "Change management and adoption planning",
    ],
    bestFor:
      "Businesses that want a confident, informed decision before committing budget to build.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/7e006343adfb494e97cf3b7ae90069a4e5dec107-1288x1460.jpg?auto=format",
  },
  {
    number: "Service 02",
    title: "Workflow automation",
    summary:
      "Find the workflows costing your team the most time and automate them across your existing systems, without disrupting operations.",
    listLabel: "Common use cases",
    list: [
      "Document processing and data extraction",
      "Internal approval and compliance workflows",
      "Client onboarding and communications automation",
      "Construction tendering and bid management tools",
      "Reporting and data pipeline automation",
      "Field service scheduling and dispatch intelligence",
    ],
    bestFor:
      "Operations, finance, and delivery teams spending too many hours on work that should not require human attention.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/edd3fd2b4be5b92203b7db12d02de2b00ba1f0b3-2160x1380.jpg?auto=format",
  },
  {
    number: "Service 03",
    title: "MVP and product build",
    summary:
      "When your AI opportunity needs a custom tool rather than an off-the-shelf product, we scope, build, and ship it, from brief to working product.",
    listLabel: "What this includes",
    list: [
      "Product scoping and technical architecture",
      "Full-stack development with AI and ML integration",
      "Data pipeline and warehousing setup",
      "QA, deployment, and handover",
      "Ongoing iteration and support",
    ],
    bestFor:
      "Businesses with a specific AI product vision that needs a technical partner to execute it end to end.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/f033800d2fbf0fb0ab041f436527137b0ed0ffa6-2160x1380.jpg?auto=format",
  },
  {
    number: "Service 04",
    title: "Offshore staff augmentation",
    summary:
      "Vetted offshore AI, data, and engineering specialists placed directly into your team across Sri Lanka, Malaysia, and Indonesia.",
    listLabel: "Roles we place",
    list: [
      "Data engineers and analytics engineers",
      "Machine learning engineers",
      "AI developers and prompt engineers",
      "Data scientists and analysts",
      "AI project managers and delivery leads",
    ],
    bestFor:
      "Businesses that need specialist AI or data capability now, without a six-month local hiring cycle or a full-time Australian salary.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/25ad8c18b09dcb1a619b5d4f2dc3cf089f4bf56f-1196x854.jpg?auto=format",
  },
  {
    number: "Service 05",
    title: "Team design and build",
    summary:
      "Design the roles, recruit the people, and stand up the operating model for a new or restructured AI or data function.",
    bestFor:
      "Technology companies, scale-ups, and enterprise divisions that want to build an AI or data team quickly and cost-effectively, leveraging offshore talent without sacrificing quality or accountability.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/2f8b882dd8af720f1cabce9d125ca543b0ab4725-1228x1334.jpg?auto=format",
  },
];

function FullImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function ServiceCopy({ service }: { service: Service }) {
  return (
    <>
      <p className="text-14-medium text-black/45">{service.number}</p>
      <h3 className="text-h4 mt-2.5 text-balance">{service.title}</h3>
      <p className="text-16 mt-3 text-black/80">{service.summary}</p>
      <div className="mt-4">
        <ArrowLink to="/get-a-demo" label="Get in touch" />
      </div>
      {service.list && (
        <div className="mt-7">
          <p className="text-14-medium text-black/45">
            {service.listLabel ?? "What this includes"}
          </p>
          <ul className="mt-3.5 flex flex-col gap-y-3">
            {service.list.map((item) => (
              <li key={item} className="text-16 flex gap-x-3 text-black/80">
                <span className="bg-brand-sky mt-2 size-1.5 shrink-0 rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-7">
        <p className="text-14-medium text-black/45">Best for</p>
        <p className="text-16 mt-1.5 text-black/70">{service.bestFor}</p>
      </div>
    </>
  );
}

function ProgressPills({
  activeIndex,
  activeFill,
}: {
  activeIndex: number;
  activeFill: number;
}) {
  return (
    <div className="inline-flex h-9 items-center gap-x-2 self-start rounded-full bg-black/5 px-4">
      {SERVICES.map((_, i) => {
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

/**
 * Services as a scroll-driven, sticky-pinned sequence (same mechanic as the
 * Features section): the section is pinned while the page scrolls through each
 * service, cross-fading the copy and the visual. Falls back to a stacked list
 * on mobile.
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

  const segment = 1 / SERVICES.length;
  const activeIndex = Math.min(
    SERVICES.length - 1,
    Math.floor(progress / segment),
  );
  const activeFill = Math.min(1, (progress - activeIndex * segment) / segment);

  return (
    <section className="overflow-clip bg-surface py-16 text-black md:py-24">
      <div className="container">
        <div className="mdx:h-[600vh]" ref={containerRef}>
          {/* Mobile: stacked */}
          <div className="mdx:hidden space-y-16">
            {SERVICES.map((service, i) => (
              <div key={i}>
                <div className="aspect-345/300 mb-6 w-full">
                  <FullImage src={service.img} alt={service.title} />
                </div>
                <ServiceCopy service={service} />
              </div>
            ))}
          </div>

          {/* Desktop: sticky pinned */}
          <div
            className="mdx:sticky mdx:flex hidden gap-x-10 xl:gap-x-16"
            style={{ top: 120 }}
          >
            {/* Text column */}
            <div className="w-full max-w-[42%] shrink-0 xl:max-w-[460px]">
              <div className="relative min-h-[560px]">
                {SERVICES.map((service, i) => (
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
                    <ServiceCopy service={service} />
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <ProgressPills
                  activeIndex={activeIndex}
                  activeFill={activeFill}
                />
              </div>
            </div>

            {/* Visual column */}
            <div className="relative aspect-[600/620] w-full flex-1">
              {SERVICES.map((service, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex h-full w-full transition-[opacity,transform] duration-500"
                  style={{
                    zIndex: i === activeIndex ? 10 : 0,
                    opacity: i === activeIndex ? 1 : 0,
                    transform: i === activeIndex ? "none" : "translateX(10px)",
                  }}
                >
                  <FullImage src={service.img} alt={service.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
