import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useHash } from '@/hooks/useHash'
import { navbarItems } from '@/utils/constants'
import { getNavLinkClass, getNavbarClass } from './navbar.styles'

export const Navbar = ({ open }: { open: boolean }) => {
  const router = useRouter()
  const hash = useHash()

  useEffect(() => {
    if (router.asPath === '/') {
      router.push('/#home')
    }
  }, [])

  return (
    <nav className={getNavbarClass(open)}>
      {navbarItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={getNavLinkClass(hash === item.href)}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
