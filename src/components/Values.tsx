const CDN = "https://cdn.sanity.io/images/e5ozko3p/production";

const HEADING = "Every company has its own unique DNA. Here's ours:";

type Value = {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  body: string;
};

const VALUES: Value[] = [
  {
    icon: `${CDN}/3804ac8aa6ca6e89d73a94ad792b3537ce329d9c-27x22.svg?auto=format`,
    iconWidth: 27,
    iconHeight: 22,
    title: "Binary Outcome",
    body: "We either win or lose - there is nothing in between. We obviously want the former.",
  },
  {
    icon: `${CDN}/27032f400f52a9f6c21e4c42b1a165c4571e234d-25x24.svg?auto=format`,
    iconWidth: 25,
    iconHeight: 24,
    title: "13-Star Experience",
    body: "Our take on the 11-star experience by Brian Chesky (CEO, Airbnb). There should be no ceiling to the excellence we can bring to everything we do.",
  },
  {
    icon: `${CDN}/c1cf1501673977a14323413f890ac33f855e6262-25x24.svg?auto=format`,
    iconWidth: 25,
    iconHeight: 24,
    title: "Awake",
    body: "It's dangerously easy to be on autopilot if you don't routinely remove yourself from it. We operate with clarity, intention, and presence.",
  },
  {
    icon: `${CDN}/54b2720f8c3aa7eb139513787f0f9475854e977e-25x24.svg?auto=format`,
    iconWidth: 25,
    iconHeight: 24,
    title: "Pro-Paraform",
    body: "Everything we do is for Paraform and each other.",
  },
  {
    icon: `${CDN}/bfc5f72440378d870ac33e712d6ebc32df64053e-25x24.svg?auto=format`,
    iconWidth: 25,
    iconHeight: 24,
    title: "War Pace",
    body: "Every second matters when stakes are high. There's no room for delay or doubt - we're decisive and action oriented.",
  },
  {
    icon: `${CDN}/789c1851469660799ad4160a90d444d28f41b3e1-25x24.svg?auto=format`,
    iconWidth: 25,
    iconHeight: 24,
    title: "Excited to be here!",
    body: 'Nothing beats intrinsic motivation. We\'re fueled by genuine drive and gratitude - this is hard work, but most days you\'ll find yourself thinking "what a fun business!"',
  },
];

export function Values() {
  return (
    <section className="bg-surface overflow-clip py-12 text-black md:py-24">
      <div className="container space-y-10 md:space-y-24">
        <h3 className="text-h3 xs:max-lg:text-balance w-full max-w-[718px]">
          {HEADING}
        </h3>

        <dl className="grid grid-cols-1 gap-x-[25px] gap-y-8 sm:grid-cols-2 md:gap-y-10">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="flex flex-col border-b border-black/10 pb-6"
            >
              <dt className="text-h5 flex items-center gap-x-[0.8625rem]">
                <img
                  src={value.icon}
                  alt=""
                  width={value.iconWidth}
                  height={value.iconHeight}
                  loading="lazy"
                  className="max-w-6 shrink-0"
                />
                {value.title}
              </dt>
              <dd className="text-18 mt-3 md:max-w-[88%]">{value.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
