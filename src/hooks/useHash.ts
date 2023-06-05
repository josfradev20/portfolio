import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useHash = () => {
  const router = useRouter()
  const [hash, setHash] = useState(() => {
    return typeof window !== 'undefined' ? window.location.hash : ''
  })

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    router.events.on('hashChangeComplete', handleHashChange)

    return () => {
      router.events.off('hashChangeComplete', handleHashChange)
    }
  }, [router])

  return hash
}
