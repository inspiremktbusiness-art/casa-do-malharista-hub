import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { KpiCard } from "@/components/kpi-card";

export const Route = createFileRoute("/indicadores")({
  component: Indicadores,
});

const kpis = [
  { label: "CAC", value: "R$ 2.840" },
  { label: "LTV", value: "R$ 184 k" },
  { label: "LTV / CAC", value: "64,8x", tone: "success" as const },
  { label: "ROI", value: "312%", tone: "success" as const },
  { label: "ROAS", value: "4,8x" },
  { label: "Conversão", value: "18,4%" },
  { label: "Tempo médio de venda", value: "42 dias" },
  { label: "Lead time importação", value: "62 dias" },
  { label: "Ticket médio", value: "R$ 96,5 k" },
  { label: "Margem líquida", value: "24,8%", tone: "success" as const },
  { label: "NPS", value: "72", tone: "success" as const },
  { label: "Receita recorrente", value: "R$ 218 k/mês" },
  { label: "Lucro líquido (mês)", value: "R$ 342 k" },
  { label: "Comissões (mês)", value: "R$ 88 k" },
  { label: "Clientes ativos", value: "184" },
  { label: "Clientes inativos", value: "37", tone: "warning" as const },
];

function Indicadores() {
  return (
    <>
      <PageHeader
        title="Indicadores"
        description="KPIs executivos do ecossistema Feng Fan Brasil."
      />
      <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 lg:grid-cols-4">
        {kpis.map((k) => (
          <KpiCard key={k.label} label={k.label} value={k.value} tone={k.tone} />
        ))}
      </div>
    </>
  );
}
