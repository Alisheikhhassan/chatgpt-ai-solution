// src/components/Hero.tsx
export default function Hero() {
    return (
      <section className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">
          Bring AI to Your Business
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We build custom AI integrations—chatbots, predictive analytics, computer vision pipelines—and more.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-700"
        >
          Get in Touch
        </a>
      </section>
    )
  }
  