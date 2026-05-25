import { CtaBanner } from "../components/CtaBanner";
import { CtaLink } from "../components/CtaLink";
import { ServicesTabs } from "../components/ServicesTabs";

const HERO_IMG =
  "https://cdn.sanity.io/images/e5ozko3p/production/5c1eb28844bf4aa26e97888f112f7713223a72f5-2534x1894.png?auto=format";

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
      <section className="overflow-clip bg-[#F6F8F6] pt-[80px] pb-20 text-black md:pt-[100px] md:pb-[164px]">
        <div className="container">
          <div className="pt-6 md:pt-10">
            <div className="max-mdx:flex-col flex justify-between gap-x-4 gap-y-10">
              <div className="max-mdx:text-center flex flex-col gap-y-4">
                <div className="max-md:text-center lg:items-start lg:justify-center lg:gap-y-[124px] flex h-full flex-col gap-4">
                  <h1 className="text-h1 mdx:max-w-[460px] w-full text-balance">
                    Strategy, build, and talent under one roof.
                  </h1>
                  <div>
                    <p className="text-18 mdx:max-w-[400px] mb-6 text-black/70">
                      Seka operates across three interconnected capabilities.
                      Depending on where you are, you might need all three or
                      just one. We will tell you which.
                    </p>
                    <div className="max-mdx:justify-center flex items-center gap-x-2.5 md:gap-x-3">
                      <CtaLink to="/get-a-demo" label="Start a conversation" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-grey-100 relative aspect-square w-[600px] max-w-full shrink-0 overflow-hidden rounded-[10px]">
                <img
                  src={HERO_IMG}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesTabs />

      {/* How engagements work */}
      <section className="overflow-clip bg-[#1A1A1A] pt-16 pb-16 text-white md:pt-28 md:pb-28">
        <div className="container">
          <div className="mdx:mx-auto flex w-full flex-col items-center gap-y-4 text-center">
            <div className="flex items-center gap-x-[9px] pb-1">
              <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
              <h6 className="text-eyebrow">How engagements work</h6>
            </div>
            <h2 className="text-h2">Three ways to engage.</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
            {ENGAGEMENTS.map((engagement) => (
              <div
                key={engagement.title}
                className="flex flex-col rounded-[10px] bg-white/5 p-6 ring-1 ring-inset ring-white/10 md:p-8"
              >
                <p className="text-14-medium text-white/50">{engagement.meta}</p>
                <h3 className="text-h5 mt-3 text-white">{engagement.title}</h3>
                <p className="text-16 mt-3 text-white/70">{engagement.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
