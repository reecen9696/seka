import imgLakshane from "../assets/team/lakshane.png";
import imgReece from "../assets/team/reece.png";

type Founder = {
  name: string;
  role: string;
  img: string;
  bio: string;
  tags: string[];
};

const FOUNDERS: Founder[] = [
  {
    name: "Lakshane Fonseka",
    role: "Co-founder",
    img: imgLakshane,
    bio: "Strategy and commercial. Spent his early career at KPMG and Accenture leading federal government advisory, enterprise data infrastructure, and workforce transformation for ASX-listed clients.",
    tags: ["KPMG", "Accenture", "Strategy", "Enterprise delivery"],
  },
  {
    name: "Reece Nimorakiotakis",
    role: "Co-founder",
    img: imgReece,
    bio: "Engineering and product. A software engineer and serial co-founder with range across enterprise systems, cloud architecture, full-stack product, and AI integration.",
    tags: ["JLL", "Arcadia Labs", "Full-stack", "AI engineering"],
  },
];

export function WhoWeAre() {
  return (
    <section className="overflow-clip bg-[#F6F8F6] pt-10 pb-12 text-black md:pt-24 md:pb-[120px]">
      <div className="container">
        <div className="mdx:mx-auto mdx:justify-center flex w-full flex-col justify-center gap-y-4 text-center">
          <div className="mdx:justify-center flex items-center justify-center gap-x-[9px] pb-1">
            <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
            <h6 className="text-eyebrow">Who we are</h6>
          </div>
          <h2 className="text-h2 xs:max-lg:text-pretty mx-auto w-full max-w-[840px]">
            Strategy and engineering, in the same room.
          </h2>
          <p className="text-18 xs:max-lg:text-pretty mdx:mx-auto mx-auto w-full max-w-[680px] text-black/70">
            The businesses that get the most from AI are not the ones with the
            biggest budgets. They are the ones with the right people executing
            the right things in the right order. Most consultancies sell
            strategy. Most staffing firms place bodies. Most dev shops build to
            spec. Seka does all three.
          </p>
        </div>

        <div className="mdx:mt-20 mx-auto mt-12 flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-center md:gap-8">
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className="flex w-[342px] max-w-full flex-col">
              <div className="bg-grey-100 ring-black/8 aspect-[342/392] w-full overflow-hidden rounded-[14px] ring-1 ring-inset">
                <img
                  src={founder.img}
                  alt={founder.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-h5">{founder.name}</h3>
                <p className="text-14 mt-1.5 text-black/60">{founder.role}</p>
                <p className="text-16 mt-3">{founder.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/[0.05] px-2.5 py-1 text-[13px] leading-none text-black/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
