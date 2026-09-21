import { siteContent } from "@/content/site";
import { ConceptMarquee } from "@/components/ui/ConceptMarquee";

const { concept } = siteContent;

// Todas as palavras-conceito, mantidas separadas, em um único ticker.
const conceptWords = [...concept.words, ...concept.triad];

export function ConceptBar() {
  return (
    <section
      aria-label="Conceito do evento"
      className="border-y border-border bg-surface py-5 sm:py-6"
    >
      <ConceptMarquee words={conceptWords} />
    </section>
  );
}
