'use client'
import { clsx } from 'clsx'
import Link from 'next/link'
import { MdClose } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useHash } from '@/hooks/useHash'

export const Header = () => {
  const { open, reference, setOpen } = useOutsideClick()
  const hash = useHash()

  const navClasses = clsx(
    'absolute top-full left-0 w-full py-6 px-4 bg-slate-900 border-t-2 border-t-[#00000033] shadow-md shadow-[#00000033] md:inline-flex md:items-center md:static md:w-auto md:p-0 md:border-t-0 md:shadow-none md:gap-4',
    { hidden: !open }
  )

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

  console.log('HASH', hash)

  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <div
        className="container mx-auto py-6 px-4 flex justify-between items-center"
        ref={reference}
      >
        <Link href="#" className="text-2xl font-semibold">
          Portafolio.
        </Link>
        <div
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose /> : <GiHamburgerMenu />}
        </div>
        <nav className={navClasses}>
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
      </div>
    </header>
  )
}
