import accenture from "../assets/logos/accenture.svg";
import shuffle from "../assets/logos/shuffle.svg";
import jll from "../assets/logos/jll.svg";
import kpmg from "../assets/logos/kpmg.svg";
import retailDirections from "../assets/logos/retail-directions.svg";
import justGroup from "../assets/logos/just-group.svg";

type Logo = {
  name: string;
  src: string;
};

const LOGOS: Logo[] = [
  { name: "Accenture", src: accenture },
  { name: "KPMG", src: kpmg },
  { name: "JLL", src: jll },
  { name: "Shuffle", src: shuffle },
  { name: "Retail Directions", src: retailDirections },
  { name: "Just Group", src: justGroup },
];

function LogoImg({ logo }: { logo: Logo }) {
  return (
    <img
      alt={logo.name}
      src={logo.src}
      loading="lazy"
      className="max-h-7 w-auto max-w-[130px] object-contain opacity-40"
    />
  );
}

export function LogoGrid() {
  return (
    <div className="container overflow-visible max-md:!px-0">
      <div className="relative mx-auto mt-6 max-w-[1248px] md:mt-8">
        {/* Mobile: marquee */}
        <div className="md:hidden">
          <div className="overflow-hidden px-4">
            <div
              className="logo-marquee-track flex w-max"
              style={
                {
                  ["--logo-marquee-duration" as never]: "32s",
                } as React.CSSProperties
              }
            >
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  aria-hidden={dup === 1}
                  className="flex shrink-0 gap-3 pr-3"
                >
                  {LOGOS.map((logo) => (
                    <div
                      key={`${dup}-${logo.name}`}
                      className="flex h-[100px] w-[200px] shrink-0 items-center justify-center rounded-xl bg-[rgba(26,26,26,0.05)] p-6"
                    >
                      <LogoImg logo={logo} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: centered row */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-6">
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex h-[100px] items-center justify-center rounded-lg bg-[rgba(26,26,26,0.05)] p-6"
              >
                <LogoImg logo={logo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
