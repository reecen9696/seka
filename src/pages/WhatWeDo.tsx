import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { LogoGrid } from "../components/LogoGrid";
import { ServicesTabs } from "../components/ServicesTabs";

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

      {/* Companies */}
      <section className="overflow-clip bg-[#F6F8F6] pb-12 text-black md:pb-20">
        <LogoGrid />
      </section>

      {/* Services */}
      <ServicesTabs />

      {/* How engagements work */}
      <section className="overflow-clip bg-black py-16 text-white md:py-36">
        <div className="container space-y-12 md:space-y-20">
          <div className="mdx:mx-auto mdx:justify-center flex w-full flex-col items-center justify-center gap-y-4 text-center">
            <div className="flex items-center justify-center gap-x-[9px] pb-1">
              <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
              <h6 className="text-eyebrow text-white/70">How engagements work</h6>
            </div>
            <h2 className="text-h2 xs:max-lg:text-balance mx-auto w-full max-w-[822px]">
              Three ways to engage.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENGAGEMENTS.map((engagement) => (
              <div
                key={engagement.title}
                className="mdx:min-h-[310px] mdx:p-6 flex flex-col justify-between gap-y-6 rounded-[10px] bg-white/5 p-5 ring-1 ring-inset ring-white/10 backdrop-blur-lg"
              >
                <div className="bg-white/50 size-2 shrink-0 rounded-full max-sm:hidden" />
                <div>
                  <p className="text-14-medium text-white/50">{engagement.meta}</p>
                  <h3 className="font-heading mt-2 text-[2rem] font-light leading-[1.1] -tracking-[0.5px] text-white">
                    {engagement.title}
                  </h3>
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
