import { Link, Navigate, useParams } from "react-router-dom";
import { CtaBanner } from "../components/CtaBanner";
import { CARD_FRAME, MetricBlock, ProjectMedia } from "../components/ProjectCard";
import { PROJECTS } from "../components/projects-data";
import { Reveal } from "../design-system/primitives/Reveal";
import { Tag } from "../design-system/primitives/Tag";

function BackLink() {
  return (
    <Link
      to="/work"
      className="text-nav-link group inline-flex items-center gap-x-3 text-black/60 transition-colors hover:text-black"
    >
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-black/15 transition-colors group-hover:border-black/40">
        <svg className="w-[9px] rotate-180" viewBox="0 0 12 13" fill="none">
          <path
            d="M0.75 6.46875H11.25M11.25 6.46875L6 11.7188M11.25 6.46875L6 1.21875"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      All case studies
    </Link>
  );
}

/**
 * A single case study at /work/:slug — the summary page behind each card on
 * /work. Header, then one dark panel pairing the imagery with the facts and
 * figures, then the narrative in headed sections. An unknown slug bounces back
 * to the index rather than rendering an empty page.
 */
export function CaseStudy() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <main>
      {/* Header — left aligned like a document, and tighter under the navbar
          than PageHero: the back link reads as chrome, not as a first line */}
      <section className="overflow-clip bg-surface pt-[112px] pb-12 text-black md:pt-[150px] md:pb-16">
        <div className="container">
          <BackLink />
          <Reveal as="h1" distance={14} className="text-h1 mt-8 text-balance">
            {project.title}
          </Reveal>
          <Reveal
            as="p"
            delay={70}
            distance={14}
            className="text-18 mt-4 max-w-[640px] text-black/70"
          >
            {project.summary}
          </Reveal>
          <Reveal delay={140} distance={14} className="mt-6">
            <Tag tone="outline">{project.tag}</Tag>
          </Reveal>
        </div>
      </section>

      {/* At a glance — imagery, facts, and the figures in one dark panel */}
      <section className="overflow-clip bg-surface pb-16 text-black md:pb-24">
        <div className="container">
          <Reveal className={CARD_FRAME}>
            <div className="overflow-hidden rounded-lg bg-ink text-white">
              <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]">
                <ProjectMedia
                  project={project}
                  className="min-h-[280px] lg:min-h-[440px]"
                />

                <dl className="flex flex-col justify-center gap-y-6 p-7 md:p-10">
                  {project.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col gap-y-1 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <dt className="text-14 text-white/45">{fact.label}</dt>
                      <dd className="text-18 text-white">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* figures run across the foot of the panel, as on the /work card */}
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 border-t border-white/15 p-7 sm:grid-cols-3 md:p-10">
                {project.metrics.map((metric) => (
                  <MetricBlock key={metric.value} metric={metric} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The narrative — measure held to ~640px so the copy stays readable */}
      <section className="overflow-clip bg-surface pb-16 text-black md:pb-24">
        <div className="container">
          <div className="flex max-w-[680px] flex-col gap-y-12">
            {project.sections.map((section) => (
              <Reveal as="article" key={section.heading}>
                <h2 className="text-h3">{section.heading}</h2>
                <div className="mt-4 flex flex-col gap-y-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-18 text-black/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}

            {project.pullQuote && (
              <Reveal as="figure" className={CARD_FRAME}>
                <blockquote className="rounded-lg bg-ink p-7 md:p-10">
                  <p className="font-heading text-[28px] leading-[1.25] font-light text-balance text-white/90 md:text-[32px]">
                    {project.pullQuote}
                  </p>
                </blockquote>
              </Reveal>
            )}

            <Reveal className="border-t border-black/10 pt-8">
              <BackLink />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
