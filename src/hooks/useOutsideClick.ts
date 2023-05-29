import { useEffect, useState, useRef } from 'react'

export const useOutsideClick = (
  initialOpen = false,
  callback?: () => unknown
) => {
  const [open, setOpen] = useState(initialOpen)
  const reference = useRef<any>(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (reference.current && !reference.current.contains(event.target)) {
        setOpen(false)
        if (callback) callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [reference])

  return { reference, open, setOpen }
}
