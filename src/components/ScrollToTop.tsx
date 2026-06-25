import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const isNewPage = prevPathname.current !== pathname

    if (hash) {
      const id = hash.replace('#', '')
      if (isNewPage) {
        // Cross-page with hash: wait for DOM, then scroll directly to section
        // No intermediate scroll-to-top to avoid stutter
        const timeout = setTimeout(() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 150)
        return () => clearTimeout(timeout)
      } else {
        // Same-page hash change: scroll directly to section
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    } else if (isNewPage) {
      // Cross-page without hash: smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    prevPathname.current = pathname
  }, [pathname, hash])

  return null
}
