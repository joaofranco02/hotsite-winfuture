import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteContent } from "@/content/site";
import { Benefits } from "@/components/sections/Benefits";

export const metadata: Metadata = {
  title: `Benefícios | ${siteContent.meta.name}`,
  description: siteContent.benefits.subtitle,
  alternates: { canonical: "/beneficios" },
};

export default function BeneficiosPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para a home
        </Link>
      </div>

      <Benefits />
    </div>
  );
}
