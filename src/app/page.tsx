// src/app/page.tsx
import Hero from '../components/Hero'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Hero />
      {/* Later: <Services />, <Portfolio />, <BlogList />, <ContactForm /> */}
    </div>
  )
}
