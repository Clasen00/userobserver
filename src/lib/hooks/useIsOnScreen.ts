import { type RefObject, useEffect, useMemo, useState } from 'react'

export default function useIsOnScreen (ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => { setIntersecting(entry.isIntersecting) }
  ), [ref])

  useEffect(() => {
    if (ref.current !== null) {
      observer.observe(ref.current)
    }

    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}
