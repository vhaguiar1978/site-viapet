import type { Metadata } from 'next'
import { Inter, Poppins, Bagel_Fat_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

const bagelFatOne = Bagel_Fat_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brand'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://viapet.app'),
  title: 'ViaPet | Sistema para Pet Shop, Clínica Veterinária e Banho e Tosa',
  description: 'Gestão completa para pet shops, clínicas veterinárias e banho e tosa. Escolha entre ViaPet Essencial, Profissional ou Premium e teste por 30 dias grátis.',
  generator: 'ViaPet',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-viapet.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://viapet.app',
    siteName: 'ViaPet',
    title: 'ViaPet | Sistema para Pet Shop, Clínica Veterinária e Banho e Tosa',
    description: 'Gestão completa para pet shops, clínicas veterinárias e banho e tosa. Escolha entre ViaPet Essencial, Profissional ou Premium e teste por 30 dias grátis.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ViaPet - Sistema para Pet Shop e Clínica Veterinária',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViaPet | Sistema para Pet Shop, Clínica Veterinária e Banho e Tosa',
    description: 'Gestão completa para pet shops, clínicas veterinárias e banho e tosa. Escolha entre ViaPet Essencial, Profissional ou Premium e teste por 30 dias grátis.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} ${bagelFatOne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
