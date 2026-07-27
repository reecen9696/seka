import type { ReactNode } from "react";
import { Reveal } from "../design-system/primitives/Reveal";
import { SectionIntro } from "../design-system/primitives/SectionIntro";

type Industry = { name: string; body: string; icon: ReactNode };

const svgProps = {
  className: "size-6",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const INDUSTRIES: Industry[] = [
  {
    name: "Construction and contracting",
    body: "Automate estimating, scheduling, and document-heavy workflows so your teams spend less time on admin and more on site.",
    icon: (
      <svg {...svgProps}>
        <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
        <path d="M15 21V9h4a1 1 0 0 1 1 1v11" />
        <path d="M3 21h18M8 8h3M8 12h3M8 16h3" />
      </svg>
    ),
  },
  {
    name: "Manufacturing",
    body: "Bring AI to production, quality, and supply-chain data so you can act on issues before they cost you.",
    icon: (
      <svg {...svgProps}>
        <path d="M3 21h18" />
        <path d="M4 21V11l5 3V11l5 3V7l5 4v10" />
        <path d="M9 21v-4h2v4" />
      </svg>
    ),
  },
  {
    name: "Professional services",
    body: "Turn your firm's knowledge into AI tools that speed up delivery and free your people for higher-value work.",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
        <path d="M3 12.5h18" />
      </svg>
    ),
  },
  {
    name: "Technology",
    body: "Embed AI engineering talent and ship AI-native features without slowing your existing roadmap.",
    icon: (
      <svg {...svgProps}>
        <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" />
        <rect x="10" y="10" width="4" height="4" rx="0.5" />
        <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" />
      </svg>
    ),
  },
  {
    name: "Trades and field services",
    body: "Streamline quoting, dispatch, and field reporting with tools built for how your crews actually work.",
    icon: (
      <svg {...svgProps}>
        <path d="M15.6 4.6a4 4 0 0 0-5.3 5l-5.9 5.9a1.5 1.5 0 0 0 0 2.1l.1.1a1.5 1.5 0 0 0 2.1 0l5.9-5.9a4 4 0 0 0 5-5.3l-2.4 2.4-2.1-2.1z" />
      </svg>
    ),
  },
  {
    name: "Energy and resources",
    body: "Make sense of operational and asset data across sites, and put it in front of the people making the call.",
    icon: (
      <svg {...svgProps}>
        <path d="M13 3 5.5 13.5H11l-1 7.5 8-10.5h-5.5z" />
      </svg>
    ),
  },
  {
    name: "Finance and insurance",
    body: "Automate document processing, risk, and compliance workflows with accuracy you can audit.",
    icon: (
      <svg {...svgProps}>
        <path d="M12 3 4.5 5.8v5.2c0 4.4 3.1 7.6 7.5 9 4.4-1.4 7.5-4.6 7.5-9V5.8z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Retail and e-commerce",
    body: "Use AI across demand, merchandising, and customer experience to move faster than your competitors.",
    icon: (
      <svg {...svgProps}>
        <path d="M5.5 8h13l-1 12.5h-11z" />
        <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
      </svg>
    ),
  },
  {
    name: "Federal and state government",
    body: "Deliver secure, compliant AI and data solutions with the rigour public-sector work demands.",
    icon: (
      <svg {...svgProps}>
        <path d="M3 9.5 12 4l9 5.5" />
        <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
        <path d="M3.5 18h17M3 21h18" />
      </svg>
    ),
  },
];

/**
 * Sectors as a seamless hairline grid — icon tile, sector, one line on what we
 * do there. Nine entries fill the 3-up grid exactly; keep it a multiple of
 * three when editing, or the last row leaves a hole in the frame.
 */
export function Industries() {
  return (
    <section className="overflow-clip bg-surface-alt py-16 text-black md:py-32">
      <div className="container">
        <SectionIntro title="Industries we've worked with">
          <p>
            From a tradie automating their first workflow to a mid-market firm
            building a data function, we meet you where you are.
          </p>
        </SectionIntro>

        {/* cells draw their own top/left hairline; the first row and first
            column drop theirs so nothing doubles up on the outer frame.
            The frame reveals as one piece — staggering cells would tear the
            hairlines apart while they travelled. */}
        <Reveal
          as="dl"
          className="bg-surface mt-10 grid grid-cols-1 overflow-hidden rounded-lg border border-black/10 md:mt-14 md:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col gap-y-5 border-t border-black/10 p-6 first:border-t-0 md:border-l md:p-8 md:[&:nth-child(-n+3)]:border-t-0 md:[&:nth-child(3n+1)]:border-l-0"
            >
              <dt className="bg-surface-alt flex size-14 shrink-0 items-center justify-center rounded-lg text-black/80">
                {industry.icon}
              </dt>
              <dd>
                <h3 className="text-20-medium">{industry.name}</h3>
                <p className="text-16 mt-2">{industry.body}</p>
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
