import type { ReactNode } from "react";
import { ArrowLink } from "../design-system/primitives/ArrowLink";
import { Reveal } from "../design-system/primitives/Reveal";
import { Tag } from "../design-system/primitives/Tag";
import { SERVICES } from "./services-data";

const svgProps = {
  className: "size-7",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** One icon per service, keyed by the `tab` label in services-data. */
const ICONS: Record<string, ReactNode> = {
  Strategy: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 9-2.2 4.8L8 16l2.2-4.8z" />
    </svg>
  ),
  Automation: (
    <svg {...svgProps}>
      <path d="M3.5 12a8.5 8.5 0 0 1 14.6-6L20.5 8" />
      <path d="M20.5 3.5v4.5H16" />
      <path d="M20.5 12a8.5 8.5 0 0 1-14.6 6L3.5 16" />
      <path d="M3.5 20.5V16H8" />
    </svg>
  ),
  "Product build": (
    <svg {...svgProps}>
      <path d="M12 3.5 20 8v8l-8 4.5L4 16V8z" />
      <path d="M12 12.5 20 8M12 12.5 4 8m8 4.5v8" />
    </svg>
  ),
  Talent: (
    <svg {...svgProps}>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-2.2-4.4" />
    </svg>
  ),
  Teams: (
    <svg {...svgProps}>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v3M6 16v-3h12v3" />
    </svg>
  ),
};

/** The three words the brand line runs on — chips under the section heading. */
const PILLARS = ["Strategy", "Talent", "Execution"];

/**
 * Services as a split section: the heading column holds still on the left while
 * the service cards sit two-up on the right in a hairline grid. Cards lead with
 * the icon and push the copy to the foot, so the four read as a set.
 */
export function OurServices() {
  return (
    <section className="overflow-clip bg-surface py-16 text-black md:py-32">
      <div className="container flex flex-col gap-y-10 lg:flex-row lg:items-stretch lg:gap-x-16">
        <div className="flex flex-col justify-between gap-y-8 lg:w-[380px] lg:shrink-0 xl:w-[430px]">
          <Reveal>
            <h2 className="text-h2 !text-[40px] text-balance">Our services</h2>
            <p className="text-18 mt-4 text-black/70">
              Five ways to engage, from a first roadmap through to an embedded
              delivery team. Whichever you start with, it is scoped, built, and
              shipped by the same people.
            </p>
          </Reveal>
          <Reveal delay={70} className="flex flex-col gap-y-6">
            <div className="flex flex-wrap gap-2.5">
              {PILLARS.map((pillar) => (
                <Tag key={pillar} tone="outline" size="lg">
                  {pillar}
                </Tag>
              ))}
            </div>
            <ArrowLink to="/what-we-do" label="See how we work" />
          </Reveal>
        </div>

        {/* hairlines are the 1px gap showing through, as in ServicesGrid — so
            the grid reveals whole rather than cell by cell */}
        <Reveal
          delay={70}
          className="grid flex-1 grid-cols-1 gap-px overflow-hidden rounded-lg border border-black/10 bg-black/10 sm:grid-cols-2"
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              // an odd-numbered last card spans the row rather than leaving a
              // hole in the hairline grid
              className="bg-surface flex flex-col justify-between gap-y-10 p-6 lg:p-7 sm:[&:last-child:nth-child(odd)]:col-span-2"
            >
              <span className="text-black/80">{ICONS[service.tab]}</span>
              <div>
                <h3 className="text-h5">{service.title}</h3>
                <p className="text-16 mt-2 text-black/70">{service.summary}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
