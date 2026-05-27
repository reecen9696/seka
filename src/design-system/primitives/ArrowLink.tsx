import { Link } from "react-router-dom";

function Arrow() {
  return (
    <svg className="w-[9px]" viewBox="0 0 12 13" fill="none">
      <path
        d="M0.75 6.46875H11.25M11.25 6.46875L6 11.7188M11.25 6.46875L6 1.21875"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Text link with a circular arrow badge that slides on hover. Used as the
 * lower-emphasis CTA alongside a {@link Button}.
 */
export function ArrowLink({
  to,
  label = "Get in touch",
  className = "",
}: {
  to: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`text-nav-link group flex items-center gap-x-3 text-black ${className}`}
    >
      <span>{label}</span>
      <span className="relative flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black text-white">
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[150%]">
          <Arrow />
        </span>
        <span className="absolute inset-0 flex -translate-x-[150%] items-center justify-center transition-transform duration-300 group-hover:translate-x-0">
          <Arrow />
        </span>
      </span>
    </Link>
  );
}
