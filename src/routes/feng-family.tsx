import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/feng-family")({
  component: FengFamily,
});

const niveis = [
  { nome: "Bronze", pontos: "0 – 999", cor: "from-amber-700 to-amber-500", ativos: 42 },
  { nome: "Prata", pontos: "1.000 – 4.999", cor: "from-slate-400 to-slate-300", ativos: 28 },
  { nome: "Ouro", pontos: "5.000 – 14.999", cor: "from-yellow-500 to-amber-400", ativos: 17 },
  { nome: "Diamante", pontos: "15.000 – 39.999", cor: "from-sky-400 to-cyan-300", ativos: 8 },
  { nome: "Master", pontos: "40.000+", cor: "from-primary to-primary-foreground", ativos: 3 },
];

function FengFamily() {
  return (
    <>
      <PageHeader
        title="Feng Family"
        description="Programa de gamificação e fidelidade do ecossistema Feng Fan."
      />
      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-5">
        {niveis.map((n) => (
          <Card key={n.nome} className="overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${n.cor}`} />
            <CardContent className="p-5">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">{n.nome}</h3>
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {n.pontos} pontos
              </div>
              <div className="mt-4 font-display text-3xl font-bold">{n.ativos}</div>
              <div className="text-sm text-muted-foreground">membros ativos</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
