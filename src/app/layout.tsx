import type { Metadata } from 'next'
import './globals.css'
import './home.css'
import './prijzen/prijzen.css'
import './contact/contact.css'
import './blog/blog.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import SocialButtons from '@/components/SocialButtons'
import { PageTransitionProvider } from '@/components/PageTransition'
import { Analytics } from '@vercel/analytics/next'
import ConditionalSocialButtons from '@/components/ConditionalSocialButtons'

export const metadata: Metadata = {
  title: 'Fleurig Thús - Huishoudelijke hulp met een hart | Leeuwarden | Friesland',
  description: 'Niet alleen een schoon huis, maar een thuis waar iemand zich gezien voelt. Huishoudelijke hulp met aandacht, warmte en menselijkheid. Huishoudelijke hulp in Leeuwarden en omgeving.',
  keywords: 'huishoudelijke hulp, schoonmaakdienst, poetshulp, huishoudster, strijkservice, thuiszorg, schoonmaak aan huis, persoonlijke verzorging',
  icons: {
    icon: '/FleurigThusFavIcon2.png',
    apple: '/FleurigThusFavIcon2.png',
  },
  openGraph: {
    title: 'Fleurig Thús - Huishoudelijke hulp met een hart',
    description: 'Huishoudelijke hulp met aandacht, warmte en menselijkheid.',
    images: ['/FleurigThusFavIcon2.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="app">
          <div className="grain-overlay" />
          <CustomCursor />
          <Navigation />
          <ConditionalSocialButtons />
          <main>
            <PageTransitionProvider>
              {children}
            </PageTransitionProvider>
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
