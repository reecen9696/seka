import { BuildersBento } from "../components/BuildersBento";
import { CtaBanner } from "../components/CtaBanner";
import imgLakshane from "../assets/team/lakshane.png";
import imgReece from "../assets/team/reece.png";

type Founder = {
  name: string;
  role: string;
  img: string;
  paragraphs: string[];
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
  },
];

function FounderBio({ founder, reverse }: { founder: Founder; reverse: boolean }) {
  return (
    <div
      className={`mdx:flex-row mdx:items-start flex flex-col gap-x-14 gap-y-8 ${
        reverse ? "mdx:flex-row-reverse" : ""
      }`}
    >
      <div className="mdx:sticky mdx:top-[100px] w-full max-w-[392px] shrink-0">
        <div className="bg-grey-100 ring-black/8 aspect-[392/470] w-full overflow-hidden rounded-[14px] ring-1 ring-inset">
          <img
            src={founder.img}
            alt={founder.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <span className="text-eyebrow text-black/40">{founder.role}</span>
        <h2 className="text-h4 mt-2">{founder.name}</h2>
        <div className="mt-6 flex flex-col gap-y-4">
          {founder.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-18 text-black/70">
              {paragraph}
            </p>
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
      <section className="overflow-clip bg-[#F6F8F6] pt-[120px] pb-12 text-black md:pt-[168px] md:pb-20">
        <div className="container">
          <div className="mdx:mx-auto flex w-full flex-col items-center gap-y-4 text-center">
            <div className="flex items-center gap-x-[9px] pb-1">
              <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
              <h6 className="text-eyebrow">Who we are</h6>
            </div>
            <h1 className="text-h2 xs:max-lg:text-balance mx-auto w-full max-w-[860px]">
              Founded on a simple observation.
            </h1>
            <div className="mx-auto flex w-full max-w-[720px] flex-col gap-y-4">
              <p className="text-18 xs:max-lg:text-pretty text-black/70">
                The businesses that get the most from AI are not the ones with
                the biggest budgets or the most sophisticated tech stacks. They
                are the ones with the right people executing the right things in
                the right order.
              </p>
              <p className="text-18 xs:max-lg:text-pretty text-black/70">
                Most AI consultancies sell strategy. Most staffing firms place
                bodies. Most dev shops build to spec without understanding the
                business. Seka does all three, because none of them work in
                isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="overflow-clip bg-[#F6F8F6] pb-16 text-black md:pb-28">
        <div className="container flex flex-col gap-y-20 md:gap-y-28">
          {FOUNDERS.map((founder, i) => (
            <FounderBio key={founder.name} founder={founder} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-[#1A1A1A] pt-16 text-white md:pt-28">
        <div className="container">
          <div className="mdx:mx-auto flex w-full flex-col items-center gap-y-4 text-center">
            <div className="flex items-center gap-x-[9px] pb-1">
              <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
              <h6 className="text-eyebrow">What we believe</h6>
            </div>
            <h2 className="text-h2">What we believe.</h2>
          </div>
        </div>
      </section>
      <BuildersBento />

      <CtaBanner />
    </main>
  );
}
