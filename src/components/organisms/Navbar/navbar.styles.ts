import { clsx } from 'clsx'

export function getNavbarClass(open: boolean) {
  const navbarClass = clsx(
    'absolute top-full left-0 w-full py-6 px-4 bg-slate-900 border-t-2 border-t-[#00000033] shadow-md shadow-[#00000033] md:inline-flex md:items-center md:static md:w-auto md:p-0 md:border-t-0 md:shadow-none md:gap-4',
    { hidden: !open }
  )
  return navbarClass
}

export function getNavLinkClass(hash: boolean) {
  const linkClass = clsx(
    'block text-lg my-5 md:text-base md:m-0 hover:text-fuchsia-500 transition-colors duration-300',
    { 'text-fuchsia-500': hash }
  )
  return linkClass
}
