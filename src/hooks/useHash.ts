import { useEffect, useState } from 'react'

export const useHash = () => {
  const [hash, setHash] = useState(() => {
    return typeof window !== 'undefined' ? window.location.hash : ''
  })

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange, true)

    return () => {
      window.removeEventListener('hashchange', handleHashChange, true)
    }
  }, [])

  return hash
}
