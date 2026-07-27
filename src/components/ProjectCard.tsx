import { Tag } from "../design-system/primitives/Tag";
import type { Metric, Project } from "./projects-data";

/** Hairline frame around the card: a 1px rule set off from the content by the
 *  same 10px inset the service cards use. */
export const CARD_FRAME = "rounded-lg border border-black/10 p-2.5";

/**
 * Project imagery, presented according to what it actually is.
 *
 * Website screenshots were the worst thing about the old /work page: run
 * full-bleed they sliced client headlines in half and read as accidental. Here
 * they sit inside a browser chrome, scaled down and anchored to the top, so
 * the crop is obviously deliberate. Photography still runs full-bleed.
 */
export function ProjectMedia({
  project,
  tone = "dark",
  className = "",
}: {
  project: Project;
  /** The card the media sits in — "light" swaps the backdrop and the lift
   *  under the browser frame, which are tuned for the ink card by default. */
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";
  // light cards carry no fill of their own — the media sits straight on the
  // page surface inside the hairline frame
  const backdrop = light ? "" : "bg-white/5";

  if (project.imgType === "quote") {
    return (
      <div
        className={`flex items-center justify-center p-8 md:p-12 ${backdrop} ${className}`}
      >
        <p
          className={`font-heading max-w-[420px] text-[28px] leading-[1.25] font-light text-balance md:text-[32px] ${
            light ? "text-black/80" : "text-white/90"
          }`}
        >
          {project.pullQuote}
        </p>
      </div>
    );
  }

  if (project.imgType === "photo") {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden p-5 md:p-8 ${backdrop} ${className}`}
    >
      <div
        className={`w-full overflow-hidden rounded-md bg-white ${
          light ? "shadow-card" : "shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
        }`}
      >
        {/* browser chrome — reads the screenshot as a product, not a crop */}
        <div className="bg-grey-50 flex h-7 items-center gap-x-1.5 border-b border-black/10 px-3">
          <span className="size-2 rounded-full bg-black/15" />
          <span className="size-2 rounded-full bg-black/15" />
          <span className="size-2 rounded-full bg-black/15" />
        </div>
        <div className="relative aspect-[16/10] w-full">
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * The figure + caption pair, shared by both card layouts. `size="sm"` is for
 * the three-across row on the split card, where 32px values wrap and knock the
 * captions out of alignment with each other.
 */
export function MetricBlock({
  metric,
  size = "lg",
  tone = "dark",
}: {
  metric: Metric;
  size?: "sm" | "lg";
  /** The card it sits in — "light" for the cream cards, "dark" for the ink. */
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div>
      <div
        className={`font-heading leading-none font-light tracking-[-0.05rem] ${
          size === "sm" ? "text-[28px]" : "text-[32px]"
        } ${light ? "text-black" : "text-white"}`}
      >
        {metric.value}
      </div>
      <p className={`text-14 mt-2 ${light ? "text-black/60" : "text-white/60"}`}>
        {metric.label}
      </p>
    </div>
  );
}

/**
 * Case-study card with two layouts:
 *  - "split"   — the full case study on /work: numbered, with the narrative on
 *                one side, imagery on the other, and the metrics on a ruled row
 *                across the foot of the copy. Alternates down the column.
 *  - "stacked" — the compact home-page teaser: 16:9 imagery with a copy panel
 *                tucked under it, showing only the headline metric. Sits
 *                three-up in the FeaturedWork grid.
 *
 * Both layouts sit inside the shared `CARD_FRAME`.
 */
export function ProjectCard({
  project,
  index,
  reverse = false,
  variant = "split",
}: {
  project: Project;
  /** 1-based position, rendered as the case-study number on the split card. */
  index?: number;
  reverse?: boolean;
  variant?: "split" | "stacked";
}) {
  const headline = project.metrics[0];

  if (variant === "stacked") {
    return (
      // the cream panel from the /work index card: the fill is the card, no border
      <div className="bg-grey-100 h-full rounded-lg p-2.5">
        <div className="flex h-full flex-col overflow-hidden rounded-lg text-black">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            {project.img ? (
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover ${
                  project.imgType === "photo" ? "object-center" : "object-top"
                }`}
              />
            ) : (
              <div className="absolute inset-0 flex items-center bg-black/5 p-5 lg:p-6">
                <p className="font-heading text-[22px] leading-[1.25] font-light text-balance text-black/80">
                  {project.pullQuote}
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-4 pt-5 lg:p-5">
            {/* mb keeps a floor under the figure block; mt-auto below still
                aligns it card to card when a title wraps */}
            <div className="mb-5">
              <h3 className="text-h5">{project.title}</h3>
              <p className="text-14 mt-1 text-black/50">{project.subtitle}</p>
            </div>
            {/* figure stacked over its caption: at 3-up width a side-by-side
                row shreds the caption into four ragged lines */}
            <div className="mt-auto">
              <MetricBlock metric={headline} tone="light" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className={CARD_FRAME}>
      <div className="grid grid-cols-1 overflow-hidden rounded-lg bg-ink text-white lg:grid-cols-2">
        <div
          className={`flex flex-col gap-y-8 p-7 md:p-10 lg:p-12 ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <div>
            <div className="flex items-center gap-x-3">
              {index != null && (
                <span className="text-14-medium tabular-nums text-white/35">
                  {String(index).padStart(2, "0")}
                </span>
              )}
              <Tag tone="light">{project.tag}</Tag>
            </div>
            <h3 className="text-h3 mt-5 text-white">{project.title}</h3>
            <p className="text-18 mt-2 text-white/55">{project.subtitle}</p>
          </div>

          <div className="flex flex-col gap-y-4">
            {project.sections.flatMap((s) => s.body).map((paragraph, i) => (
              <p key={i} className="text-16 text-white/70">
                {paragraph}
              </p>
            ))}
          </div>

          {/* metrics anchor to the foot of the copy so they line up card to
              card down the page, whichever side the imagery is on */}
          <div className="mt-auto grid grid-cols-1 gap-x-6 gap-y-6 border-t border-white/15 pt-7 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <MetricBlock key={metric.value} metric={metric} size="sm" />
            ))}
          </div>
        </div>

        <ProjectMedia
          project={project}
          className={`min-h-[320px] lg:min-h-[560px] ${
            reverse ? "lg:order-1" : ""
          }`}
        />
      </div>
    </article>
  );
}
