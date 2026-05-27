import { Fragment } from "react";

const ITEMS = [
  "ASX-listed energy",
  "Federal government",
  "ASX-listed mining",
  "Bega Group",
  "Propia",
];

/**
 * Thin credential bar under the hero — the backgrounds the founders bring,
 * separated by dots. Hairline rules top and bottom.
 */
export function ProofBar() {
  return (
    <section className="bg-surface text-black">
      <div className="container">
        <div className="flex flex-col gap-y-3 border-y border-black/10 py-5 md:flex-row md:items-center md:gap-x-8">
          <span className="text-eyebrow shrink-0 text-black/45">
            Backgrounds across
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {ITEMS.map((item, i) => (
              <Fragment key={item}>
                {i > 0 && (
                  <span className="size-1 shrink-0 rounded-full bg-black/25" />
                )}
                <span className="text-14 text-black/70">{item}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
