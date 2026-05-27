/**
 * The shared page header — one centered treatment used by every sub-page so
 * navigating between them feels cohesive.
 */
export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="overflow-clip bg-surface pt-[100px] pb-4 text-black md:pt-[140px] md:pb-6">
      <div className="container">
        <div className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-y-5 text-center">
          <h1 className="text-h1 xs:max-lg:text-balance">{title}</h1>
          <p className="text-18 mx-auto max-w-[620px] text-black/70">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
