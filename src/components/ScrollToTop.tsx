import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const isNewPage = prevPathname.current !== pathname

    if (isNewPage) {
      // Cross-page navigation: scroll to top first, then handle hash after render
      window.scrollTo({ top: 0, behavior: 'smooth' })

      if (hash) {
        const id = hash.replace('#', '')
        const timeout = setTimeout(() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 200)
        return () => clearTimeout(timeout)
      }
    } else if (hash) {
      // Same-page hash change: scroll directly to the section
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    prevPathname.current = pathname
  }, [pathname, hash])

  return null
}
