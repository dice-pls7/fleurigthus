'use client'

import { useRef, ReactNode, ElementType, ComponentType } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

const RevealText = ({ 
  children, 
  className = '', 
  delay = 0,
  as = 'div',
  ...props 
}: RevealTextProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const variants = {
    hidden: { 
      y: '120%',
      rotateX: -80,
      opacity: 0,
    },
    visible: { 
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  }

  const MotionComponent = (motion[as as keyof typeof motion] || motion.div) as ComponentType<any>

  return (
    <div 
      ref={ref} 
      className={`reveal-wrapper ${className}`}
      style={{ 
        overflow: 'hidden',
        perspective: '1000px',
      }}
      {...props}
    >
      <MotionComponent
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ transformOrigin: 'bottom' }}
      >
        {children}
      </MotionComponent>
    </div>
  )
}

export default RevealText
