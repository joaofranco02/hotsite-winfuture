import Image from "next/image";
import { ImageIcon } from "lucide-react";

type SmartImageProps = {
  src: string | null;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Renderiza `next/image` quando há `src`. Enquanto o asset real não
 * existir (`src === null`), mostra um placeholder decorativo elegante —
 * o site nunca quebra por falta de imagem. Preenche o contêiner pai
 * (que deve ter `position: relative`).
 */
export function SmartImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className,
}: SmartImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex size-full items-center justify-center bg-gradient-to-br from-surface via-bg to-black ${className ?? ""}`}
      >
        <div className="flex flex-col items-center gap-2 px-6 text-center opacity-40">
          <ImageIcon className="size-8 text-primary-bright" aria-hidden="true" />
          <span className="max-w-[16rem] font-sans text-[11px] uppercase tracking-[0.16em] text-muted">
            Imagem em breve
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className ?? ""}`}
    />
  );
}
