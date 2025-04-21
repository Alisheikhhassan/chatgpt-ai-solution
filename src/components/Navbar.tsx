// src/components/Navbar.tsx
import Link from 'next/link'

type Props = {
  t: typeof import('../locales/en.json')
  locale: 'en' | 'de'
}

export default function Navbar({ t, locale }: Props) {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} locale={locale}>
          <span className="text-xl font-bold">AI Solutions DE</span>
        </Link>
        <div className="space-x-6">
          <Link href={`/${locale}/services`} locale={locale} className="hover:text-indigo-600">
            {t.nav.services}
          </Link>
          <Link href={`/${locale}/portfolio`} locale={locale} className="hover:text-indigo-600">
            {t.nav.portfolio}
          </Link>
          <Link href={`/${locale}/blog`} locale={locale} className="hover:text-indigo-600">
            {t.nav.blog}
          </Link>
          <Link
            href={`/${locale}/contact`}
            locale={locale}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            {t.nav.contact}
          </Link>
        </div>
        <div className="space-x-2">
          <Link href={`/${locale}`} locale="en" className={locale==='en' ? 'font-bold' : 'hover:underline'}>
            EN
          </Link>
          |
          <Link href={`/${locale}`} locale="de" className={locale==='de' ? 'font-bold' : 'hover:underline'}>
            DE
          </Link>
        </div>
      </div>
    </nav>
  )
}
