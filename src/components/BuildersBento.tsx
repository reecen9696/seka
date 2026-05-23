const IMG_AI =
  "https://cdn.sanity.io/images/e5ozko3p/production/25ad8c18b09dcb1a619b5d4f2dc3cf089f4bf56f-1196x854.jpg?auto=format";
const IMG_BD_BG =
  "https://cdn.sanity.io/images/e5ozko3p/production/2f8b882dd8af720f1cabce9d125ca543b0ab4725-1228x1334.jpg?auto=format";
const SVG_BD =
  "https://cdn.sanity.io/images/e5ozko3p/production/3e0a0090e0bff6853078b807136188552aed1194-550x440.svg?auto=format";
const IMG_TOOLS =
  "https://cdn.sanity.io/images/e5ozko3p/production/81b189e50e88fa711e88e8a7af27bf505ef0f83f-1228x328.png?auto=format";
const IMG_FOLLOWUPS =
  "https://cdn.sanity.io/images/e5ozko3p/production/621faea53ca5bf5822c886d91f1d6548c1fceeab-1228x328.png?auto=format";

export function BuildersBento() {
  return (
    <section className="overflow-clip bg-[#1A1A1A] pt-8 pb-12 text-white md:pt-20 md:pb-[144px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Card 1 - full-width: AI to supercharge placements */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 gap-5 rounded-[10px] bg-white/5 md:grid-cols-2 max-md:p-2.5">
              <div className="flex max-w-[430px] flex-col justify-end p-3.5 md:px-9 md:py-10">
                <h3 className="text-h5 text-white">
                  AI execution, not another strategy deck
                </h3>
                <p className="text-16 mt-3 text-white/80">
                  Our engineers don't write 200-page strategy decks. They
                  build. They surface bottlenecks, ship automations, and
                  continuously improve how your operations run, so you see
                  practical impact in weeks, not quarters.
                </p>
              </div>
              <div className="aspect-[608/447] relative overflow-hidden rounded-[10px]">
                <img
                  src={IMG_AI}
                  alt="AI placements"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - tall card with bg image */}
          <div className="relative isolate flex flex-col justify-between gap-y-6 overflow-hidden rounded-[10px] bg-white/5 p-6 md:p-8">
            <img
              src={IMG_BD_BG}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <h3 className="text-h5 text-white max-md:text-pretty">
              Say goodbye to bloated consulting fees
            </h3>
            <div className="aspect-550/440">
              <img
                src={SVG_BD}
                alt="No consulting overhead"
                width={550}
                height={440}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
            <p className="text-16 max-w-[476px] text-white/80 md:pb-2">
              No $250K engagements. No months of PowerPoints with nothing
              shipped. Seka engineers are operators embedded with your team,
              billing for output, not slides.
            </p>
          </div>

          {/* Cards 3 + 4 - stacked */}
          <div className="flex flex-col gap-y-5">
            <div className="relative isolate flex flex-1 flex-col justify-between overflow-hidden rounded-[10px] bg-white/5 pb-0">
              <h3 className="text-h5 mb-3 p-6 pb-0 text-white max-md:text-pretty md:p-8 md:pb-0">
                Cutting-edge AI, used in production
              </h3>
              <div className="aspect-614/164 order-last">
                <img
                  src={IMG_TOOLS}
                  alt="Production AI tooling"
                  width={1228}
                  height={328}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-16 max-w-[540px] px-6 pb-6 text-white/80 md:px-8">
                Our engineers move fast with the latest LLM orchestration and
                agentic workflows, built into secure systems that scale in
                production, not demos that never ship.
              </p>
            </div>

            <div className="relative isolate flex flex-1 flex-col justify-between overflow-hidden rounded-[10px] bg-white/5 pb-0">
              <h3 className="text-h5 mb-3 p-6 pb-0 text-white max-md:text-pretty md:p-8 md:pb-0">
                Senior oversight on every engagement
              </h3>
              <div className="aspect-614/164 order-last">
                <img
                  src={IMG_FOLLOWUPS}
                  alt="Senior oversight"
                  width={1228}
                  height={328}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-16 max-w-[540px] px-6 pb-6 text-white/80 md:px-8">
                Every engineer is backed by Seka consultants with deep AI
                expertise. We sense-check plans before execution and manage
                the engagement end-to-end. Staffing without the risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
