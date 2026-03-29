"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope, Scissors, ShoppingBag, Building2 } from "lucide-react"

const segments = [
  {
    icon: Stethoscope,
    title: "Clínicas Veterinárias",
    description: "Prontuário digital completo, controle de vacinas, histórico médico e gestão de consultas em um só lugar.",
    features: ["Prontuário eletrônico", "Controle de vacinas", "Histórico médico", "Receituário digital"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Scissors,
    title: "Banho e Tosa",
    description: "Agenda inteligente, controle de pacotes, check-in/check-out e comunicação direta com tutores.",
    features: ["Agenda visual", "Pacotes de serviços", "Fotos antes/depois", "WhatsApp integrado"],
    color: "bg-primary/15 text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Pet Shops",
    description: "PDV completo, gestão de estoque inteligente, controle de vendas e emissão de notas fiscais.",
    features: ["PDV integrado", "Controle de estoque", "NFC-e automática", "Relatórios de vendas"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Building2,
    title: "Hospitais Veterinários",
    description: "Controle de internações, gestão de leitos, acompanhamento 24h e comunicação com a equipe.",
    features: ["Gestão de internações", "Controle de leitos", "Plantão 24h", "Comunicação da equipe"],
    color: "bg-primary/15 text-primary",
  },
]

export function ForWho() {
  return (
    <section id="para-quem" className="py-20 lg:py-28">
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
            Ideal para qualquer <span className="text-primary">negócio pet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planos pensados para atender as necessidades do seu negócio, seja um consultório, 
            pet shop, banho e tosa ou hospital veterinário.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${segment.color} flex items-center justify-center mb-6`}>
                <segment.icon className="w-7 h-7" />
              </div>

              <h3 
                className="text-xl lg:text-2xl font-bold text-foreground mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {segment.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {segment.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {segment.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 group-hover:gap-3 transition-all">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
