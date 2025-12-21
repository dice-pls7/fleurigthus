'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import './MagneticButton.css'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  onClick?: () => void
  dataCursor?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const MagneticButton = ({ 
  children, 
  className = '', 
  variant = 'primary',
  href,
  onClick,
  dataCursor,
  type,
  disabled,
  ...props 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.3
    const y = (clientY - (top + height / 2)) * 0.3
    setPosition({ x, y })
  }

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 })
  }

  if (href) {
    return (
      <motion.div
        className="magnetic-button-wrapper"
        onMouseMove={handleMouse}
        onMouseLeave={resetPosition}
      >
        <Link
          href={href}
          className={`magnetic-button ${variant} ${className}`}
          data-cursor={dataCursor}
          {...props}
        >
          <motion.span
            className="magnetic-button-inner"
            animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          >
            {children}
          </motion.span>
          <motion.span
            className="magnetic-button-bg"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          />
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={`magnetic-button ${variant} ${className}`}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileTap={{ scale: 0.95 }}
      data-cursor={dataCursor}
      type={type}
      disabled={disabled}
      {...props}
    >
      <motion.span
        className="magnetic-button-inner"
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        {children}
      </motion.span>
      <motion.span
        className="magnetic-button-bg"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
      />
    </motion.button>
  )
}

export default MagneticButton
