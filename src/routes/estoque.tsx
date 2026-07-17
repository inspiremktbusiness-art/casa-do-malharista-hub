import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/estoque")({
  component: () => (
    <ModulePlaceholder
      title="Estoque"
      description="Máquinas, peças, óleos Feng Lub, Feng Limp, acessórios e consumíveis."
      features={["Entrada/Saída", "Transferência", "Reserva", "Inventário", "Lote", "Número de série", "Garantia", "Fornecedor", "Localização"]}
    />
  ),
});
