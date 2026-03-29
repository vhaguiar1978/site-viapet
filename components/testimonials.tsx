"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dra. Mariana Costa",
    role: "Clínica VetCare",
    location: "São Paulo, SP",
    image: "👩‍⚕️",
    content: "O ViaPet revolucionou a gestão da nossa clínica. O prontuário digital e o controle de vacinas são simplesmente perfeitos. Economizamos mais de 10 horas por semana!",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Pet Shop Amigo Fiel",
    location: "Rio de Janeiro, RJ",
    image: "👨‍💼",
    content: "Testei vários sistemas antes de encontrar o ViaPet. O PDV integrado e o controle de estoque são incríveis. E o preço? Imbatível! Super recomendo.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    role: "Banho e Tosa Patinhas",
    location: "Belo Horizonte, MG",
    image: "👩‍🦰",
    content: "A agenda visual e os lembretes automáticos por WhatsApp acabaram com as faltas. Meus clientes amam receber as fotos do banho pelo sistema!",
    rating: 5,
  },
  {
    name: "Dr. Paulo Henrique",
    role: "Hospital Vet Premium",
    location: "Curitiba, PR",
    image: "👨‍⚕️",
    content: "Gerenciamos 3 unidades com o ViaPet. O controle de internações e a comunicação entre equipes é excelente. O suporte é rápido e eficiente.",
    rating: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Mundo Pet Store",
    location: "Salvador, BA",
    image: "👩‍💼",
    content: "A emissão automática de NFC-e me economiza horas por dia. O sistema é super intuitivo, minha equipe aprendeu em menos de uma hora!",
    rating: 5,
  },
  {
    name: "Fernando Lima",
    role: "Clínica 4 Patas",
    location: "Fortaleza, CE",
    image: "🧑‍⚕️",
    content: "Migrei de outro sistema e foi tudo gratuito e sem dor de cabeça. O ViaPet tem todas as funcionalidades que eu precisava por um preço justo.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-muted/30">
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
            Amado por <span className="text-primary">milhares de clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre a experiência com o ViaPet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
