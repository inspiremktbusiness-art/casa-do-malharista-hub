import { createFileRoute } from "@tanstack/react-router";
import { ModulePlaceholder } from "@/components/module-placeholder";

export const Route = createFileRoute("/marketing")({
  component: () => (
    <ModulePlaceholder
      title="Marketing"
      description="Campanhas, integrações Meta/Google, landing pages e automações."
      features={["Meta Ads", "Google Ads", "WhatsApp", "Email", "SMS", "Leads", "ROI", "UTM", "Landing Pages", "Automações"]}
    />
  ),
});
