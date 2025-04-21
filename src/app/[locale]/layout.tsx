/* ----------  src/app/[locale]/layout.tsx  ---------- */
import React from 'react'
import type { LayoutProps } from 'next'     // ✅ 15.3.x exports this
import Navbar from '../../components/Navbar'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

export const generateStaticParams = () => [
  { locale: 'en' },
  { locale: 'de' },
]

type Locale = 'en' | 'de'

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<{ locale: Locale }>) {
  const { locale } = await params          // 👈 params is Promise‑like here
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
