import Hero from '../../components/Hero'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

// Next.js doesn't yet export `PageProps` – we'll type only what we use
export type Locale = 'en' | 'de'

type Params = { locale: Locale }

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params // runtime requirement: await once
  const t = locale === 'de' ? de : en
  return <Hero t={t} locale={locale} />
}