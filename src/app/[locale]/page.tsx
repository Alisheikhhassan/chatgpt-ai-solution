import React from 'react'
import Hero from '../../components/Hero'
import en from '../../locales/en.json'
import de from '../../locales/de.json'

type Locales = 'en' | 'de'
type Props = { params: { locale: Locales } }

export default async function HomePage(props: Props) {
  const { locale } = await props.params
  const translations: Record<Locales, typeof en> = { en, de }
  const t = translations[locale]

  return <Hero t={t} locale={locale} />
}