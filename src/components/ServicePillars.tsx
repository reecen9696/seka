const PILLARS = [
  {
    number: "01",
    title: "Strategy and roadmap",
    body: "We map your operations, identify the highest-leverage AI opportunities, and build a prioritised execution plan grounded in what your business actually needs.",
  },
  {
    number: "02",
    title: "Build and deliver",
    body: "From MVP to full product. Workflow automation, data infrastructure, AI-native tools, scoped, built, and shipped. Not prototyped and abandoned.",
  },
  {
    number: "03",
    title: "Talent and teams",
    body: "We augment your team with vetted offshore AI, data, and engineering talent from Sri Lanka, Malaysia, and Indonesia. One specialist or an entire function, cost competitive, embedded, and accountable.",
  },
];

export function ServicePillars() {
  return (
    <section className="overflow-clip bg-[#1A1A1A] pt-16 pb-16 text-white md:pt-28 md:pb-28">
      <div className="container">
        <div className="mdx:mx-auto flex w-full flex-col items-center justify-center gap-y-4 text-center">
          <div className="flex items-center justify-center gap-x-[9px] pb-1">
            <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
            <h6 className="text-eyebrow">What we do</h6>
          </div>
          <h2 className="text-h2 xs:max-lg:text-balance mx-auto w-full max-w-[760px]">
            Strategy, build, and talent.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col rounded-[10px] bg-white/5 p-7 ring-1 ring-inset ring-white/10 md:p-8"
            >
              <span className="text-14-medium text-white/40">{pillar.number}</span>
              <h3 className="text-h5 mt-4 text-white">{pillar.title}</h3>
              <p className="text-16 mt-3 text-white/70">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
