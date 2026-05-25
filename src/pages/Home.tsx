import { Hero } from "../components/Hero";
import { LogoGrid } from "../components/LogoGrid";
import { CompaniesIntro } from "../components/CompaniesIntro";
import { Features } from "../components/Features";
import { WhoWeAre } from "../components/WhoWeAre";
import { BuildersSection } from "../components/BuildersSection";
import { BuildersBento } from "../components/BuildersBento";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  return (
    <main>
      <Hero />
      <LogoGrid />
      <CompaniesIntro />
      <Features />
      <WhoWeAre />
      <BuildersSection />
      <BuildersBento />
      <CtaBanner />
    </main>
  );
}
