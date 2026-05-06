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
  description: 'O sistema mais completo e acessível para gestão de pet shops, clínicas veterinárias e banho e tosa. 30 dias grátis + 50% de desconto nos primeiros 2 meses!',
  generator: 'ViaPet',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://viapet.app',
    siteName: 'ViaPet',
    title: 'ViaPet | Sistema para Pet Shop, Clínica Veterinária e Banho e Tosa',
    description: 'O sistema mais completo e acessível para gestão de pet shops, clínicas veterinárias e banho e tosa. 30 dias grátis + 50% de desconto nos primeiros 2 meses!',
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
    description: 'O sistema mais completo e acessível para gestão de pet shops, clínicas veterinárias e banho e tosa. 30 dias grátis + 50% de desconto nos primeiros 2 meses!',
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
