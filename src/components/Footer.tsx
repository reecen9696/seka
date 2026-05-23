import logoBlack from "../assets/logoblack.svg";

const NAV_COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Transform your business", href: "/transform" },
      { label: "Why us", href: "/why-us" },
    ],
  },
  {
    heading: "Use cases",
    links: [
      { label: "Case studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a consultation", href: "/get-a-demo" },
    ],
  },
];

function Logo() {
  return <img src={logoBlack} alt="Paraform" className="h-6 w-auto" />;
}

function ColumnGroup({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="2xs:min-w-[159px] max-2xl:flex-1 2xl:min-w-[226px] flex flex-col gap-y-2.5">
      <p className="text-14 text-black/65">{heading}</p>
      <ul className="flex flex-col gap-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-16 text-black opacity-100 transition-opacity duration-200 hover:opacity-65"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F6F8F6] pt-20 pb-16 text-black md:pt-28">
      <div className="container space-y-20 md:space-y-[144px]">
        <div className="flex justify-between gap-x-10 gap-y-8 max-lg:flex-col">
          <a href="/" className="inline-flex shrink-0">
            <Logo />
          </a>

          <div className="grid flex-1 grid-cols-2 gap-x-5 gap-y-6 sm:gap-y-14 md:grid-cols-3 lg:max-w-[717px]">
            <div className="flex flex-col gap-y-6 sm:gap-y-14 md:contents">
              <ColumnGroup
                heading={NAV_COLUMNS[0].heading}
                links={NAV_COLUMNS[0].links}
              />
              <ColumnGroup
                heading={NAV_COLUMNS[1].heading}
                links={NAV_COLUMNS[1].links}
              />
            </div>
            <ColumnGroup
              heading={NAV_COLUMNS[2].heading}
              links={NAV_COLUMNS[2].links}
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-between gap-x-8 max-sm:flex-col">
          <p className="text-12 text-black/65 max-sm:hidden">
            © Seka Consulting 2026
          </p>

          <div className="flex w-full flex-1 justify-between gap-x-8 max-sm:flex-col-reverse sm:items-center lg:max-w-[717px]">
            <div className="flex items-center gap-x-6 max-sm:pt-4">
              <a
                href="/terms-of-service"
                className="text-12 text-black opacity-80 transition-opacity duration-200 hover:opacity-100"
              >
                Terms of service
              </a>
              <a
                href="/privacy-policy"
                className="text-12 text-black opacity-80 transition-opacity duration-200 hover:opacity-100"
              >
                Privacy policy
              </a>
              <button
                type="button"
                className="text-12 cursor-pointer text-black opacity-80 transition-opacity duration-200 hover:opacity-100"
              >
                Your privacy choices
              </button>
            </div>

            <div className="max-sm:border-black/8 flex items-center justify-between gap-x-4 gap-y-4 max-sm:border-b max-sm:pb-4">
              <p className="text-12 text-black/65 sm:hidden">
                © Seka Consulting 2026
              </p>
              <div className="flex items-center gap-x-4">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group relative text-black/65"
                >
                  <span
                    aria-hidden
                    className="absolute -top-2 -right-2 -z-10 size-8 scale-90 rounded-full bg-black/10 opacity-0 backdrop-blur-2xl transition-[opacity,scale] duration-200 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[17px]"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      d="M15.7769 1.33008H2.14094C1.48894 1.33008 0.960938 1.82908 0.960938 2.44608V15.6951C0.960938 16.3121 1.48894 16.8141 2.14194 16.8141H15.7769C16.4299 16.8141 16.9609 16.3121 16.9609 15.6981V2.44608C16.9609 1.82908 16.4299 1.33008 15.7769 1.33008ZM5.70694 14.5251H3.33394V7.13308H5.70894V14.5251H5.70694ZM4.52094 6.12608C3.75894 6.12608 3.14294 5.53108 3.14294 4.79608C3.14294 4.06108 3.75894 3.46608 4.52094 3.46608C5.28094 3.46608 5.89594 4.06108 5.89594 4.79608C5.89594 5.52808 5.28094 6.12608 4.52094 6.12608ZM14.5959 14.5251H12.2249V10.9321C12.2249 10.0761 12.2089 8.97208 10.9899 8.97208C9.75594 8.97208 9.56794 9.90708 9.56794 10.8721V14.5251H7.19794V7.13308H9.47294V8.14308H9.50494C9.81994 7.56308 10.5949 6.94908 11.7489 6.94908C14.1519 6.94908 14.5949 8.47908 14.5949 10.4691V14.5251H14.5959Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="group relative text-black/65"
                >
                  <span
                    aria-hidden
                    className="absolute -top-2 -right-2 -z-10 size-8 scale-90 rounded-full bg-black/10 opacity-0 backdrop-blur-2xl transition-[opacity,scale] duration-200 group-hover:scale-100 group-hover:opacity-100"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[17px]"
                    viewBox="0 0 17 18"
                    fill="none"
                  >
                    <path
                      d="M13.1565 2.55859H15.4045L10.4915 7.99359L16.2715 15.3886H11.7465L8.20147 10.9036L4.14547 15.3886H1.89547L7.15047 9.57559L1.60547 2.55859H6.24547L9.45047 6.65859L13.1565 2.55859ZM12.3665 14.0856H13.6125L5.56847 3.79359H4.23147L12.3665 14.0856Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
