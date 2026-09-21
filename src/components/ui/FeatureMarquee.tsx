"use client";

import { motion, useReducedMotion } from "motion/react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import type { FeatureCard as FeatureCardData } from "@/content/site";

type FeatureMarqueeProps = {
  cards: FeatureCardData[];
};

/**
 * Esteira horizontal infinita com os cards da seção 02.
 * - Renderiza 3 cópias e desloca -1/3 em loop linear → emenda invisível.
 * - Respeita `prefers-reduced-motion`: vira uma linha rolável, sem animação.
 * - As cópias extras ficam `aria-hidden` para não duplicar leitura por leitores de tela.
 */
export function FeatureMarquee({ cards }: FeatureMarqueeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex snap-x gap-5 overflow-x-auto px-5 pb-4 no-scrollbar sm:px-8 lg:px-12">
        {cards.map((card) => (
          <div key={card.title} className="h-56 w-[320px] shrink-0 snap-start sm:w-[360px]">
            <FeatureCard {...card} />
          </div>
        ))}
      </div>
    );
  }

  const loop = [...cards, ...cards, ...cards];

  return (
    <div className="relative overflow-hidden">
      {/* Fades nas laterais para suavizar a entrada/saída dos cards */}
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
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loop.map((card, i) => (
          <li
            key={`${card.title}-${i}`}
            className="h-56 w-[320px] shrink-0 pr-5 sm:w-[360px]"
            aria-hidden={i >= cards.length}
          >
            <FeatureCard {...card} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
