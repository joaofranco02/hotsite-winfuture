"use client";

import { ArrowRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { buttonClasses } from "./Button";

type CtaButtonProps = {
  /** Rótulo opcional; padrão vem de site.ts. */
  label?: string;
  size?: "md" | "lg";
  className?: string;
  /** Identifica de qual seção o clique veio (para analytics). */
  location: string;
  fullWidth?: boolean;
};

/**
 * CTA "GARANTIR MINHA VAGA". Fonte única: `siteContent.registration`.
 * - Com `url`: renderiza um link real e dispara tracking no clique.
 * - Sem `url`: renderiza um botão desabilitado de forma acessível
 *   (nunca inventa destino nem cria link quebrado).
 */
export function CtaButton({
  label,
  size = "md",
  className,
  location,
  fullWidth = false,
}: CtaButtonProps) {
  const { url, trackingEvent, ctaLabel } = siteContent.registration;
  const text = label ?? ctaLabel;
  const width = fullWidth ? "w-full" : "";
  const classes = `${buttonClasses("primary", size)} ${width} ${className ?? ""}`;

  if (!url) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        title="Inscrições em breve"
        className={classes}
      >
        {text}
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      onClick={() => trackEvent(trackingEvent, { location })}
    >
      {text}
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}
