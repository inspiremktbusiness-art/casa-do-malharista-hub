import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { KpiCard } from "@/components/kpi-card";
import {
  kpisComercial,
  kpisFinanceiro,
  kpisEstoque,
  rankingVendedores,
  chamados,
  fluxoMensal,
  fmtBRL,
} from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  TrendingUp,
  ShoppingCart,
  Target,
  Percent,
  DollarSign,
  ArrowUpRight,
  Wrench,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

const icons = [Users, ArrowUpRight, TrendingUp, ShoppingCart, Percent, DollarSign];

function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Visão 360° do ecossistema Feng Fan — do lead à comunidade."
        actions={
          <>
            <Button variant="outline" size="sm">Este mês</Button>
            <Button size="sm" className="gradient-primary text-primary-foreground border-0 shadow-elegant">
              <Target className="mr-2 h-4 w-4" /> Nova meta
            </Button>
          </>
        }
      />

      <div className="space-y-8 p-6">
        {/* Comercial */}
        <section>
          <SectionTitle>Comercial</SectionTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {kpisComercial.map((k, i) => {
              const Icon = icons[i % icons.length];
              return (
                <KpiCard
                  key={k.label}
                  label={k.label}
                  value={k.value}
                  delta={k.delta}
                  tone={k.tone}
                  icon={<Icon className="h-4 w-4" />}
                />
              );
            })}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Fluxo de caixa */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-display">Fluxo de caixa</CardTitle>
                <p className="text-sm text-muted-foreground">Últimos 6 meses · em milhares</p>
              </div>
              <Badge variant="secondary">Realizado</Badge>
            </CardHeader>
            <CardContent>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={fluxoMensal} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="ent" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="sai" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="mes" stroke="var(--muted-foreground)" fontSize={12} />
                    <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Area type="monotone" dataKey="entrada" stroke="var(--chart-1)" fill="url(#ent)" strokeWidth={2} />
                    <Area type="monotone" dataKey="saida" stroke="var(--chart-3)" fill="url(#sai)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Ranking */}
          <Card>
            <CardHeader>
              <CardTitle className="font-display">Ranking de vendedores</CardTitle>
              <p className="text-sm text-muted-foreground">Meta do mês</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {rankingVendedores.map((v) => (
                <div key={v.nome}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{v.nome}</span>
                    <span className="text-muted-foreground">{v.valor}</span>
                  </div>
                  <Progress value={Math.min(v.vendido, 100)} className="h-2" />
                  <div className="mt-1 text-xs text-muted-foreground">{v.vendido}% da meta</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Financeiro + Estoque */}
        <div className="grid gap-6 md:grid-cols-2">
          <section>
            <SectionTitle>Financeiro</SectionTitle>
            <div className="grid grid-cols-2 gap-4">
              {kpisFinanceiro.map((k) => (
                <KpiCard key={k.label} label={k.label} value={k.value} tone={k.tone} />
              ))}
            </div>
          </section>
          <section>
            <SectionTitle>Estoque</SectionTitle>
            <div className="grid grid-cols-2 gap-4">
              {kpisEstoque.map((k) => (
                <KpiCard key={k.label} label={k.label} value={k.value} tone={k.tone as never} />
              ))}
            </div>
          </section>
        </div>

        {/* Assistência técnica */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <Wrench className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="font-display">Assistência técnica · chamados recentes</CardTitle>
                <p className="text-sm text-muted-foreground">Tempo médio de atendimento: 4h 12min</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Ver todos</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-y bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium">OS</th>
                    <th className="px-4 py-2 text-left font-medium">Cliente</th>
                    <th className="px-4 py-2 text-left font-medium">Máquina</th>
                    <th className="px-4 py-2 text-left font-medium">Prioridade</th>
                    <th className="px-4 py-2 text-left font-medium">Status</th>
                    <th className="px-4 py-2 text-left font-medium">Técnico</th>
                    <th className="px-4 py-2 text-left font-medium">Aberto</th>
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

        <p className="text-center text-xs text-muted-foreground">
          Dados fictícios · próximas fases conectam ao Lovable Cloud. Ticket médio calculado: {fmtBRL(96500)}
        </p>
      </div>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </h2>
  );
}
