import React from 'react'
import Navbar from '../../components/Navbar'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

export const generateStaticParams = () => [
  { locale: 'en' },
  { locale: 'de' },
]

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  // TIP: let Next infer the exact shape – no custom Props interface needed
  params: { locale: 'en' | 'de' }
}) {
  // ✔ destructure **inside** the function
  const { locale } = params
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
