import { siteContent } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { buttonClasses } from "@/components/ui/Button";
import { InfoChip } from "@/components/ui/InfoChip";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

const { hero } = siteContent;

export function Hero() {
  return (
    <section
      id="o-evento"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:flex lg:min-h-[42rem] lg:items-center lg:py-0"
    >
      <span id="top" aria-hidden="true" className="absolute top-0" />
      {/* Glow azul de fundo, sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      {/* Coluna de texto (esquerda) — ancorada ao gutter esquerdo, sem lacuna */}
      <div className="relative z-20 w-full px-5 sm:px-8 lg:px-12">
        <Reveal className="lg:max-w-[46%]">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-bright">
            {hero.eyebrow.map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {word}
                {i < hero.eyebrow.length - 1 && (
                  <span aria-hidden="true" className="text-dim">
                    /
                  </span>
                )}
              </span>
            ))}
          </p>

          <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-white">{hero.titleTop}</span>{" "}
            <span className="text-primary-bright">{hero.titleHighlight}</span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg sm:grid-cols-4">
            {hero.chips.map((chip) => (
              <InfoChip key={chip.label} label={chip.label} value={chip.value} />
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton location="hero" size="lg" />
            <a href={hero.secondaryCta.href} className={buttonClasses("secondary", "lg")}>
              {hero.secondaryCta.label}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Imagem (centro → borda direita) com coluna lateral sobreposta à direita */}
      <Reveal
        delay={0.1}
        className="mt-10 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:w-[56%]"
      >
        <div className="relative h-[22rem] w-full sm:h-[26rem] lg:h-full">
          <SmartImage
            src={hero.image.src}
            alt={hero.image.alt}
            sizes="(max-width: 1024px) 100vw, 56vw"
            priority
          />

          {/* Mescla com o fundo à esquerda (emenda com o texto) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-bg via-bg/50 to-transparent lg:via-bg/25"
          />
          {/* Escurece a direita para leitura da coluna lateral */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-3/4 bg-gradient-to-l from-bg/90 via-bg/40 to-transparent"
          />
          {/* Suaviza topo/base */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"
          />

          {/* Coluna lateral: IDEIAS / PESSOAS / SOLUÇÕES / IMPACTO + selo */}
          <div className="absolute right-5 top-1/2 z-10 flex max-w-[55%] -translate-y-1/2 flex-col items-end gap-4 text-right sm:right-8">
            <ul className="flex flex-col items-end gap-1.5">
              {hero.sideWords.map((word) => (
                <li
                  key={word}
                  className="font-display text-base font-bold uppercase tracking-[0.12em] text-white sm:text-lg"
                >
                  {word}
                </li>
              ))}
              <li aria-hidden="true" className="mt-1 h-0.5 w-8 bg-primary-bright" />
            </ul>

            <div className="max-w-[15rem] rounded-sm border border-border bg-bg/70 px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-sm font-bold uppercase leading-tight tracking-tight text-white">
                {hero.badge}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
