"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona o período de teste grátis?",
    answer: "Você tem 30 dias completos para testar os recursos do plano escolhido, sem compromisso e sem informar cartão de crédito. Ao final do teste, basta manter ou alterar o plano ideal para o seu negócio.",
  },
  {
    question: "Posso migrar meus dados de outro sistema?",
    answer: "Sim! Oferecemos migração gratuita de dados de mais de 30 sistemas diferentes. Nossa equipe cuida de todo o processo para você, garantindo que nenhuma informação seja perdida.",
  },
  {
    question: "O sistema funciona no celular?",
    answer: "O ViaPet é 100% na nuvem e funciona em qualquer dispositivo: computador, tablet ou celular. Você pode acompanhar seu negócio de onde estiver, a qualquer hora.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer: "Não! O ViaPet funciona diretamente no navegador, sem necessidade de instalação. Basta acessar o site, fazer login e começar a usar. Simples assim!",
  },
  {
    question: "Como é o suporte ao cliente?",
    answer: "Temos uma equipe de suporte em português para ajudar na implantação e no uso do ViaPet. Os canais e níveis de atendimento seguem os recursos configurados em cada plano.",
  },
  {
    question: "O ViaPet emite nota fiscal?",
    answer: "Em breve: emissão integrada de NFS-e, NFC-e e NF-e.",
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Absolutamente! Utilizamos criptografia de ponta a ponta, backups diários automáticos e servidores seguros. Somos totalmente compatíveis com a LGPD e garantimos a privacidade dos seus dados.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura quando quiser, sem multas ou taxas de cancelamento. Seus dados ficam disponíveis para exportação por até 30 dias após o cancelamento.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
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
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o ViaPet
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
