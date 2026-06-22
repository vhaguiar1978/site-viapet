"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Clock, LoaderCircle, Minus, Sparkles } from "lucide-react"
import { useProgramLinks } from "@/hooks/use-program-links"

type PlanFeature = {
  key: string
  label: string
  included: boolean
  status: "available" | "beta" | "soon"
}

type PublicPlan = {
  id: string
  name: string
  monthlyPrice: number
  annualPrice?: number | null
  description: string
  recommended?: boolean
  active?: boolean
  features: PlanFeature[]
}

type PlansCatalog = {
  plans: PublicPlan[]
  trialDays: number
  fiscalMessage?: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.viapet.app"

function formatMoney(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(Number(value || 0))
}

function statusLabel(status: PlanFeature["status"]) {
  if (status === "beta") return "Beta"
  if (status === "soon") return "Em breve"
  return ""
}

export function Pricing() {
  const { registerUrl } = useProgramLinks()
  const [catalog, setCatalog] = useState<PlansCatalog | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    fetch(`${API_URL}/api/subscriptions/plans`, { cache: "no-store", signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Falha ao carregar planos")
        const payload = await response.json()
        return payload?.data || payload
      })
      .then((data) => {
        setCatalog(data)
        setError("")
      })
      .catch((requestError) => {
        if (requestError?.name !== "AbortError") {
          setError("Os planos estão sendo atualizados. Tente novamente em instantes.")
        }
      })
    return () => controller.abort()
  }, [])

  const plans = useMemo(
    () => (catalog?.plans || []).filter((plan) => plan.active !== false),
    [catalog],
  )

  const comparisonRows = useMemo(() => {
    const rows = new Map<string, string>()
    plans.forEach((plan) => {
      plan.features.forEach((feature) => {
        if (!rows.has(feature.key)) rows.set(feature.key, feature.label)
      })
    })
    return [...rows.entries()].map(([key, label]) => ({ key, label }))
  }, [plans])

  const trialDays = Number(catalog?.trialDays || 30)

  return (
    <section id="precos" className="py-20 lg:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2.5 mb-7">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-semibold text-primary">{trialDays} dias grátis em qualquer plano</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Um plano para cada fase do <span className="text-primary">seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece sem cartão, teste o ViaPet na rotina e escolha o nível de gestão ideal para sua equipe.
          </p>
        </motion.div>

        {!catalog && !error ? (
          <div className="min-h-80 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <LoaderCircle className="w-8 h-8 animate-spin text-primary" />
            <span>Carregando planos atualizados...</span>
          </div>
        ) : null}

        {error ? (
          <div className="max-w-xl mx-auto rounded-2xl border border-destructive/20 bg-destructive/5 p-5 text-center text-destructive">
            {error}
          </div>
        ) : null}

        {plans.length ? (
          <>
            <div className="grid lg:grid-cols-3 gap-6 items-stretch">
              {plans.map((plan, index) => (
                <motion.article
                  key={plan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`relative flex flex-col rounded-3xl border bg-card p-6 md:p-7 ${
                    plan.recommended
                      ? "border-2 border-primary shadow-2xl shadow-primary/15 lg:-translate-y-3"
                      : "border-border shadow-lg shadow-black/5"
                  }`}
                >
                  {plan.recommended ? (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground shadow-lg whitespace-nowrap">
                      Mais escolhido
                    </span>
                  ) : null}

                  <div className="min-h-32 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{plan.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="border-y border-border py-5 mb-6">
                    <div className="flex items-baseline gap-2">
                      <strong className="text-4xl xl:text-5xl font-extrabold text-foreground tracking-tight">
                        {formatMoney(plan.monthlyPrice)}
                      </strong>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    {plan.annualPrice ? (
                      <p className="text-xs text-muted-foreground mt-2">
                        Plano anual: <strong>{formatMoney(plan.annualPrice)}</strong>
                      </p>
                    ) : null}
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-primary/5 border border-primary/15 p-3 mb-6">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-semibold">{trialDays} dias grátis, sem cartão</span>
                  </div>

                  <ul className="space-y-3 mb-7">
                    {plan.features.map((feature) => {
                      const available = feature.included && feature.status !== "soon"
                      const tag = statusLabel(feature.status)
                      return (
                        <li
                          key={`${plan.id}-${feature.key}`}
                          className={`flex items-start gap-2.5 text-sm ${available ? "text-foreground" : "text-muted-foreground"}`}
                        >
                          {available ? <Check className="w-5 h-5 text-primary shrink-0" /> : <Minus className="w-5 h-5 text-muted-foreground/60 shrink-0" />}
                          <span className="flex-1">{feature.label}</span>
                          {tag ? <small className="rounded-full bg-muted px-2 py-1 text-[10px] font-bold whitespace-nowrap">{tag}</small> : null}
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-auto grid gap-2.5">
                    <a
                      href={`${registerUrl}?plan=${encodeURIComponent(plan.id)}&intent=trial`}
                      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-4 font-bold text-primary-foreground transition hover:bg-primary/90"
                    >
                      Começar {trialDays} dias grátis
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href={`${registerUrl}?plan=${encodeURIComponent(plan.id)}&intent=choose`}
                      className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-background px-4 font-bold text-foreground transition hover:border-primary"
                    >
                      Escolher este plano
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {catalog?.fiscalMessage ? (
              <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-300/60 bg-amber-50 px-5 py-4 text-center font-semibold text-amber-900">
                {catalog.fiscalMessage}
              </div>
            ) : null}

            <div className="mt-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Compare os planos</h3>
                <p className="text-muted-foreground mt-2">Veja com clareza o que está incluído em cada opção.</p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full min-w-[760px] border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="p-4 text-left text-sm">Recursos</th>
                      {plans.map((plan) => (
                        <th key={`head-${plan.id}`} className={`p-4 text-center ${plan.recommended ? "bg-primary/5" : ""}`}>
                          <span className="block text-sm font-bold">{plan.name}</span>
                          <small className="text-muted-foreground">{formatMoney(plan.monthlyPrice)}/mês</small>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.key} className="border-b border-border last:border-0">
                        <th className="p-4 text-left text-sm font-medium">{row.label}</th>
                        {plans.map((plan) => {
                          const feature = plan.features.find((item) => item.key === row.key)
                          const available = feature?.included && feature.status !== "soon"
                          return (
                            <td key={`${row.key}-${plan.id}`} className={`p-4 text-center ${plan.recommended ? "bg-primary/5" : ""}`}>
                              {available ? <Check className="w-5 h-5 text-primary mx-auto" /> : <Minus className="w-5 h-5 text-muted-foreground/50 mx-auto" />}
                              {feature && statusLabel(feature.status) ? (
                                <small className="block mt-1 text-[10px] font-semibold text-muted-foreground">{statusLabel(feature.status)}</small>
                              ) : null}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
