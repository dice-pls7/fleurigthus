import { useEffect, useState } from 'react'

export const useObfuscatedEmail = () => {
  const [email, setEmail] = useState('')
  
  useEffect(() => {
    // Assemble email on client side
    const user = 'fleurigthus'
    const domain = 'gmail'
    const tld = 'com'
    setEmail(`${user}@${domain}.${tld}`)
  }, [])
  
  return email
}

export const ObfuscatedEmail = ({ className }: { className?: string }) => {
  const email = useObfuscatedEmail()
  
  if (!email) return <span className={className}>Loading...</span>
  
  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}
