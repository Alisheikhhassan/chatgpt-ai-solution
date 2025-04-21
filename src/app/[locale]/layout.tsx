// src/app/[locale]/layout.tsx
import Navbar from '../../components/Navbar'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

export const generateStaticParams = () => [{ locale: 'en' }, { locale: 'de' }]

export default async function LocaleLayout({
  children,
  params,                       // <- don’t annotate params
}: {
  children: React.ReactNode
  params: any                   // (or remove this line entirely)
}) {
  const { locale } = await params as { locale: 'en' | 'de' }

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
