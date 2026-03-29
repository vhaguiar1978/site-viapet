"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useProgramLinks } from "@/hooks/use-program-links"

export function Hero() {
  const { registerUrl, consultantUrl } = useProgramLinks()

  return (
    <section className="relative flex items-center pt-24 pb-8 lg:pt-28 lg:pb-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Badge className="bg-primary/10 text-primary border-primary/30 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Oferta Especial por Tempo Limitado
              </Badge>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              <span className="block">Sistema Completo para</span>
              <span className="text-primary">Pet Shops</span> e <span className="text-primary">Clínicas Veterinárias</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Gerencie agendamentos, estoque, financeiro e atendimentos em um só lugar.
              Simplifique sua rotina e aumente seus lucros.
            </p>

            <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-2xl">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                    30 dias grátis
                  </div>
                  <p className="text-sm text-muted-foreground">para testar todas as funções</p>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border" />
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                    50% OFF
                  </div>
                  <p className="text-sm text-muted-foreground">nos próximos 3 meses</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                <a href={registerUrl}>
                  Criar Conta Grátis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                <a href={consultantUrl} target="_blank" rel="noreferrer">
                  Falar com Consultor
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <div className="flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-base font-medium text-foreground">Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-base font-medium text-foreground">Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-base font-medium text-foreground">Cancele quando quiser</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/person-dog.jpg"
                  alt="Pessoa feliz abraçando cachorro"
                  width={600}
                  height={500}
                  className="w-auto h-[350px] lg:h-[420px] object-cover"
                  style={{ width: "100%" }}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 lg:-right-12 w-40 h-40 lg:w-52 lg:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Image
                  src="/images/dog-bath.jpg"
                  alt="Cachorro feliz tomando banho"
                  width={220}
                  height={220}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 lg:-left-12 w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              >
                <Image
                  src="/images/dog-grooming.jpg"
                  alt="Cachorro sendo tosado"
                  width={180}
                  height={180}
                  className="w-full h-full object-cover"
                  priority
                  loading="eager"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 right-4 lg:right-8 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🐕</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+1.300</p>
                    <p className="text-xs text-muted-foreground">Pets atendidos hoje</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute top-4 left-4 bg-primary text-white rounded-full px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-bold">Melhor preço!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
