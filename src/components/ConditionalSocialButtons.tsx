'use client'

import { usePathname } from 'next/navigation'
import SocialButtons from './SocialButtons'

export default function ConditionalSocialButtons() {
  const pathname = usePathname()
  
  // Hide social buttons on blog pages
  const isBlogPage = pathname?.startsWith('/blog')
  
  if (isBlogPage) {
    return null
  }
  
  return <SocialButtons />
}
