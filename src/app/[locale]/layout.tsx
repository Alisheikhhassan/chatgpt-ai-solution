import React from 'react'
import Navbar from '../../components/Navbar'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

export const generateStaticParams = () => [
  { locale: 'en' },
  { locale: 'de' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  // Vercel’s build treats `params` as a Promise‑like proxy → use `any`
  params: any
}) {
  const { locale } = (await params) as { locale: 'en' | 'de' }
  const t = locale === 'de' ? de : en

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <Navbar t={t} locale={locale} />
        <main className="flex-grow container mx-auto px-4 py-12">{children}</main>
      </body>
    </html>
  )
}