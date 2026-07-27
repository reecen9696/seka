import imgPropia from "../assets/work/propia.png";
import imgBega from "../assets/work/bega.png";

export type Metric = {
  /** The headline figure — kept short; it sets at 32px serif. */
  value: string;
  label: string;
};

export type Project = {
  tag: string;
  /** Short pill label for the compact card — `tag` is too long at 3-up width. */
  category: string;
  title: string;
  subtitle: string;
  /** One-line teaser used in the compact (stacked) card on the home page. */
  summary: string;
  /**
   * Case-study figures, most important first. The compact home card shows only
   * `metrics[0]`; the full /work card shows all of them.
   */
  metrics: Metric[];
  /** Full case-study copy shown on the /work page. */
  paragraphs: string[];
  /** Omitted when `imgType` is "quote". */
  img?: string;
  /**
   * How to present the media half of the card.
   *  - "screenshot" — browser frame, anchored top so the page header reads.
   *  - "photo"      — full-bleed off the edge of the card.
   *  - "quote"      — no imagery: a typographic panel built from
   *                   {@link Project.pullQuote}. Use this rather than reaching
   *                   for stock, which reads as filler on a case study.
   */
  imgType: "screenshot" | "photo" | "quote";
  /** The line set large in the media panel when `imgType` is "quote". */
  pullQuote?: string;
};

/**
 * Single source of truth for the client/project case studies. Rendered in full
 * on the /work page and surfaced as a teaser in the home page FeaturedWork
 * section.
 */
export const PROJECTS: Project[] = [
  {
    tag: "Product build · PropTech",
    category: "PropTech",
    title: "Propia",
    subtitle: "AI-native property decision platform",
    summary:
      "An AI-native property platform we co-built end to end — architecture, data pipelines, product, and deployment.",
    metrics: [
      { value: "12 weeks", label: "Concept to a live platform in front of buyers" },
      { value: "4 systems", label: "Architecture, data, product, and deployment" },
      { value: "1,500+", label: "Properties compared through the product" },
    ],
    paragraphs: [
      "Co-built Propia from the ground up, an AI-powered platform designed to help property buyers and investors make better decisions using data, predictive modelling, and intelligent search. The project covered everything from technical architecture and data pipelines through to product design and deployment.",
      "Propia is the proof of concept for the kind of end-to-end AI product delivery Seka brings to client engagements, scoped, built, and shipped by the same team that will build yours.",
    ],
    img: imgPropia,
    imgType: "screenshot",
  },
  {
    tag: "Active engagement · Agriculture and food manufacturing",
    category: "Agriculture",
    title: "Agricultural AI data tool",
    subtitle: "Major Australian food brand",
    summary:
      "An AI-powered data tool in active build for one of Australia's most recognisable agricultural brands.",
    metrics: [
      { value: "6 systems", label: "Siloed operational sources unified into one pipeline" },
      { value: "3 models", label: "Supply chain intelligence in active build" },
      { value: "2026", label: "Target go-live, scoping through delivery" },
    ],
    paragraphs: [
      "Currently scoping and building an AI-powered data tool for one of Australia's most recognisable agricultural brands. The project involves complex operational data, supply chain intelligence, and machine learning integration at scale.",
      "Further detail available on request.",
    ],
    img: imgBega,
    imgType: "screenshot",
  },
  {
    tag: "Embedded talent · Offshore delivery",
    category: "Talent",
    title: "Embedded AI engineering",
    subtitle: "Offshore delivery pod, Sri Lanka",
    summary:
      "A vetted offshore engineering pod stood up inside a client team, managed by Seka and accountable to them.",
    metrics: [
      { value: "3 weeks", label: "Brief to vetted engineers working inside the team" },
      { value: "0 layers", label: "Account managers or agency overhead in between" },
      { value: "4 roles", label: "AI, data, and engineering specialists placed" },
    ],
    paragraphs: [
      "Stood up a pod of vetted AI and data engineers inside an existing product team, sourced and managed by Seka but reporting into the client's own delivery cadence. No agency layer, no account managers, no six-month local hiring cycle.",
      "The model is the one behind our staff augmentation service: specialist capability that starts contributing in weeks rather than quarters, at a cost that does not carry a full-time Australian salary.",
    ],
    imgType: "quote",
    pullQuote:
      "Specialist capability that starts contributing in weeks, not quarters.",
  },
];
