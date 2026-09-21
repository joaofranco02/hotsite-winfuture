import type { FeatureCard as FeatureCardData } from "@/content/site";
import { getIcon } from "@/lib/icons";

export function FeatureCard({ icon, title, description }: FeatureCardData) {
  const Icon = getIcon(icon);

  return (
    <article className="group h-full rounded-md border border-border bg-surface/50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-bright hover:bg-surface">
      <span className="inline-flex rounded-sm border border-border bg-bg p-2.5 transition-colors duration-200 group-hover:border-primary-bright/50">
        <Icon className="size-5 text-primary-bright" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-lg font-extrabold uppercase tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}
