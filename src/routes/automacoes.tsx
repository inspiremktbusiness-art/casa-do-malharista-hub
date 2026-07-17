import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/automacoes")({
  component: Automacoes,
});

const fluxo = [
  "Venda de máquina registrada",
  "Gerar Pedido",
  "Separar Estoque",
  "Gerar lançamentos Financeiros",
  "Criar Garantia",
  "Agendar Instalação",
  "Agendar Curso",
  "Criar Cliente Feng Family",
  "Enviar WhatsApp de boas-vindas",
  "Enviar Email com documentos",
  "Solicitar pesquisa NPS",
];

function Automacoes() {
  return (
    <>
      <PageHeader
        title="Automações"
        description="Fluxos que orquestram o ciclo completo do cliente."
      />
      <div className="p-6">
        <Card>
          <CardContent className="p-8">
            <h2 className="mb-6 font-display text-lg font-semibold">
              Fluxo mestre — Nova venda de máquina
            </h2>
            <div className="mx-auto max-w-md space-y-2">
              {fluxo.map((step, i) => (
                <div key={step}>
                  <div className="flex items-center gap-3 rounded-lg border bg-card p-3 shadow-[var(--shadow-card)]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground text-xs font-bold shadow-elegant">
                      {i + 1}
                    </div>
                    <span className="flex-1 text-sm font-medium">{step}</span>
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--success)]" />
                  </div>
                  {i < fluxo.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
