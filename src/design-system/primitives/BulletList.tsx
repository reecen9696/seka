/**
 * Vertical list with brand-sky dot markers, as used in the ServicesTabs
 * detail card. `tone="light"` is for dark surfaces.
 */
export function BulletList({
  items,
  tone = "light",
}: {
  items: string[];
  tone?: "light" | "dark";
}) {
  const text = tone === "light" ? "text-white/80" : "text-black/80";
  return (
    <ul className="flex flex-col gap-y-3.5">
      {items.map((item) => (
        <li key={item} className={`text-16 flex gap-x-3 ${text}`}>
          <span className="bg-brand-sky mt-2 size-1.5 shrink-0 rounded-full" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
