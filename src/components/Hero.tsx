import { Link } from "react-router-dom";

const VIDEO_SRC =
  "https://cdn.sanity.io/files/e5ozko3p/production/7fdee7ff1841917f08699c46d73a9d3af6956088.mp4";
const POSTER_SRC =
  "https://cdn.sanity.io/images/e5ozko3p/production/5c1eb28844bf4aa26e97888f112f7713223a72f5-2534x1894.png?auto=format";

const HERO_HEIGHT =
  "max(520px, calc(100dvh - var(--news-banner-height, 0px) - 190px), min(655px, calc(100dvh - var(--news-banner-height, 0px) - 150px)))";

const HERO_OVERLAY =
  "linear-gradient(256.16deg, rgba(0, 0, 0, 0) 0.29%, rgba(0, 0, 0, 0.9) 100%)";

export function Hero() {
  return (
    <div
      data-hero="true"
      className="relative isolate flex items-center overflow-hidden bg-black"
      style={{ height: HERO_HEIGHT }}
    >
      <div className="absolute inset-0 -z-10 bg-[#1A1A1A]" />
      <video
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        poster={POSTER_SRC}
        src={VIDEO_SRC}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: HERO_OVERLAY }}
      />

      <div className="container flex !w-full items-center">
        <div className="flex max-w-[478px] flex-col items-start gap-[21px] max-md:max-w-full max-md:items-center md:max-w-[820px]">
          <div className="flex w-full flex-col items-start gap-3 max-md:items-center max-md:gap-2 max-md:text-center">
            <h1
              className="font-heading text-[64px] leading-[100%] -tracking-[1.2px] text-white max-md:text-[48px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)" }}
            >
              AI transformation.
              <br />
              Strategy, talent, execution.
            </h1>
            <p
              className="max-w-[480px] text-[18px] leading-[27px] text-white/80 max-md:text-[16px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)" }}
            >
              We build AI strategies, embed offshore teams, and deliver
              systems for construction, trades, manufacturing, and
              government.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-3 max-md:items-center">
            <Link to="/get-a-demo" className="inline-flex max-md:w-full">
              <span className="group relative inline-flex h-12 w-auto cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-full bg-white px-7 text-[16px] font-medium leading-none text-[#1A1A1A] shadow-[0_1px_4px_rgba(12,12,13,0.05)] transition-[background-color,transform] duration-200 hover:scale-[1.02] hover:bg-white/90 max-md:w-full">
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

      <button
        type="button"
        aria-label="Play video"
        className="absolute bottom-8 left-8 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#1A1A1A] shadow-[inset_0_0_0_1px_#1A1A1A] transition-transform hover:scale-110 max-md:bottom-4 max-md:left-4 max-md:h-10 max-md:w-10"
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
    </div>
  );
}
