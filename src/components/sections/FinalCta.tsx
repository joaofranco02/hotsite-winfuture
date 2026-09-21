import { MapPin, CalendarDays } from "lucide-react";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { CtaButton } from "@/components/ui/CtaButton";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

const { finalCta } = siteContent;

export function FinalCta() {
  return (
    <section
      aria-label="Chamada final para inscrição"
      className="relative flex min-h-[38rem] items-start overflow-hidden lg:min-h-[44rem]"
    >
      {/* Imagem de fundo — preenche toda a seção */}
      <div className="absolute inset-0">
        <SmartImage src={finalCta.image.src} alt={finalCta.image.alt} sizes="100vw" />
        {/* Escurece a esquerda e mantém contraste também à direita (frase) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-bg/55"
        />
        {/* Blenda topo/base com o restante da página */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-bg/30"
        />
      </div>

      {/* Conteúdo — ancorado ao gutter, sem lacunas */}
      <div className="relative z-10 w-full px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          {/* Selo */}
          <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-sm border border-border bg-surface/60 px-5 py-4 backdrop-blur-sm">
            <Logo size="md" />
            <span aria-hidden="true" className="hidden h-5 w-px bg-border sm:block" />
            <span className="flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
              <CalendarDays className="size-4 text-primary-bright" aria-hidden="true" />
              {finalCta.sealDate}
            </span>
            <span className="flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
              <MapPin className="size-4 text-primary-bright" aria-hidden="true" />
              {finalCta.sealLocation}
            </span>
          </div>

          {/* Título (esquerda) + frase de impacto (direita) */}
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <h2 className="max-w-xl font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
              {finalCta.title}
            </h2>

            <p className="font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-right lg:text-6xl">
              <span className="text-white">{finalCta.phraseTop} </span>
              <span className="text-primary-bright">{finalCta.phraseHighlight}</span>
            </p>
          </div>

          {/* CTA + microcopy */}
          <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
            <CtaButton location="final_cta" size="lg" />
            <p className="flex flex-wrap items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
              {finalCta.microcopy.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {item}
                  {i < finalCta.microcopy.length - 1 && (
                    <span aria-hidden="true" className="text-dim">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
