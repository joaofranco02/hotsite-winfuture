import Image from "next/image";
import type { ToolCard as ToolCardData } from "@/content/site";

/**
 * Card de ferramenta (seção 03). Enquanto o logo oficial não existir
 * (`logo === null`), mostra a inicial da ferramenta em um selo — os
 * logos oficiais devem ser adicionados em /public/logos e referenciados
 * em site.ts (nunca inventados).
 */
export function ToolCard({ number, name, tags, logo, logoTheme = "dark" }: ToolCardData) {
  const badgeBg = logoTheme === "light" ? "border-white/20 bg-white" : "border-border bg-bg";

  return (
    <article className="group flex h-full min-h-[220px] flex-col justify-between rounded-md border border-border bg-surface/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-bright hover:bg-surface">
      <div className="flex items-start justify-between">
        <span className={`flex size-11 items-center justify-center rounded-sm border ${badgeBg}`}>
          {logo ? (
            <Image
              src={logo}
              alt={`Logo ${name}`}
              width={28}
              height={28}
              unoptimized
              className="size-7 object-contain"
            />
          ) : (
            <span className="font-display text-lg font-extrabold text-primary-bright">
              {name.charAt(0)}
            </span>
          )}
        </span>
        <span className="font-display text-sm font-bold text-dim">{number}</span>
      </div>

      <div className="mt-6">
        <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-white">
          {name}
        </h3>
        <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
          {tags.map((tag, i) => (
            <li
              key={tag}
              className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-muted"
            >
              {tag}
              {i < tags.length - 1 && (
                <span aria-hidden="true" className="ml-2 text-dim">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
