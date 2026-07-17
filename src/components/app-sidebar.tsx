import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Users,
  GitBranch,
  FileText,
  ShoppingCart,
  Boxes,
  Ship,
  Wallet,
  Wrench,
  Cpu,
  GraduationCap,
  UserCircle,
  Trophy,
  Megaphone,
  Files,
  BarChart3,
  Zap,
  Plug,
  Gauge,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

type Item = { title: string; url: string; icon: React.ComponentType<{ className?: string }> };

const grupos: { label: string; items: Item[] }[] = [
  {
    label: "Visão geral",
    items: [{ title: "Dashboard", url: "/", icon: LayoutDashboard }],
  },
  {
    label: "Comercial",
    items: [
      { title: "CRM", url: "/crm", icon: Users },
      { title: "Pipeline", url: "/pipeline", icon: GitBranch },
      { title: "Propostas", url: "/propostas", icon: FileText },
      { title: "Pedidos", url: "/pedidos", icon: ShoppingCart },
    ],
  },
  {
    label: "Operação",
    items: [
      { title: "Estoque", url: "/estoque", icon: Boxes },
      { title: "Importação", url: "/importacao", icon: Ship },
      { title: "Financeiro", url: "/financeiro", icon: Wallet },
    ],
  },
  {
    label: "Pós-venda",
    items: [
      { title: "Assistência Técnica", url: "/assistencia", icon: Wrench },
      { title: "Programação", url: "/programacao", icon: Cpu },
      { title: "Cursos", url: "/cursos", icon: GraduationCap },
      { title: "Portal do Cliente", url: "/portal-cliente", icon: UserCircle },
    ],
  },
  {
    label: "Crescimento",
    items: [
      { title: "Feng Family", url: "/feng-family", icon: Trophy },
      { title: "Marketing", url: "/marketing", icon: Megaphone },
      { title: "Documentos", url: "/documentos", icon: Files },
    ],
  },
  {
    label: "Inteligência",
    items: [
      { title: "Indicadores", url: "/indicadores", icon: Gauge },
      { title: "Relatórios", url: "/relatorios", icon: BarChart3 },
      { title: "Automações", url: "/automacoes", icon: Zap },
      { title: "Integrações", url: "/integracoes", icon: Plug },
      { title: "Configurações", url: "/configuracoes", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (url: string) => (url === "/" ? pathname === "/" : pathname.startsWith(url));

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3 px-2 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md gradient-primary text-primary-foreground font-display font-bold shadow-elegant">
            M
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-sidebar-foreground">A Casa do Malharista</div>
              <div className="truncate text-[11px] uppercase tracking-wider text-sidebar-foreground/60">ERP Feng Fan</div>
            </div>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {grupos.map((g) => (
          <SidebarGroup key={g.label}>
            {!collapsed && <SidebarGroupLabel>{g.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {g.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={isActive(item.url)} tooltip={item.title}>
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
