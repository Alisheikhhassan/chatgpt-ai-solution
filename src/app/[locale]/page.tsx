import Hero from '../../components/Hero'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

export default function HomePage({
  params,
}: {
  params: { locale: 'en' | 'de' }
}) {
  const { locale } = params
  const t = locale === 'de' ? de : en
  return <Hero t={t} locale={locale} />
}
