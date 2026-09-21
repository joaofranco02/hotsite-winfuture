/**
 * Camada fina de tracking. Nunca quebra se GA4/Meta Pixel não estiverem
 * configurados — apenas não faz nada. IDs vêm de variáveis de ambiente.
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

export const analyticsEnabled = Boolean(GA_ID || META_PIXEL_ID);

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Dispara um evento de conversão/interação para os provedores disponíveis.
 * Seguro para chamar em qualquer ambiente (SSR ou sem IDs).
 */
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  if (META_PIXEL_ID && typeof window.fbq === "function") {
    window.fbq("trackCustom", name, params);
  }
}
