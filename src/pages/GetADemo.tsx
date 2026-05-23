import { useState, type FormEvent } from "react";

const HERO_IMG =
  "https://cdn.sanity.io/images/e5ozko3p/production/7e006343adfb494e97cf3b7ae90069a4e5dec107-1288x1460.jpg?auto=format";

const LOGOS = [
  { name: "Palantir", src: "https://cdn.sanity.io/images/e5ozko3p/production/f843e1ff0cdb8a177b7ec13832849263a20dd5a3-89x22.svg?auto=format", w: 89, h: 22 },
  { name: "Rippling", src: "https://cdn.sanity.io/images/e5ozko3p/production/b197bac9521168526b4df2b21b0c6834eaf623e5-2184x312.svg?auto=format", w: 2184, h: 312 },
  { name: "Linear", src: "https://cdn.sanity.io/images/e5ozko3p/production/3b5bccf357af06da8028b07bec9e073f7490834a-113x22.svg?auto=format", w: 113, h: 22 },
  { name: "Abridge", src: "https://cdn.sanity.io/images/e5ozko3p/production/d7a53c564b57c6826478adafd4f295e3b655d079-2204x400.svg?auto=format", w: 2204, h: 400 },
  { name: "Hightouch", src: "https://cdn.sanity.io/images/e5ozko3p/production/ebdb925c7e77d1de49cd17e31dd9d81833d48d0e-109x21.svg?auto=format", w: 109, h: 21 },
  { name: "Notion", src: "https://cdn.sanity.io/images/e5ozko3p/production/6076806f39d4ac14431843189c09d993e860f0d9-112x28.svg?auto=format", w: 112, h: 28 },
  { name: "Basis", src: "https://cdn.sanity.io/images/e5ozko3p/production/cf18d167e431e5eb463dbbb1a020470e51615735-81x24.svg?auto=format", w: 81, h: 24 },
];

type Audience = "companies" | "agencies";
type Step = 1 | 2;

const EMPLOYEE_BUCKETS = [
  "1-25",
  "26-150",
  "151-1,000",
  "1,001-5,000",
  "5,001-10,000",
  "10,000+",
];

const ROLE_DEPARTMENTS = [
  { value: "engineering", label: "Engineering" },
  { value: "product", label: "Product" },
  { value: "go_to_market", label: "Go to market" },
  { value: "finance", label: "Finance" },
  { value: "legal", label: "Legal" },
  { value: "other", label: "Other" },
];

function StatTile({
  number,
  unit,
  label,
}: {
  number: string;
  unit: string;
  label: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-y-6 rounded-[10px] bg-black/20 p-5 backdrop-blur-lg">
      <div className="size-2 rounded-full bg-white/40 max-sm:hidden" />
      <div className="flex min-w-0 items-center gap-x-2 sm:flex-col sm:items-baseline">
        <div className="min-w-0">
          <span className="text-h2 max-sm:!text-[1.5rem]">{number}</span>
          <span className="font-heading text-[26px] font-medium leading-none">
            {unit}
          </span>
        </div>
        <p className="text-16 min-w-0 max-sm:!text-[0.875rem]">{label}</p>
      </div>
    </div>
  );
}

function PillInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="text-nav-link h-10 w-full rounded-full px-5 text-black/80 ring-1 ring-inset ring-black/10 placeholder:text-black/65 focus:outline-hidden focus:ring-black focus:ring-inset"
    />
  );
}

function ChipOption({
  type,
  name,
  value,
  label,
}: {
  type: "radio" | "checkbox";
  name: string;
  value: string;
  label: string;
}) {
  return (
    <label className="text-nav-link cursor-pointer text-black/80">
      <input className="peer sr-only" type={type} value={value} name={name} />
      <span className="block rounded-full border border-black/15 px-4 py-2 text-center transition-colors peer-checked:bg-black peer-checked:text-white">
        {label}
      </span>
    </label>
  );
}

