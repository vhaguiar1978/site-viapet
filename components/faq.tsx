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
    answer: "Você tem 30 dias completos para testar todas as funcionalidades do ViaPet, sem nenhum compromisso. Não pedimos cartão de crédito e você pode cancelar a qualquer momento. Se gostar, é só escolher um plano e aproveitar o desconto de 50% nos primeiros 3 meses!",
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
    answer: "Temos uma equipe de suporte em português disponível por chat, email e telefone em horário comercial. No plano Profissional e Enterprise, você tem suporte prioritário com tempo de resposta reduzido.",
  },
  {
    question: "O ViaPet emite nota fiscal?",
    answer: "Sim! A partir do plano Profissional, você pode emitir NFC-e (nota fiscal do consumidor) e NFS-e (nota fiscal de serviço) diretamente pelo sistema, de forma automática e integrada.",
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
