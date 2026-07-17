import { PageHeader } from "./page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function ModulePlaceholder({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <div className="p-6">
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-start gap-6 p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-lg gradient-primary p-2 text-primary-foreground shadow-elegant">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold">Módulo em construção</h2>
                <p className="text-sm text-muted-foreground">
                  Estrutura de UI pronta — recursos serão conectados ao Lovable Cloud na próxima fase.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Escopo previsto
              </div>
              <div className="flex flex-wrap gap-2">
                {features.map((f) => (
                  <Badge key={f} variant="secondary" className="font-normal">
                    {f}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
