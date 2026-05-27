import { useState, type FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { Section } from "../design-system/primitives/Section";

type Audience = "companies" | "investors";

const EXPECTATIONS = [
  {
    title: "An honest answer",
    body: "If we are not the right fit, we will tell you. We take a small number of engagements at a time.",
  },
  {
    title: "A senior team",
    body: "You work directly with the people who build. No account managers, no layers in between.",
  },
  {
    title: "Fast movement",
    body: "If the timing is right, we move quickly — from first call to a scoped engagement.",
  },
];

function PillInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="text-16 h-11 w-full rounded-full bg-white px-5 text-black ring-1 ring-inset ring-black/10 transition-shadow placeholder:text-black/40 focus:outline-hidden focus:ring-black"
    />
  );
}

function WhatToExpect() {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-7">
        {EXPECTATIONS.map((item) => (
          <div key={item.title} className="flex gap-x-4">
            <span className="bg-brand-sky mt-2.5 size-1.5 shrink-0 rounded-full" />
            <div>
              <h3 className="text-h5">{item.title}</h3>
              <p className="text-16 mt-1 text-black/70">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-black/10 pt-6">
        <a
          href="mailto:hello@seka.com.au"
          className="text-18-medium text-black underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          hello@seka.com.au
        </a>
        <p className="text-14 mt-2 text-black/55">
          Melbourne, Australia · Available nationwide and internationally
        </p>
      </div>
    </div>
  );
}

function DemoForm() {
  const [audience, setAudience] = useState<Audience>("companies");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Conversation started", { audience });
  };

  return (
    <div className="bg-grey-100 rounded-lg p-6 ring-1 ring-inset ring-black/8 md:p-8">
      {/* Audience toggle */}
      <div className="flex items-center gap-x-1 rounded-full bg-white p-0.5 ring-1 ring-inset ring-black/10">
        {(["companies", "investors"] as const).map((a) => {
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

      <form className="mt-5 space-y-3" autoComplete="on" onSubmit={handleSubmit}>
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
          name="company"
          placeholder="Company"
          autoComplete="organization"
          required
        />
        <PillInput
          type="tel"
          name="phoneNumber"
          placeholder="Phone number (optional)"
          autoComplete="tel"
        />
        <textarea
          name="message"
          rows={4}
          required
          placeholder={
            audience === "companies"
              ? "What are you trying to solve?"
              : "Tell us a bit about what you are looking for."
          }
          className="text-16 w-full resize-none rounded-lg bg-white px-5 py-3.5 text-black ring-1 ring-inset ring-black/10 transition-shadow placeholder:text-black/40 focus:outline-hidden focus:ring-black"
        />

        <button
          type="submit"
          className="text-button mt-1 h-11 w-full cursor-pointer rounded-full bg-black text-white transition-colors duration-200 hover:bg-black/80"
        >
          Start a conversation
        </button>
      </form>
    </div>
  );
}

export function GetADemo() {
  return (
    <main>
      <PageHero
        title="Let us talk."
        subtitle="Tell us what you are trying to solve. We will tell you honestly whether we can help, and how."
      />
      <Section className="pt-0 md:pt-0">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-12 lg:grid-cols-2">
          <WhatToExpect />
          <DemoForm />
        </div>
      </Section>
    </main>
  );
}
