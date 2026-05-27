/**
 * Oversized serif metric with a caption, as used in the Features section.
 * The font-size fluidly scales between mobile and desktop.
 */
export function Stat({
  value,
  label,
  tone = "dark",
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <div>
      <div
        className={`font-heading font-light leading-[1.1] ${tone === "light" ? "text-white" : "text-black"}`}
        style={{
          fontSize: "clamp(2rem, 5vw, 4.5rem)",
          letterSpacing: "-0.1125rem",
        }}
      >
        {value}
      </div>
      <div className="text-16 mt-1.5">{label}</div>
    </div>
  );
}
