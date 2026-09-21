"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteContent } from "@/content/site";
import { SmartImage } from "@/components/ui/SmartImage";

const { comparison } = siteContent;

function GlowArrow() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex items-center justify-center">
      <motion.span
        aria-hidden="true"
        className="absolute size-16 rounded-full bg-primary/40 blur-xl"
        animate={reduceMotion ? undefined : { opacity: [0.4, 0.9, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative flex size-14 items-center justify-center rounded-full border border-primary-bright/60 bg-primary shadow-[0_0_30px_-4px_rgba(47,107,255,0.8)]">
        <ArrowRight className="size-6 text-white lg:block hidden" />
        <ArrowRight className="size-6 rotate-90 text-white lg:hidden" />
      </span>
    </div>
  );
}

export function Comparison() {
  return (
    <section aria-label="Comparativo: sem IA e com IA" className="border-t border-border">
      <div className="relative grid lg:grid-cols-[1fr_auto_1fr]">
        {/* Lado SEM IA */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <SmartImage
              src={comparison.imageLeft.src}
              alt={comparison.imageLeft.alt}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-bg/80" />
          </div>
          <div className="relative px-6 py-16 sm:px-10 lg:py-24">
            <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold uppercase tracking-tight text-dim">
              <X className="size-6" aria-hidden="true" />
              {comparison.withoutTitle}
            </h2>
            <ul className="mt-6 space-y-3">
              {comparison.without.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-muted">
                  <X className="mt-0.5 size-5 shrink-0 text-dim" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seta central */}
        <div className="relative z-10 flex items-center justify-center py-2 lg:py-0 lg:px-2">
          <GlowArrow />
        </div>

        {/* Lado COM IA */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <SmartImage
              src={comparison.imageRight.src}
              alt={comparison.imageRight.alt}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-bg/75" />
          </div>
          <div className="relative px-6 py-16 sm:px-10 lg:py-24">
            <h2 className="flex items-center gap-2 font-display text-2xl font-extrabold uppercase tracking-tight text-primary-bright">
              <Check className="size-6" aria-hidden="true" />
              {comparison.withTitle}
            </h2>
            <ul className="mt-6 space-y-3">
              {comparison.with.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-white">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary-bright" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
