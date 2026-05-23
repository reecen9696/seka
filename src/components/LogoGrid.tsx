type Logo = {
  name: string;
  href: string;
  src: string;
  width: number;
  height: number;
};

const LOGOS: Logo[] = [
  { name: "Palantir", href: "https://www.palantir.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/f843e1ff0cdb8a177b7ec13832849263a20dd5a3-89x22.svg?auto=format", width: 89, height: 22 },
  { name: "Rippling", href: "https://www.rippling.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/b197bac9521168526b4df2b21b0c6834eaf623e5-2184x312.svg?auto=format", width: 2184, height: 312 },
  { name: "Decagon", href: "https://decagon.ai/", src: "https://cdn.sanity.io/images/e5ozko3p/production/0d49e11a3ac5f5842258059aa6b076afc688f037-134x25.svg?auto=format", width: 134, height: 25 },
  { name: "Abridge", href: "https://www.abridge.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/d7a53c564b57c6826478adafd4f295e3b655d079-2204x400.svg?auto=format", width: 2204, height: 400 },
  { name: "Cognition", href: "https://cognition.ai/", src: "https://cdn.sanity.io/images/e5ozko3p/production/197fad682294cd2e70b4a182f08033a186eae782-1632x353.svg?auto=format", width: 1632, height: 353 },
  { name: "Owner", href: "https://www.owner.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/bd4ba7b0ccbcedba78edba51f9b0afae26d3583d-1125x285.svg?auto=format", width: 1125, height: 285 },
  { name: "Scale", href: "https://scale.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/42836d7889e05c15a3da0df6b06d352dd9f430b9-76x26.svg?auto=format", width: 76, height: 26 },
  { name: "Hightouch", href: "https://hightouch.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/ebdb925c7e77d1de49cd17e31dd9d81833d48d0e-109x21.svg?auto=format", width: 109, height: 21 },
  { name: "Meter", href: "https://www.meter.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/2ac784a8503062f6f9421444a3a1bcb3c2e8cfd4-65x19.svg?auto=format", width: 65, height: 19 },
  { name: "Assort Health", href: "https://www.assorthealth.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/94ec95e676f43ed8f41950186cff16f14cf5a905-3066x841.svg?auto=format", width: 3066, height: 841 },
  { name: "Basis", href: "https://www.getbasis.ai/", src: "https://cdn.sanity.io/images/e5ozko3p/production/cf18d167e431e5eb463dbbb1a020470e51615735-81x24.svg?auto=format", width: 81, height: 24 },
  { name: "Nooks", href: "https://nooks.ai/", src: "https://cdn.sanity.io/images/e5ozko3p/production/4ac63f5b7e621f83c117de669d0f72170d96caf0-100x21.svg?auto=format", width: 100, height: 21 },
  { name: "Hex", href: "https://hex.tech/", src: "https://cdn.sanity.io/images/e5ozko3p/production/0297df2eae3b73e83aa666dc07456f18c5eb2b7f-54x21.svg?auto=format", width: 54, height: 21 },
  { name: "Semgrep", href: "https://semgrep.dev/", src: "https://cdn.sanity.io/images/e5ozko3p/production/5489be666e7f0ab2ec39858f4f7d75a54c384123-2651x400.svg?auto=format", width: 2651, height: 400 },
  { name: "Persona", href: "https://withpersona.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/f63b2435e49d879caa8bb6187fd07b667ad224c2-108x27.svg?auto=format", width: 108, height: 27 },
  { name: "Augment", href: "https://www.augmentcode.com/", src: "https://cdn.sanity.io/images/e5ozko3p/production/e833716d5cd9c635cd3d3ca2b8d6e4026f1ce108-141x19.svg?auto=format", width: 141, height: 19 },
  { name: "Traba", href: "https://traba.work/", src: "https://cdn.sanity.io/images/e5ozko3p/production/783e1706ed727018fa4551c28bf8ff1bf6f2cdcb-70x20.svg?auto=format", width: 70, height: 20 },
  { name: "Arby's", href: "https://www.arbys.com", src: "https://cdn.sanity.io/images/e5ozko3p/production/8f07b3f2d24f1a54cf0d61362a8c2a45586bddd9-1031x995.svg?auto=format", width: 1031, height: 995 },
  { name: "Avis", href: "https://www.avis.com/en/home", src: "https://cdn.sanity.io/images/e5ozko3p/production/c17de6d34985534a0f9ce3e5fe6b65e87679ab49-1429x604.svg?auto=format", width: 1429, height: 604 },
  { name: "Thomson Reuters", href: "https://www.thomsonreuters.com/en", src: "https://cdn.sanity.io/images/e5ozko3p/production/7834f7068367ac818c0c04899b5acda78acbc6e1-2859x400.svg?auto=format", width: 2859, height: 400 },
  { name: "WSGR", href: "https://www.wsgr.com/en/", src: "https://cdn.sanity.io/images/e5ozko3p/production/08dda47488891eb09bcd7a0febbbe9da98a8195c-1048x400.svg?auto=format", width: 1048, height: 400 },
];

const ROWS_PER_GRID = 7;

function LogoTile({ logo }: { logo: Logo }) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noreferrer"
      className="relative flex h-[100px] items-center justify-center gap-2 rounded-lg bg-[rgba(26,26,26,0.05)] p-6 transition-colors"
    >
      <span className="flex items-center justify-center leading-none opacity-40 transition-all duration-200">
        <img
          alt={logo.name}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          className="block h-auto w-auto"
        />
      </span>
    </a>
  );
}

function MarqueeTile({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-[100px] w-[200px] shrink-0 items-center justify-center rounded-xl bg-[rgba(26,26,26,0.05)] p-6">
      <span className="flex items-center justify-center leading-none opacity-40">
        <img
          alt={logo.name}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          className="block h-auto w-auto"
        />
      </span>
    </div>
  );
}

export function LogoGrid() {
  const rows: Logo[][] = [];
  for (let i = 0; i < LOGOS.length; i += ROWS_PER_GRID) {
    rows.push(LOGOS.slice(i, i + ROWS_PER_GRID));
  }

  return (
    <div className="container overflow-visible max-md:!px-0">
      <div className="relative mx-auto mt-6 max-w-[1248px] md:mt-8">
        <div className="md:hidden">
          <div className="overflow-hidden px-4">
            <div
              className="logo-marquee-track flex w-max"
              style={
                {
                  ["--logo-marquee-duration" as never]: "94.5s",
                } as React.CSSProperties
              }
            >
              <div className="flex shrink-0 gap-3 pr-3">
                {LOGOS.map((logo) => (
                  <MarqueeTile key={`a-${logo.name}`} logo={logo} />
                ))}
              </div>
              <div aria-hidden="true" className="flex shrink-0 gap-3 pr-3">
                {LOGOS.map((logo) => (
                  <MarqueeTile key={`b-${logo.name}`} logo={logo} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="overflow-visible">
            <div className="flex flex-col items-center gap-4">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="grid w-full grid-cols-3 items-center gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7"
                >
                  {row.map((logo) => (
                    <div key={logo.name} className="relative col-span-1">
                      <LogoTile logo={logo} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
