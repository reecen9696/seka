import { CtaLink } from "../components/CtaLink";
import imgPropia from "../assets/work/propia.png";
import imgBega from "../assets/work/bega.png";

const IMG_PROPIA = imgPropia;
const IMG_AGRI = imgBega;

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
    <div className="grid grid-cols-1 gap-5 overflow-hidden rounded-[10px] bg-[#1A1A1A] text-white md:grid-cols-2 max-md:p-2.5">
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
        className={`relative min-h-[260px] overflow-hidden rounded-[10px] md:min-h-[420px] ${
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
      <section className="overflow-clip bg-[#F6F8F6] pt-[100px] pb-12 text-black md:pt-[140px] md:pb-20">
        <div className="container">
          <div className="mdx:mx-auto flex w-full flex-col items-center justify-center gap-y-6 text-center">
            <h1 className="text-h1 xs:max-lg:text-balance mx-auto w-full max-w-[823px]">
              Seka is early. The people behind it are not.
            </h1>
            <p className="text-18 xs:max-lg:text-balance mx-auto w-full max-w-[520px] text-black/70">
              Here is what we have built independently, and what is currently in
              progress.
            </p>
            <div className="flex items-center justify-center gap-x-2.5 pt-1 md:gap-x-3">
              <CtaLink to="/get-a-demo" label="Start a conversation" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="overflow-clip bg-[#F6F8F6] pb-10 text-black md:pb-20">
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

      {/* Contact */}
      <section className="container pt-10 pb-20 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 overflow-hidden rounded-[10px] bg-[#1A1A1A] p-8 text-white md:grid-cols-2 md:p-16">
          <div>
            <div className="flex items-center gap-x-[9px] pb-3">
              <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
              <h6 className="text-eyebrow">Contact</h6>
            </div>
            <h2 className="text-h2 text-white">Let us talk.</h2>
            <div className="mt-5 flex max-w-[460px] flex-col gap-y-4">
              <p className="text-18 text-white/70">
                If you are serious about AI transformation, not the slide deck
                version but the kind that changes how your business operates, we
                would like to hear from you.
              </p>
              <p className="text-18 text-white/70">
                We take a small number of engagements at a time. If the timing
                is right, we will move quickly.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-7 md:items-start">
            <div>
              <h3 className="text-h5 text-white">Start with a conversation</h3>
              <p className="text-16 mt-3 max-w-[420px] text-white/70">
                Tell us what you are trying to solve. We will tell you honestly
                whether we can help, and how.
              </p>
            </div>
            <CtaLink to="/get-a-demo" label="Book a call" variant="light" />
            <div className="flex flex-col gap-y-1.5">
              <a
                href="mailto:hello@seka.com.au"
                className="text-18 text-white underline underline-offset-2 transition-opacity hover:opacity-70"
              >
                hello@seka.com.au
              </a>
              <p className="text-14 text-white/55">
                Melbourne, Australia · Available nationwide and internationally
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
