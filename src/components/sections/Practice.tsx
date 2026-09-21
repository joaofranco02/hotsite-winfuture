import { siteContent } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureMarquee } from "@/components/ui/FeatureMarquee";
import { Reveal } from "@/components/ui/Reveal";

const { practice } = siteContent;

export function Practice() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 sm:py-28">
      {/* Padrão sutil de pontos azuis no canto direito */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-30 [background-image:radial-gradient(var(--color-primary-bright)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
      />

      {/* Cabeçalho — ancorado ao mesmo gutter das seções 01 */}
      <div className="px-5 sm:px-8 lg:px-12">
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
      </div>

      {/* Esteira infinita de cards (full-bleed) */}
      <div className="mt-12">
        <FeatureMarquee cards={practice.cards} />
      </div>
    </section>
  );
}
