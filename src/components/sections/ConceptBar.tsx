import { siteContent } from "@/content/site";
import { ConceptWords } from "@/components/ui/ConceptWords";

const { concept } = siteContent;

// Palavras-conceito, mantidas separadas e sem repetições, em um único ticker.
const conceptWords = [...new Set([...concept.words, ...concept.triad])];

export function ConceptBar() {
  return (
    <section
      aria-label="Conceito do evento"
      className="border-y border-border bg-surface py-3 sm:py-3.5"
    >
      <ConceptWords words={conceptWords} />
    </section>
  );
}
