import { Hero } from "../components/Hero";
import { LogoGrid } from "../components/LogoGrid";
import { ServicesGrid } from "../components/ServicesGrid";
import { IndustryTags } from "../components/IndustryTags";
import { WhoWeAre } from "../components/WhoWeAre";
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

      {/* The problem + services — 128px above / 164px below (desktop) */}
      <section className="overflow-clip bg-surface pt-10 pb-12 text-black md:pt-32 md:pb-[164px]">
        <div className="container">
          <SectionIntro
            align="center"
            eyebrow="The problem"
            title="Most businesses know they need AI. Almost none know how to use it."
          >
            <p>
              The gap is not knowledge, it is execution. Seka closes it by
              embedding strategy, talent, and delivery into one accountable
              engagement.
            </p>
          </SectionIntro>
          <ServicesGrid className="mt-12 md:mt-14" />
        </div>
      </section>

      <IndustryTags />
      <WhoWeAre />
      <CtaBanner />
    </main>
  );
}
