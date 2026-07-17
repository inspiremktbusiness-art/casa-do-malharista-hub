import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { pipelineEtapas, oportunidades, fmtBRL } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Clock } from "lucide-react";

export const Route = createFileRoute("/pipeline")({
  component: PipelinePage,
  head: () => ({ meta: [{ title: "Pipeline · A Casa do Malharista" }] }),
});

function PipelinePage() {
  const total = oportunidades.reduce((s, o) => s + o.valor, 0);
  return (
    <>
      <PageHeader
        title="Pipeline Comercial"
        description={`${oportunidades.length} oportunidades · valor total ${fmtBRL(total)}`}
        actions={
          <Button size="sm" className="gradient-primary text-primary-foreground border-0">
            <Plus className="mr-2 h-4 w-4" />Nova oportunidade
          </Button>
        }
      />
      <div className="overflow-x-auto p-6">
        <div className="flex min-w-max gap-4">
          {pipelineEtapas.map((etapa) => {
            const cards = oportunidades.filter((o) => o.etapa === etapa.id);
            const soma = cards.reduce((s, o) => s + o.valor, 0);
            return (
              <div key={etapa.id} className="w-72 shrink-0">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full bg-${etapa.cor === "primary" ? "primary" : etapa.cor === "success" ? "[color:var(--success)]" : etapa.cor === "warning" ? "[color:var(--warning)]" : "[color:var(--info)]"}`} />
                    <h3 className="text-sm font-semibold">{etapa.nome}</h3>
                    <span className="text-xs text-muted-foreground">{cards.length}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{fmtBRL(soma)}</span>
                </div>
                <div className="space-y-2 rounded-lg bg-muted/40 p-2 min-h-[120px]">
                  {cards.map((o) => (
                    <Card key={o.id} className="cursor-grab p-3 shadow-none hover:shadow-elegant transition">
                      <div className="text-sm font-medium">{o.cliente}</div>
                      {o.valor > 0 && (
                        <div className="mt-1 font-display text-lg font-semibold text-primary">
                          {fmtBRL(o.valor)}
                        </div>
                      )}
                      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{o.responsavel}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {o.dias}d
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
