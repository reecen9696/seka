import { Eyebrow } from "../design-system/primitives/Eyebrow";
import type { Project } from "./projects-data";

/**
 * Case-study card with two layouts:
 *  - "split"   — copy on one side, full-bleed imagery on the other (the /work
 *                page list; alternate `reverse` down the column).
 *  - "stacked" — image on top, condensed copy below; sits in a side-by-side
 *                grid as the home-page teaser.
 */
export function ProjectCard({
  project,
  reverse = false,
  variant = "split",
}: {
  project: Project;
  reverse?: boolean;
  variant?: "split" | "stacked";
}) {
  if (variant === "stacked") {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-ink text-white">
        <div className="relative aspect-[16/10] w-full">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-1 flex-col gap-y-4 p-7 md:p-9">
          <div>
            <Eyebrow tone="light">{project.tag}</Eyebrow>
            <h3 className="text-h3 mt-4 text-white">{project.title}</h3>
            <p className="text-16 mt-2 text-white/55">{project.subtitle}</p>
          </div>
          <p className="text-16 text-white/70">{project.summary}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-lg bg-ink text-white md:grid-cols-2">
      <div
        className={`flex flex-col justify-center gap-y-6 p-7 md:p-12 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <div>
          <Eyebrow tone="light">{project.tag}</Eyebrow>
          <h3 className="text-h3 mt-5 text-white">{project.title}</h3>
          <p className="text-18 mt-2 text-white/55">{project.subtitle}</p>
        </div>
        <div className="flex flex-col gap-y-4">
          {project.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-16 text-white/70">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`relative min-h-[300px] md:min-h-[480px] ${
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
