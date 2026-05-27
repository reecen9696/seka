---
name: seka-design-system
description: The source-of-truth gate for ALL Seka UI work. Load this BEFORE building or editing any Seka interface — a component, page, section, button, card, form, color, or font — in code OR Figma. It mandates referencing the design system first, reusing the non-complex primitives (colors, fonts, buttons, tags, cards, etc.) and tokens, and only reusing the complex composite sections when the need genuinely matches. Trigger on: "build/add/edit a [component/section/page]", "style this", "match the design system", "make a CTA/card/grid", or pushing/pulling Seka designs to/from Figma.
---

# Seka Design System

The Seka design system is the **single source of truth** for the brand. Nothing in the UI gets a color, font, radius, or shadow that isn't a token, and nothing gets a button/eyebrow/tag/card that isn't the shared primitive.

## The rule (non-negotiable)

> **Reference the design system FIRST, before writing or changing any UI.**

Every UI task starts by reading the system below. Never invent a hex value, font size, radius, or re-implement a button/card from scratch. If a token or primitive is missing, you **extend the system at its source** (and the viewer) — you do not one-off it inline.

## Where the system lives

| Layer | Location | Role |
|---|---|---|
| **Tokens (SoT)** | `src/index.css` → `@theme` (colors, fonts, radii, shadow) + `@utility` (type scale) | The authoritative values. |
| **Token catalog** | `src/design-system/tokens.ts` | TS mirror of the tokens; what the viewer renders. |
| **Primitives** | `src/design-system/primitives/` (barrel: `src/design-system/index.ts`) | Reusable, non-complex components. |
| **Composite sections** | `src/components/` | Complex, page-level compositions. |
| **Live viewer** | `/design-system` route (`src/pages/DesignSystem.tsx`) | Visual catalog of everything above. |

## Step 1 — Reference (do this every time)

1. Read `src/design-system/tokens.ts` for the live token values (colors, type, radii, shadows, fonts).
2. Scan `src/design-system/primitives/` for the primitive that fits.
3. Only if you need a section-level pattern, read the relevant file in `src/components/` (see "Complex components" below).
4. If unsure how something looks, the `/design-system` viewer shows it live.

## Step 2 — Reuse the non-complex primitives (default)

Build with these. Do **not** re-create their markup.

| Need | Use | Notes |
|---|---|---|
| Primary CTA / pill button | `Button` | `variant="dark｜light｜subtle"`, optional `icon`, polymorphic (`to` route, `href` external, else `<button>`). `CtaLink` wraps it for the `to`/`label` API. |
| Lower-emphasis link CTA | `ArrowLink` | Text + animated arrow badge. |
| Sky-dot label above a heading | `Eyebrow` | `tone="dark｜light"`. |
| Centered section intro | `SectionHeader` | Eyebrow + h2 + subtitle. |
| Credential / label pill | `Tag` | `tone="light｜dark"`. |
| Surface panel | `Card` | `tone="light｜dark｜black"`, 10px radius. |
| Sky-dot bullet list | `BulletList` | `tone="light｜dark"`. |
| Oversized serif metric | `Stat` | Big serif number + caption. |

## Step 3 — Use tokens, never literals

- **Color** → classes only: `bg-surface` `bg-surface-alt` `text-ink`/`bg-ink` `bg-brand-sky` `bg-grey-50…700`, plus opacity (`text-black/70`, `bg-white/10`). Never `bg-[#...]`.
- **Type** → utilities only: `text-h1`…`text-h5`, `text-20`/`text-20-medium`, `text-18`, `text-16`, `text-14`/`text-14-medium`, `text-12`, `text-eyebrow`, `text-nav-link` (links), `text-button` (buttons). Never raw `text-[..px]`/`font-[..]` for these roles.
- **Radius** → `rounded-xs｜sm｜md｜lg｜xl｜2xl｜3xl｜full`. `rounded-lg` (10px) is the standard card. Never `rounded-[..px]`.
- **Shadow** → `shadow-card`.
- **Font family** → `font-heading` (serif), `font-sans`, `font-mono`.

