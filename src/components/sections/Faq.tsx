import { ChevronDown } from "lucide-react";
import { siteContent } from "@/content/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const { faq } = siteContent;

/**
 * FAQ com acordeão nativo (`<details>/<summary>`): acessível por teclado
 * e funcional sem JavaScript. O chevron gira quando o item está aberto.
 */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel number={faq.number} text={faq.label} />
          <h2 className="mt-5 font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {faq.title}
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-muted">
            {faq.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10 divide-y divide-border border-y border-border">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-base font-bold uppercase tracking-tight text-white sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className="size-5 shrink-0 text-primary-bright transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 pr-9 font-sans text-sm leading-relaxed text-muted sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
