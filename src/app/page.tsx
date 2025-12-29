'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/MagneticButton'
import RevealText from '@/components/RevealText'
import ParallaxSection from '@/components/ParallaxSection'
import Image from 'next/image'
import imageOfKeke from '../../public/images/Fotokeke.jpg'

const services = [
  {
    number: '01',
    title: 'Schoonmaak',
    description: 'Grondige reiniging van uw woning met aandacht voor elk detail.',
  },
  {
    number: '02',
    title: 'Organisatie',
    description: 'Hulp bij het opruimen en organiseren van uw leefruimte.',
  },
  {
    number: '03',
    title: 'Strijkservice',
    description: 'Uw was netjes gevouwen en gestreken.',
  },
  {
    number: '04',
    title: 'Persoonlijke hulp',
    description: 'Ondersteuning op maat voor uw specifieke behoeften.',
  },
]

const values = [
  { icon: '♡', title: 'Warmte', text: 'Persoonlijke aandacht staat centraal' },
  { icon: '✧', title: 'Kwaliteit', text: 'Oog voor detail in alles wat we doen' },
  { icon: '∞', title: 'Verbinding', text: 'Samen komen we verder' },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <>
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <motion.div
          className="hero-content"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="hero-text">
            <motion.span
              className="hero-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Huishoudelijke hulp met een hart
            </motion.span>
            
            <h1 className="hero-title">
              <motion.span
                className="hero-title-line"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                Fleurig
              </motion.span>
              <motion.span
                className="hero-title-line accent"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
              >
                Thús
              </motion.span>
            </h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Professionele schoonmaakster en huishoudelijke hulp in Leeuwarden en omgeving.
              <br />
              Niet alleen een schoon huis, maar een thuis waar <em>iemand zich gezien voelt</em>
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <MagneticButton href="/contact" dataCursor="Start">
                Neem contact op
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </MagneticButton>
              <MagneticButton variant="secondary" href="/prijzen" dataCursor="Bekijk">
                Bekijk prijzen
              </MagneticButton>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="hero-decoration"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <div className="decoration-circle large" />
            <div className="decoration-circle medium" />
            <div className="decoration-circle small" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Scroll</span>
          <motion.div
            className="scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-grid">
            <div className="vision-left">
              <RevealText delay={0}>
                <span className="section-label">Onze Visie</span>
              </RevealText>
              <RevealText delay={0.1}>
                <h2 className="vision-title">
                  Het is ook echt kijken naar wie er 
                  <em> achter de deur </em>
                  staat
                </h2>
              </RevealText>
            </div>

            <div className="vision-right">
              <RevealText delay={0.2}>
                <p className="vision-text">
                  Fleurig Thús is niet alleen huishoudelijke hulp. Banden opbouwen 
                  vind ik enorm belangrijk. Ik ben zelf van nergens naar iets gekomen 
                  en wat ik heb geleerd, is dat we het samen moeten doen.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <p className="vision-text">
                  In deze tijd willen veel mensen steeds zelfstandiger zijn. 
                  Zelfstandigheid is belangrijk, maar alsnog hebben we elkaar nodig 
                  om verder te komen. Niemand hoeft het alleen te doen.
                </p>
              </RevealText>
            </div>
          </div>

          {/* Values */}
          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
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
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-text">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <div className="about-image-wrapper">
                             
                <Image
                  src={imageOfKeke}
                  alt="Foto keke"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </motion.div>

            <div className="about-content">
              <RevealText delay={0.1}>
                <h2 className="about-title">Over Mij</h2>
              </RevealText>
              <RevealText delay={0.2}>
                <p className="about-text">
                  Hallo! Ik ben Keke, ik ben opgegroeid met de overtuiging dat we elkaar moeten helpen 
                  en ondersteunen. Deze waarden vormen de kern van Fleurig Thús.
                </p>
              </RevealText>
              <RevealText delay={0.3}>
                <p className="about-text">
                  Met jaren ervaring in huishoudelijke hulp, weet ik dat het niet alleen 
                  gaat om een schoon huis. Het gaat om verbinding maken, vertrouwen opbouwen, 
                  en iemand het gevoel geven dat ze er niet alleen voor staan.
                </p>
              </RevealText>
              <RevealText delay={0.4}>
                <p className="about-text">
                  Ik geloof in persoonlijke aandacht en maatwerk. Elke klant is uniek en 
                  verdient een aanpak die bij hen past. Samen maken we van uw huis een 
                  plek waar u zich echt thuis voelt.
                </p>
              </RevealText>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <RevealText>
              <span className="section-label">Diensten</span>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="services-title">
                Wat ik voor u kan betekenen
              </h2>
            </RevealText>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <ServiceItem key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <ParallaxSection speed={0.3}>
          <div className="container">
            <motion.blockquote
              className="quote"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <p>
                Elkaar helpen is essentieel. In Nederland en in de rest van de wereld. 
                <em> Niemand hoeft het alleen te doen.</em>
              </p>
            </motion.blockquote>
          </div>
        </ParallaxSection>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
              },
            }}
          >
            <h2 className="cta-title">
              Klaar voor een <em>fleurig</em> thuis?
            </h2>
            <p className="cta-text">
              Neem vrijblijvend contact op en ontdek wat ik voor u kan betekenen.
            </p>
            <MagneticButton href="/contact" variant="outline" dataCursor="Start">
              Start vandaag
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

// Service Item Component with hover animation
interface ServiceItemProps {
  service: {
    number: string
    title: string
    description: string
  }
  index: number
}

const ServiceItem = ({ service, index }: ServiceItemProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className="service-item"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <Link href="/prijzen" className="service-link" data-cursor="Bekijk">
        <span className="service-number">{service.number}</span>
        <div className="service-content">
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
        <motion.span
          className="service-arrow"
          whileHover={{ x: 10 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  )
}
