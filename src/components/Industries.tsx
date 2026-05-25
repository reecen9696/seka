const INDUSTRIES = [
  "Construction and contracting",
  "Manufacturing",
  "Professional services",
  "Technology",
  "Trades and field services",
  "Energy and resources",
  "Finance and insurance",
  "Retail and e-commerce",
  "Federal and state government",
];

export function Industries() {
  return (
    <section className="overflow-clip bg-[#F6F8F6] pt-10 pb-12 text-black md:pt-24 md:pb-[120px]">
      <div className="container">
        <div className="mdx:mx-auto flex w-full flex-col items-center justify-center gap-y-4 text-center">
          <div className="flex items-center justify-center gap-x-[9px] pb-1">
            <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
            <h6 className="text-eyebrow">Industries</h6>
          </div>
          <h2 className="text-h2 xs:max-lg:text-balance mx-auto w-full max-w-[760px]">
            Built for businesses that are serious about change.
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-[920px] flex-wrap justify-center gap-2.5 md:mt-14 md:gap-3">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="text-16 ring-black/8 rounded-full bg-white px-5 py-2.5 text-black/80 ring-1 ring-inset"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
