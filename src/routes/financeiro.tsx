import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/financeiro")({
  component: () => (
    <ModulePlaceholder
      title="Financeiro"
      description="Contas a pagar/receber, fluxo de caixa, DRE, conciliação e comissões."
      features={["A pagar", "A receber", "Fluxo", "Plano de contas", "Centro de custos", "Conciliação", "PIX/Boleto/Cartão", "Financiamentos", "Comissões", "DRE", "Margem"]}
    />
  ),
});
