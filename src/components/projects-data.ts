import imgPropia from "../assets/work/propia.png";
import imgBega from "../assets/work/bega.png";

export type Project = {
  tag: string;
  title: string;
  subtitle: string;
  /** One-line teaser used in the compact (stacked) card on the home page. */
  summary: string;
  /** Full case-study copy shown on the /work page. */
  paragraphs: string[];
  img: string;
};

/**
 * Single source of truth for the client/project case studies. Rendered in full
 * on the /work page and surfaced as a teaser in the home page FeaturedWork
 * section.
 */
export const PROJECTS: Project[] = [
  {
    tag: "Product build · PropTech",
    title: "Propia",
    subtitle: "AI-native property decision platform",
    summary:
      "An AI-native property platform we co-built end to end — architecture, data pipelines, product, and deployment.",
    paragraphs: [
      "Co-built Propia from the ground up, an AI-powered platform designed to help property buyers and investors make better decisions using data, predictive modelling, and intelligent search. The project covered everything from technical architecture and data pipelines through to product design and deployment.",
      "Propia is the proof of concept for the kind of end-to-end AI product delivery Seka brings to client engagements, scoped, built, and shipped by the same team that will build yours.",
    ],
    img: imgPropia,
  },
  {
    tag: "Active engagement · Agriculture and food manufacturing",
    title: "Agricultural AI data tool",
    subtitle: "Major Australian food brand",
    summary:
      "An AI-powered data tool in active build for one of Australia's most recognisable agricultural brands.",
    paragraphs: [
      "Currently scoping and building an AI-powered data tool for one of Australia's most recognisable agricultural brands. The project involves complex operational data, supply chain intelligence, and machine learning integration at scale.",
      "Further detail available on request.",
    ],
    img: imgBega,
  },
];
