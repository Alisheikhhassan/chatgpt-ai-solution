import Hero from '../../components/Hero'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

type Locale = 'en' | 'de'

export default function HomePage({
  params,
}: {
  params: { locale: Locale }
}) {
  const { locale } = params
  const t = locale === 'de' ? de : en
  return <Hero t={t} locale={locale} />
}