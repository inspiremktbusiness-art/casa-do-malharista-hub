import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/pedidos")({
  component: () => (
    <ModulePlaceholder
      title="Pedidos"
      description="Ciclo completo do pedido — da separação à instalação e treinamento."
      features={["Itens", "Parcelamento", "Separação", "Faturamento", "Entrega", "Instalação", "Treinamento", "Finalização"]}
    />
  ),
});
