import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoBlack from "../assets/logoblack.svg";
import logoWhite from "../assets/logowhite.svg";

const SCROLL_THRESHOLD = 24;

const NAV_LINKS = [
  { label: "What we do", to: "/what-we-do" },
  { label: "Who we are", to: "/who-we-are" },
  { label: "Clients", to: "/work" },
];

export function Navbar() {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!onHome) return;
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const lightChrome = onHome ? scrolled : true;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background-color,color,backdrop-filter] duration-300 ${
        lightChrome || menuOpen
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
          <div className="flex items-center gap-x-8 lg:gap-x-16">
            <Link
              to="/"
              className="cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={lightChrome || menuOpen ? logoBlack : logoWhite}
                alt="Seka"
                className="h-6 w-auto md:h-[26px]"
              />
            </Link>

            <nav className="hidden items-center gap-x-8 lg:flex">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={`${link.to}-${i}`}
                  to={link.to}
                  className={`text-nav-link block cursor-pointer transition-colors duration-300 ${
                    lightChrome
                      ? "text-black/80 hover:text-black"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`-mr-[14px] cursor-pointer transition-colors duration-300 lg:hidden ${
              lightChrome || menuOpen ? "text-black" : "text-white"
            }`}
          >
            <span className="relative block h-12 w-12">
              <span
                className="absolute left-[14px] top-[19px] block h-[2px] w-5 transition-all duration-300"
                style={{
                  background: lightChrome || menuOpen ? "#000" : "#fff",
                  transform: menuOpen ? "translateY(4px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-[14px] top-[27px] block h-[2px] w-5 transition-all duration-300"
                style={{
                  background: lightChrome || menuOpen ? "#000" : "#fff",
                  transform: menuOpen ? "translateY(-4px) rotate(-45deg)" : "none",
                }}
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
                    Start a conversation
                  </span>
                  <span className="absolute inset-0 flex translate-y-[200%] items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
                    Start a conversation
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-black/8 bg-white/95 border-t backdrop-blur-xl lg:hidden">
          <div className="container">
            <nav className="flex flex-col gap-y-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-h5 py-2 text-black"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/get-a-demo"
                className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-black px-4 py-3 text-nav-link text-white transition-colors duration-200 hover:bg-black/80"
              >
                Start a conversation
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
