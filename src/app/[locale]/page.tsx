import Hero from '../../components/Hero'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

// 1 – accept params as any (Vercel’s build types it as a Promise‑like proxy)
// 2 – await it once, then read locale
// 3 – ESLint line keeps the “no‑explicit‑any” rule quiet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function HomePage({ params }: { params: any }) {
  const { locale } = (await params) as { locale: 'en' | 'de' }
  const t = locale === 'de' ? de : en
  return <Hero t={t} locale={locale} />
}
