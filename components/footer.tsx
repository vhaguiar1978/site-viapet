import Link from "next/link"
import { PawPrint, Instagram, Facebook, Linkedin, Youtube, Mail, MessageCircle, MapPin } from "lucide-react"

const footerLinks = {
  produto: [
    { name: "Recursos", href: "#recursos" },
    { name: "Preços", href: "#precos" },
    { name: "Integrações", href: "#" },
    { name: "Atualizações", href: "#" },
  ],
  empresa: [
    { name: "Sobre nós", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Parceiros", href: "#" },
  ],
  suporte: [
    { name: "Central de ajuda", href: "#" },
    { name: "Documentação", href: "#" },
    { name: "Status do sistema", href: "#" },
    { name: "Contato", href: "#" },
  ],
  legal: [
    { name: "Privacidade", href: "#" },
    { name: "Termos de uso", href: "#" },
    { name: "LGPD", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  const whatsappUrl = "https://wa.me/551120977579"

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                <PawPrint className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                Via<span className="text-primary">Pet</span>
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-xs">
              O sistema mais completo e acessível para gestão de pet shops, clínicas veterinárias e banho e tosa.
            </p>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contato@viape.app</span>
              </div>
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>(11) 2097-7579</span>
              </Link>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} ViaPet. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
