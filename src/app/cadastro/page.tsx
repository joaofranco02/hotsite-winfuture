"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";
import { trackEvent } from "@/lib/analytics";

export default function CadastroPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Volta para a página anterior; se o formulário foi aberto direto
  // (sem histórico de navegação), cai para a home de forma segura.
  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      trackEvent("registration_submit", { location: "cadastro_page" });
      showToast("Cadastro realizado com sucesso! Entraremos em contato.");
      // Optional: redirect or show success state
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg p-4 sm:p-6">
      <div className="w-full max-w-lg overflow-hidden rounded-md border border-border bg-surface shadow-2xl">
        {/* Header */}
        <div className="border-b border-border bg-bg px-6 py-4">
          <button
            type="button"
            onClick={handleBack}
            className="mb-3 inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar
          </button>
          <h1 className="font-display text-lg font-bold uppercase tracking-tight text-white sm:text-xl">
            Cadastro de Inscrição
          </h1>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <p className="mb-6 font-sans text-sm text-muted">
            Basta preencher seus dados que em breve entraremos em contato.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="responsavel" className="font-sans text-sm font-semibold text-white">
                Nome completo do responsável
              </label>
              <input
                type="text"
                id="responsavel"
                required
                placeholder="Ex: Maria da Silva"
                className="w-full rounded-sm border border-border bg-bg/50 px-4 py-3 font-sans text-sm text-white placeholder:text-muted focus:border-primary-bright focus:outline-none focus:ring-1 focus:ring-primary-bright"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="aluno" className="font-sans text-sm font-semibold text-white">
                Nome completo do aluno
              </label>
              <input
                type="text"
                id="aluno"
                required
                placeholder="Ex: João da Silva"
                className="w-full rounded-sm border border-border bg-bg/50 px-4 py-3 font-sans text-sm text-white placeholder:text-muted focus:border-primary-bright focus:outline-none focus:ring-1 focus:ring-primary-bright"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="idade" className="font-sans text-sm font-semibold text-white">
                  Idade
                </label>
                <input
                  type="number"
                  id="idade"
                  required
                  min="1"
                  max="120"
                  placeholder="Ex: 20"
                  className="w-full rounded-sm border border-border bg-bg/50 px-4 py-3 font-sans text-sm text-white placeholder:text-muted focus:border-primary-bright focus:outline-none focus:ring-1 focus:ring-primary-bright"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="escola" className="font-sans text-sm font-semibold text-white">
                  Nome da escola
                </label>
                <input
                  type="text"
                  id="escola"
                  required
                  placeholder="Ex: Universidade Federal"
                  className="w-full rounded-sm border border-border bg-bg/50 px-4 py-3 font-sans text-sm text-white placeholder:text-muted focus:border-primary-bright focus:outline-none focus:ring-1 focus:ring-primary-bright"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="telefone" className="font-sans text-sm font-semibold text-white">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                required
                placeholder="(00) 00000-0000"
                className="w-full rounded-sm border border-border bg-bg/50 px-4 py-3 font-sans text-sm text-white placeholder:text-muted focus:border-primary-bright focus:outline-none focus:ring-1 focus:ring-primary-bright"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-sans text-sm font-semibold text-white">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="seu@email.com"
                className="w-full rounded-sm border border-border bg-bg/50 px-4 py-3 font-sans text-sm text-white placeholder:text-muted focus:border-primary-bright focus:outline-none focus:ring-1 focus:ring-primary-bright"
              />
            </div>

            <div className="mt-4">
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Reservar minha vaga"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
