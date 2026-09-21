"use client";

import { Plus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ToolCard } from "@/components/ui/ToolCard";
import type { ToolCard as ToolCardData } from "@/content/site";

type ToolsMarqueeProps = {
  cards: ToolCardData[];
  highlightLines: readonly string[];
};

function HighlightCard({ lines }: { lines: readonly string[] }) {
  return (
    <div className="flex h-full min-h-[220px] flex-col justify-between rounded-md bg-primary p-6 text-white">
      <Plus className="size-7" strokeWidth={2.5} aria-hidden="true" />
      <div className="mt-6 space-y-1">
        {lines.map((line) => (
          <p
            key={line}
            className="font-display text-xl font-extrabold uppercase tracking-tight"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/**
 * Esteira horizontal infinita da seção 03 (ferramentas + card de destaque).
 * Mesmo mecanismo da seção 02: 3 cópias com deslocamento -1/3 em loop linear
 * (emenda invisível), respeitando `prefers-reduced-motion`.
 */
export function ToolsMarquee({ cards, highlightLines }: ToolsMarqueeProps) {
  const reduceMotion = useReducedMotion();
  const count = cards.length + 1; // ferramentas + card de destaque

  const renderItem = (index: number) =>
    index < cards.length ? (
      <ToolCard {...cards[index]} />
    ) : (
      <HighlightCard lines={highlightLines} />
    );

  if (reduceMotion) {
    return (
      <div className="flex snap-x gap-5 overflow-x-auto px-5 pb-4 no-scrollbar sm:px-8 lg:px-12">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="w-[300px] shrink-0 snap-start sm:w-[360px]">
            {renderItem(i)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent sm:w-24"
      />

      <motion.ul
        className="flex w-max"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {Array.from({ length: count * 3 }).map((_, k) => (
          <li
            key={k}
            className="w-[300px] shrink-0 pr-5 sm:w-[360px]"
            aria-hidden={k >= count}
          >
            {renderItem(k % count)}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
