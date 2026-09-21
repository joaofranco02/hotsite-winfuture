import type { Variants } from "motion/react";

/** Fade-up padrão de entrada — discreto e rápido. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Container que revela os filhos em cascata (stagger). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Configuração de viewport reutilizável para animações on-scroll. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
