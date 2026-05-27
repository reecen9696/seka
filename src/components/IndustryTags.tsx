import { SectionIntro } from "../design-system/primitives/SectionIntro";
import { Tag } from "../design-system/primitives/Tag";

const INDUSTRIES = [
  "Construction and contracting",
  "Manufacturing",
  "Professional services",
  "Technology",
  "Trades and field services",
  "Energy and resources",
  "Finance and insurance",
  "Federal and state government",
  "Retail and e-commerce",
];

/**
 * Industries as a simple tag cloud (hairline pills), on the alt surface band.
 */
export function IndustryTags() {
  return (
    <section className="overflow-clip bg-surface-alt py-16 text-black md:py-32">
      <div className="container">
        <SectionIntro
          align="center"
          eyebrow="Industries"
          title="Built for businesses serious about change."
        >
          <p>
            From a tradie automating their first workflow to a mid-market firm
            building a data function, we meet you where you are.
          </p>
        </SectionIntro>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {INDUSTRIES.map((name) => (
            <Tag key={name} tone="outline">
              {name}
            </Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
