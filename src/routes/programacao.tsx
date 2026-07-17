import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/programacao")({
  component: () => (
    <ModulePlaceholder
      title="Programação das Máquinas"
      description="Solicitações, fila, entregas e biblioteca de padrões Feng Fan."
      features={["Solicitações", "Urgência", "Fila", "Entrega", "Arquivos", "Versões", "Biblioteca"]}
    />
  ),
});
