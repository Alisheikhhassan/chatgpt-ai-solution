// src/components/Hero.tsx
import Link from 'next/link'

type Props = {
  t: typeof import('../locales/en.json')
  locale: 'en' | 'de'
}

export default function Hero({ t, locale }: Props) {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-extrabold mb-4">{t.hero.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{t.hero.subtitle}</p>
      <Link
        href={`/${locale}/contact`}
        locale={locale}
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700"
      >
        {t.hero.cta}
      </Link>
    </section>
  )
}
