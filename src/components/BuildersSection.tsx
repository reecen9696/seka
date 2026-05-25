import { useEffect, useRef, useState } from "react";
import imgLakshane from "../assets/team/lakshane.png";
import imgReece from "../assets/team/reece.png";
import imgBianca from "../assets/team/bianca.png";
import imgThejana from "../assets/team/thejana.png";
import imgWishwa from "../assets/team/wishwa.png";
import imgAbdullah from "../assets/team/abdullah.png";

type Member = {
  name: string;
  role: string;
  img: string;
};

const TEAM: Member[] = [
  { name: "Lakshane", role: "Founder", img: imgLakshane },
  { name: "Reece", role: "Technical Lead", img: imgReece },
  { name: "Bianca", role: "Digital Strategist", img: imgBianca },
  { name: "Thejana", role: "Frontend Developer", img: imgThejana },
  { name: "Wishwa", role: "Performance Marketing", img: imgWishwa },
  { name: "Abdullah", role: "Marketing Analyst", img: imgAbdullah },
];

const STEP_MS = 4500;
const CARD_WIDTH = 460;
const CARD_HEIGHT = 530;
const SIDE_HEIGHT = 395;
const SIDE_SCALE = SIDE_HEIGHT / CARD_HEIGHT;
const SIDE_WIDTH = CARD_WIDTH * SIDE_SCALE;
const GAP_CENTER_SIDE = 50;
const GAP_SIDE_OUTER = 42;
const OFFSET_SIDE = CARD_WIDTH / 2 + GAP_CENTER_SIDE + SIDE_WIDTH / 2;
const OFFSET_OUTER = OFFSET_SIDE + SIDE_WIDTH + GAP_SIDE_OUTER;
const CONTAINER_HEIGHT = 560;
const SIDE_OPACITY = 0.35;

function styleFor(delta: number) {
  const abs = Math.abs(delta);
  if (abs === 0) return { scale: 1, opacity: 1, z: 30 };
  if (abs === 1) return { scale: SIDE_SCALE, opacity: SIDE_OPACITY, z: 20 };
  if (abs === 2) return { scale: SIDE_SCALE, opacity: SIDE_OPACITY, z: 10 };
  return { scale: SIDE_SCALE, opacity: 0, z: 0 };
}

function translateFor(delta: number) {
  const abs = Math.abs(delta);
  const sign = Math.sign(delta);
  if (abs === 0) return 0;
  if (abs === 1) return sign * OFFSET_SIDE;
  return sign * OFFSET_OUTER;
}

function PortraitCard({
  member,
  active,
}: {
  member: Member;
  active: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[14px] ring-1 ring-inset ring-white/15">
      <img
        src={member.img}
        alt={member.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {active && (
        <>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="font-heading text-[36px] font-light leading-[1.05] text-white">
              {member.name}
            </div>
            <div className="mt-1.5 text-[15px] text-white/75">
              {member.role}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function BuildersSection() {
  const [active, setActive] = useState(0);
  const prevActive = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % TEAM.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  // Hold the previously rendered index so we can tell, per card, whether its
  // position wrapped around this step (jumped between the two far edges).
  const previous = prevActive.current;
  useEffect(() => {
    prevActive.current = active;
  }, [active]);

  const N = TEAM.length;
  const wrappedDelta = (i: number, base: number) => {
    let delta = i - base;
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    return delta;
  };

  return (
    <section className="overflow-clip bg-[#1A1A1A] pt-10 pb-10 text-white md:pt-32 md:pb-24">
      <div className="space-y-10 md:space-y-20">
        <div className="container mdx:mx-auto mdx:justify-center mdx:text-center flex w-full flex-col justify-center gap-y-4 text-center">
          <div className="mdx:justify-center flex items-center justify-center gap-x-[9px] pb-1">
            <div className="bg-brand-sky size-1.5 shrink-0 rounded-full" />
            <h6 className="text-eyebrow">Our team</h6>
          </div>
          <h2 className="text-h2 xs:max-lg:text-balance">
            The people behind the work
          </h2>
          <p className="text-18 xs:max-lg:text-balance mdx:mx-auto mx-auto w-full max-w-[500px] text-white/70">
            We deliberately stay lean. No account managers, no project
            coordinators, no layers. When you work with Seka, you work with
            the people who built it.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[1650px] overflow-hidden"
          style={{ height: CONTAINER_HEIGHT }}
        >
          {TEAM.map((member, i) => {
            const delta = wrappedDelta(i, active);
            const prevDelta = wrappedDelta(i, previous);
            // A wrapping card jumps between far edges (e.g. -2 → +3). Skip the
            // transition so it snaps to its new slot instead of gliding across.
            const wrapping = Math.abs(delta - prevDelta) > 1;
            const { scale, opacity, z } = styleFor(delta);
            return (
              <div
                key={i}
                className={`absolute top-1/2 left-1/2 ${
                  wrapping
                    ? ""
                    : "transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                }`}
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  marginLeft: -CARD_WIDTH / 2,
                  marginTop: -CARD_HEIGHT / 2,
                  transform: `translateX(${translateFor(delta)}px) scale(${scale})`,
                  opacity,
                  zIndex: z,
                }}
              >
                <PortraitCard member={member} active={delta === 0} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
