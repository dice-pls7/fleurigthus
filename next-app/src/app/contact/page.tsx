'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import MagneticButton from '@/components/MagneticButton'
import RevealText from '@/components/RevealText'
import './contact.css'

const contactInfo = [
  {
    icon: '✉',
    label: 'Email',
    value: 'info@fleurigthus.nl',
    href: 'mailto:info@fleurigthus.nl',
  },
  {
    icon: '☎',
    label: 'Telefoon',
    value: '+31 6 1234 5678',
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
          <div className="contact-grid">
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
                {contactInfo.map((item, index) => (
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
                      {item.href ? (
                        <a href={item.href} className="contact-value" data-cursor="Click">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
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
                    <span className="time">08:00 - 18:00</span>
                  </div>
                  <div className="availability-item">
                    <span className="day">Za</span>
                    <span className="time">Op afspraak</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              {isSubmitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="success-icon">✓</span>
                  <h3>Bedankt!</h3>
                  <p>Uw bericht is verzonden. Ik neem zo snel mogelijk contact met u op.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <FormField
                      label="Naam"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      focused={focusedField === 'name'}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      focused={focusedField === 'email'}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <FormField
                      label="Telefoon"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      focused={focusedField === 'phone'}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <div className={`form-field ${focusedField === 'service' ? 'focused' : ''} ${formData.service ? 'has-value' : ''}`}>
                      <label htmlFor="service">Dienst</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option value="">Selecteer een dienst</option>
                        <option value="basis">Basis schoonmaak</option>
                        <option value="uitgebreid">Uitgebreide schoonmaak</option>
                        <option value="maatwerk">Op maat</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>
                  </div>

                  <FormField
                    label="Bericht"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    focused={focusedField === 'message'}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />

                  <motion.div
                    className="form-submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      dataCursor={isSubmitting ? '' : 'Verstuur'}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="loading-spinner" />
                          Verzenden...
                        </>
                      ) : (
                        <>
                          Verstuur bericht
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </MagneticButton>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
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

// Form Field Component
interface FormFieldProps {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  focused: boolean
  onFocus: () => void
  onBlur: () => void
  required?: boolean
}

const FormField = ({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  focused, 
  onFocus, 
  onBlur, 
  required 
}: FormFieldProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`form-field ${focused ? 'focused' : ''} ${value ? 'has-value' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <label htmlFor={name}>{label}{required && ' *'}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          rows={5}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
        />
      )}
      <motion.span
        className="field-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
