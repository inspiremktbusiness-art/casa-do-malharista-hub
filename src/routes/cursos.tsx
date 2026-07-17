import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { cursosMock } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Plus } from "lucide-react";

export const Route = createFileRoute("/cursos")({
  component: CursosPage,
});

function CursosPage() {
  return (
    <>
      <PageHeader
        title="Cursos"
        description="Turmas, professores, presença e certificados Feng Fan Academy."
        actions={
          <Button size="sm" className="gradient-primary text-primary-foreground border-0">
            <Plus className="mr-2 h-4 w-4" />Nova turma
          </Button>
        }
      />
      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
        {cursosMock.map((c) => (
          <Card key={c.turma} className="overflow-hidden">
            <div className="gradient-primary h-1" />
            <CardContent className="p-5">
              <div className="rounded-lg bg-primary/10 p-2 text-primary w-fit">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold">{c.nome}</h3>
              <p className="text-sm text-muted-foreground">{c.professor}</p>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Início</div>
                  <div className="font-medium">{c.inicio}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Vagas</div>
                  <div className="font-display text-lg font-semibold">{c.vagas}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
