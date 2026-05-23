import { Link } from "react-router-dom";

const CTA_BG =
  "https://cdn.sanity.io/images/e5ozko3p/production/bcab2d3c2ec904f8c1ad9dee2bb029e2f7e1970d-1248x520.png?auto=format";

export function CtaBanner() {
  return (
    <section className="container pt-[164px]">
      <div className="xl:aspect-1248/520 relative min-h-[470px] overflow-hidden rounded-[10px] md:min-h-[520px]">
        <div className="absolute inset-0">
          <img
            src={CTA_BG}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="relative z-10 pt-12 text-center md:pt-24">
          <h3 className="text-h2 mx-auto max-w-[836px] text-balance text-black">
            Ready to move past the conversation?
          </h3>
          <p className="text-18 mx-auto mt-4 text-black max-md:text-balance md:max-w-[600px]">
            Most AI initiatives stall because strategy and execution live in
            different rooms. At Seka, they are the same room.
          </p>
          <div className="mt-7 flex items-center justify-center gap-x-2.5 md:!gap-x-3">
            <Link to="/get-a-demo" className="inline-flex">
              <span className="text-nav-link group relative inline-flex w-auto items-center justify-center gap-x-2 overflow-hidden whitespace-nowrap rounded-full bg-black px-4 py-[0.78125rem] text-white ring-1 ring-inset ring-black transition-colors duration-200 hover:bg-black/80">
                <span className="relative">
                  <span className="flex translate-y-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-[200%]">
                    Book a consultation
                  </span>
                  <span className="absolute inset-0 flex translate-y-[200%] items-center justify-center transition-transform duration-300 group-hover:translate-y-0">
                    Book a consultation
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
