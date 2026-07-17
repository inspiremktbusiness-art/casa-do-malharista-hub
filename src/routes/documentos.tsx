import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/documentos")({
  component: () => (
    <ModulePlaceholder
      title="Documentos"
      description="Contratos, notas, boletos, certificados, garantias, manuais e programações."
      features={["Contratos", "NF-e", "Boletos", "Certificados", "Garantias", "Manuais", "Programações"]}
    />
  ),
});
