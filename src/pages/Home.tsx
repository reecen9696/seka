import { Hero } from "../components/Hero";
import { CompaniesIntro } from "../components/CompaniesIntro";
import { Features } from "../components/Features";
import { Industries } from "../components/Industries";
import { WhoWeAre } from "../components/WhoWeAre";
import { BuildersSection } from "../components/BuildersSection";
import { BuildersBento } from "../components/BuildersBento";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  return (
    <main>
      <Hero />
      <CompaniesIntro />
      <Features />
      <Industries />
      <WhoWeAre />
      <BuildersSection />
      <BuildersBento />
      <CtaBanner />
    </main>
  );
}
