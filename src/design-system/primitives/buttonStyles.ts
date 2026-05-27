export type ButtonVariant = "dark" | "light" | "subtle";

/** Single source of truth for the pill button's per-variant colors. */
export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  dark: "bg-black text-white ring-black hover:bg-black/80",
  light: "bg-white text-[#1A1A1A] ring-white hover:bg-white/90",
  subtle:
    "bg-black/2 text-black ring-black/10 backdrop-blur-xs hover:backdrop-blur-xl",
};

/** Shared geometry + animation host classes for every pill button. */
export const BUTTON_BASE =
  "text-button group relative inline-flex w-auto cursor-pointer items-center justify-center gap-x-2 overflow-hidden whitespace-nowrap rounded-full px-4 py-[0.78125rem] ring-1 ring-inset transition-colors duration-200";
