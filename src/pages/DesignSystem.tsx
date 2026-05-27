import type { ReactNode } from "react";
import {
  ArrowLink,
  BulletList,
  Button,
  Card,
  Eyebrow,
  SectionHeader,
  SectionIntro,
  Stat,
  Tag,
} from "../design-system";
import { colors, fonts, layout, radii, shadows, typography } from "../design-system/tokens";
import { Hero } from "../components/Hero";
import { ProofBar } from "../components/ProofBar";
import { ServicesGrid } from "../components/ServicesGrid";
import { IndustryTags } from "../components/IndustryTags";
import { CompaniesIntro } from "../components/CompaniesIntro";
import { Features } from "../components/Features";
import { ServicesTabs } from "../components/ServicesTabs";
import { BuildersBento } from "../components/BuildersBento";
import { Industries } from "../components/Industries";
import { LogoGrid } from "../components/LogoGrid";
import { WhoWeAre } from "../components/WhoWeAre";
import { Values } from "../components/Values";
import { Testimonials } from "../components/Testimonials";
import { CtaBanner } from "../components/CtaBanner";

const PRIMITIVE_SECTIONS = [
  { id: "colors", label: "Colors" },
  { id: "typography", label: "Typography" },
  { id: "fonts", label: "Fonts" },
  { id: "buttons", label: "Buttons" },
  { id: "links", label: "Links" },
  { id: "eyebrows", label: "Eyebrows & headers" },
  { id: "tags", label: "Tags" },
  { id: "lists", label: "Bullet lists" },
  { id: "stats", label: "Stats" },
  { id: "cards", label: "Cards" },
  { id: "radii", label: "Radii & layout" },
];

const COMPOSITE_SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "proof-bar", label: "Proof bar" },
  { id: "services-grid", label: "Services grid" },
  { id: "industry-tags", label: "Industry tags" },
  { id: "companies-intro", label: "Section intro" },
  { id: "features", label: "Scroll section" },
  { id: "services-tabs", label: "Services tabs" },
  { id: "builders-bento", label: "Bento grid" },
  { id: "industries", label: "Industry grid" },
  { id: "logo-grid", label: "Logo marquee" },
  { id: "who-we-are", label: "Founder cards" },
  { id: "values", label: "Values grid" },
  { id: "testimonials", label: "Testimonials" },
  { id: "cta-banner", label: "CTA banner" },
];

