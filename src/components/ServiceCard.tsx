import { ArrowLink } from "../design-system/primitives/ArrowLink";
import type { Service } from "./services-data";

/**
 * The canonical service card: a grey content card (number, title, summary,
 * image + "Get in touch") beside a black detail card (the list of inclusions
 * and "Best for"). Single source of the design used by both the tabbed
 * (`ServicesTabs`) and scroll-driven (`ServicesScroll`) sections.
 */
export function ServiceCard({ service: s }: { service: Service }) {
  return (
    <div className="max-mdx:bg-grey-100 max-mdx:flex-col max-mdx:rounded-lg max-mdx:p-2.5 max-mdx:pt-8 flex w-full gap-x-5 gap-y-2.5">
      {/* Grey content card */}
      <div className="bg-grey-100 mdx:px-2 mdx:py-2.5 max-sm:flex-col mdx:gap-y-8 flex flex-1 justify-between gap-y-10 rounded-lg">
        <div className="mdx:gap-y-8 md:px-6 md:pt-6 md:pb-2 flex flex-1 flex-col justify-between gap-y-2.5">
          <div className="mdx:space-y-4 max-mdx:px-3 space-y-2.5 lg:max-w-[260px]">
            <p className="text-14-medium text-black/45">{s.number}</p>
            <h3 className="text-h4 text-balance">{s.title}</h3>
            <div className="max-mdx:hidden">
              <ArrowLink to="/get-a-demo" label="Get in touch" />
            </div>
          </div>
          <div className="text-18 max-mdx:px-3 max-md:text-balance text-black/80 lg:max-w-[280px]">
            {s.summary}
          </div>
          <div className="mdx:hidden max-mdx:px-3 max-mdx:pt-2.5">
            <ArrowLink to="/get-a-demo" label="Get in touch" />
          </div>
        </div>
        <div className="aspect-325/396 mdx:aspect-[393/480] relative w-full shrink-0 overflow-hidden rounded-lg sm:max-w-[50%] xl:max-w-[393px]">
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Black detail card */}
      <div className="mdx:max-w-[35%] mdx:gap-y-12 relative flex w-full shrink-0 flex-col justify-between gap-y-10 overflow-hidden rounded-lg bg-black px-6 py-8 text-white md:p-8 lg:max-w-[400px]">
        <div>
          <p className="text-14-medium text-white/50">
            {s.listLabel ?? "Best for"}
          </p>
          {s.list ? (
            <ul className="mt-5 flex flex-col gap-y-3.5">
              {s.list.map((item) => (
                <li key={item} className="text-16 flex gap-x-3 text-white/80">
                  <span className="bg-brand-sky mt-2 size-1.5 shrink-0 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-18 mt-5 text-white/80">{s.bestFor}</p>
          )}
        </div>

        {s.list && (
          <div>
            <p className="text-14-medium text-white/50">Best for</p>
            <p className="text-16 mt-1.5 text-white/70">{s.bestFor}</p>
          </div>
        )}
      </div>
    </div>
  );
}
