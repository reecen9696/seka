import { useState } from "react";
import { ArrowLink } from "../design-system/primitives/ArrowLink";
import { SectionIntro } from "../design-system/primitives/SectionIntro";

type Service = {
  number: string;
  tab: string;
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
    tab: "Strategy",
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
    tab: "Automation",
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
    tab: "Product build",
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
    tab: "Talent",
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
    tab: "Teams",
    title: "Team design and build",
    summary:
      "Design the roles, recruit the people, and stand up the operating model for a new or restructured AI or data function.",
    bestFor:
      "Technology companies, scale-ups, and enterprise divisions that want to build an AI or data team quickly and cost-effectively, leveraging offshore talent without sacrificing quality or accountability.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/2f8b882dd8af720f1cabce9d125ca543b0ab4725-1228x1334.jpg?auto=format",
  },
];

export function ServicesTabs() {
  const [active, setActive] = useState(0);
  const total = SERVICES.length;

  return (
    <section className="overflow-clip bg-surface py-16 text-black md:py-32">
      <div className="container space-y-16 md:space-y-32">
        <div className="relative space-y-12">
          {/* Tabs + progress */}
          <div className="max-xs:flex-col flex items-center justify-between gap-x-5">
            <div className="max-mdx:w-full">
              {/* Mobile select */}
              <div className="relative w-full md:hidden">
                <div className="relative flex w-full items-center rounded-full bg-black/10">
                  <select
                    value={active}
                    onChange={(e) => setActive(Number(e.target.value))}
                    className="text-nav-link h-10 w-full cursor-pointer appearance-none bg-transparent pr-10 pl-4 text-black/80 focus:outline-hidden"
                  >
                    {SERVICES.map((s, i) => (
                      <option key={s.number} value={i}>
                        {s.tab}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 pl-2 text-black">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5">
                      <path
                        d="M15 7.5L10 12.5L5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Desktop tabs */}
              <div className="hidden md:flex md:gap-x-2">
                {SERVICES.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={s.number}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(i)}
                      className="cursor-pointer py-1"
                    >
                      <span
                        className={`text-button block rounded-full px-3 py-1.5 transition-colors duration-200 ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black/70 hover:text-black"
                        }`}
                      >
                        {s.tab}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Progress */}
            <div className="mdx:flex hidden items-center gap-x-4">
              <div className="h-1 w-16 rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-black transition-[width] duration-300"
                  style={{ width: `${((active + 1) / total) * 100}%` }}
                />
              </div>
              <p className="text-nav-link text-black/80">
                {active + 1} / {total}
              </p>
            </div>
          </div>

          {/* Panel — every tab is rendered into the same grid cell, so the
              panel's height is fixed to the tallest tab and switching tabs
              never changes the height or shifts the page. */}
          <div className="grid">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={s.number}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 max-mdx:bg-grey-100 max-mdx:flex-col max-mdx:rounded-lg max-mdx:p-2.5 max-mdx:pt-8 flex w-full gap-x-5 gap-y-2.5 transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "pointer-events-none invisible opacity-0"
                  }`}
                >
                  {/* Grey content card */}
                  <div className="bg-grey-100 mdx:px-2 mdx:py-2.5 max-sm:flex-col mdx:gap-y-8 flex flex-1 justify-between gap-y-10 rounded-lg">
                    <div className="mdx:gap-y-8 md:px-6 md:pt-6 md:pb-2 flex flex-1 flex-col justify-between gap-y-2.5">
                      <div className="mdx:space-y-4 max-mdx:px-3 space-y-2.5 lg:max-w-[260px]">
                        <p className="text-14-medium text-black/45">{s.number}</p>
                        <h3 className="text-h4 text-balance">{s.title}</h3>
                        <div className="max-mdx:hidden">
                          <ArrowLink to="/get-a-demo" label="Get in touch" />
                        </div>
                      </div>
                      <div className="text-18 max-mdx:px-3 max-md:text-balance text-black/80 lg:max-w-[280px]">
                        {s.summary}
                      </div>
                      <div className="mdx:hidden max-mdx:px-3 max-mdx:pt-2.5">
                        <ArrowLink to="/get-a-demo" label="Get in touch" />
                      </div>
                    </div>
                    <div className="aspect-325/396 mdx:aspect-[393/480] relative w-full shrink-0 overflow-hidden rounded-lg sm:max-w-[50%] xl:max-w-[393px]">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Black detail card */}
                  <div className="mdx:max-w-[35%] mdx:gap-y-12 relative flex w-full shrink-0 flex-col justify-between gap-y-10 overflow-hidden rounded-lg bg-black px-6 py-8 text-white md:p-8 lg:max-w-[400px]">
                    <div>
                      <p className="text-14-medium text-white/50">
                        {s.listLabel ?? "Best for"}
                      </p>
                      {s.list ? (
                        <ul className="mt-5 flex flex-col gap-y-3.5">
                          {s.list.map((item) => (
                            <li
                              key={item}
                              className="text-16 flex gap-x-3 text-white/80"
                            >
                              <span className="bg-brand-sky mt-2 size-1.5 shrink-0 rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-18 mt-5 text-white/80">{s.bestFor}</p>
                      )}
                    </div>

                    {s.list && (
                      <div>
                        <p className="text-14-medium text-white/50">Best for</p>
                        <p className="text-16 mt-1.5 text-white/70">{s.bestFor}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heading — below the tabbed services */}
        <SectionIntro
          align="center"
          eyebrow="Services"
          title="Five services. One accountable team."
        >
          <p>
            Pick the capability you need now, or combine them. Either way, the
            same team scopes it, builds it, and stands behind it.
          </p>
        </SectionIntro>
      </div>
    </section>
  );
}
