import { siteContent } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

const { whyItMatters } = siteContent;

export function WhyItMatters() {
  return (
    <section
      id="experiencia"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-0"
    >
      <div className="grid items-stretch lg:min-h-[42rem] lg:grid-cols-[1.4fr_1fr]">
        {/* Área de texto (esquerda) — ancorada ao mesmo gutter do header/hero */}
        <Reveal className="flex flex-col px-5 sm:px-8 lg:px-12 lg:py-16">
          <SectionLabel
            number={whyItMatters.number}
            text={whyItMatters.label}
            size="lg"
            tone="primary"
          />

          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start md:gap-12 lg:my-auto">
            {/* Coluna 1: título em duas linhas */}
            <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              <span className="block text-white">{whyItMatters.titleTop}</span>
              <span className="mt-3 block text-primary-bright">
                {whyItMatters.titleHighlight}
              </span>
            </h2>

            {/* Coluna 2: texto de apoio + destaque */}
            <div className="space-y-6 md:pt-1">
              <div className="space-y-4">
                {whyItMatters.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="font-sans text-base leading-relaxed text-muted text-pretty sm:text-[17px]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <p className="border-l-2 border-primary-bright pl-4 font-display text-lg font-extrabold uppercase leading-[1.15] tracking-tight text-white sm:text-xl">
                {whyItMatters.highlight.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Imagem (direita) — sangra até a borda direita da tela */}
        <Reveal delay={0.1} className="relative mt-10 h-[24rem] sm:h-[30rem] lg:mt-0 lg:h-auto">
          <SmartImage
            src={whyItMatters.image.src}
            alt={whyItMatters.image.alt}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          {/* Mescla com o fundo na emenda esquerda + base */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-transparent lg:via-bg/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent"
          />
        </Reveal>
      </div>
    </section>
  );
}
