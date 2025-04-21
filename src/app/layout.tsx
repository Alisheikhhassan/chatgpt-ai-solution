// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'AI Solutions DE',
  description: 'AI integrations for German businesses',
}

// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
