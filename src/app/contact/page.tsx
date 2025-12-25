'use client'

import { motion } from 'framer-motion'
import RevealText from '@/components/RevealText'
import { useObfuscatedEmail } from '@/components/ObfuscatedEmail'

const contactInfo = [
  {
    icon: '✉',
    label: 'Email',
    value: 'email', // Will be replaced dynamically
    href: 'mailto:email', // Will be replaced dynamically
  },
  {
    icon: '☎',
    label: 'Telefoon',
    value: '+31 6 17539583',
    href: 'tel:+31612345678',
  },
  {
    icon: '◎',
    label: 'Locatie',
    value: 'Friesland, Nederland',
    href: null,
  },
]

export default function Contact() {
  const email = useObfuscatedEmail()

  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact
          </motion.span>
          <h1 className="contact-title">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Laten we
            </motion.span>
            <motion.span
              className="accent"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              praten
            </motion.span>
          </h1>
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Neem contact op voor een vrijblijvend kennismakingsgesprek
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <RevealText>
              <h2>Neem contact op</h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="contact-intro">
                Heeft u vragen of wilt u een afspraak maken? Ik hoor graag van u. 
                Samen kijken we naar de beste oplossing voor uw situatie.
              </p>
            </RevealText>

            <motion.div
              className="contact-details"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
            >
              {contactInfo.map((item, index) => {
                const displayValue = item.label === 'Email' ? email : item.value
                const displayHref = item.label === 'Email' 
                  ? `mailto:${email}?subject=Vraag over schoonmaakdiensten&body=Hoi Keke!%0D%0A%0D%0A
                  Ik heb interesse/een vraag over [Uw onderwerp/vraag]%0D%0A%0D%0A
                  Met vriendelijke groet,%0D%0A [Uw naam]` 
                  : item.href
                
                return (
                  <motion.div
                    key={index}
                    className="contact-item"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] },
                      },
                    }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-item-content">
                      <span className="contact-label">{item.label}</span>
                      {displayHref ? (
                        <a href={displayHref} className="contact-value" data-cursor="Click">
                          {displayValue}
                        </a>
                      ) : (
                        <span className="contact-value">{displayValue}</span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Availability */}
            <motion.div
              className="availability"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4>Beschikbaarheid</h4>
              <div className="availability-grid">
                <div className="availability-item">
                  <span className="day">Ma - Vr</span>
                  <span className="time">09:00 - 17:00</span>
                </div>
                <div className="availability-item">
                  <span className="day">Za</span>
                  <span className="time">Op afspraak</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (decorative) */}
      <section className="map-section">
        <motion.div
          className="map-overlay"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="map-content">
            <span className="map-pin">◎</span>
            <h3>Friesland</h3>
            <p>Werkzaam in heel Friesland</p>
          </div>
        </motion.div>
        <div className="map-background" />
      </section>
    </>
  )
}
