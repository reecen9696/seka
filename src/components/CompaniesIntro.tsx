export function CompaniesIntro() {
  return (
    <section className="overflow-clip bg-[#F6F8F6] pt-10 pb-12 text-black md:pt-32 md:pb-[164px]">
      <div className="container">
        <div className="container mdx:mx-auto mdx:justify-center mdx:text-center flex w-full flex-col justify-center gap-y-4 text-center">
          <div className="mdx:justify-center flex items-center justify-center gap-x-[9px] pb-1">
            <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
            <h6 className="text-eyebrow">What we fix</h6>
          </div>
          <h2 className="text-h2 xs:max-lg:text-pretty mx-auto w-full max-w-[840px]">
            <span>
              Most businesses know AI matters. Almost none know how to
              execute.
            </span>
          </h2>
          <p className="text-18 xs:max-lg:text-pretty mdx:mx-auto mx-auto w-full max-w-[680px] text-black/70">
            Consultants write decks. Recruiters send CVs. Internal teams
            stall. Seka embeds strategy, talent, and delivery so you don't
            just plan AI — you operate with it.
          </p>
        </div>
      </div>
    </section>
  );
}
