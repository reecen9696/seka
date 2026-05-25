import { Hero } from "../components/Hero";
import { CompaniesIntro } from "../components/CompaniesIntro";
import { WhoWeAre } from "../components/WhoWeAre";
import { ServicePillars } from "../components/ServicePillars";
import { Industries } from "../components/Industries";
import { CtaBanner } from "../components/CtaBanner";

export function Home() {
  return (
    <main>
      <Hero />
      <CompaniesIntro />
      <WhoWeAre />
      <ServicePillars />
      <Industries />
      <CtaBanner />
    </main>
  );
}
