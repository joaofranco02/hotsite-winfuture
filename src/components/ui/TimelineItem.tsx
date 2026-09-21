import type { ScheduleItem } from "@/content/site";

type TimelineItemProps = ScheduleItem & {
  /** Orientação: horizontal (desktop) ou vertical (mobile). */
  orientation: "horizontal" | "vertical";
};

/**
 * Marco da timeline de programação. Quando `description` é `null`, o
 * conteúdo ainda não foi definido pelo cliente e mostramos um placeholder
 * discreto ("Em breve") — nunca conteúdo inventado.
 */
export function TimelineItem({ time, title, description, orientation }: TimelineItemProps) {
  const isPending = description === null;

  return (
    <div className={orientation === "horizontal" ? "pt-6" : "pl-8 pb-8"}>
      <span className="font-display text-sm font-bold text-primary-bright">{time}</span>
      <h3 className="mt-1 font-display text-base font-extrabold uppercase tracking-tight text-white">
        {title}
      </h3>
      <p
        className={`mt-1 font-sans text-sm leading-relaxed ${
          isPending ? "italic text-dim" : "text-muted"
        }`}
      >
        {description ?? "Em breve"}
      </p>
    </div>
  );
}
