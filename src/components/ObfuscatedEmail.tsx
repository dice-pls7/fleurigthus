import { useEffect, useState } from 'react'

export const useObfuscatedEmail = () => {
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    // Decode from base64 + reverse
    const encoded = 'bW9jLmxpYW1nQHN1aHRnaXJ1ZWxm'
    const reversed = atob(encoded)
    setEmail(reversed.split('').reverse().join(''))
  }, [])
  
  return email
}

export const ObfuscatedEmail = ({ className }: { className?: string }) => {
  const email = useObfuscatedEmail()
  const [revealed, setRevealed] = useState(false)
  
  if (!email) return <span className={className}>Loading...</span>
  
  // Only reveal full email on hover/click
  const handleReveal = () => setRevealed(true)
  
  return (
    <a 
      href={revealed ? `mailto:${email}` : '#'} 
      className={className}
      onClick={(e) => {
        if (!revealed) {
          e.preventDefault()
          handleReveal()
        }
      }}
      onMouseEnter={handleReveal}
    >
      {revealed ? email : email.replace(/@.*/, '@...')}
    </a>
  )
}
