/**
 * Design tokens — the documented single source of truth that mirrors the
 * `@theme` block and `@utility` definitions in `src/index.css`. The UI viewer
 * (`/design-system`) renders straight from this data, so adding a token here
 * (and its matching CSS) is all it takes to surface it in the catalog.
 */

export type ColorToken = {
  name: string;
  value: string;
  /** Tailwind class that applies it, e.g. `bg-brand-sky`. */
  className: string;
  /** CSS custom property, when one exists. */
  varName?: string;
  usage: string;
};

export const colors: ColorToken[] = [
  {
    name: "brand-sky",
    value: "#91beeb",
    className: "bg-brand-sky",
    varName: "--color-brand-sky",
    usage: "Accent dots, bullet markers, eyebrows",
  },
  {
    name: "ink",
    value: "#1a1a1a",
    className: "bg-ink",
    varName: "--color-ink",
    usage: "Primary text and dark section surfaces",
  },
  {
    name: "surface",
    value: "#f5f8f6",
    className: "bg-surface",
    varName: "--color-surface",
    usage: "Default light page background",
  },
  {
    name: "surface-alt",
    value: "#eff2f0",
    className: "bg-surface-alt",
    varName: "--color-surface-alt",
    usage: "Alternate section / panel fill",
  },
  {
    name: "grey-50",
    value: "#f7f7f7",
    className: "bg-grey-50",
    varName: "--color-grey-50",
    usage: "Subtle off-white fills",
  },
  {
    name: "grey-100",
    value: "#efeeee",
    className: "bg-grey-100",
    varName: "--color-grey-100",
    usage: "Card backgrounds on light sections",
  },
  {
    name: "grey-200",
    value: "#e5e7eb",
    className: "bg-grey-200",
    varName: "--color-grey-200",
    usage: "Hairline borders, dividers",
  },
  {
    name: "grey-300",
    value: "#d1d5dc",
    className: "bg-grey-300",
    varName: "--color-grey-300",
    usage: "Disabled fills, muted strokes",
  },
  {
    name: "grey-400",
    value: "#99a1af",
    className: "bg-grey-400",
    varName: "--color-grey-400",
    usage: "Placeholder and tertiary text",
  },
  {
    name: "grey-500",
    value: "#4a5565",
    className: "bg-grey-500",
    varName: "--color-grey-500",
    usage: "Secondary text on light",
  },
  {
    name: "grey-600",
    value: "#364153",
    className: "bg-grey-600",
    varName: "--color-grey-600",
    usage: "Slate headings / icons",
  },
  {
    name: "grey-700",
    value: "#404040",
    className: "bg-grey-700",
    varName: "--color-grey-700",
    usage: "Strong neutral text",
  },
  {
    name: "black",
    value: "#000000",
    className: "bg-black",
    usage: "Primary buttons, solid detail cards",
  },
  {
    name: "white",
    value: "#ffffff",
    className: "bg-white",
    usage: "Light buttons, text on dark surfaces",
  },
];

export type TypeToken = {
  name: string;
  /** The `@utility` class to apply. */
  className: string;
  spec: string;
  sample: string;
  /** Heading utilities use the serif face. */
  serif?: boolean;
};

export const typography: TypeToken[] = [
  { name: "text-h1", className: "text-h1", spec: "Serif · 64 / 48px · 400 · -1.2px", sample: "Heading one", serif: true },
  { name: "text-h2", className: "text-h2", spec: "Serif · 48 / 36px · 400 · -1px", sample: "Heading two", serif: true },
  { name: "text-h3", className: "text-h3", spec: "Serif · 40 / 32px · 400", sample: "Heading three", serif: true },
  { name: "text-h4", className: "text-h4", spec: "Sans · 20px · 500 · -0.2px", sample: "Heading four" },
  { name: "text-h5", className: "text-h5", spec: "Sans · 18px · 500", sample: "Heading five" },
  { name: "text-20-medium", className: "text-20-medium", spec: "Sans · 20 / 27px · 500", sample: "Large medium label (span)" },
  { name: "text-20", className: "text-20", spec: "Sans · 20 / 18px · 27 lh", sample: "Large body copy" },
  { name: "text-18", className: "text-18", spec: "Sans · 18 / 16px", sample: "Standard body copy" },
  { name: "text-16", className: "text-16", spec: "Sans · 16 / 24px · 70% ink", sample: "Body / list item" },
  { name: "text-14", className: "text-14", spec: "Sans · 14 / 21px · 70% ink", sample: "Paragraph / caption" },
  { name: "text-14-medium", className: "text-14-medium", spec: "Sans · 14 / 21px · 500", sample: "Caption label" },
  { name: "text-12", className: "text-12", spec: "Sans · 12px", sample: "Fine print / legal" },
  { name: "text-eyebrow", className: "text-eyebrow", spec: "Sans · 13px · 500 · +0.04em", sample: "Eyebrow label" },
  { name: "text-nav-link", className: "text-nav-link", spec: "Sans · 15px · 400 (link)", sample: "Navigation link" },
  { name: "text-button", className: "text-button", spec: "Sans · 14 / 21px · 500", sample: "Button label" },
];

export type FontToken = {
  name: string;
  family: string;
  className: string;
  usage: string;
};

export const fonts: FontToken[] = [
  {
    name: "STK Bureau Serif",
    family: "var(--font-heading)",
    className: "font-heading",
    usage: "All headings and oversized stats",
  },
  {
    name: "STK Bureau Sans",
    family: "var(--font-sans)",
    className: "font-sans",
    usage: "Body copy, labels, UI text",
  },
  {
    name: "IBM Plex Mono",
    family: "var(--font-mono)",
    className: "font-mono",
    usage: "Code, token values, technical labels",
  },
];

export type RadiusToken = { name: string; value: string; usage: string };

export const radii: RadiusToken[] = [
  { name: "rounded-xs", value: "5px", usage: "Tight inset elements" },
  { name: "rounded-sm", value: "6px", usage: "Small chips, inputs" },
  { name: "rounded-md", value: "9px", usage: "Compact cards" },
  { name: "rounded-lg", value: "10px", usage: "Standard cards and panels" },
  { name: "rounded-xl", value: "12px", usage: "Logo tiles, media" },
  { name: "rounded-2xl", value: "14px", usage: "Founder portrait cards" },
  { name: "rounded-3xl", value: "20px", usage: "Large feature panels" },
  { name: "rounded-full", value: "9999px", usage: "Buttons, pills, dots" },
];

export type ShadowToken = { name: string; value: string; usage: string };

export const shadows: ShadowToken[] = [
  {
    name: "shadow-card",
    value: "0 1px 4px rgba(12, 12, 13, 0.05)",
    usage: "Subtle lift on light buttons and cards",
  },
];

export type LayoutToken = { name: string; value: string; usage: string };

export const layout: LayoutToken[] = [
  { name: "container", value: "max 1248px · 1.5–2rem inline padding", usage: "Page-width wrapper" },
  { name: "breakpoint mdx", value: "768px", usage: "Primary mobile/desktop split" },
  { name: "h-nav", value: "60px", usage: "Fixed navbar height" },
];
