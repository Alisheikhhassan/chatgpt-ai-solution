import React from 'react'
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
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  // ✅ Await the params proxy once, then destructure
  const { locale } = await Promise.resolve(params)
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