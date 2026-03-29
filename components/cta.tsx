"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, PawPrint } from "lucide-react"
import { useProgramLinks } from "@/hooks/use-program-links"

export function CTA() {
  const { registerUrl, consultantUrl } = useProgramLinks()

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="absolute top-10 left-10 opacity-10">
        <PawPrint className="w-24 h-24 text-white rotate-12" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <PawPrint className="w-32 h-32 text-white -rotate-12" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-5">
        <PawPrint className="w-40 h-40 text-white rotate-45" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span className="font-semibold text-white">Oferta por tempo limitado</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 text-balance" style={{ fontFamily: "var(--font-display)" }}>
            Comece agora com
            <br />
            <span className="text-white/80">30 dias grátis</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Teste todas as funcionalidades sem compromisso. E depois, aproveite
            <span className="font-bold text-white"> 50% de desconto </span>
            nos primeiros 3 meses!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary font-bold px-10 py-7 text-lg rounded-xl w-full sm:w-auto">
              <a href={registerUrl}>
                Criar conta grátis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium px-10 py-7 text-lg rounded-xl w-full sm:w-auto">
              <a href={consultantUrl} target="_blank" rel="noreferrer">
                Falar com consultor
              </a>
            </Button>
          </div>

          <p className="text-white/60 text-sm mt-6">Sem cartão de crédito • Sem compromisso • Cancele quando quiser</p>
        </motion.div>
      </div>
    </section>
  )
}
