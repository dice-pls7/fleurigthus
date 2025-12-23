'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Track listeners so we can remove them
    const elementListeners = new Map<Element, { enter: () => void; leave: () => void }>()

    // Add hover detection for interactive elements
    const addHoverListeners = () => {
      // Remove old listeners
      elementListeners.forEach((listeners, el) => {
        el.removeEventListener('mouseenter', listeners.enter)
        el.removeEventListener('mouseleave', listeners.leave)
      })
      elementListeners.clear()

      const interactiveElements = document.querySelectorAll('a, button, [data-cursor]')
      
      interactiveElements.forEach((el) => {
        const enterListener = () => {
          setIsHovering(true)
          setCursorText((el as HTMLElement).getAttribute('data-cursor') || '')
        }
        const leaveListener = () => {
          setIsHovering(false)
          setCursorText('')
        }

        el.addEventListener('mouseenter', enterListener)
        el.addEventListener('mouseleave', leaveListener)
        
        elementListeners.set(el, { enter: enterListener, leave: leaveListener })
      })
    }

    // Reset cursor state on click
    const handleClick = () => {
      setIsHovering(false)
      setCursorText('')
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('click', handleClick)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Run initially and on DOM changes
    addHoverListeners()
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('click', handleClick)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
      
      // Clean up all element listeners
      elementListeners.forEach((listeners, el) => {
        el.removeEventListener('mouseenter', listeners.enter)
        el.removeEventListener('mouseleave', listeners.leave)
      })
    }
  }, [cursorX, cursorY])

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  return (
    <>
      <motion.div
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorText && <span className="cursor-text">{cursorText}</span>}
      </motion.div>
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}

export default CustomCursor
