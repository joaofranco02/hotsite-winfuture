import { siteContent } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";

const { practice } = siteContent;

export function Practice() {
  return (
    <section className="relative border-t border-border py-20 sm:py-28">
      {/* Padrão sutil de pontos azuis no canto direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-30 [background-image:radial-gradient(var(--color-primary-bright)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />

      <div className="px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho */}
        <Reveal>
          <SectionLabel
            number={practice.number}
            text={practice.label}
            size="lg"
            tone="primary"
          />
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {practice.title}
          </h2>
        </Reveal>

        {/* Cards estáticos — grid responsivo alinhado ao gutter da página */}
        <Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practice.cards.map((card) => (
              <li key={card.title}>
                <FeatureCard {...card} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
