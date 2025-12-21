import type { Metadata } from 'next'
import './globals.css'
import './home.css'
import './prijzen/prijzen.css'
import './contact/contact.css'
import './blog/blog.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { PageTransitionProvider } from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Fleurig Thús - Huishoudelijke hulp met een hart',
  description: 'Niet alleen een schoon huis, maar een thuis waar iemand zich gezien voelt. Huishoudelijke hulp met aandacht, warmte en menselijkheid.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <div className="app">
          <div className="grain-overlay" />
          <CustomCursor />
          <Navigation />
          <main>
            <PageTransitionProvider>
              {children}
            </PageTransitionProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
