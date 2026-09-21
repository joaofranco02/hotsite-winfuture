type SectionLabelProps = {
  number: string;
  /** Pergunta/rótulo curto ao lado do número (opcional). */
  text?: string;
  className?: string;
  /** Tamanho do rótulo. `lg` deixa maior e com mais respiro. */
  size?: "sm" | "lg";
  /** `primary` pinta tudo de azul; `default` usa número azul + texto muted. */
  tone?: "default" | "primary";
};

/** Rótulo de seção: numeração azul + pergunta curta. Ex: "01 · POR QUE ISSO IMPORTA?" */
export function SectionLabel({
  number,
  text,
  className,
  size = "sm",
  tone = "default",
}: SectionLabelProps) {
  const sizeClasses =
    size === "lg"
      ? "gap-4 text-sm tracking-[0.2em] sm:text-base"
      : "gap-3 text-[11px] tracking-[0.18em]";

  const isPrimary = tone === "primary";
  const numberColor = "text-primary-bright";
  const dotColor = isPrimary ? "text-primary-bright/60" : "text-dim";
  const textColor = isPrimary ? "text-primary-bright" : "text-muted";

  return (
    <div
      className={`flex items-center font-sans font-semibold uppercase ${sizeClasses} ${className ?? ""}`}
    >
      <span className={`font-display ${numberColor}`}>{number}</span>
      {text ? (
        <>
          <span aria-hidden="true" className={dotColor}>
            ·
          </span>
          <span className={textColor}>{text}</span>
        </>
      ) : null}
    </div>
  );
}
