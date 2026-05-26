export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="overflow-clip bg-[#F6F8F6] pt-[100px] pb-12 text-black md:pt-[140px] md:pb-20">
      <div className="container">
        <div className="mdx:mx-auto mdx:justify-center mdx:text-center flex w-full flex-col items-center justify-center gap-y-6 text-center">
          <h1 className="text-h1 xs:max-lg:text-balance mx-auto w-full max-w-[823px]">
            {title}
          </h1>
          <p className="text-18 xs:max-lg:text-balance mx-auto w-full max-w-[520px] text-black/70">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
