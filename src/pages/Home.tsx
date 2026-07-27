import { Hero } from "../components/Hero";
import { LogoGrid } from "../components/LogoGrid";
import { ServicesGrid } from "../components/ServicesGrid";
import { Industries } from "../components/Industries";
import { WhoWeAre } from "../components/WhoWeAre";
import { FeaturedWork } from "../components/FeaturedWork";
import { ServicesScroll } from "../components/ServicesScroll";
import { CtaBanner } from "../components/CtaBanner";
import { SectionIntro } from "../design-system/primitives/SectionIntro";

export function Home() {
  return (
    <main>
      <Hero />
      {/* 32px gap to the carousel (LogoGrid's built-in mt); no bottom padding —
          the next section's top padding owns the gap below it. */}
      <section className="overflow-clip bg-surface pt-2 text-black md:pt-0">
        <LogoGrid />
      </section>

      {/* The problem — no bottom padding; Our services follows on the same
          surface and its own top padding owns the 128px gap */}
      <section className="overflow-clip bg-surface pt-10 text-black md:pt-32">
        <div className="container">
          <SectionIntro title="The problem">
            <p>
              The gap is not knowledge, it is execution. Seka closes it by
              embedding strategy, talent, and delivery into one accountable
              engagement.
            </p>
          </SectionIntro>
          <ServicesGrid className="mt-12 md:mt-14" />
        </div>
      </section>

      {/* Our services — the same scroll-pinned panel that runs on /what-we-do,
          under the home page's own lead-in */}
      <ServicesScroll
        title="Our services"
        intro={
          <p>
            Five ways to engage, from a first roadmap through to an embedded
            delivery team. Whichever you start with, it is scoped, built, and
            shipped by the same people.
          </p>
        }
      />

      <WhoWeAre />
      <FeaturedWork />
      <Industries />
      <CtaBanner />
    </main>
  );
}
