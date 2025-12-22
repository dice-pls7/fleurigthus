'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ObfuscatedEmail } from './ObfuscatedEmail'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    },
  }

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="footer-container">
        <motion.div className="footer-main" variants={itemVariants}>
          <div className="footer-brand">
            <h2 className="footer-logo">Fleurig Thús</h2>
            <p className="footer-tagline">
              Hulp met aandacht, warmte en menselijkheid
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigatie</h4>
              <nav>
                <Link href="/">Home</Link>
                <Link href="/prijzen">Prijzen</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
              </nav>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <div className="footer-contact">
                <ObfuscatedEmail />
                <a href="tel:+31612345678">+31 6 1234 5678</a>
                <span>Friesland, Nederland</span>
              </div>
            </div>

            <div className="footer-column">
              <h4>Volg ons</h4>
              <div className="footer-social">
                <a href="#" data-cursor="Volg">Instagram</a>
                <a href="#" data-cursor="Volg">Facebook</a>
                <a href="#" data-cursor="Volg">LinkedIn</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>© {currentYear} Fleurig Thús. Alle rechten voorbehouden.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Voorwaarden</a>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <motion.div
        className="footer-decoration"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
      />
    </motion.footer>
  )
}

export default Footer
