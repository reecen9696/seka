import { BuildersBento } from "../components/BuildersBento";
import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { SectionIntro } from "../design-system/primitives/SectionIntro";
import imgLakshane from "../assets/team/lakshane.png";
import imgReece from "../assets/team/reece.png";

type Detail = { label: string; value: string };

type Founder = {
  name: string;
  role: string;
  img: string;
  paragraphs: string[];
  details: Detail[];
};

const FOUNDERS: Founder[] = [
  {
    name: "Lakshane Fonseka",
    role: "Co-founder",
    img: imgLakshane,
    paragraphs: [
      "Lakshane spent the early part of his career inside two of the world's largest professional services firms, KPMG and Accenture, where he led and delivered engagements ranging from federal government advisory to enterprise data infrastructure and workforce transformation.",
      "At Accenture, he led a workforce transformation programme for a major ASX-listed mining company, redesigning how thousands of people worked alongside new enterprise technology systems. He also delivered a full data warehousing solution for Alinta Energy, one of Australia's largest energy retailers, building the infrastructure that underpinned their business intelligence capability.",
      "At KPMG, he worked across federal government and large private sector clients, delivering strategy, data, and transformation engagements where the stakes were high and the margin for error was low.",
      "After consulting, Lakshane founded Uprise Digital, an integrated digital growth agency serving SMEs and enterprise clients across Australia. He also co-built Propia, an AI-native property decision platform, as proof of the kind of product Seka now delivers for clients.",
      "Lakshane brings the strategic frameworks, commercial discipline, and enterprise delivery experience that most AI agencies lack entirely.",
    ],
    details: [
      { label: "Previously", value: "KPMG, Accenture" },
      { label: "Focus", value: "Strategy & commercial" },
      { label: "Built", value: "Propia, Uprise Digital" },
    ],
  },
  {
    name: "Reece Nimorakiotakis",
    role: "Co-founder",
    img: imgReece,
    paragraphs: [
      "Reece is a software engineer and serial co-founder with deep technical range, from enterprise systems and cloud architecture through to smart contracts, full-stack product development, and AI integration.",
      "He began his career at JLL, one of the world's largest commercial real estate firms, where he developed a strong foundation in enterprise-scale data and systems. He then co-founded Arcadia Labs, where he spent three years building production-grade software across distributed systems, AWS infrastructure, and blockchain applications. Most recently he co-founded Dropbeast, further sharpening his ability to take products from concept to deployment at speed.",
      "Reece is currently scoping and building an AI-powered data tool for one of Australia's most recognisable agricultural brands, a project sitting at the intersection of operational complexity, data engineering, and applied machine learning.",
      "Where Lakshane brings the strategy and commercial layer, Reece brings the engineering depth that makes it real. Between them, Seka does not need to sub-contract the hard parts.",
    ],
    details: [
      { label: "Previously", value: "JLL, Arcadia Labs" },
      { label: "Focus", value: "Engineering & product" },
      { label: "Building", value: "Agricultural AI tooling" },
    ],
  },
];

function FounderBio({ founder, divider }: { founder: Founder; divider: boolean }) {
  return (
    <div
      className={`flex min-w-0 justify-between gap-x-10 gap-y-8 max-md:flex-col ${
        divider ? "border-black/8 mt-16 border-t pt-16 md:mt-24 md:pt-24" : ""
      }`}
    >
      {/* Name + portrait */}
      <div className="mdx:max-w-[392px] flex w-full min-w-0 flex-col gap-y-6">
        <div>
          <span className="text-eyebrow text-black/40">{founder.role}</span>
          <h2 className="text-h4 mt-2 text-balance">{founder.name}</h2>
        </div>
        <div className="bg-grey-100 ring-black/8 aspect-[392/450] w-full overflow-hidden rounded-2xl ring-1 ring-inset">
          <img
            src={founder.img}
            alt={founder.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Bio + background */}
      <div className="mdx:max-w-[520px] w-full min-w-0">
        <div className="flex flex-col gap-y-4">
          {founder.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-20 text-black/80">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {founder.details.map((detail) => (
            <div
              key={detail.label}
              className="bg-grey-100 flex items-center gap-x-2.5 self-start rounded-full px-4 py-1.5"
            >
              <div className="size-1.5 shrink-0 rounded-full bg-black/40" />
              <div className="space-x-1.5">
                <span className="text-nav-link text-black/40">{detail.label}:</span>
                <span className="text-16 !font-heading !leading-none text-black">
                  {detail.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhoWeArePage() {
  return (
    <main>
      {/* Intro */}
      <PageHero
        title="Founded on a simple observation."
        subtitle="The businesses that get the most from AI are not the ones with the biggest budgets — they are the ones with the right people executing the right things in the right order."
      />

      {/* Founders */}
      <section className="overflow-clip bg-surface py-16 text-black md:py-24">
        <div className="container flex flex-col">
          {FOUNDERS.map((founder, i) => (
            <FounderBio key={founder.name} founder={founder} divider={i > 0} />
          ))}
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-ink pt-16 text-white md:pt-24">
        <div className="container">
          <SectionIntro
            tone="light"
            eyebrow="What we believe"
            title="What we believe."
          />
        </div>
      </section>
      <BuildersBento />

      <CtaBanner />
    </main>
  );
}
