// src/app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'AI Solutions DE',
  description: 'AI integrations for German businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
