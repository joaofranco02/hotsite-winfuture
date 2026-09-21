import Image from "next/image";
import { siteContent } from "@/content/site";

/**
 * Componente único de logo, usado em Header, Footer, Hero e CTA.
 * Para trocar a logo, basta alterar `LOGO_SRC` (e as dimensões intrínsecas).
 * `null` volta ao wordmark tipográfico de fallback (nada quebra).
 *
 * A logo atual é um PNG horizontal branco com fundo transparente — renderizado
 * com `w-auto` a partir da altura, preservando a proporção sem recortes.
 */
const LOGO_SRC: string | null = "/logos/logo_win.png";
const LOGO_WIDTH = 2515;
const LOGO_HEIGHT = 692;

type LogoProps = {
  className?: string;
  /** Tamanho do logo. */
  size?: "sm" | "md";
};

export function Logo({ className, size = "md" }: LogoProps) {
  if (LOGO_SRC) {
    const height = size === "sm" ? "h-7" : "h-9";
    return (
      <Image
        src={LOGO_SRC}
        alt={siteContent.meta.name}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className={`${height} w-auto ${className ?? ""}`}
        priority
      />
    );
  }

  const textSize = size === "sm" ? "text-sm" : "text-base";

  return (
    <span
      className={`font-display font-extrabold uppercase tracking-tight leading-none text-white ${textSize} ${className ?? ""}`}
      aria-label={siteContent.meta.name}
    >
      WIN <span className="text-primary-bright">FUTURE</span>{" "}
      <span className="text-muted font-semibold">UNIVERSITÁRIO</span>
    </span>
  );
}
