import Link from 'next/link'
import dynamic from 'next/dynamic'
import { MdClose } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import { NavbarSSR } from '../Navbar/NavbarSSR'
import { useOutsideClick } from '@/hooks/useOutsideClick'

export const Header = () => {
  const { open, reference, setOpen } = useOutsideClick()
  const Navbar = dynamic(
    () => import('../Navbar/Navbar').then(mod => mod.Navbar),
    {
      ssr: false,
      loading: () => <NavbarSSR open={open} />
    }
  )

  return (
    <header className="sticky top-0 z-50 bg-slate-900">
      <div
        className="container mx-auto py-6 px-4 flex justify-between items-center"
        ref={reference}
      >
        <Link href="/" className="text-[2.5rem] font-semibold cursor-default">
          Portafolio.
        </Link>
        <div
          className="md:hidden text-5xl text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose /> : <GiHamburgerMenu />}
        </div>
        <Navbar open={open} />
      </div>
    </header>
  )
}
