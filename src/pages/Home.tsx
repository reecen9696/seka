import { Hero } from "../components/Hero";
import { LogoGrid } from "../components/LogoGrid";
import { CompaniesIntro } from "../components/CompaniesIntro";
import { WhoWeAre } from "../components/WhoWeAre";
import { Features } from "../components/Features";
import { Industries } from "../components/Industries";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  return (
    <main>
      <Hero />
      <LogoGrid />
      <CompaniesIntro />
      <Features />
      <WhoWeAre />
      <Industries />
      <CtaBanner />
    </main>
  );
}
