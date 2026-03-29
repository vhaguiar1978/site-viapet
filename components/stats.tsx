"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "+5.000", label: "Empresas confiam no ViaPet" },
  { value: "R$ 420M+", label: "Transacionados na plataforma" },
  { value: "+3 milhões", label: "Agendamentos realizados" },
  { value: "4.9/5", label: "Avaliação dos clientes" },
]

export function Stats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div 
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
