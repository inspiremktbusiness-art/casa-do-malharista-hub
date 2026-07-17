import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/portal-cliente")({
  component: () => (
    <ModulePlaceholder
      title="Portal do Cliente"
      description="Área exclusiva do malharista — máquinas, garantias, chamados e financeiro."
      features={["Máquinas", "Garantias", "Cursos", "Programações", "Chamados", "Boletos", "Notas", "Pedidos", "Downloads", "Certificados", "Tutoriais"]}
    />
  ),
});
