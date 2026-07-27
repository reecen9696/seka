import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Reveal } from "../design-system/primitives/Reveal";

const VIDEO_SRC = "/hero.mp4";

/**
 * Near-full-viewport, minus enough to leave the logo strip peeking below the
 * fold. Tune the two subtractions to change how tall it runs: the first drives
 * normal viewports, the second only bites on short ones, where the floor and
 * the 700px cap take over.
 */
const HERO_HEIGHT =
  "max(520px, calc(100dvh - var(--news-banner-height, 0px) - 175px), min(650px, calc(100dvh - var(--news-banner-height, 0px) - 145px)))";

const HERO_OVERLAY =
  "linear-gradient(256.16deg, rgba(0, 0, 0, 0) 0.29%, rgba(0, 0, 0, 0.9) 100%)";

export function Hero() {
  const [isPlayerOpen, setPlayerOpen] = useState(false);

  useEffect(() => {
    if (!isPlayerOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlayerOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isPlayerOpen]);

  return (
    <div
      data-hero="true"
      className="relative isolate flex items-center overflow-hidden bg-black"
      style={{ height: HERO_HEIGHT }}
    >
      <div className="absolute inset-0 -z-10 bg-ink" />
      <video
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        src={VIDEO_SRC}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: HERO_OVERLAY }}
      />

      <div className="container flex !w-full items-center">
        <div className="flex max-w-[478px] flex-col items-start gap-[21px] max-md:max-w-full max-md:items-center md:max-w-[820px]">
          <div className="flex w-full flex-col items-start gap-3 max-md:items-center max-md:gap-2 max-md:text-center">
            {/* Headline, sub, then CTAs — the same reveal the rest of the page
                uses, running on load because the hero is already in view. */}
            <Reveal
              as="h1"
              distance={14}
              className="font-heading text-[64px] leading-[100%] -tracking-[1.2px] text-white max-md:text-[48px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)" }}
            >
              AI transformation.
              <br />
              Strategy, talent, execution.
            </Reveal>
            <Reveal
              as="p"
              delay={80}
              distance={14}
              className="max-w-[480px] text-[18px] leading-[27px] text-white/80 max-md:text-[16px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)" }}
            >
              We build AI strategies, embed offshore teams, and deliver
              systems for construction, trades, manufacturing, and
              government.
            </Reveal>
          </div>

          <Reveal
            delay={160}
            distance={14}
            className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <Link to="/get-a-demo" className="inline-flex max-sm:w-full">
              <span className="group relative inline-flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-white px-7 text-[16px] font-medium leading-none text-ink shadow-card transition-[background-color,transform] duration-200 hover:scale-[1.02] hover:bg-white/90 sm:w-auto">
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
            <Link to="/what-we-do" className="inline-flex max-sm:w-full">
              <span className="group relative inline-flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-white/10 px-7 text-[16px] font-medium leading-none text-white ring-1 ring-inset ring-white/30 backdrop-blur-xs transition-[background-color,transform] duration-200 hover:scale-[1.02] hover:bg-white/20 sm:w-auto">
                <span className="relative">
                  <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-[200%]">
                    See how we work
                  </span>
                  <span className="absolute inset-0 flex translate-y-[200%] items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
                    See how we work
                  </span>
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>

      <button
        type="button"
        aria-label="Play video"
        onClick={() => setPlayerOpen(true)}
        className="absolute bottom-8 left-8 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-ink shadow-[inset_0_0_0_1px_#1A1A1A] transition-transform hover:scale-110 max-md:bottom-4 max-md:left-4 max-md:h-10 max-md:w-10"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="pointer-events-none ml-0.5"
        >
          <path
            d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z"
            fill="white"
            stroke="white"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isPlayerOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
            onClick={() => setPlayerOpen(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6 max-md:p-4"
          >
            <video
              autoPlay
              controls
              playsInline
              src={VIDEO_SRC}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full w-full max-w-[1200px] rounded-lg bg-black object-contain"
            />

            <button
              type="button"
              aria-label="Close video"
              onClick={() => setPlayerOpen(false)}
              className="absolute right-6 top-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/30 backdrop-blur-xs transition-[background-color,transform] duration-200 hover:scale-110 hover:bg-white/20 max-md:right-4 max-md:top-4 max-md:h-10 max-md:w-10"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="pointer-events-none"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>,
          document.body,
        )}
    </div>
  );
}
