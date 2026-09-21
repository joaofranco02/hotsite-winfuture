import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteContent } from "@/content/site";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: `FAQ | ${siteContent.meta.name}`,
  description:
    "Perguntas frequentes sobre o WIN Future Universitário — formato, data, inscrição e mais.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para a home
        </Link>
      </div>

      <Faq />
    </div>
  );
}
