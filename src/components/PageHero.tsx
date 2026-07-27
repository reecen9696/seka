import { Reveal } from "../design-system/primitives/Reveal";

/**
 * The shared page header — one centered treatment used by every sub-page so
 * navigating between them feels cohesive. Title and subtitle land a beat
 * apart, which doubles as the page-transition entrance.
 */
export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="overflow-clip bg-surface pt-[148px] pb-20 text-black md:pt-[220px] md:pb-28">
      <div className="container">
        <div className="mx-auto flex w-full max-w-[820px] flex-col items-center gap-y-5 text-center">
          <Reveal
            as="h1"
            distance={14}
            className="text-h1 xs:max-lg:text-balance"
          >
            {title}
          </Reveal>
          <Reveal
            as="p"
            delay={70}
            distance={14}
            className="text-18 mx-auto max-w-[620px] text-black/70"
          >
            {subtitle}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
