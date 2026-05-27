/**
 * Design system barrel — import primitives from a single entry point:
 *   import { Button, Eyebrow, SectionHeader } from "../design-system";
 *
 * Tokens (colors, typography, radii) live in `./tokens` and mirror the
 * `@theme` definitions in `src/index.css`.
 */
export { Button } from "./primitives/Button";
export { BUTTON_VARIANTS, type ButtonVariant } from "./primitives/buttonStyles";
export { AnimatedLabel } from "./primitives/AnimatedLabel";
export { ArrowLink } from "./primitives/ArrowLink";
export { Eyebrow } from "./primitives/Eyebrow";
export { SectionHeader } from "./primitives/SectionHeader";
export { Section, type SectionTone } from "./primitives/Section";
export { SectionIntro } from "./primitives/SectionIntro";
export { Tag } from "./primitives/Tag";
export { Card, type CardTone } from "./primitives/Card";
export { BulletList } from "./primitives/BulletList";
export { Stat } from "./primitives/Stat";

export * as tokens from "./tokens";
