import { Button } from "../design-system/primitives/Button";

type Testimonial = {
  logo: string;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    logo: "https://cdn.sanity.io/images/e5ozko3p/production/98281c1db16d0b73c8cc30dd72d5a56b0d090d31-1385x400.svg?auto=format",
    logoWidth: 1385,
    logoHeight: 400,
    quote: "“We see Paraform as an extension of Basis' talent team.”",
    name: "Ben Katzburg",
    role: "Head of Talent @ Basis",
  },
  {
    logo: "https://cdn.sanity.io/images/e5ozko3p/production/d18a29cb08a84847c2b6a48fefad376c656c99bb-128x18.svg?auto=format",
    logoWidth: 128,
    logoHeight: 18,
    quote:
      "“We made every hire with Paraform. Paraform is the core engine that will be driving our recruiting.”",
    name: "Alex Laubscher",
    role: "Field CTO @ Windsurf",
  },
  {
    logo: "https://cdn.sanity.io/images/e5ozko3p/production/2ff8ecaa30204990ba01d5c9594201361f5f94f4-120x32.svg?auto=format",
    logoWidth: 120,
    logoHeight: 32,
    quote:
      "“We hired 6 engineers with Paraform in just a few months - it was a critical support lever that we needed during a period of hyper-growth with a lean team”",
    name: "Alexis Bernstein",
    role: "Talent Principal @ Owner",
  },
];

function StoriesArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M13.3265 8.99259H4.17969C3.35126 8.99259 2.67969 8.32101 2.67969 7.49259V3.25M13.3265 8.99259L9.24136 5.20789M13.3265 8.99259L9.24136 12.7473"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-surface overflow-clip py-16 text-black md:py-24">
      <div className="container">
        <div className="mdx:mx-0 mdx:justify-start mdx:text-left flex w-full flex-col justify-center gap-y-5 text-center">
          <h2 className="text-h3 xs:max-lg:text-balance">
            Performance that speaks for itself
          </h2>
          <div className="mdx:justify-start flex items-center justify-center gap-x-2.5 pt-1 md:gap-x-3">
            <Button to="/blog" variant="subtle" icon={<StoriesArrow />}>
              All company stories
            </Button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-6 md:mt-16 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col items-start justify-start gap-y-10 border-y border-r border-l border-black/10 px-6 py-6 md:gap-y-20 md:border-y-0 md:border-r-0 md:px-8 md:pt-3 md:pb-0"
            >
              <img
                src={t.logo}
                alt=""
                width={t.logoWidth}
                height={t.logoHeight}
                loading="lazy"
                className="h-[26px] w-auto"
              />
              <div>
                <div className="text-20 !font-heading indent-[-7px] !leading-[1.35]">
                  {t.quote}
                </div>
                <div className="mt-8 flex items-center justify-between gap-x-4">
                  <div className="min-w-0 text-left">
                    <p className="text-14-medium">{t.name}</p>
                    <p className="text-12 text-black/65">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
