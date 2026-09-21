type InfoChipProps = {
  label: string;
  value: string;
};

/** Chip de informação do hero (DATA, HORÁRIO, LOCAL, FORMATO). */
export function InfoChip({ label, value }: InfoChipProps) {
  return (
    <div className="rounded-sm border border-border bg-surface/60 px-4 py-3">
      <dt className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-dim">
        {label}
      </dt>
      <dd className="mt-1 font-display text-sm font-bold uppercase tracking-tight text-white">
        {value}
      </dd>
    </div>
  );
}
