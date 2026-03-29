"use client"

import { motion } from "framer-motion"
import { 
  Calendar, 
  Package, 
  CreditCard, 
  BarChart3, 
  MessageSquare, 
  Smartphone, 
  FileText,
  Users,
  Bell,
  Shield,
  Zap,
  Cloud
} from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Organize seus agendamentos com visualização por dia, semana ou mês. Recorrência automática e lembretes por WhatsApp.",
  },
  {
    icon: Package,
    title: "Controle de Estoque",
    description: "Saiba exatamente quando repor cada produto. Alertas de validade e relatórios de movimentação em tempo real.",
  },
  {
    icon: CreditCard,
    title: "PDV Integrado",
    description: "Venda produtos e serviços em poucos cliques. Integração com maquininhas e emissão de notas fiscais automática.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Completos",
    description: "Acompanhe o desempenho do seu negócio com dashboards visuais. Faturamento, vendas e produtividade em tempo real.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integrado",
    description: "Envie confirmações, lembretes e campanhas direto pelo sistema. Comunicação automatizada com seus clientes.",
  },
  {
    icon: Smartphone,
    title: "100% na Nuvem",
    description: "Acesse de qualquer lugar, pelo computador ou celular. Seus dados sempre seguros e disponíveis.",
  },
  {
    icon: FileText,
    title: "Prontuário Digital",
    description: "Registre atendimentos, anexe fotos e exames. Histórico completo do pet sempre à mão.",
  },
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Cadastro completo de tutores e pets. Histórico de compras, preferências e aniversários.",
  },
  {
    icon: Bell,
    title: "Lembretes Automáticos",
    description: "Vacinas, retornos e aniversários. O sistema avisa você e seus clientes automaticamente.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Dados criptografados e backups diários. Conformidade com a LGPD e proteção garantida.",
  },
  {
    icon: Zap,
    title: "Super Rápido",
    description: "Sistema otimizado para performance. Carregamento instantâneo e sem travamentos.",
  },
  {
    icon: Cloud,
    title: "Atualizações Gratuitas",
    description: "Novas funcionalidades adicionadas constantemente. Sem custos extras para você.",
  },
]

export function Features() {
  return (
    <section id="recursos" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tudo que você precisa em <span className="text-primary">um só lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do atendimento ao financeiro, controle todas as operações do seu negócio pet 
            com recursos pensados para facilitar sua rotina.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
