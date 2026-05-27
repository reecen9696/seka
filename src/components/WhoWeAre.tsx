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
        <SectionIntro
          tone="light"
          align="center"
          eyebrow="Who we are"
          title="Founded by operators, not theorists."
        >
          <p>
            Lakshane and Reece have built and shipped AI and data products
            across enterprise, government, and startup environments.
          </p>
        </SectionIntro>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-8">
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className="flex flex-col">
              {/* white outline frame around the portrait only */}
              <div className="rounded-2xl border border-white/25 p-[22px]">
                <div className="bg-white/5 aspect-[342/392] w-full overflow-hidden rounded-xl">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-h5 text-white">{founder.name}</h3>
                <p className="text-14 mt-1.5 text-white/60">{founder.role}</p>
                <p className="text-16 mt-3 text-white/80">{founder.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <Tag key={tag} tone="light">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
