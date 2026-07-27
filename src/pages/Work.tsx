import { PageHero } from "../components/PageHero";
import { LogoGrid } from "../components/LogoGrid";
import { ProjectCard } from "../components/ProjectCard";
import { CtaBanner } from "../components/CtaBanner";
import { PROJECTS } from "../components/projects-data";
import { Reveal } from "../design-system/primitives/Reveal";
import { stagger } from "../design-system/primitives/useReveal";
import { SectionIntro } from "../design-system/primitives/SectionIntro";
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
    logoClass: "h-[22px]",
    quote:
      "Seka took us from an idea to a working AI-native platform. They owned the architecture, the data, and the product, and shipped exactly what they scoped.",
    attribution: "Propia — AI-native property decision platform",
  },
  {
    client: "Bega",
    logo: logoBega,
    logoClass: "h-[36px]",
    quote:
      "They understood our operational complexity from day one. The data tooling Seka is building genuinely changes how our teams work.",
    attribution: "Bega — Agriculture & food manufacturing",
  },
];

export function Work() {
  return (
    <main>
      <PageHero
        title="Seka is early. The people behind it are not."
        subtitle="Here is what we have built independently, and what is currently in progress."
      />

      {/* Credibility strip — the logos carry the hero, so no heading above them */}
      <section className="overflow-clip bg-surface pb-4 text-black md:pb-8">
        <LogoGrid />
      </section>

      {/* Case studies — the substance of the page */}
      <section className="overflow-clip bg-surface py-16 text-black md:py-24">
        <div className="container">
          <SectionIntro title="Case studies">
            <p>
              Three engagements, each one scoped, built, and shipped by the
              people who will work on yours. Figures are the outcome, not the
              activity.
            </p>
          </SectionIntro>

          {/* One reveal per case study — they are a screen apart, so each one
              gets its own entrance as you reach it. */}
          <div className="mt-12 flex flex-col gap-y-6 md:mt-16">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.title}>
                <ProjectCard
                  project={project}
                  index={i + 1}
                  reverse={i % 2 === 1}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What clients say */}
      <section className="overflow-clip bg-surface-alt py-16 text-black md:py-24">
        <div className="container">
          <SectionIntro title="In their words" />

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                as="figure"
                key={t.client}
                delay={stagger(i, 2)}
                className="flex flex-col justify-between gap-y-8 overflow-hidden rounded-lg bg-ink p-8 text-white md:p-10"
              >
                <blockquote className="font-heading text-[1.5rem] leading-[1.35] font-light text-white md:text-[1.75rem]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-white/15 pt-6">
                  <img
                    src={t.logo}
                    alt={t.client}
                    className={`${t.logoClass} w-auto shrink-0`}
                  />
                  <span className="text-14 text-white/55">{t.attribution}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
