import { Hero } from "../components/Hero";
import { LogoGrid } from "../components/LogoGrid";
import { CompaniesIntro } from "../components/CompaniesIntro";
import { Features } from "../components/Features";
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
      <BuildersSection />
      <BuildersBento />
      <CtaBanner />
    </main>
  );
}
