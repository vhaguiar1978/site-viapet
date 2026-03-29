"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, PawPrint } from "lucide-react"
import { useProgramLinks } from "@/hooks/use-program-links"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { loginUrl, registerUrl } = useProgramLinks()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
            <PawPrint className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Via<span className="text-primary">Pet</span>
          </span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <Link href="#recursos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </Link>
          <Link href="#para-quem" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Para Quem
          </Link>
          <Link href="#precos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button asChild variant="ghost" className="font-medium">
            <a href={loginUrl}>Entrar</a>
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <a href={registerUrl}>Testar Grátis</a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="flex flex-col px-4 py-4 gap-4">
            <Link href="#recursos" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Recursos
            </Link>
            <Link href="#para-quem" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Para Quem
            </Link>
            <Link href="#precos" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Preços
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Depoimentos
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button asChild variant="ghost" className="justify-start font-medium">
                <a href={loginUrl}>Entrar</a>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <a href={registerUrl}>Testar Grátis</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
