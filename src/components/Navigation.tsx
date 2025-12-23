'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Navigation.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/prijzen', label: 'Prijzen' },
  { path: '/contact', label: 'Contact' },
  { path: '/blog', label: 'Blog' },
  { path: '/services', label: 'Services' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const menuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: {
        type: 'spring' as const,
        stiffness: 20,
        restDelta: 2,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    }),
  }

  return (
    <>
      <motion.header
        className={`nav-header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] as const }}
      >
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Fleurig Thús
            </motion.span>
          </Link>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${pathname === item.path ? 'active' : ''}`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {item.label}
                </motion.span>
                {pathname === item.path && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <motion.button
            className={`nav-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="nav-mobile-content">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={item.path}
                    className={`nav-mobile-link ${pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="nav-mobile-number">0{i + 1}</span>
                    <span className="nav-mobile-label">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="nav-mobile-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p>Hulp met aandacht, warmte en menselijkheid</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
