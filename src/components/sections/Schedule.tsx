"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { siteContent } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TimelineItem } from "@/components/ui/TimelineItem";

const { schedule } = siteContent;

export function Schedule() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });

  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const width = reduceMotion ? "100%" : fill;
  const height = reduceMotion ? "100%" : fill;

  return (
    <section id="programacao" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <SectionLabel number={schedule.label} />
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {schedule.title}
            </h2>
            <p className="mt-3 font-sans text-base text-muted">{schedule.subtitle}</p>
          </div>

          {schedule.fullScheduleHref ? (
            <a
              href={schedule.fullScheduleHref}
              className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-bright transition-colors hover:text-white"
            >
              {schedule.fullScheduleLabel} ↓
            </a>
          ) : (
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-dim">
              {schedule.fullScheduleLabel} ↓
            </span>
          )}
        </div>

        <div ref={trackRef} className="mt-14">
          {/* Timeline horizontal (desktop) */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-x-0 top-[7px] h-px bg-border" />
            <motion.div
              aria-hidden="true"
              className="absolute left-0 top-[7px] h-px bg-primary-bright"
              style={{ width }}
            />
            <ol className="grid grid-cols-6 gap-6">
              {schedule.items.map((item) => (
                <li key={item.time} className="relative">
                  <span className="absolute left-0 top-0 size-3.5 rounded-full border-2 border-primary-bright bg-bg" />
                  <TimelineItem {...item} orientation="horizontal" />
                </li>
              ))}
            </ol>
          </div>

          {/* Timeline vertical (mobile/tablet) */}
          <div className="relative lg:hidden">
            <div className="absolute bottom-0 left-[6px] top-0 w-px bg-border" />
            <motion.div
              aria-hidden="true"
              className="absolute left-[6px] top-0 w-px bg-primary-bright"
              style={{ height }}
            />
            <ol>
              {schedule.items.map((item) => (
                <li key={item.time} className="relative">
                  <span className="absolute left-0 top-1 size-3.5 rounded-full border-2 border-primary-bright bg-bg" />
                  <TimelineItem {...item} orientation="vertical" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
