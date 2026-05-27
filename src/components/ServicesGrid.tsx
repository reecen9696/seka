import { ArrowLink } from "../design-system/primitives/ArrowLink";

type Service = { num: string; title: string; desc: string };

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Strategy and roadmap",
    desc: "We audit your operations, find the highest-leverage AI opportunities, and build a prioritised plan your team can execute.",
  },
  {
    num: "02",
    title: "Build and deliver",
    desc: "Workflow automation, MVP builds, data infrastructure. Scoped, built, and shipped. Not prototyped and abandoned.",
  },
  {
    num: "03",
    title: "Offshore staff augmentation",
    desc: "Vetted AI, data, and engineering talent from Sri Lanka, Malaysia, and Indonesia. Cost-competitive and accountable.",
  },
];

/**
 * The three service pillars as a hairline-separated grid. Hairlines come from
 * the 1px gap over a black/10 background showing through between surface cards.
 */
export function ServicesGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-black/10 bg-black/10 sm:grid-cols-3 ${className}`}
    >
      {SERVICES.map((s) => (
        <div key={s.num} className="flex flex-col gap-y-6 bg-surface p-7">
          <p className="text-14-medium text-black/40">{s.num}</p>
          <div className="flex-1">
            <h3 className="text-h5">{s.title}</h3>
            <p className="text-16 mt-2 text-black/70">{s.desc}</p>
          </div>
          <ArrowLink to="/what-we-do" label="Learn more" />
        </div>
      ))}
    </div>
  );
}
