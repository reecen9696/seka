import { Button } from "../design-system/primitives/Button";
import type { ButtonVariant } from "../design-system/primitives/buttonStyles";

/**
 * Thin wrapper over the design-system {@link Button} that keeps the original
 * `to`/`label` API used across the pages and routes external URLs to an <a>.
 */
export function CtaLink({
  to,
  label,
  variant = "dark",
  className = "",
}: {
  to: string;
  label: string;
  variant?: ButtonVariant;
  className?: string;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(to);

  return external ? (
    <Button href={to} variant={variant} className={className}>
      {label}
    </Button>
  ) : (
    <Button to={to} variant={variant} className={className}>
      {label}
    </Button>
  );
}