function DemoForm() {
  const [audience, setAudience] = useState<Audience>("companies");
  const [step, setStep] = useState<Step>(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    console.log("Demo submitted", { audience });
  };

  return (
    <div className="mdx:max-w-[min(50%,452px)] mdx:px-10 xl:pl-[100px] w-full min-w-0">
      <div className="mdx:max-w-[452px]">
        <h1 className="text-h4 max-sm:!text-[2rem]">
          Let us talk.
        </h1>
        <div className="bg-grey-100 mt-8 flex items-center gap-x-2 rounded-full p-0.5 ring-1 ring-inset ring-black/10">
          {(["companies", "agencies"] as const).map((a) => {
            const active = audience === a;
            return (
              <button
                key={a}
                type="button"
                onClick={() => setAudience(a)}
                className={`text-14-medium relative h-9 flex-1 cursor-pointer text-center transition-colors duration-300 ${
                  active ? "text-white" : "text-black/65"
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-black" />
                )}
                <span className="relative z-10">
                  {a === "companies" ? "Companies" : "Investors / partners"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mdx:max-w-[452px] mt-4">
        <form className="space-y-8" autoComplete="on" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <PillInput
                    name="firstName"
                    placeholder="First name"
                    autoComplete="given-name"
                    required
                  />
                  <PillInput
                    name="lastName"
                    placeholder="Last name"
                    autoComplete="family-name"
                    required
                  />
                </div>
                <PillInput
                  type="email"
                  name="email"
                  placeholder="Company email"
                  autoComplete="email"
                  required
                />
                <PillInput
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  autoComplete="tel"
                  required
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <fieldset>
                  <legend className="text-14-medium mb-2 text-black/65">
                    Number of employees
                  </legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {EMPLOYEE_BUCKETS.map((v) => (
                      <ChipOption
                        key={v}
                        type="radio"
                        name="employeeCount"
                        value={v}
                        label={v}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-14-medium mb-2 text-black/65">
                    Role departments (Select all that apply)
                  </legend>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {ROLE_DEPARTMENTS.map((r) => (
                      <ChipOption
                        key={r.value}
                        type="checkbox"
                        name="roleType"
                        value={r.value}
                        label={r.label}
                      />
                    ))}
                  </div>
                </fieldset>

                <PillInput
                  name="referralSource"
                  placeholder="How did you hear about us?"
                  required
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="text-nav-link h-10 w-full scale-100 cursor-pointer rounded-full bg-black text-white transition-[colors,scale] duration-200 hover:scale-[1.02] hover:bg-black/80"
          >
            {step === 1 ? "Next" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

function LogoStrip() {
  return (
    <div className="container mt-16 !max-w-[1218px]">
      <h2 className="text-18-medium">Trusted by ambitious operators</h2>
      <div className="relative mx-auto my-4">
        <div className="grid w-full grid-cols-3 items-center gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {LOGOS.map((logo) => (
            <div key={logo.name} className="relative col-span-1">
              <div className="relative flex h-[100px] items-center justify-center gap-2 rounded-lg bg-[rgba(26,26,26,0.05)] p-6">
                <span className="flex items-center justify-center leading-none opacity-40">
                  <img
                    alt={logo.name}
                    src={logo.src}
                    width={logo.w}
                    height={logo.h}
                    className="block h-auto w-auto"
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GetADemo() {
  return (
    <section className="bg-white pt-4 pb-10 text-black transition-colors duration-300 md:pt-12 md:pb-16 lg:min-h-dvh">
      <div className="h-nav" />

      <div className="container !max-w-[1248px]">
        <div className="mdx:pl-8 max-mdx:flex-col-reverse flex min-w-0 justify-between gap-x-6 gap-y-10 lg:items-center xl:pr-[60px] xl:pl-16">
          {/* Left: image with stat tiles */}
          <div className="mdx:aspect-[644/730] 2xl:aspect-[644/630] mdx:max-w-[50%] mdx:items-start relative isolate flex h-full min-h-[360px] w-full min-w-0 shrink-0 items-end overflow-hidden rounded-[10px] xl:max-w-[644px]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px] bg-[#050e15]">
              <img
                src={HERO_IMG}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full origin-center scale-[1.04] object-cover object-center"
              />
            </div>
            <div className="relative z-10 flex h-full w-full flex-1 flex-col items-end justify-end gap-y-10 p-2">
              <div className="flex w-full min-w-0 flex-col gap-x-2 gap-y-2 text-white sm:flex-row">
                <StatTile number="2" unit=" wk" label="Avg. time to deploy" />
                <StatTile number="160" unit="+" label="Hrs saved / month" />
                <StatTile number="98" unit="%" label="Client satisfaction" />
              </div>
            </div>
          </div>

          {/* Right: form */}
          <DemoForm />
        </div>

        <LogoStrip />
      </div>
    </section>
  );
}
