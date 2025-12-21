'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

const ParallaxSection = ({ 
  children, 
  className = '', 
  speed = 0.5,
  direction = 'up',
  ...props 
}: ParallaxSectionProps) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const yRange = direction === 'up' ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  const y = useTransform(scrollYProgress, [0, 1], yRange)

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxSection
