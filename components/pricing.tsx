"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Sparkles, ArrowRight, Clock } from "lucide-react"
import { useProgramLinks } from "@/hooks/use-program-links"

export function Pricing() {
  const { registerUrl } = useProgramLinks()

  return (
    <section id="precos" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">30 dias grátis + 50% OFF nos primeiros 3 meses</span>
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            O <span className="text-primary">melhor preço</span> do mercado
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um único plano completo com tudo que você precisa.
            Comece grátis e pague apenas quando estiver satisfeito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative bg-card rounded-3xl p-8 lg:p-12 border-2 border-primary shadow-xl shadow-primary/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-6 py-2 font-semibold text-sm">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Plano Completo
              </Badge>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  ViaPet Completo
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tudo que seu pet shop ou clínica precisa em um só lugar
                </p>

                <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <span className="text-xl text-muted-foreground line-through">R$ 69,90/mês</span>
                    <Badge className="bg-primary/10 text-primary border-primary/30 font-bold">-50%</Badge>
                  </div>

                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-2xl text-muted-foreground">R$</span>
                    <span className="text-6xl lg:text-7xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                      34,95
                    </span>
                    <span className="text-xl text-muted-foreground">/mês</span>
                  </div>

                  <p className="text-sm text-muted-foreground mt-2">
                    *Valor promocional por 3 meses, depois R$ 69,90/mês
                  </p>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">30 dias grátis para testar</p>
                    <p className="text-sm text-muted-foreground">Sem cartão de crédito</p>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-7 text-lg rounded-xl">
                  <a href={registerUrl}>
                    Começar 30 dias grátis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-4 text-center lg:text-left">Tudo incluso:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Usuários ilimitados",
                    "Agenda de serviços",
                    "Cadastro de clientes e pets",
                    "Controle de estoque",
                    "PDV integrado",
                    "WhatsApp integrado",
                    "Prontuário digital",
                    "Relatórios completos",
                    "Gestão financeira",
                    "Comissões de funcionários",
                    "App para celular",
                    "Suporte por WhatsApp",
                    "Migração gratuita",
                    "Atualizações constantes",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t border-border"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <Badge variant="outline" className="border-primary/50 text-primary">Em breve</Badge>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">ViaPet Pro</span> com emissão de Nota Fiscal Eletrônica (NF-e)
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Sem fidelidade
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Cancele quando quiser
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Pagamento seguro
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
