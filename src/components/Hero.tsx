import { useState, type FormEvent } from "react";

const VIDEO_SRC =
  "https://cdn.sanity.io/files/e5ozko3p/production/7fdee7ff1841917f08699c46d73a9d3af6956088.mp4";
const POSTER_SRC =
  "https://cdn.sanity.io/images/e5ozko3p/production/5c1eb28844bf4aa26e97888f112f7713223a72f5-2534x1894.png?auto=format";

const HERO_HEIGHT =
  "max(520px, calc(100dvh - var(--news-banner-height, 0px) - 190px), min(655px, calc(100dvh - var(--news-banner-height, 0px) - 150px)))";

const HERO_OVERLAY =
  "linear-gradient(256.16deg, rgba(0, 0, 0, 0) 0.29%, rgba(0, 0, 0, 0.9) 100%)";

export function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Book a consultation:", email);
  };

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
        <div className="flex max-w-[478px] flex-col items-start gap-[21px] max-md:max-w-full max-md:items-center">
          <div className="flex w-full flex-col items-start gap-3 max-md:items-center max-md:gap-2 max-md:text-center">
            <h1
              className="font-heading text-[64px] leading-[100%] -tracking-[1.2px] text-white max-md:text-[48px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)" }}
            >
              Deploy an AI engineer
              <br />
              into your business
            </h1>
            <p
              className="max-w-[440px] text-[18px] leading-[27px] text-white/80 max-md:text-[16px]"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.03)" }}
            >
              Expert AI engineers embedded into your team to deliver immediate
              operational impact.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-3 max-md:items-center">
            <div className="w-full max-w-[422px] max-md:w-full">
              <form
                onSubmit={handleSubmit}
                className="hidden h-16 w-full items-center rounded-[44px] border border-[rgba(33,33,33,0.1)] bg-white p-2 shadow-[0_1px_4px_rgba(12,12,13,0.05)] transition-[border-color,box-shadow] duration-200 focus-within:border-white/50 focus-within:ring-4 focus-within:ring-white/15 md:flex"
              >
                <input
                  type="email"
                  required
                  placeholder="Your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 min-w-0 flex-1 rounded-[10px] bg-transparent px-2 text-[16px] leading-[21px] -tracking-[0.18px] text-[#0C0A08] transition-colors duration-200 placeholder:text-[rgba(26,26,26,0.5)] focus:outline-hidden"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 cursor-pointer rounded-[32px] bg-[#1A1A1A] px-7 text-[16px] leading-[15px] text-white shadow-[inset_0_0_0_1px_#1A1A1A] transition-colors duration-200 hover:bg-[#1A1A1A]/90"
                >
                  Book
                </button>
              </form>

              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-3 md:hidden"
              >
                <div className="flex h-[51px] w-full items-center rounded-[44px] border border-[rgba(33,33,33,0.1)] bg-white p-2 shadow-[0_1px_4px_rgba(12,12,13,0.05)] transition-[border-color,box-shadow] duration-200 focus-within:border-white/50 focus-within:ring-4 focus-within:ring-white/15">
                  <input
                    type="email"
                    required
                    placeholder="Your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-full min-w-0 flex-1 rounded-[10px] bg-transparent px-2 text-[16px] leading-[21px] -tracking-[0.18px] text-[#0C0A08] transition-colors duration-200 placeholder:text-[rgba(26,26,26,0.5)] focus:outline-hidden"
                  />
                </div>
                <button
                  type="submit"
                  className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[32px] bg-[#1A1A1A] text-[16px] leading-[15px] text-white shadow-[inset_0_0_0_1px_#1A1A1A] transition-colors duration-200 hover:bg-[#1A1A1A]/90"
                >
                  Book
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12H19M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.6"
                    />
                  </svg>
                </button>
              </form>
            </div>
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
