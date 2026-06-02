import { PageHero } from "../components/PageHero";
import { LogoGrid } from "../components/LogoGrid";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../components/projects-data";
import logoPropia from "../assets/logos/propia-white.svg";
import logoBega from "../assets/logos/bega-white.svg";

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
        </div>
      </section>
    </main>
  );
}
