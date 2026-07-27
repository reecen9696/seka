import { CtaBanner } from "../components/CtaBanner";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../design-system/primitives/Reveal";
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

/**
 * One founder: a compact identity rail beside the long-form bio.
 *
 * The rail — portrait, name, role, and the key facts as a definition list —
 * sticks to the viewport while the prose scrolls past it. That is what lets the
 * portrait be small: it no longer has to hold up a column on its own, so there
 * is no dead space under it and you always know whose story you are reading.
 */
function FounderBio({ founder, divider }: { founder: Founder; divider: boolean }) {
  return (
    <div
      className={`flex min-w-0 gap-x-12 gap-y-8 max-md:flex-col lg:gap-x-24 ${
        divider ? "border-black/8 mt-16 border-t pt-16 md:mt-24 md:pt-24" : ""
      }`}
    >
      {/* Identity rail — sticky so it stays with the bio it belongs to */}
      <div className="shrink-0 md:sticky md:top-28 md:self-start md:w-[248px] lg:w-[264px]">
        <Reveal>
          <div className="max-w-[248px] rounded-xl border border-black/15 p-2 max-md:mx-auto">
            <div className="bg-grey-100 aspect-[4/5] w-full overflow-hidden rounded-lg">
              <img
                src={founder.img}
                alt={founder.name}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-5 max-md:text-center">
            <h2 className="text-h4 text-balance">{founder.name}</h2>
            <p className="text-14 mt-1 text-black/45">{founder.role}</p>
          </div>

          {/* Key facts read as a definition list, not pills — at rail width
              pills wrap mid-label and lose the label/value pairing */}
          <dl className="border-black/8 mt-6 flex flex-col gap-y-3 border-t pt-5">
            {founder.details.map((detail) => (
              <div key={detail.label}>
                <dt className="text-12 text-black/40">{detail.label}</dt>
                <dd className="text-16 font-heading mt-0.5 leading-snug text-black">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* The bio itself */}
      <Reveal delay={70} className="w-full min-w-0 md:max-w-[720px]">
        <div className="flex flex-col gap-y-4">
          {founder.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-18 text-black/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
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

      {/* Founders — no `overflow-clip` here: it would break the sticky rail */}
      <section className="bg-surface py-16 text-black md:py-24">
        <div className="container flex flex-col">
          {FOUNDERS.map((founder, i) => (
            <FounderBio key={founder.name} founder={founder} divider={i > 0} />
          ))}
        </div>
      </section>

      {/* "What we believe" used to sit here — parked in
          components/WhatWeBelieve.tsx, drop <WhatWeBelieve /> back in to restore. */}

      <CtaBanner />
    </main>
  );
}
