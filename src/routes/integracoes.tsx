import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plug } from "lucide-react";

export const Route = createFileRoute("/integracoes")({
  component: Integracoes,
});

const integracoes = [
  { nome: "WhatsApp Business API", categoria: "Comunicação", status: "Conectado" },
  { nome: "Meta Ads", categoria: "Marketing", status: "Conectado" },
  { nome: "Google Ads", categoria: "Marketing", status: "Conectado" },
  { nome: "Google Calendar", categoria: "Produtividade", status: "Pendente" },
  { nome: "Google Drive", categoria: "Documentos", status: "Conectado" },
  { nome: "Mercado Pago", categoria: "Pagamentos", status: "Conectado" },
  { nome: "Asaas", categoria: "Pagamentos", status: "Pendente" },
  { nome: "Omie", categoria: "Fiscal", status: "Conectado" },
  { nome: "Conta Azul", categoria: "Fiscal", status: "Pendente" },
  { nome: "NFe.io", categoria: "Fiscal", status: "Conectado" },
  { nome: "Receita Federal", categoria: "Consulta", status: "Conectado" },
  { nome: "Correios", categoria: "Logística", status: "Conectado" },
  { nome: "ClickSign", categoria: "Assinatura", status: "Conectado" },
  { nome: "DocuSign", categoria: "Assinatura", status: "Pendente" },
  { nome: "Open Finance", categoria: "Banking", status: "Pendente" },
];

function Integracoes() {
  return (
    <>
      <PageHeader
        title="Integrações"
        description="Ecossistema de APIs conectadas ao ERP."
      />
      <div className="grid gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {integracoes.map((i) => (
          <Card key={i.nome}>
            <CardContent className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <Plug className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{i.nome}</div>
                <div className="text-xs text-muted-foreground">{i.categoria}</div>
              </div>
              <Badge variant={i.status === "Conectado" ? "default" : "secondary"}>
                {i.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
