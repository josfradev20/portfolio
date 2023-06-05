import { Header } from '@/components/organisms'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">{children}</main>
    </>
  )
}
