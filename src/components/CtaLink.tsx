import { Link } from "react-router-dom";

type Variant = "dark" | "light" | "subtle";

const VARIANTS: Record<Variant, string> = {
  dark: "bg-black text-white ring-black hover:bg-black/80",
  light: "bg-white text-[#1A1A1A] ring-white hover:bg-white/90",
  subtle:
    "bg-black/2 text-black ring-black/10 backdrop-blur-xs hover:backdrop-blur-xl",
};

export function CtaLink({
  to,
  label,
  variant = "dark",
  className = "",
}: {
  to: string;
  label: string;
  variant?: Variant;
  className?: string;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(to);

  const inner = (
    <span
      className={`text-nav-link group relative inline-flex w-auto cursor-pointer items-center justify-center gap-x-2 overflow-hidden whitespace-nowrap rounded-full px-4 py-[0.78125rem] ring-1 ring-inset transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
    >
      <span className="relative">
        <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-[200%]">
          {label}
        </span>
        <span className="absolute inset-0 flex translate-y-[200%] items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
          {label}
        </span>
      </span>
    </span>
  );

  if (external) {
    return (
      <a href={to} className="inline-flex">
        {inner}
      </a>
    );
  }

  return (
    <Link to={to} className="inline-flex">
      {inner}
    </Link>
  );
}
