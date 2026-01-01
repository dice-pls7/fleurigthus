'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/MagneticButton'
import './services.css';

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Diensten
          </motion.span>
          <h1 className="services-title">
            <motion.span
              className="services-title-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] as const }}
            >
              Onze
            </motion.span>
            <motion.span
              className="services-title-line accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] as const }}
            >
              Services
            </motion.span>
          </h1>
          <motion.p
            className="services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Van wassen tot opruimen: alles voor een fris en overzichtelijk huis
          </motion.p>
        </div>
      </section>

      {/* Services Content */}
      <section className="services-content">
        <div className="container">

        <section className="service-section">
          <h2 className="service-heading">🧺 Was & Strijkservice aan Huis</h2>
          <p className="service-text">
            Geen tijd of energie voor de was? Fleurig Thús komt bij u aan huis wassen en strijken, met uw eigen wasmachine en middelen.
          </p>
          <p className="service-text">
            Ik zorg ervoor dat uw was schoon, fris en netjes opgevouwen of gestreken wordt, zodat u hier zelf geen omkijken meer naar heeft.
          </p>
          <p className="service-text">
            Ideaal voor drukke huishoudens, ouderen of mensen die extra ondersteuning kunnen gebruiken.
          </p>
          <ul className="service-benefits">
            <li>✔ Persoonlijk & vertrouwd</li>
            <li>✔ Met zorg voor uw kleding</li>
            <li>✔ In uw eigen vertrouwde omgeving</li>
          </ul>
        </section>

        <section className="service-section">
          <h2 className="service-heading">Huishoudelijke Hulp bij Particulieren</h2>
          <p className="service-text">
            Fleurig Thús biedt structurele huishoudelijke hulp bij u thuis.
          </p>
          <p className="service-text">
            Of het nu wekelijks of om de week is: ik help u met de dagelijkse huishoudelijke taken, zodat uw huis schoon, fris en overzichtelijk blijft.
          </p>
          <p className="service-text strong">Denk aan:</p>
          <ul className="service-list">
            <li>Stofzuigen & dweilen</li>
            <li>Badkamer & toilet schoonmaken</li>
            <li>Keuken reinigen</li>
            <li>Afstoffen & opruimen</li>
          </ul>
          <p className="service-text">
            Alles gebeurt met uw eigen schoonmaakspullen en met oog voor uw wensen.
          </p>
        </section>

        <section className="service-section">
          <h2 className="service-heading">Move In – Move Out Schoonmaak</h2>
          <p className="service-text">
            Gaat u verhuizen? Dan kan een grondige schoonmaak veel werk zijn.
          </p>
          <p className="service-text">
            Fleurig Thús verzorgt een diepgaande schoonmaak bij verhuizing, zodat de woning netjes wordt achtergelaten of fris betrokken kan worden.
          </p>
          <p className="service-text strong">Geschikt voor:</p>
          <ul className="service-list">
            <li>Oplevering van huurwoningen</li>
            <li>Verkoop van woningen</li>
            <li>Nieuwe bewoners die schoon willen starten</li>
          </ul>
          <p className="service-text">
            Ik zorg dat alles van top tot teen wordt aangepakt.
          </p>
        </section>

        <section className="service-section">
          <h2 className="service-heading">Organizing & Opruimhulp</h2>
          <p className="service-text">
            Overzicht in huis zorgt voor rust in het hoofd.
          </p>
          <p className="service-text">
            Fleurig Thús helpt bij het organiseren en opruimen van uw woning, volledig afgestemd op uw levensstijl.
          </p>
          <p className="service-text strong">Denk aan:</p>
          <ul className="service-list">
            <li>Kasten & kleding organiseren</li>
            <li>Keuken of voorraad opruimen</li>
            <li>Structuur aanbrengen in huis</li>
            <li>Praktische indeling & tips</li>
          </ul>
          <p className="service-text">
            Samen creëren we een huis dat rust, ruimte en overzicht geeft.
          </p>
        </section>

        <section className="service-section">
          <h2 className="service-heading">Kantoor & Airbnb Schoonmaak (op aanvraag)</h2>
          <p className="service-text">
            Betrouwbare en flexibele schoonmaak voor kantoren en Airbnb-accommodaties.
          </p>
          <p className="service-text">
            Geschikt voor zowel vaste schoonmaakmomenten als tijdelijke vervanging bij uitval van een vaste schoonmaakster.
          </p>
          <p className="service-text strong">Wij verzorgen o.a.:</p>
          <ul className="service-list">
            <li>Kantoren, praktijken en werkruimtes</li>
            <li>Airbnb & short-stay accommodaties</li>
            <li>Wisselschoonmaak tussen gasten</li>
            <li>Inzet bij ziekte of onverwachte uitval</li>
            <li>Mogelijkheid tot vaste schoonmaakdagen</li>
          </ul>
          <p className="service-text">
            Elke locatie en situatie is anders.
            Daarom werken wij met een vrijblijvende offerte, afgestemd op jouw wensen en planning.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <MagneticButton href="/contact" variant="primary" dataCursor="Contact">
              Vraag vrijblijvend een offerte aan
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
          </div>
        </section>
        </div>
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
  );
}
