import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { clientesMock } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Filter, Download, Search } from "lucide-react";

export const Route = createFileRoute("/crm")({
  component: CrmPage,
  head: () => ({ meta: [{ title: "CRM · A Casa do Malharista" }] }),
});

const nivelCor: Record<string, string> = {
  Bronze: "bg-amber-700/15 text-amber-800",
  Prata: "bg-slate-400/20 text-slate-700",
  Ouro: "bg-yellow-500/20 text-yellow-800",
  Diamante: "bg-sky-500/20 text-sky-800",
  Master: "bg-primary/15 text-primary",
};

function CrmPage() {
  return (
    <>
      <PageHeader
        title="CRM"
        description="Cadastro 360° de malharias, confecções e contatos comerciais."
        actions={
          <>
            <Button variant="outline" size="sm"><Filter className="mr-2 h-4 w-4" />Filtros</Button>
            <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" />Exportar</Button>
            <Button size="sm" className="gradient-primary text-primary-foreground border-0">
              <Plus className="mr-2 h-4 w-4" />Novo cliente
            </Button>
          </>
        }
      />
      <div className="space-y-4 p-6">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Buscar por razão social, CNPJ, cidade…" className="pl-8" />
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium">Cliente</th>
                    <th className="px-4 py-3 text-left font-medium">Cidade</th>
                    <th className="px-4 py-3 text-left font-medium">Segmento</th>
                    <th className="px-4 py-3 text-left font-medium">Máquinas</th>
                    <th className="px-4 py-3 text-left font-medium">Feng Family</th>
                  </tr>
                </thead>
                <tbody>
                  {clientesMock.map((c) => (
                    <tr key={c.id} className="border-b last:border-0 hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium">{c.nome}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.cidade}</td>
                      <td className="px-4 py-3">{c.segmento}</td>
                      <td className="px-4 py-3">{c.maquinas}</td>
                      <td className="px-4 py-3">
                        <Badge className={nivelCor[c.nivel]} variant="secondary">{c.nivel}</Badge>
                      </td>
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
