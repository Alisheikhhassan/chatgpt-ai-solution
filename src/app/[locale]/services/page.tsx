import ServiceCard from '../../../components/ServiceCard'
import en from '../../../locales/en.json'
import de from '../../../locales/de.json'

export default async function ServicesPage({ params }: { params: any }) {
  const { locale } = (await params) as { locale: 'en' | 'de' }
  const t = locale === 'de' ? de : en

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">{t.servicesPage.heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.services.map((s) => (
          <ServiceCard key={s.id} title={s.title} description={s.description} />
        ))}
      </div>
    </section>
  )
}