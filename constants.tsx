import { 
  Bot, 
  Zap, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Users, 
  FileText, 
  MessageSquare, 
  CalendarCheck,
  BrainCircuit,
  PieChart,
  Stethoscope,
  Scale,
  Banknote,
  Wrench
} from 'lucide-react';
import { Benefit, PricingPlan, Service, Step, Testimonial } from './types';

export const COMPANY_NAME = "orbiax";
// Substitua pelo seu logo real ou URL
export const LOGO_URL = "https://placehold.co/40x40/0ea5e9/ffffff?text=O"; 
export const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5511945199507&text=Ol%C3%A1%21+Quero+impulsionar+meu+neg%C3%B3cio+com+automa%C3%A7%C3%B5es+e+IA.+Podemos+conversar%3F&type=phone_number&app_absent=0";

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Diagnóstico",
    description: "Analisamos os processos da sua empresa para identificar gargalos e oportunidades de melhoria.",
    icon: Stethoscope
  },
  {
    id: 2,
    title: "Desenvolvimento",
    description: "Criamos soluções personalizadas e integramos seus sistemas atuais para trabalharem sozinhos.",
    icon: Wrench
  },
  {
    id: 3,
    title: "Crescimento",
    description: "Sua operação roda no piloto automático, com mais eficiência e menos custos operacionais.",
    icon: TrendingUp
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Eficiência Operacional",
    description: "Automatize tarefas manuais e repetitivas para que sua equipe foque no estratégico.",
    icon: Clock
  },
  {
    title: "Atendimento Ágil",
    description: "Não perca clientes por demora. Respostas rápidas e qualificação automática 24/7.",
    icon: Zap
  },
  {
    title: "Redução de Falhas",
    description: "Elimine erros humanos em processos financeiros, agendamentos e cadastros.",
    icon: ShieldCheck
  },
  {
    title: "Organização Total",
    description: "Dados organizados automaticamente entre seus sistemas, sem necessidade de digitação.",
    icon: FileText
  },
  {
    title: "Experiência do Cliente",
    description: "Comunicação personalizada e proativa que aumenta a satisfação e retenção.",
    icon: Users
  },
  {
    title: "Visibilidade Financeira",
    description: "Controle de orçamentos e fluxo de caixa monitorados em tempo real.",
    icon: PieChart
  }
];

export const SERVICES: Service[] = [
  {
    title: "Automação de WhatsApp",
    description: "Centralize leads, consultas e confirmações automáticas no app mais usado do Brasil.",
    icon: MessageSquare,
    tags: ["Leads", "Vendas", "Atendimento"]
  },
  {
    title: "Chatbot com IA",
    description: "Atendimento 24/7 para tirar dúvidas básicas, realizar triagem e qualificar clientes.",
    icon: Bot,
    tags: ["IA", "Suporte", "Triagem"]
  },
  {
    title: "Lembretes e Confirmações",
    description: "Reduza faltas com avisos automáticos de agendamento e retorno via WhatsApp/SMS.",
    icon: CalendarCheck,
    tags: ["Agenda", "No-show", "Avisos"]
  },
  {
    title: "Nutrição de Leads",
    description: "Funil de vendas automatizado que aquece contatos frios e recupera orçamentos.",
    icon: Zap,
    tags: ["CRM", "Marketing", "Conversão"]
  },
  {
    title: "Relatórios Automáticos",
    description: "Receba métricas de vendas e atendimentos semanalmente sem abrir planilhas.",
    icon: PieChart,
    tags: ["Dados", "BI", "Gestão"]
  },
  {
    title: "Monitoramento Jurídico",
    description: "IA que monitora diários oficiais e movimenta processos internos automaticamente.",
    icon: Scale,
    tags: ["Jurídico", "Processos", "OAB"]
  },
  {
    title: "Fluxo Financeiro",
    description: "Geração automática de recibos, notas fiscais e controle de contas a receber.",
    icon: Banknote,
    tags: ["Financeiro", "NFS-e", "Boletos"]
  },
  {
    title: "Gestão de Documentos",
    description: "Organização automática de arquivos, contratos e leitura de dados em PDFs.",
    icon: FileText,
    tags: ["GED", "Arquivos", "Organização"]
  },
  {
    title: "Integração de Sistemas",
    description: "Conecte seu CRM, ERP e planilhas para que troquem dados sozinhos.",
    icon: BrainCircuit,
    tags: ["API", "Conexão", "Sincronia"]
  }
];

export const PLANS: PricingPlan[] = [
  {
    name: "Projeto Pontual",
    description: "Ideal para resolver um problema específico da sua operação com escopo fechado.",
    price: "Sob Medida",
    monthly: "Pagamento único ou parcelado",
    features: [
      "Escopo definido no início",
      "Entrega focada na solução",
      "Treinamento da equipe",
      "Sem custo mensal recorrente"
    ],
    ctaText: "Cotar Projeto"
  },
  {
    name: "Automação Contínua",
    description: "Para empresas que buscam evolução constante e automação de múltiplos setores.",
    price: "Sob Medida",
    monthly: "Fee Mensal + Setup",
    isPopular: true,
    features: [
      "Desenvolvimento contínuo",
      "Suporte prioritário",
      "Manutenção das automações",
      "Monitoramento de performance",
      "Ajustes ilimitados"
    ],
    ctaText: "Consultar Planos"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Carlos Mendes",
    role: "Sócio Diretor",
    company: "Mendes Associados",
    content: "Antes, nossa equipe perdia horas organizando agenda e respondendo mensagens básicas. A orbiax implementou uma solução que tria tudo automaticamente. Ganhamos muita agilidade.",
    avatarUrl: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Mariana Souza",
    role: "Proprietária",
    company: "Clínica Bem Estar",
    content: "O sistema de confirmação reduziu nossas faltas drasticamente. O paciente recebe o lembrete e confirma com um clique. A tecnologia trabalhou perfeitamente para nós.",
    avatarUrl: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Ricardo Oliveira",
    role: "Gerente de Operações",
    company: "Logística Veloz",
    content: "Automatizamos a emissão de relatórios e controle financeiro. O que levava dias, agora acontece em tempo real. A consultoria foi essencial para nosso crescimento.",
    avatarUrl: "https://picsum.photos/100/100?random=3"
  }
];