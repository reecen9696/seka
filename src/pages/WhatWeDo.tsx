import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { ServicesTabs } from "../components/ServicesTabs";
import { SectionIntro } from "../design-system/primitives/SectionIntro";

const ENGAGEMENTS = [
  {
    title: "Advisory sprint",
    meta: "2 to 4 weeks",
    body: "Clarity before commitment. We audit, map, and deliver a prioritised roadmap. You leave knowing exactly what to build, in what order, and why.",
  },
  {
    title: "Build engagement",
    meta: "Defined scope and outcome",
    body: "We scope and deliver a defined AI product, integration, or workflow. Fixed outcomes, accountable delivery. Not time and materials.",
  },
  {
    title: "Embedded talent",
    meta: "Ongoing",
    body: "One or more offshore specialists working inside your team. Managed by Seka. Accountable to you.",
  },
];

export function WhatWeDo() {
  return (
    <main>
      {/* Intro */}
      <PageHero
        title="Strategy, build, and talent under one roof."
        subtitle="Seka operates across three interconnected capabilities. Depending on where you are, you might need all three or just one. We will tell you which."
      />

      {/* Services */}
      <ServicesTabs />

      {/* How engagements work — 128px Y padding */}
      <section className="overflow-clip bg-ink py-16 text-white md:py-32">
        <div className="container">
          <SectionIntro
            tone="light"
            eyebrow="How engagements work"
            title="Three ways to engage."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
          {ENGAGEMENTS.map((engagement) => (
            <div
              key={engagement.title}
              className="mdx:min-h-[310px] mdx:p-6 flex flex-col justify-between gap-y-6 rounded-lg bg-white/5 p-5 ring-1 ring-inset ring-white/10 backdrop-blur-lg"
            >
              <div className="bg-white/50 size-2 shrink-0 rounded-full max-sm:hidden" />
              <div>
                <p className="text-14-medium text-white/50">{engagement.meta}</p>
                <h3 className="text-h4 mt-2 text-white">{engagement.title}</h3>
                <p className="text-16 mt-3 text-white/70">{engagement.body}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
