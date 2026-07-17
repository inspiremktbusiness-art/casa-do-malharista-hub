import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/configuracoes")({
  component: () => (
    <ModulePlaceholder
      title="Configurações"
      description="Usuários, perfis, permissões, empresa e preferências do ERP."
      features={["Administrador", "Diretoria", "Financeiro", "Comercial", "Vendedor", "Marketing", "Estoque", "Logística", "Importação", "Assistência", "Programação", "Professor", "Suporte", "Cliente"]}
    />
  ),
});
