// src/app/[locale]/page.tsx
import Hero from '../../components/Hero'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

// src/app/[locale]/page.tsx
type Locale = 'en' | 'de'
interface Params { locale: Locale }

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await Promise.resolve(params)
  const t = locale === 'de' ? de : en
  return <Hero t={t} locale={locale} />
}
