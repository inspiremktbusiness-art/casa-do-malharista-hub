import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/propostas")({
  component: () => (
    <ModulePlaceholder
      title="Propostas"
      description="Geração, versionamento e assinatura eletrônica de propostas comerciais."
      features={["Seleção de máquinas", "Acessórios", "Treinamento", "Programação", "Frete", "Desconto", "Financiamento", "PDF", "Assinatura eletrônica", "Envio WhatsApp/Email", "Versões"]}
    />
  ),
});
