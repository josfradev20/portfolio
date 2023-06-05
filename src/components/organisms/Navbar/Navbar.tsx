import Link from 'next/link'

import { useHash } from '@/hooks/useHash'
import { getNavLinkClass, getNavbarClass } from './navbar.styles'

export const Navbar = ({ open }: { open: boolean }) => {
  const hash = useHash()

  const items = [
    {
      name: 'Inicio',
      href: '#home'
    },
    {
      name: 'Sobre mí',
      href: '#about'
    },
    {
      name: 'Servicios',
      href: '#services'
    },
    {
      name: 'Proyectos',
      href: '#projects'
    },
    {
      name: 'Contacto',
      href: '#contact'
    }
  ]

  return (
    <nav className={getNavbarClass(open)}>
      {items.map((item, index) => (
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
