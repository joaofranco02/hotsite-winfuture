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
 * CTA "GARANTIR MINHA VAGA". Abre a página de cadastro na mesma aba,
 * preservando o histórico para que a seta "voltar" do navegador funcione.
 */
export function CtaButton({
  label,
  size = "md",
  className,
  location,
  fullWidth = false,
}: CtaButtonProps) {
  const { ctaLabel, trackingEvent } = siteContent.registration;

  const text = label ?? ctaLabel;
  const width = fullWidth ? "w-full" : "";
  const classes = `${buttonClasses("primary", size)} ${width} ${className ?? ""}`;

  return (
    <a
      href="/cadastro"
      className={classes}
      onClick={() => trackEvent(trackingEvent, { location })}
    >
      {text}
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}
