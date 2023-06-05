import Link from 'next/link'

import { getNavbarClass } from './navbar.styles'

export const NavbarSSR = ({ open }: { open: boolean }) => {
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
          className="block text-lg my-5 md:text-base md:m-0 hover:text-fuchsia-500 transition-colors duration-300"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
