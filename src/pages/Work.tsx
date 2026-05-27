import { PageHero } from "../components/PageHero";
import { LogoGrid } from "../components/LogoGrid";
import imgPropia from "../assets/work/propia.png";
import imgBega from "../assets/work/bega.png";
import logoPropia from "../assets/logos/propia-white.svg";
import logoBega from "../assets/logos/bega-white.svg";

const IMG_PROPIA = imgPropia;
const IMG_AGRI = imgBega;

type Testimonial = {
  client: string;
  logo: string;
  logoClass: string;
  quote: string;
  attribution: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    client: "Propia",
    logo: logoPropia,
    logoClass: "h-[24px]",
    quote:
      "Seka took us from an idea to a working AI-native platform. They owned the architecture, the data, and the product, and shipped exactly what they scoped.",
    attribution: "Propia — AI-native property decision platform",
  },
  {
    client: "Bega",
    logo: logoBega,
    logoClass: "h-[40px]",
    quote:
      "They understood our operational complexity from day one. The data tooling Seka is building genuinely changes how our teams work.",
    attribution: "Bega — Agriculture & food manufacturing",
  },
];

type Project = {
  tag: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  img: string;
};

const PROJECTS: Project[] = [
  {
    tag: "Product build · PropTech",
    title: "Propia",
    subtitle: "AI-native property decision platform",
    paragraphs: [
      "Co-built Propia from the ground up, an AI-powered platform designed to help property buyers and investors make better decisions using data, predictive modelling, and intelligent search. The project covered everything from technical architecture and data pipelines through to product design and deployment.",
      "Propia is the proof of concept for the kind of end-to-end AI product delivery Seka brings to client engagements, scoped, built, and shipped by the same team that will build yours.",
    ],
    img: IMG_PROPIA,
  },
  {
    tag: "Active engagement · Agriculture and food manufacturing",
    title: "Agricultural AI data tool",
    subtitle: "Major Australian food brand",
    paragraphs: [
      "Currently scoping and building an AI-powered data tool for one of Australia's most recognisable agricultural brands. The project involves complex operational data, supply chain intelligence, and machine learning integration at scale.",
      "Further detail available on request.",
    ],
    img: IMG_AGRI,
  },
];

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-5 overflow-hidden rounded-lg bg-ink text-white md:grid-cols-2 max-md:p-2.5">
      <div
        className={`flex flex-col justify-between gap-y-10 p-4 md:p-12 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <div>
          <p className="text-14-medium text-white/50">{project.tag}</p>
          <h2 className="text-h4 mt-3 text-white">{project.title}</h2>
          <p className="text-18 mt-1.5 text-white/60">{project.subtitle}</p>
          <div className="mt-6 flex flex-col gap-y-4">
            {project.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-16 text-white/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`relative min-h-[260px] overflow-hidden rounded-lg md:min-h-[420px] ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export function Work() {
  return (
    <main>
      {/* Intro */}
      <PageHero
        title="Seka is early. The people behind it are not."
        subtitle="Here is what we have built independently, and what is currently in progress."
      />

      {/* Companies + quotes */}
      <section className="overflow-clip bg-surface py-16 text-black md:py-24">
        <LogoGrid />
        <div className="container mt-12 md:mt-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.client}
                className="ring-white/10 flex flex-col justify-between gap-y-12 overflow-hidden rounded-lg bg-ink p-8 text-white ring-1 ring-inset max-md:min-h-[320px] md:min-h-[500px] md:p-10"
              >
                <img
                  src={t.logo}
                  alt={t.client}
                  className={`${t.logoClass} w-auto self-start`}
                />
                <div>
                  <p className="font-heading text-[1.5rem] font-light leading-[1.3] text-white md:text-[1.75rem]">
                    “{t.quote}”
                  </p>
                  <p className="text-14 mt-6 text-white/55">{t.attribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="overflow-clip bg-surface py-16 text-black md:py-24">
        <div className="container flex flex-col gap-y-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
          ))}
          <p className="text-14 mx-auto mt-6 max-w-[680px] text-center text-black/45">
            Additional case studies in development. As client engagements
            complete, this page will be updated with outcomes, metrics, and
            named references where clients have given permission.
          </p>
        </div>
      </section>
    </main>
  );
}
