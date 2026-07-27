import { Link } from "react-router-dom";
import { Tag } from "../design-system/primitives/Tag";
import { CARD_FRAME, ProjectMedia } from "./ProjectCard";
import type { Project } from "./projects-data";

function Arrow() {
  return (
    <svg className="w-[9px]" viewBox="0 0 12 13" fill="none">
      <path
        d="M0.75 6.46875H11.25M11.25 6.46875L6 11.7188M11.25 6.46875L6 1.21875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The /work index card: imagery, the case-study title, and a read affordance,
 * two-up down the page. The whole card is the link, so the arrow badge is a
 * span rather than an {@link ArrowLink} — an anchor inside an anchor is invalid
 * markup and breaks keyboard navigation.
 */
export function CaseStudyCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className={`group block h-full transition-colors duration-200 hover:border-black/25 ${CARD_FRAME}`}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-lg text-black">
        <ProjectMedia
          project={project}
          tone="light"
          className="aspect-[3/2] w-full shrink-0"
        />

        <div className="flex flex-1 flex-col gap-y-6 p-6 lg:p-7">
          <div>
            <Tag tone="dark">{project.category}</Tag>
            <h3 className="text-h4 mt-4 text-balance">{project.title}</h3>
            <p className="text-16 mt-2 text-black/70">{project.summary}</p>
          </div>

          <span className="text-nav-link mt-auto flex items-center gap-x-3 text-black">
            Read case study
            <span className="relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black text-white">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[150%]">
                <Arrow />
              </span>
              <span className="absolute inset-0 flex -translate-x-[150%] items-center justify-center transition-transform duration-300 group-hover:translate-x-0">
                <Arrow />
              </span>
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
