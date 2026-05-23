import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoBlack from "../assets/logoblack.svg";
import logoWhite from "../assets/logowhite.svg";

const SCROLL_THRESHOLD = 24;

export function Navbar() {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!onHome) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const lightChrome = onHome ? scrolled : true;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,color,backdrop-filter] duration-300 ${
        lightChrome
          ? "bg-white/70 text-black backdrop-blur-xl"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container">
        <div
          className={`h-nav xs:px-6 flex items-center justify-between gap-x-8 px-4 sm:px-0 ${
            lightChrome ? "border-black/8" : "border-white/8"
          }`}
        >
          <Link to="/" className="cursor-pointer">
            <img
              src={lightChrome ? logoBlack : logoWhite}
              alt="Paraform"
              className="h-6 w-auto md:h-[26px]"
            />
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            className={`-mr-[14px] cursor-pointer transition-colors duration-300 lg:hidden ${
              lightChrome ? "text-black" : "text-white"
            }`}
          >
            <span className="relative block h-12 w-12">
              <span
                className="absolute left-[14px] top-[19px] block h-[2px] w-5 transition-colors duration-300"
                style={{ background: lightChrome ? "#000" : "#fff" }}
              />
              <span
                className="absolute left-[14px] top-[27px] block h-[2px] w-5 transition-colors duration-300"
                style={{ background: lightChrome ? "#000" : "#fff" }}
              />
            </span>
          </button>

          <div className="flex items-center gap-x-2.5 max-lg:hidden md:!gap-x-6">
            <Link to="/get-a-demo" className="inline-flex">
              <span
                className={`text-nav-link group relative inline-flex h-9 w-auto items-center justify-center gap-x-2 overflow-hidden whitespace-nowrap rounded-full px-4 ring-1 ring-inset transition-colors duration-200 ${
                  lightChrome
                    ? "bg-black text-white ring-black hover:bg-black/80"
                    : "bg-transparent text-white ring-white/20 backdrop-blur-xs"
                }`}
              >
                <span className="relative">
                  <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-[200%]">
                    Book
                  </span>
                  <span className="absolute inset-0 flex translate-y-[200%] items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
                    Book
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
