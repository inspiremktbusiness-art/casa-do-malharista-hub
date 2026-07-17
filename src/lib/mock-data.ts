// Dados fictícios para o ERP A Casa do Malharista (frontend)

export const kpisComercial = [
  { label: "Leads no mês", value: "184", delta: "+12%", tone: "success" as const },
  { label: "Novos leads (7d)", value: "37", delta: "+4", tone: "info" as const },
  { label: "Propostas ativas", value: "R$ 1,84 M", delta: "+8%", tone: "success" as const },
  { label: "Máquinas vendidas", value: "23", delta: "meta 30", tone: "warning" as const },
  { label: "Conversão", value: "18,4%", delta: "+1,2 pp", tone: "success" as const },
  { label: "Ticket médio", value: "R$ 96.500", delta: "+3,1%", tone: "success" as const },
];

export const kpisFinanceiro = [
  { label: "A receber (30d)", value: "R$ 742 k", tone: "info" as const },
  { label: "A pagar (30d)", value: "R$ 318 k", tone: "warning" as const },
  { label: "Fluxo previsto", value: "R$ 424 k", tone: "success" as const },
  { label: "Inadimplência", value: "2,3%", tone: "destructive" as const },
];

export const kpisEstoque = [
  { label: "Máquinas em estoque", value: "42" },
  { label: "Peças", value: "1.284" },
  { label: "Óleos Feng Lub", value: "312" },
  { label: "Abaixo do mínimo", value: "9", tone: "destructive" as const },
];

export const rankingVendedores = [
  { nome: "Ricardo Tanaka", meta: 100, vendido: 118, valor: "R$ 1,42 M" },
  { nome: "Juliana Feng", meta: 100, vendido: 96, valor: "R$ 1,18 M" },
  { nome: "Marcos Oliveira", meta: 100, vendido: 82, valor: "R$ 964 k" },
  { nome: "Priscila Souza", meta: 100, vendido: 71, valor: "R$ 812 k" },
  { nome: "Diego Nakamura", meta: 100, vendido: 54, valor: "R$ 610 k" },
];

export const pipelineEtapas = [
  { id: "novo", nome: "Novo Lead", cor: "info" },
  { id: "contato", nome: "Contato", cor: "info" },
  { id: "diagnostico", nome: "Diagnóstico", cor: "warning" },
  { id: "apresentacao", nome: "Apresentação", cor: "warning" },
  { id: "demonstracao", nome: "Demonstração", cor: "warning" },
  { id: "proposta", nome: "Proposta", cor: "primary" },
  { id: "negociacao", nome: "Negociação", cor: "primary" },
  { id: "ganho", nome: "Ganho", cor: "success" },
] as const;

export const oportunidades = [
  { id: 1, cliente: "Malharia São Paulo", etapa: "proposta", valor: 128000, dias: 3, responsavel: "Ricardo T." },
  { id: 2, cliente: "Confecções Yamada", etapa: "negociacao", valor: 96500, dias: 6, responsavel: "Juliana F." },
  { id: 3, cliente: "Tricot Blumenau", etapa: "demonstracao", valor: 184000, dias: 2, responsavel: "Marcos O." },
  { id: 4, cliente: "Malhas Jaraguá", etapa: "diagnostico", valor: 74000, dias: 8, responsavel: "Priscila S." },
  { id: 5, cliente: "Feng Textil RJ", etapa: "novo", valor: 0, dias: 1, responsavel: "Diego N." },
  { id: 6, cliente: "Sun Malharia", etapa: "apresentacao", valor: 156000, dias: 4, responsavel: "Ricardo T." },
  { id: 7, cliente: "Kimono Brasil", etapa: "contato", valor: 0, dias: 2, responsavel: "Juliana F." },
  { id: 8, cliente: "Malharia Aurora", etapa: "ganho", valor: 212000, dias: 0, responsavel: "Marcos O." },
  { id: 9, cliente: "Tricoline Norte", etapa: "proposta", valor: 89000, dias: 5, responsavel: "Priscila S." },
  { id: 10, cliente: "Malhas Diamante", etapa: "negociacao", valor: 145000, dias: 9, responsavel: "Diego N." },
];

