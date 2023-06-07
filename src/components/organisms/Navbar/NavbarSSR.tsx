import Link from 'next/link'

import { navbarItems } from '@/utils/constants'
import { getNavbarClass } from './navbar.styles'

export const NavbarSSR = ({ open }: { open: boolean }) => {
  return (
    <nav className={getNavbarClass(open)}>
      {navbarItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block text-[2rem] my-5 md:text-[1.7rem] md:m-0 hover:text-fuchsia-500 transition-colors duration-300"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
