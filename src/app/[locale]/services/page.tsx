import React from 'react'
import ServiceCard from '../../../components/ServiceCard'
import en from '../../../locales/en.json'
import de from '../../../locales/de.json'

type Locales = 'en' | 'de'
type Props = { params: { locale: Locales } }

export default async function ServicesPage(props: Props) {
  const { locale } = await props.params
  const translations: Record<Locales, typeof en> = { en, de }
  const t = translations[locale]

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">{t.servicesPage.heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.services.map((service) => (
          <ServiceCard key={service.id} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  )
}
