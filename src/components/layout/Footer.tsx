import Link from "next/link";
import { Instagram, Linkedin, CalendarDays, MapPin } from "lucide-react";
import { siteContent } from "@/content/site";
import { Logo } from "@/components/ui/Logo";

const navItems = siteContent.nav.items.filter((item) => item.enabled);
const { instagram, linkedin } = siteContent.social;
const hasSocial = Boolean(instagram || linkedin);
const { event, meta, footer } = siteContent;

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="w-full px-5 py-8 sm:px-8 lg:px-12">
        {/* Marca + navegação (centralizada) + redes — mesma seção */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {/* Marca */}
          <div className="max-w-sm">
            <Link href="/#top" aria-label="Ir para a home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-3 font-display text-sm font-bold uppercase tracking-tight text-muted">
              {footer.signature}
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              <li className="flex items-center gap-2 font-sans text-[13px] text-muted">
                <CalendarDays className="size-4 text-primary-bright" aria-hidden="true" />
                {event.date} · {event.time}
              </li>
              <li className="flex items-center gap-2 font-sans text-[13px] text-muted">
                <MapPin className="size-4 text-primary-bright" aria-hidden="true" />
                {event.location}
              </li>
            </ul>
          </div>

          {/* Navegação centralizada */}
          <nav aria-label="Navegação do rodapé" className="lg:justify-self-center">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 sm:gap-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes (ou espaçador para manter a navegação centralizada) */}
          {hasSocial ? (
            <div className="flex gap-3 lg:justify-self-end">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex rounded-sm border border-border bg-surface/60 p-2.5 text-muted transition-colors hover:border-primary-bright hover:text-white"
                >
                  <Instagram className="size-5" />
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex rounded-sm border border-border bg-surface/60 p-2.5 text-muted transition-colors hover:border-primary-bright hover:text-white"
                >
                  <Linkedin className="size-5" />
                </a>
              )}
            </div>
          ) : (
            <div aria-hidden="true" className="hidden lg:block" />
          )}
        </div>

        {/* Barra inferior — apenas o copyright, centralizado */}
        <div className="mt-8 border-t border-border pt-5">
          <p className="text-center font-sans text-xs text-dim">
            © {new Date().getFullYear()} {meta.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
