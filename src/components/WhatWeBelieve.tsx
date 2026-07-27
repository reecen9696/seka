import { BuildersBento } from "./BuildersBento";
import { SectionIntro } from "../design-system/primitives/SectionIntro";

/**
 * PARKED — not currently rendered on any page.
 *
 * The "What we believe" section: a dark heading band over the four-belief
 * bento grid (strategy without execution, the talent gap, small teams, built
 * to fit). Pulled off /who-we-are on 2026-07-27 but kept intact so it can go
 * back without being rebuilt.
 *
 * To restore, add `<WhatWeBelieve />` to `src/pages/WhoWeArePage.tsx` between
 * the founders section and `<CtaBanner />`.
 *
 * The bento itself still renders live in the design-system viewer at
 * `/design-system#builders-bento`.
 */
export function WhatWeBelieve() {
  return (
    <>
      <section className="bg-ink pt-16 text-white md:pt-24">
        <div className="container">
          <SectionIntro tone="light" title="What we believe" />
        </div>
      </section>
      <BuildersBento />
    </>
  );
}
