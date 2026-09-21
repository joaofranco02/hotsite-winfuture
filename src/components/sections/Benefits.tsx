import { siteContent } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";

const { benefits } = siteContent;

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionLabel number={benefits.number} text={benefits.label} />
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {benefits.title}
          </h2>
          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted">
            {benefits.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
