import React from 'react'
import Navbar from '../../components/Navbar'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'de' }]

type Locales = 'en' | 'de'
type Props = { children: React.ReactNode; params: { locale: Locales } }

export default async function LocaleLayout({ children, ...props }: Props) {
  const { locale } = await props.params
  const translations: Record<Locales, typeof en> = { en, de }
  const t = translations[locale]

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen">
        <Navbar t={t} locale={locale} />
        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>
      </body>
    </html>
  )
}