/** A documented example block: a title, optional note, and a rendered demo. */
function Spec({
  title,
  code,
  children,
  dark = false,
}: {
  title: string;
  code?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between gap-x-4">
        <h3 className="text-20-medium text-black">{title}</h3>
        {code && (
          <code className="text-12 rounded bg-black/5 px-2 py-1 font-mono text-black/60">
            {code}
          </code>
        )}
      </div>
      <div
        className={`flex flex-wrap items-center gap-4 rounded-lg p-6 ring-1 ring-inset ${
          dark ? "bg-ink ring-white/10" : "bg-white ring-black/8"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-8 border-t border-black/8 pt-14">
      <div className="space-y-2">
        <h2 className="text-h4 text-black">{title}</h2>
        <p className="text-16 max-w-[640px]">{description}</p>
      </div>
      {children}
    </section>
  );
}

/**
 * Full-bleed wrapper for a live page section. The labeled intro sits in a
 * container; the section component renders edge-to-edge below it, exactly as
 * it appears on the site.
 */
function CompositeShowcase({
  id,
  name,
  file,
  description,
  children,
}: {
  id: string;
  name: string;
  file: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-black/8">
      <div className="container pt-14 pb-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h2 className="text-h4 text-black">{name}</h2>
          <code className="text-12 rounded bg-black/5 px-2 py-1 font-mono text-black/60">
            {file}
          </code>
        </div>
        <p className="text-16 mt-2 max-w-[640px]">{description}</p>
      </div>
      <div className="mt-6 overflow-hidden">{children}</div>
    </section>
  );
}

export function DesignSystem() {
  return (
    <main className="bg-surface min-h-screen text-black">
      <div className="container flex gap-x-16 pt-[120px] pb-32">
        {/* Sidebar */}
        <aside className="sticky top-[120px] hidden h-fit w-48 shrink-0 lg:block">
          <p className="text-14-medium mb-4 text-black/45">Foundations</p>
          <nav className="flex flex-col gap-y-1">
            {PRIMITIVE_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-16 py-1 text-black/70 transition-colors hover:text-black"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <p className="text-14-medium mt-6 mb-4 text-black/45">
            Composite sections
          </p>
          <nav className="flex flex-col gap-y-1">
            {COMPOSITE_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-16 py-1 text-black/70 transition-colors hover:text-black"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0 flex-1 space-y-16">
          <header className="space-y-4">
            <Eyebrow>Design system</Eyebrow>
            <h1 className="text-h1">Seka design system</h1>
            <p className="text-18 max-w-[620px] text-black/70">
              The single source of truth for the brand. Tokens mirror{" "}
              <code className="text-16 rounded bg-black/5 px-1.5 py-0.5 font-mono">
                src/index.css
              </code>{" "}
              and every component below is imported live from{" "}
              <code className="text-16 rounded bg-black/5 px-1.5 py-0.5 font-mono">
                src/design-system
              </code>
              .
            </p>
          </header>

          {/* Colors */}
          <Section
            id="colors"
            title="Colors"
            description="Defined as CSS custom properties in the @theme block. Use the Tailwind class shown rather than raw hex values."
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {colors.map((c) => (
                <div
                  key={c.name}
                  className="overflow-hidden rounded-lg bg-white ring-1 ring-inset ring-black/8"
                >
                  <div
                    className="h-20 w-full ring-1 ring-inset ring-black/5"
                    style={{ background: c.value }}
                  />
                  <div className="space-y-1 p-4">
                    <p className="text-14-medium text-black">{c.name}</p>
                    <p className="text-12 font-mono text-black/50">{c.value}</p>
                    <p className="text-12 text-black/60">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Typography */}
          <Section
            id="typography"
            title="Typography"
            description="Custom @utility classes. Heading utilities use the serif face; the rest use the sans face. Sizes scale down at the 768px breakpoint."
          >
            <div className="divide-y divide-black/8 rounded-lg bg-white ring-1 ring-inset ring-black/8">
              {typography.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between"
                >
                  <span className={`${t.className} text-black`}>{t.sample}</span>
                  <span className="flex shrink-0 flex-col items-start gap-1 md:items-end">
                    <code className="text-12 rounded bg-black/5 px-2 py-1 font-mono text-black/60">
                      {t.className}
                    </code>
                    <span className="text-12 text-black/45">{t.spec}</span>
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Fonts */}
          <Section
            id="fonts"
            title="Fonts"
            description="Two STK Bureau faces carry the whole brand."
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {fonts.map((f) => (
                <div
                  key={f.name}
                  className="space-y-3 rounded-lg bg-white p-6 ring-1 ring-inset ring-black/8"
                >
                  <div
                    className="text-[44px] leading-none text-black"
                    style={{ fontFamily: f.family }}
                  >
                    Aa
                  </div>
                  <div>
                    <p className="text-16 text-black">{f.name}</p>
                    <code className="text-12 font-mono text-black/50">
                      {f.className}
                    </code>
                    <p className="text-14 mt-1">{f.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Buttons */}
          <Section
            id="buttons"
            title="Buttons"
            description="The Button primitive carries the animated slide-up label. Polymorphic — pass `to` for a route, `href` for an external link, or neither for a real <button>. CtaLink wraps it for the page-level API."
          >
            <Spec title="Dark (default)" code='variant="dark"'>
              <Button onClick={() => {}}>Start a conversation</Button>
            </Spec>
            <Spec title="Subtle" code='variant="subtle"'>
              <Button variant="subtle" onClick={() => {}}>
                See how we work
              </Button>
            </Spec>
            <Spec title="Light (on dark surface)" code='variant="light"' dark>
              <Button variant="light" onClick={() => {}}>
                Start a conversation
              </Button>
            </Spec>
          </Section>

          {/* Links */}
          <Section
            id="links"
            title="Links"
            description="ArrowLink is the lower-emphasis CTA — a text link with a circular arrow badge that slides on hover."
          >
            <Spec title="Arrow link" code="<ArrowLink />">
              <ArrowLink to="/design-system" label="Get in touch" />
            </Spec>
          </Section>

          {/* Eyebrows & headers */}
          <Section
            id="eyebrows"
            title="Eyebrows & section headers"
            description="The brand-sky dot eyebrow and the centered section intro it sits inside."
          >
            <Spec title="Eyebrow — dark" code='tone="dark"'>
              <Eyebrow>What we fix</Eyebrow>
            </Spec>
            <Spec title="Eyebrow — light" code='tone="light"' dark>
              <Eyebrow tone="light">Who we are</Eyebrow>
            </Spec>
            <div className="space-y-3">
              <h3 className="text-20-medium text-black">
                Section intro (left-aligned, default)
              </h3>
              <div className="rounded-lg bg-white p-10 ring-1 ring-inset ring-black/8">
                <SectionIntro
                  eyebrow="The problem"
                  title="Most businesses know they need AI. Almost none know how to use it."
                >
                  <p>
                    The gap is not knowledge. It is execution. Seka embeds
                    strategy, talent, and delivery into one engagement.
                  </p>
                </SectionIntro>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-20-medium text-black">
                Section header (centered)
              </h3>
              <div className="rounded-lg bg-white p-10 ring-1 ring-inset ring-black/8">
                <SectionHeader
                  eyebrow="What we fix"
                  title="Most businesses know AI matters. Almost none know how to execute."
                  subtitle="Consultants write decks. Recruiters send CVs. Seka embeds strategy, talent, and delivery."
                />
              </div>
            </div>
          </Section>

          {/* Tags */}
          <Section
            id="tags"
            title="Tags"
            description="Small credential pills. Light tone for dark surfaces, dark tone for light ones."
          >
            <Spec title="Dark surface" code='tone="light"' dark>
              {["KPMG", "Accenture", "Strategy"].map((t) => (
                <Tag key={t} tone="light">
                  {t}
                </Tag>
              ))}
            </Spec>
            <Spec title="Light surface" code='tone="dark"'>
              {["Full-stack", "AI engineering", "JLL"].map((t) => (
                <Tag key={t} tone="dark">
                  {t}
                </Tag>
              ))}
            </Spec>
            <Spec title="Outline (industry / filter tags)" code='tone="outline"'>
              {["Manufacturing", "Technology", "Federal government"].map((t) => (
                <Tag key={t} tone="outline">
                  {t}
                </Tag>
              ))}
            </Spec>
          </Section>

          {/* Bullet lists */}
          <Section
            id="lists"
            title="Bullet lists"
            description="Brand-sky dot markers, as used in the services detail card."
          >
            <Spec title="On dark surface" code='tone="light"' dark>
              <BulletList
                tone="light"
                items={[
                  "Operations audit and AI readiness assessment",
                  "Prioritised 90-day execution roadmap",
                  "Vendor and tooling recommendations",
                ]}
              />
            </Spec>
            <Spec title="On light surface" code='tone="dark"'>
              <BulletList
                tone="dark"
                items={[
                  "Document processing and data extraction",
                  "Internal approval workflows",
                  "Reporting and data pipeline automation",
                ]}
              />
            </Spec>
          </Section>

          {/* Stats */}
          <Section
            id="stats"
            title="Stats"
            description="Oversized serif metric with a caption, used in the Features section."
          >
            <Spec title="Stat" code="<Stat />">
              <div className="flex gap-x-16">
                <Stat value="2-4 wk" label="Advisory sprint" />
                <Stat value="3" label="Offshore talent regions" />
              </div>
            </Spec>
          </Section>

          {/* Cards */}
          <Section
            id="cards"
            title="Cards"
            description="Surface tones on the standard 10px radius. Light for light sections, translucent/black for dark ones."
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <Card tone="light" className="p-6">
                <p className="text-14-medium text-black/45">tone="light"</p>
                <p className="text-16 mt-2">bg-grey-100 on light sections.</p>
              </Card>
              <div className="rounded-lg bg-ink p-2">
                <Card tone="dark" className="p-6">
                  <p className="text-14-medium text-white/50">tone="dark"</p>
                  <p className="text-16 mt-2 text-white/80">
                    bg-white/5 on dark sections.
                  </p>
                </Card>
              </div>
              <Card tone="black" className="p-6">
                <p className="text-14-medium text-white/50">tone="black"</p>
                <p className="text-16 mt-2 text-white/80">
                  Solid detail card.
                </p>
              </Card>
            </div>
          </Section>

          {/* Radii, shadows & layout */}
          <Section
            id="radii"
            title="Radii, shadows & layout"
            description="The brand radius scale, elevation, and the layout primitives that frame every page."
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3 rounded-lg bg-white p-6 ring-1 ring-inset ring-black/8">
                <p className="text-16 text-black">Radii</p>
                {radii.map((r) => (
                  <div key={r.name} className="flex items-center gap-x-4">
                    <div
                      className="size-12 shrink-0 bg-brand-sky/20 ring-1 ring-inset ring-brand-sky/40"
                      style={{ borderRadius: r.value }}
                    />
                    <div>
                      <code className="text-12 font-mono text-black/70">
                        {r.name}
                      </code>
                      <p className="text-12 text-black/50">{r.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 rounded-lg bg-white p-6 ring-1 ring-inset ring-black/8">
                <p className="text-16 text-black">Shadows</p>
                {shadows.map((s) => (
                  <div key={s.name} className="flex items-center gap-x-4">
                    <div
                      className="size-12 shrink-0 rounded-lg bg-white"
                      style={{ boxShadow: s.value }}
                    />
                    <div>
                      <code className="text-12 font-mono text-black/70">
                        {s.name}
                      </code>
                      <p className="text-12 text-black/50">{s.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 rounded-lg bg-white p-6 ring-1 ring-inset ring-black/8">
                <p className="text-16 text-black">Layout</p>
                {layout.map((l) => (
                  <div key={l.name} className="border-b border-black/5 pb-2 last:border-0">
                    <code className="text-12 font-mono text-black/70">
                      {l.name}
                    </code>
                    <p className="text-12 text-black/50">
                      {l.value} — {l.usage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </div>

      {/* Composite sections — rendered full-bleed, outside the catalog grid */}
      <div className="border-t border-black/8 bg-surface">
        <div className="container pt-16 pb-2">
          <Eyebrow>Composite sections</Eyebrow>
          <h2 className="text-h2 mt-3">Page sections</h2>
          <p className="text-18 mt-3 max-w-[640px] text-black/70">
            The larger, interactive compositions assembled from the primitives
            above — scroll-driven storytelling, tabbed panels, grids, and
            marquees. Each renders live, exactly as it ships.
          </p>
        </div>
      </div>

      <CompositeShowcase
        id="hero"
        name="Hero"
        file="components/Hero.tsx"
        description="Full-viewport video hero with a gradient scrim, headline, dual CTAs, and a play control. Heights clamp to the viewport."
      >
        <Hero />
      </CompositeShowcase>

      <CompositeShowcase
        id="proof-bar"
        name="Proof bar"
        file="components/ProofBar.tsx"
        description="Thin credential bar for under the hero — a label and dot-separated background items, bracketed by hairline rules."
      >
        <ProofBar />
      </CompositeShowcase>

      <CompositeShowcase
        id="services-grid"
        name="Services grid"
        file="components/ServicesGrid.tsx"
        description="The three service pillars as a hairline-separated grid (numbered card, title, blurb, ArrowLink). Composed from tokens + the ArrowLink primitive."
      >
        <div className="container py-8">
          <ServicesGrid />
        </div>
      </CompositeShowcase>

      <CompositeShowcase
        id="industry-tags"
        name="Industry tags"
        file="components/IndustryTags.tsx"
        description="Industries as a hairline tag cloud on the alt surface band — SectionIntro plus the outline Tag variant."
      >
        <IndustryTags />
      </CompositeShowcase>

      <CompositeShowcase
        id="companies-intro"
        name="Section intro"
        file="components/CompaniesIntro.tsx"
        description="Centered eyebrow + heading + supporting copy. The canonical lead-in for a content section, built on the Eyebrow primitive."
      >
        <CompaniesIntro />
      </CompositeShowcase>

      <CompositeShowcase
        id="features"
        name="Scroll section"
        file="components/Features.tsx"
        description="Scroll-pinned story. As you scroll the 400vh track, the text, stat, progress pills, and visual cross-fade between cards. Stacks vertically on mobile. Scroll down to watch it animate."
      >
        <Features />
      </CompositeShowcase>

      <CompositeShowcase
        id="services-tabs"
        name="Services tabs"
        file="components/ServicesTabs.tsx"
        description="Interactive tabbed panel — a pill tab row (a select on mobile) with a progress indicator that swaps the grey content card and black detail card. Try the tabs."
      >
        <ServicesTabs />
      </CompositeShowcase>

      <CompositeShowcase
        id="builders-bento"
        name="Bento grid"
        file="components/BuildersBento.tsx"
        description="Asymmetric bento layout on the dark surface — a full-width feature card, a tall image card, and two stacked cards."
      >
        <BuildersBento />
      </CompositeShowcase>

      <CompositeShowcase
        id="industries"
        name="Industry grid"
        file="components/Industries.tsx"
        description="Responsive two-column grid of icon cards built as a description list, each pairing a stroked SVG icon with a title and blurb."
      >
        <Industries />
      </CompositeShowcase>

      <CompositeShowcase
        id="logo-grid"
        name="Logo marquee"
        file="components/LogoGrid.tsx"
        description="Client logos — an infinite CSS marquee on mobile, a static six-up grid on desktop."
      >
        <div className="bg-surface py-12">
          <LogoGrid />
        </div>
      </CompositeShowcase>

      <CompositeShowcase
        id="who-we-are"
        name="Founder cards"
        file="components/WhoWeAre.tsx"
        description="Section intro plus founder cards on the dark surface — portrait, name, role, bio, and credential Tag pills."
      >
        <WhoWeAre />
      </CompositeShowcase>

      <CompositeShowcase
        id="values"
        name="Values grid"
        file="components/Values.tsx"
        description="Company values as a description list — a left-aligned heading over a two-column grid of icon + term + definition, each divided by a bottom border."
      >
        <Values />
      </CompositeShowcase>

      <CompositeShowcase
        id="testimonials"
        name="Testimonials"
        file="components/Testimonials.tsx"
        description="Company-story quotes — a heading with a subtle icon Button, then a three-column grid of testimonial cards (logo, serif quote, attribution) divided by left borders on desktop."
      >
        <Testimonials />
      </CompositeShowcase>

      <CompositeShowcase
        id="cta-banner"
        name="CTA banner"
        file="components/CtaBanner.tsx"
        description="Closing call-to-action over a full-bleed background image, with a centered heading and primary Button."
      >
        <CtaBanner />
      </CompositeShowcase>
    </main>
  );
}
