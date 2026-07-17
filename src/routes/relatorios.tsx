import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/relatorios")({
  component: () => (
    <ModulePlaceholder
      title="Relatórios"
      description="Comercial, financeiro, estoque, importação, assistência, cursos e marketing."
      features={["Vendedores", "Conversão", "Leads", "Fluxo", "DRE", "Lucro", "Curva ABC", "Importação", "Clientes", "Assistência", "Cursos", "Marketing", "Comissões"]}
    />
  ),
});
