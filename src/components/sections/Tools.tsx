import { siteContent } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ToolsMarquee } from "@/components/ui/ToolsMarquee";
import { CtaButton } from "@/components/ui/CtaButton";
import { Reveal } from "@/components/ui/Reveal";

const { tools } = siteContent;

export function Tools() {
  return (
    <section className="overflow-hidden border-t border-border py-20 sm:py-28">
      {/* Cabeçalho — ancorado ao mesmo gutter das seções 01/02, CTA à direita */}
      <Reveal className="flex flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div className="max-w-2xl">
          <SectionLabel number={tools.label} size="lg" tone="primary" />
          <h2 className="mt-6 font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {tools.title}
          </h2>
          <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-muted">
            {tools.description}
          </p>
        </div>
        <div className="shrink-0">
          <CtaButton location="tools" />
        </div>
      </Reveal>

      {/* Esteira infinita de ferramentas (full-bleed) */}
      <div className="mt-12">
        <ToolsMarquee cards={tools.cards} highlightLines={tools.highlightCard.lines} />
      </div>
    </section>
  );
}
