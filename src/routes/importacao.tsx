import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { containersMock } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ship, Plus } from "lucide-react";

export const Route = createFileRoute("/importacao")({
  component: ImportacaoPage,
});

function ImportacaoPage() {
  return (
    <>
      <PageHeader
        title="Importação"
        description="Controle de containers Feng Fan · China → Brasil."
        actions={
          <Button size="sm" className="gradient-primary text-primary-foreground border-0">
            <Plus className="mr-2 h-4 w-4" />Novo container
          </Button>
        }
      />
      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
        {containersMock.map((c) => (
          <Card key={c.numero} className="overflow-hidden">
            <div className="gradient-brand h-1" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <Ship className="h-5 w-5" />
                </div>
                <Badge variant={c.status === "Recebido" ? "secondary" : "default"}>{c.status}</Badge>
              </div>
              <div className="mt-4 font-display text-lg font-semibold">{c.numero}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.origem}</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">ETA</div>
                  <div className="font-medium">{c.eta}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Produtos</div>
                  <div className="font-medium">{c.produtos} itens</div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Valor FOB</div>
                  <div className="font-display text-lg font-semibold text-primary">{c.valor}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
