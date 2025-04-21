import Hero from '../../components/Hero'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

export default async function HomePage({ params }: { params: any }) {
  const { locale } = (await params) as { locale: 'en' | 'de' }
  const t = locale === 'de' ? de : en
  return <Hero t={t} locale={locale} />
}