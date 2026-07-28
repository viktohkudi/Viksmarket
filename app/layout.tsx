import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Viksmarket — Crypto News & Live Prices in Nigeria',
  description:
    'Latest crypto news, Bitcoin price in Naira, and live global market prices. Nigeria-focused crypto updates, regulation news, and beginner guides.',
  generator: 'v0.app',
  keywords: [
    'crypto news Nigeria',
    'Bitcoin price Naira',
    'BTC to NGN',
    'CBN crypto',
    'Binance Nigeria',
    'cryptocurrency prices',
  ],
  openGraph: {
    title: 'Viksmarket — Crypto News & Live Prices in Nigeria',
    description:
      'Latest crypto news, Bitcoin price in Naira, and live global market prices.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b0e14' },
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
