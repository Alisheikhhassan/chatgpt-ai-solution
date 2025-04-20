// src/components/Navbar.tsx
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold">AI Solutions DE</span>
        </Link>
        <div className="space-x-6">
          <Link href="/services" className="hover:text-indigo-600">Services</Link>
          <Link href="/portfolio" className="hover:text-indigo-600">Portfolio</Link>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link href="/contact" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
    