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
      
      {/* Glow azul de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="relative z-20 w-full px-5 sm:px-8 lg:px-12">
        <Reveal className="lg:max-w-[50%]">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-bright sm:text-[11px]">
            {hero.eyebrow.map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {word}
                {i < hero.eyebrow.length - 1 && (
                  <span aria-hidden="true" className="text-dim">/</span>
                )}
              </span>
            ))}
          </p>

          <h1 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-white">{hero.titleTop}</span>{" "}
            <span className="bg-gradient-to-r from-primary-bright to-cyan-400 bg-clip-text text-transparent">
              {hero.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
            {hero.subtitle}
          </p>

          {/* Chips Grid */}
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg sm:grid-cols-4">
            {hero.chips.map((chip) => (
              <div key={chip.label} className="transition-colors hover:border-primary/50">
                <InfoChip label={chip.label} value={chip.value} />
              </div>
            ))}
          </dl>

          {/* CTAs (Full width no mobile) */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton location="hero" size="lg" fullWidth className="sm:w-auto shadow-primary/20 shadow-lg" />
            <a 
              href={hero.secondaryCta.href} 
              className={`${buttonClasses("secondary", "lg")} w-full sm:w-auto transition-colors hover:border-white/20`}
            >
              {hero.secondaryCta.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-y-1">↓</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Imagem com Floating Badges */}
      <Reveal
        delay={0.1}
        className="mt-12 lg:mt-0 lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:w-[50%]"
      >
        <div className="relative h-[24rem] w-full sm:h-[30rem] lg:h-full">
          <SmartImage
            src={hero.image.src}
            alt={hero.image.alt}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />

          {/* Fades suaves para blending na imagem */}
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent lg:via-bg/20" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />

          {/* Container Relativo para Posição Absoluta dos Badges */}
          <div className="absolute inset-0 p-5 sm:p-8">
            {/* Sutil Badge flutuante Top-Right */}
            <div className="absolute right-6 top-8 hidden sm:block">
              <span className="rounded-full border border-white/10 bg-surface/40 px-4 py-2 font-display text-xs font-bold tracking-widest text-white backdrop-blur-md">
                IDEIAS
              </span>
            </div>

            {/* Sutil Badge flutuante Center-Left */}
            <div className="absolute left-6 top-1/3 sm:left-12">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-display text-xs font-bold tracking-widest text-primary-bright backdrop-blur-md">
                PESSOAS
              </span>
            </div>

            {/* Sutil Badge flutuante Center-Right */}
            <div className="absolute right-4 top-1/2 sm:right-10">
              <span className="rounded-full border border-white/10 bg-surface/40 px-4 py-2 font-display text-xs font-bold tracking-widest text-white backdrop-blur-md">
                SOLUÇÕES
              </span>
            </div>

            {/* Sutil Badge flutuante Bottom-Left */}
            <div className="absolute bottom-24 left-8 sm:bottom-32 sm:left-16">
              <span className="rounded-full border border-white/10 bg-surface/40 px-4 py-2 font-display text-xs font-bold tracking-widest text-white backdrop-blur-md">
                IMPACTO
              </span>
            </div>

            {/* Selo Principal ancorado no rodapé da imagem (mobile-friendly) */}
            <div className="absolute bottom-6 right-5 max-w-[14rem] sm:bottom-8 sm:right-8 sm:max-w-[16rem]">
              <div className="rounded-sm border border-primary-bright/20 bg-surface/80 p-3 sm:p-4 backdrop-blur-md shadow-2xl">
                <p className="font-display text-[11px] font-bold uppercase leading-tight tracking-tight text-white sm:text-sm">
                  {hero.badge}
                </p>
              </div>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}
