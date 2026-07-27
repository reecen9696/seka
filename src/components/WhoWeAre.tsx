import { Reveal } from "../design-system/primitives/Reveal";
import { stagger } from "../design-system/primitives/useReveal";
import { SectionIntro } from "../design-system/primitives/SectionIntro";
import { Tag } from "../design-system/primitives/Tag";
import imgLakshane from "../assets/team/lakshane.png";
import imgReece from "../assets/team/reece.png";

type Founder = {
  name: string;
  role: string;
  img: string;
  bio: string;
  tags: string[];
};

const FOUNDERS: Founder[] = [
  {
    name: "Lakshane Fonseka",
    role: "Co-founder",
    img: imgLakshane,
    bio: "Former consultant at KPMG and Accenture across federal government, ASX-listed mining, and energy sector clients. Founder of Uprise Digital, an integrated digital growth agency. Co-built Propia, an AI-native property decision platform.",
    tags: ["KPMG", "Accenture", "Strategy", "Enterprise delivery"],
  },
  {
    name: "Reece Nimorakiotakis",
    role: "Co-founder",
    img: imgReece,
    bio: "Software engineer and serial co-founder. Built production-grade systems at JLL, Arcadia Labs, and Dropbeast across cloud, smart contracts, and full-stack development. Currently building an AI data tool for a major Australian agricultural brand.",
    tags: ["JLL", "Arcadia Labs", "Full-stack", "AI engineering"],
  },
];

export function WhoWeAre() {
  return (
    <section className="overflow-clip bg-ink py-16 text-white md:py-32">
      <div className="container">
        <SectionIntro tone="light" title="Who we are">
          <p>
            Lakshane and Reece have built and shipped AI and data products
            across enterprise, government, and startup environments.
          </p>
        </SectionIntro>

        {/* Equal-height framed cards: portrait column + copy column. The grid
            stretches both cards to the tallest, the portrait stretches with the
            card, and the tags are pushed to the bottom so they line up. */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {FOUNDERS.map((founder, i) => (
            <Reveal
              as="article"
              key={founder.name}
              delay={stagger(i, 2)}
              className="h-full rounded-lg border border-white/15 p-2.5"
            >
              <div className="flex h-full flex-col gap-5 sm:flex-row sm:gap-6">
                <div className="aspect-[3/4] w-full max-w-[220px] shrink-0 overflow-hidden rounded-lg bg-white/5 sm:aspect-auto sm:w-[168px] sm:min-h-[240px] sm:max-w-none lg:w-[190px]">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col py-1 pr-1 sm:py-3 sm:pr-3">
                  <h3 className="text-h5 text-white">{founder.name}</h3>
                  <p className="text-14 mt-1.5 text-white/50">{founder.role}</p>
                  <p className="text-16 mt-4 text-white/70">{founder.bio}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {founder.tags.map((tag) => (
                      <Tag key={tag} tone="light">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