## Step 4 — Complex components: read, reuse only if necessary

These live in `src/components/`. **Read them to understand the pattern, but only reuse one when the need genuinely matches it.** For anything simpler, compose a new section from primitives + tokens instead of dragging in a heavy composite.

- `Hero` — full-viewport video hero + dual CTAs
- `Features` — scroll-pinned cross-fading story (400vh)
- `ServicesTabs` — interactive tab panel (all tabs stacked in one grid cell for fixed height)
- `BuildersBento` — dark asymmetric bento grid
- `Industries` — icon-card description-list grid
- `LogoGrid` — logo marquee / static grid
- `WhoWeAre` — founder cards with Tag pills
- `Values` — values description-list grid
- `Testimonials` — company-story quote cards
- `CompaniesIntro` — centered eyebrow + heading intro
- `CtaBanner` — image-backed closing CTA
- `Navbar` / `Footer` / `PageHero` — page chrome

Reuse test: *"Does my need match this component's job almost exactly?"* If yes, reuse/parameterize it. If no, build from primitives. Never copy a composite's markup for a one-off.

## Step 5 — Extending the system (when something is missing)

Add it at the source so it stays single-source:
1. Token → add to `src/index.css` (`@theme` or `@utility`) **and** `src/design-system/tokens.ts`.
2. Primitive → add to `src/design-system/primitives/` and export from `index.ts`.
3. Always register the new token/primitive/composite as a showcase in `src/pages/DesignSystem.tsx`.
4. Reuse existing tokens inside new primitives — no hardcoded values.

## Step 6 — Verify

Run `npx tsc -b` and `npm run build` after changes. The dev server (`npm run dev`, `/design-system`) hot-reloads the viewer for a visual check.

## Token quick reference

Authoritative values live in `tokens.ts`; this is the at-a-glance copy.

**Colors** — brand-sky `#91beeb` · surface `#f5f8f6` · surface-alt `#eff2f0` · ink `#1a1a1a` · grey-50 `#f7f7f7` / 100 `#efeeee` / 200 `#e5e7eb` / 300 `#d1d5dc` / 400 `#99a1af` / 500 `#4a5565` / 600 `#364153` / 700 `#404040`.

**Fonts** — `font-heading` STK Bureau Serif · `font-sans` STK Bureau Sans · `font-mono` IBM Plex Mono.

**Type** — h1 serif 64/-1.2px · h2·h3 sans 22/500/-0.3px · h4 sans 20/500 · h5 sans 18/500 · text-20(-medium) 20/27 · text-18 18/27 · text-16 16/24 · text-14(-medium) 14/21 · text-12 · eyebrow 13/500 · nav-link 15/400 · button 14/500.

**Radii** — xs 5 · sm 6 · md 9 · lg 10 (card) · xl 12 · 2xl 14 (portrait) · 3xl 20 · full.

**Shadow** — `shadow-card` = `0 1px 4px rgba(12,12,13,0.05)`.

## Working in Figma

The **code design system above is still the source of truth** when the work is in Figma. Before generating/updating Seka designs:
1. Load the `figma-use` (and, for libraries, `figma-generate-library` / for screens `figma-generate-design`) skills for the Plugin API mechanics.
2. Map Figma variables/styles to the **same token names and values** listed above (e.g. brand-sky `#91beeb`, surface `#f5f8f6`, the grey ramp, the radius scale, and the type roles — h1 serif 64, h2/h3 sans 22/500, etc.).
3. Use `hex-to-variables` to bind raw fills to the color tokens and `fonts-to-text-styles` to convert ad-hoc type into the text styles.
4. Keep Figma and code in sync — if they diverge, the code tokens win.

## Anti-patterns (reject these)

- Hardcoding a hex/px font/radius instead of a token.
- Re-implementing a button, eyebrow, tag, card, or bullet list instead of using the primitive.
- Copying a whole composite section's markup for a simpler need.
- Adding a one-off style inline rather than extending the token/primitive layer.
- Shipping a new token/primitive/composite without adding it to the `/design-system` viewer.
