import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";
import { AnimatedLabel } from "./AnimatedLabel";
import { BUTTON_BASE, BUTTON_VARIANTS, type ButtonVariant } from "./buttonStyles";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  /** Optional leading icon, rendered static before the animated label. */
  icon?: ReactNode;
  /** Internal route — renders a react-router <Link>. */
  to?: string;
  /** External/protocol URL — renders an <a>. */
  href?: string;
  /** No destination — renders a <button>. */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

/**
 * The canonical pill CTA with the animated slide-up label. Polymorphic:
 * pass `to` for an internal link, `href` for an external one, otherwise it
 * renders a real <button>.
 */
export function Button({
  children,
  variant = "dark",
  className = "",
  icon,
  to,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const inner = (
    <span className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className}`}>
      {icon}
      <AnimatedLabel>{children}</AnimatedLabel>
    </span>
  );

  if (to) {
    return (
      <Link to={to} className="inline-flex">
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className="inline-flex">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
