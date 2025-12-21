'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MagneticButton from '@/components/MagneticButton'
import RevealText from '@/components/RevealText'

const packages = [
  {
    name: 'Basis',
    price: '25',
    unit: 'per uur',
    description: 'Perfect voor regelmatige schoonmaak',
    features: [
      'Algemene schoonmaak',
      'Stofzuigen & dweilen',
      'Sanitair reinigen',
      'Keuken schoonmaken',
      'Flexibele planning',
    ],
    highlight: false,
  },
  {
    name: 'Uitgebreid',
    price: '30',
    unit: 'per uur',
    description: 'Inclusief extra diensten',
    features: [
      'Alles van Basis pakket',
      'Ramen lappen (binnenzijde)',
      'Strijkservice',
      'Beddengoed verschonen',
      'Koelkast reinigen',
      'Oven schoonmaken',
    ],
    highlight: true,
  },
  {
    name: 'Op Maat',
    price: 'Offerte',
    unit: 'op aanvraag',
    description: 'Volledig afgestemd op uw wensen',
    features: [
      'Persoonlijk gesprek',
      'Maatwerk oplossing',
      'Combinatie van diensten',
      'Speciale wensen mogelijk',
      'Langdurige samenwerking',
    ],
    highlight: false,
  },
]

const faqs = [
  {
    question: 'Hoe vaak komt u schoonmaken?',
    answer: 'Dit bepaalt u zelf. Veel klanten kiezen voor wekelijks of tweewekelijks, maar ook maandelijks of incidenteel is mogelijk.',
  },
  {
    question: 'Breng ik zelf schoonmaakmiddelen mee?',
    answer: 'U kunt kiezen: ik werk graag met uw eigen producten, maar kan ook ecologische middelen meenemen tegen een kleine meerprijs.',
  },
  {
    question: 'Wat als ik niet thuis ben?',
    answer: 'Geen probleem! Veel klanten geven een sleutel af. Uw vertrouwen is veilig bij mij.',
  },
  {
    question: 'Kan ik wijzigingen doorgeven?',
    answer: 'Natuurlijk, flexibiliteit is belangrijk. Wijzigingen kunnen tot 24 uur van tevoren worden doorgegeven.',
  },
]

export default function Prices() {
  return (
    <>
      {/* Hero */}
      <section className="prices-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Prijzen
          </motion.span>
          <h1 className="prices-title">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Transparant &
            </motion.span>
            <motion.span
              className="accent"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              eerlijk
            </motion.span>
          </h1>
          <motion.p
            className="prices-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Geen verborgen kosten, wel volledige aandacht
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <div className="container">
          <motion.div
            className="packages-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {packages.map((pkg, index) => (
              <PriceCard key={index} pkg={pkg} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="prices-info-section">
        <div className="container">
          <div className="prices-info-grid">
            <div className="prices-info-left">
              <RevealText>
                <h2>Hoe werkt het?</h2>
              </RevealText>
              <RevealText delay={0.1}>
                <p>
                  Bij Fleurig Thús staat persoonlijk contact centraal. 
                  We beginnen altijd met een kennismakingsgesprek om uw 
                  wensen en verwachtingen te bespreken.
                </p>
              </RevealText>
            </div>

            <div className="prices-info-right">
              <motion.div
                className="process-steps"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {[
                  { step: '01', title: 'Kennismaking', text: 'Gratis en vrijblijvend gesprek' },
                  { step: '02', title: 'Plan op maat', text: 'Afgestemd op uw situatie' },
                  { step: '03', title: 'Eerste afspraak', text: 'We starten met schoonmaken' },
                  { step: '04', title: 'Evaluatie', text: 'Regelmatig kijken we samen terug' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="process-step"
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] },
                      },
                    }}
                  >
                    <span className="process-number">{item.step}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <RevealText>
              <span className="section-label">Veelgestelde vragen</span>
            </RevealText>
            <RevealText delay={0.1}>
              <h2>Heeft u vragen?</h2>
            </RevealText>
          </div>

          <motion.div
            className="faq-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="prices-cta">
        <div className="container">
          <motion.div
            className="prices-cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <h2>Klaar om te beginnen?</h2>
            <p>Neem contact op voor een vrijblijvend kennismakingsgesprek.</p>
            <MagneticButton href="/contact" dataCursor="Contact">
              Plan een gesprek
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Price Card Component
interface PriceCardProps {
  pkg: {
    name: string
    price: string
    unit: string
    description: string
    features: string[]
    highlight: boolean
  }
}

const PriceCard = ({ pkg }: PriceCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={`price-card ${pkg.highlight ? 'highlight' : ''}`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
        },
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      {pkg.highlight && <span className="price-badge">Populair</span>}
      <div className="price-header">
        <h3 className="price-name">{pkg.name}</h3>
        <p className="price-description">{pkg.description}</p>
      </div>
      <div className="price-amount">
        {pkg.price !== 'Offerte' && <span className="price-currency">€</span>}
        <span className="price-value">{pkg.price}</span>
        <span className="price-unit">{pkg.unit}</span>
      </div>
      <ul className="price-features">
        {pkg.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.05 + 0.3 }}
          >
            <span className="feature-check">✓</span>
            {feature}
          </motion.li>
        ))}
      </ul>
      <MagneticButton 
        variant={pkg.highlight ? 'primary' : 'secondary'} 
        href="/contact"
        className="price-button"
      >
        Kies {pkg.name}
      </MagneticButton>
    </motion.div>
  )
}

// FAQ Item Component
interface FAQItemProps {
  faq: {
    question: string
    answer: string
  }
}

const FAQItem = ({ faq }: FAQItemProps) => {
  return (
    <motion.div
      className="faq-item"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] },
        },
      }}
    >
      <h4 className="faq-question">{faq.question}</h4>
      <p className="faq-answer">{faq.answer}</p>
    </motion.div>
  )
}
