"use client";

import { motion, useReducedMotion } from "motion/react";

type ConceptMarqueeProps = {
  words: readonly string[];
};

const WORD_CLASS =
  "font-display text-lg font-extrabold uppercase tracking-tight text-[#5FE5FF] sm:text-xl lg:text-2xl";
const SLASH_CLASS =
  "mx-6 font-display text-lg text-[#5FE5FF]/40 sm:mx-10 sm:text-xl lg:text-2xl";

function Item({ word }: { word: string }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap">
      <span className={WORD_CLASS}>{word}</span>
      <span aria-hidden="true" className={SLASH_CLASS}>
        /
      </span>
    </span>
  );
}

/**
 * Ticker/esteira horizontal infinita com as palavras-conceito.
 * Mesmo mecanismo das demais esteiras (3 cópias, deslocamento -1/3 linear,
 * emenda invisível). Respeita `prefers-reduced-motion`. As cópias extras
 * ficam `aria-hidden` para não repetir a leitura por leitores de tela.
 */
export function ConceptMarquee({ words }: ConceptMarqueeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="flex overflow-x-auto px-5 no-scrollbar sm:px-8 lg:px-12">
        {words.map((word) => (
          <Item key={word} word={word} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-33.3333%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {Array.from({ length: words.length * 3 }).map((_, i) => (
          <span key={i} aria-hidden={i >= words.length}>
            <Item word={words[i % words.length]} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
