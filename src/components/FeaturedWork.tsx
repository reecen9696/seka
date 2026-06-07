import { SectionIntro } from "../design-system/primitives/SectionIntro";
import { CtaLink } from "./CtaLink";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "./projects-data";

/**
 * Home-page teaser for the case studies shown in full on /work. Sits directly
 * below WhoWeAre to back up the "operators, not theorists" claim with shipped
 * work, then routes to the full /work page.
 */
export function FeaturedWork() {
  return (
    <section className="overflow-clip bg-surface py-16 text-black md:py-32">
      <div className="container">
        <SectionIntro
          eyebrow="Selected work"
          title="Proof, not promises."
        >
          <p>
            The same team that scopes, builds, and ships client engagements has
            already done it, end to end. Here is a sample of what we have built.
          </p>
        </SectionIntro>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              variant="stacked"
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaLink to="/work" label="View all work" variant="dark" />
        </div>
      </div>
    </section>
  );
}
