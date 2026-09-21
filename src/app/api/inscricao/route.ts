import { NextResponse } from "next/server";

/**
 * Endpoint de inscrição — ARQUITETURA PREPARADA.
 *
 * O destino definitivo da inscrição ainda não foi definido no briefing
 * (formulário próprio, Sympla/Eventbrite, WhatsApp ou checkout — pendência 3).
 * Enquanto isso, este handler existe para que a integração futura (validação
 * com Zod, envio via Resend, persistência em banco/planilha) seja adicionada
 * aqui sem alterar o front-end.
 *
 * Retorna 501 até ser configurado, deixando explícito que não está ativo.
 */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Endpoint de inscrição ainda não configurado." },
    { status: 501 },
  );
}
