"use client";

import { useReducedMotion } from "motion/react";

type ConceptWordsProps = {
  words: readonly string[];
};

const WORD_CLASS =
  "font-display text-xs font-medium uppercase tracking-[0.12em] text-[#0F3FD1] sm:text-sm lg:text-base";
const SLASH_CLASS =
  "mx-6 font-display text-xs font-medium text-[#0F3FD1]/50 sm:mx-8 sm:text-sm lg:text-base";

/**
 * Ticker infinito das palavras-conceito: as 7 palavras rolam
 * continuamente da direita para a esquerda sem duplicação visível.
 * Para criar o loop seamless, duplicamos o conteúdo — mas as palavras
 * em si nunca se repetem dentro de uma "passada" completa.
 * Respeita `prefers-reduced-motion` (renderiza estático).
 */
export function ConceptWords({ words }: ConceptWordsProps) {
  const reduceMotion = useReducedMotion();

  const wordItems = words.map((word, i) => (
    <li key={word} className="inline-flex shrink-0 items-center whitespace-nowrap">
      <span className={WORD_CLASS}>{word}</span>
      {i < words.length - 1 && (
        <span aria-hidden="true" className={SLASH_CLASS}>
          /
        </span>
      )}
    </li>
  ));

  /* Separador entre o fim da lista e o início da cópia */
  const loopSeparator = (
    <li className="inline-flex shrink-0 items-center whitespace-nowrap" aria-hidden="true">
      <span aria-hidden="true" className={SLASH_CLASS}>
        /
      </span>
    </li>
  );

  if (reduceMotion) {
    return (
      <ul className="flex flex-wrap items-center justify-center px-5 sm:px-8 lg:px-12">
        {wordItems}
      </ul>
    );
  }

  return (
    <div className="concept-ticker-mask overflow-hidden">
      <ul
        className="concept-ticker flex items-center"
        aria-label="Palavras-conceito em loop"
      >
        {/* Passada original */}
        {wordItems}
        {loopSeparator}
        {/* Cópia para loop seamless (aria-hidden para não duplicar a leitura) */}
        <li aria-hidden="true" className="inline-flex shrink-0 items-center">
          <ul className="flex items-center">
            {words.map((word, i) => (
              <li key={`dup-${word}`} className="inline-flex shrink-0 items-center whitespace-nowrap">
                <span className={WORD_CLASS}>{word}</span>
                {i < words.length - 1 && (
                  <span aria-hidden="true" className={SLASH_CLASS}>
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
