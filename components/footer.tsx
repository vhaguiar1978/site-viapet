import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  produto: [
    { name: "Recursos", href: "#recursos" },
    { name: "Preços", href: "#precos" },
    { name: "Integrações", href: "#" },
    { name: "Atualizações", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/viapet.app", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/viapet.app", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@viapetappcontroleonline", label: "YouTube" },
]

export function Footer() {
  const whatsappUrl = "https://wa.me/5511915050090"
  const emailAddress = "contato@viapet.com.br"

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 -ml-4 lg:-ml-8">
              <Image
                src="/logo-viapet.png"
                alt="ViaPet"
                width={112}
                height={112}
                className="h-20 md:h-24 w-auto object-contain"
              />
              <span
                className="text-4xl md:text-5xl tracking-wide leading-none text-primary -ml-3"
                style={{ fontFamily: 'var(--font-brand)' }}
              >
                ViaPet
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-xs">
              O sistema mais completo e acessível para gestão de pet shops, clínicas veterinárias e banho e tosa.
            </p>
            <div className="space-y-3 text-sm text-background/70">
              <Link
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{emailAddress}</span>
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>(11) 91505-0090</span>
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
                target="_blank"
                rel="noreferrer"
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
