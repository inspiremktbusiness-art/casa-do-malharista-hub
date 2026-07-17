import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tone = "default" | "success" | "warning" | "destructive" | "info";

const toneClasses: Record<Tone, string> = {
  default: "text-muted-foreground",
  success: "text-[color:var(--success)]",
  warning: "text-[color:var(--warning)]",
  destructive: "text-destructive",
  info: "text-[color:var(--info)]",
};

export function KpiCard({
  label,
  value,
  delta,
  tone = "default",
  icon,
}: {
  label: string;
  value: string | number;
  delta?: string;
  tone?: Tone;
  icon?: ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-elegant">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</div>
          <div className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">{value}</div>
          {delta && (
            <div className={cn("mt-1 text-xs font-medium", toneClasses[tone])}>{delta}</div>
          )}
        </div>
        {icon && (
          <div className="rounded-lg bg-primary/10 p-2 text-primary group-hover:bg-primary/15">{icon}</div>
        )}
      </div>
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
    </div>
  );
}