export const clientesMock = [
  { id: 1, nome: "Malharia São Paulo Ltda", cidade: "São Paulo/SP", maquinas: 6, segmento: "Malharia circular", nivel: "Diamante" },
  { id: 2, nome: "Confecções Yamada", cidade: "Maringá/PR", maquinas: 4, segmento: "Malharia retilínea", nivel: "Ouro" },
  { id: 3, nome: "Tricot Blumenau", cidade: "Blumenau/SC", maquinas: 12, segmento: "Malharia retilínea", nivel: "Master" },
  { id: 4, nome: "Malhas Jaraguá", cidade: "Jaraguá do Sul/SC", maquinas: 3, segmento: "Malharia circular", nivel: "Prata" },
  { id: 5, nome: "Feng Textil RJ", cidade: "Nova Iguaçu/RJ", maquinas: 2, segmento: "Confecção", nivel: "Bronze" },
  { id: 6, nome: "Sun Malharia", cidade: "Americana/SP", maquinas: 8, segmento: "Malharia circular", nivel: "Ouro" },
  { id: 7, nome: "Malharia Aurora", cidade: "Caxias do Sul/RS", maquinas: 5, segmento: "Malharia retilínea", nivel: "Ouro" },
  { id: 8, nome: "Kimono Brasil", cidade: "Suzano/SP", maquinas: 3, segmento: "Confecção", nivel: "Prata" },
];

export const chamados = [
  { id: "OS-2041", cliente: "Tricot Blumenau", maquina: "Feng FN-262 · SN 4821", prioridade: "Alta", status: "Em atendimento", tecnico: "Anderson K.", abertoEm: "há 2h" },
  { id: "OS-2040", cliente: "Malharia São Paulo", maquina: "Feng FN-152 · SN 3311", prioridade: "Média", status: "Aguardando peça", tecnico: "Carlos L.", abertoEm: "há 1d" },
  { id: "OS-2039", cliente: "Sun Malharia", maquina: "Feng FN-360 · SN 5102", prioridade: "Baixa", status: "Agendado", tecnico: "Anderson K.", abertoEm: "há 2d" },
  { id: "OS-2038", cliente: "Confecções Yamada", maquina: "Feng FN-262 · SN 4720", prioridade: "Alta", status: "Aberto", tecnico: "—", abertoEm: "há 30 min" },
  { id: "OS-2037", cliente: "Malharia Aurora", maquina: "Feng FN-152 · SN 3208", prioridade: "Média", status: "Finalizado", tecnico: "Carlos L.", abertoEm: "há 4d" },
];

export const cursosMock = [
  { nome: "Operação Feng FN-262", turma: "SP-24-11", professor: "Prof. Tanaka", inicio: "18/11", vagas: "12/16" },
  { nome: "Programação Avançada", turma: "SC-24-09", professor: "Prof. Yamashita", inicio: "25/11", vagas: "8/10" },
  { nome: "Manutenção Preventiva", turma: "PR-24-07", professor: "Prof. Carlos", inicio: "02/12", vagas: "14/16" },
  { nome: "Padronagem Jacquard", turma: "SP-24-12", professor: "Prof. Priscila", inicio: "09/12", vagas: "6/12" },
];

export const containersMock = [
  { numero: "MSCU-8241902", origem: "Ningbo, China", eta: "12/12/2025", status: "Em trânsito", produtos: 24, valor: "US$ 412.000" },
  { numero: "MSCU-8238117", origem: "Shanghai, China", eta: "28/11/2025", status: "Desembaraço", produtos: 18, valor: "US$ 318.500" },
  { numero: "MSCU-8231205", origem: "Ningbo, China", eta: "05/11/2025", status: "Recebido", produtos: 30, valor: "US$ 496.200" },
];

export const fluxoMensal = [
  { mes: "Jun", entrada: 820, saida: 540 },
  { mes: "Jul", entrada: 910, saida: 580 },
  { mes: "Ago", entrada: 1040, saida: 610 },
  { mes: "Set", entrada: 980, saida: 640 },
  { mes: "Out", entrada: 1180, saida: 720 },
  { mes: "Nov", entrada: 1320, saida: 780 },
];

export const fmtBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
