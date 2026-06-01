import { useState } from "react";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "./services-data";

export function ServicesTabs() {
  const [active, setActive] = useState(0);
  const total = SERVICES.length;

  return (
    <section className="overflow-clip bg-surface py-16 text-black md:py-32">
      <div className="container space-y-16 md:space-y-32">
        <div className="relative space-y-12">
          {/* Tabs + progress */}
          <div className="max-xs:flex-col flex items-center justify-between gap-x-5">
            <div className="max-mdx:w-full">
              {/* Mobile select */}
              <div className="relative w-full md:hidden">
                <div className="relative flex w-full items-center rounded-full bg-black/10">
                  <select
                    value={active}
                    onChange={(e) => setActive(Number(e.target.value))}
                    className="text-nav-link h-10 w-full cursor-pointer appearance-none bg-transparent pr-10 pl-4 text-black/80 focus:outline-hidden"
                  >
                    {SERVICES.map((s, i) => (
                      <option key={s.number} value={i}>
                        {s.tab}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 pl-2 text-black">
                    <svg viewBox="0 0 20 20" fill="none" className="w-5">
                      <path
                        d="M15 7.5L10 12.5L5 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Desktop tabs */}
              <div className="hidden md:flex md:gap-x-2">
                {SERVICES.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={s.number}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(i)}
                      className="cursor-pointer py-1"
                    >
                      <span
                        className={`text-button block rounded-full px-3 py-1.5 transition-colors duration-200 ${
                          isActive
                            ? "bg-black text-white"
                            : "text-black/70 hover:text-black"
                        }`}
                      >
                        {s.tab}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Progress */}
            <div className="mdx:flex hidden items-center gap-x-4">
              <div className="h-1 w-16 rounded-full bg-black/10">
                <div
                  className="h-full rounded-full bg-black transition-[width] duration-300"
                  style={{ width: `${((active + 1) / total) * 100}%` }}
                />
              </div>
              <p className="text-nav-link text-black/80">
                {active + 1} / {total}
              </p>
            </div>
          </div>

          {/* Panel — every tab is rendered into the same grid cell, so the
              panel's height is fixed to the tallest tab and switching tabs
              never changes the height or shifts the page. */}
          <div className="grid">
            {SERVICES.map((s, i) => {
              const isActive = i === active;
              return (
                <div
                  key={s.number}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "pointer-events-none invisible opacity-0"
                  }`}
                >
                  <ServiceCard service={s} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
