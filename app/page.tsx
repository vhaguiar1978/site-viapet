import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { ForWho } from "@/components/for-who"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <ForWho />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
