import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { chamados } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/assistencia")({
  component: AssistenciaPage,
});

function AssistenciaPage() {
  return (
    <>
      <PageHeader
        title="Assistência Técnica"
        description="Ordens de serviço, agenda de campo e histórico por número de série."
        actions={
          <Button size="sm" className="gradient-primary text-primary-foreground border-0">
            <Plus className="mr-2 h-4 w-4" />Abrir chamado
          </Button>
        }
      />
      <div className="p-6">
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">OS</th>
                    <th className="px-4 py-3 text-left font-medium">Cliente</th>
                    <th className="px-4 py-3 text-left font-medium">Máquina · SN</th>
                    <th className="px-4 py-3 text-left font-medium">Prioridade</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                    <th className="px-4 py-3 text-left font-medium">Técnico</th>
                    <th className="px-4 py-3 text-left font-medium">Aberto</th>
                  </tr>
                </thead>
                <tbody>
                  {chamados.map((c) => (
                    <tr key={c.id} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">{c.id}</td>
                      <td className="px-4 py-3">{c.cliente}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.maquina}</td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={c.prioridade === "Alta" ? "destructive" : c.prioridade === "Média" ? "default" : "secondary"}
                        >
                          {c.prioridade}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">{c.status}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.tecnico}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.abertoEm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
