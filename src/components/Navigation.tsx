import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'

const dienstenMegaMenu = {
  columns: [
    {
      title: 'Facilitair',
      image: '/images/beveiliging.jpg',
      links: [
        { label: 'Beveiliging', path: '/diensten#beveiliging' },
        { label: 'Receptie', path: '/diensten#receptie' },
        { label: 'Toegangscontrole', path: '/diensten#facilitair' },
      ],
    },
    {
      title: 'Schoonmaak',
      image: '/images/schoonmaak.jpg',
      links: [
        { label: 'Kantoor Schoonmaak', path: '/diensten#schoonmaak' },
        { label: 'Hotel Housekeeping', path: '/diensten#schoonmaak' },
        { label: 'VvE Schoonmaak', path: '/diensten#schoonmaak' },
        { label: 'Glasbewassing', path: '/diensten#schoonmaak' },
      ],
    },
    {
      title: 'Catering',
      image: '/images/catering.png',
      links: [
        { label: 'Evenementencatering', path: '/diensten#catering' },
        { label: 'Kantoorcatering', path: '/diensten#catering' },
        { label: 'Hospitality Catering', path: '/diensten#catering' },
      ],
    },
  ],
}

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'Diensten',
    path: '/diensten',
    megaMenu: true,
  },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Werken bij', path: '/vacatures' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  useEffect(() => {
    setOpenDropdown(null)
  }, [location])

  const handleDropdownClick = (path: string) => {
    setOpenDropdown(null)
    const [targetPath, hash] = path.split('#')

    if (targetPath === location.pathname && hash) {
      // Same page hash navigation - scroll directly
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (targetPath !== location.pathname && hash) {
      // Different page with hash - navigate then scroll
      navigate(path)
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 250)
    } else {
      navigate(path)
    }
  }

  return (
    <nav className="bg-white border-b border-[#0f172a]/8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group py-2">
            <img
              src="/images/logo-final.png"
              alt="Collective Facility Services"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.megaMenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.path}
                  className={`relative text-sm font-body tracking-wide transition-colors flex items-center ${
                    location.pathname === item.path
                      ? 'text-[#D91A5F]'
                      : 'text-[#0f172a]/60 hover:text-[#0f172a]'
                  }`}
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown
                      size={14}
                      className={`ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                  {location.pathname === item.path && !item.megaMenu && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-[#D91A5F]" />
                  )}
                </Link>

                {/* Mega menu for Diensten */}
                {item.megaMenu && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#0f172a]/8 shadow-xl z-50 w-[700px] max-w-[90vw]"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-3 gap-6 p-6">
                      {dienstenMegaMenu.columns.map((col) => (
                        <div key={col.title}>
                          <div className="mb-3 overflow-hidden rounded-sm">
                            <img
                              src={col.image}
                              alt={col.title}
                              className="w-full h-28 object-cover"
                            />
                          </div>
                          <h4 className="font-display text-lg text-[#0f172a] mb-2">
                            {col.title}
                          </h4>
                          <div className="border-t border-[#0f172a]/8 pt-2 space-y-1">
                            {col.links.map((link) => (
                              <button
                                key={link.label}
                                onClick={() => handleDropdownClick(link.path)}
                                className="block w-full text-left text-sm text-[#0f172a]/60 hover:text-[#D91A5F] py-1 transition-colors cursor-pointer"
                              >
                                {link.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#0f172a]/80 hover:text-[#0f172a]"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#0f172a]/8 bg-white">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setMobileOpen(false)
                    setOpenDropdown(null)
                  }}
                  className={`block font-display text-2xl ${
                    location.pathname === item.path
                      ? 'text-[#D91A5F]'
                      : 'text-[#0f172a]'
                  }`}
                >
                  {item.label}
                </Link>
                {item.megaMenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {dienstenMegaMenu.columns.map((col) => (
                      <div key={col.title}>
                        <span className="block text-sm font-semibold text-[#0f172a] mt-2">
                          {col.title}
                        </span>
                        {col.links.map((link) => (
                          <button
                            key={link.label}
                            onClick={() => {
                              handleDropdownClick(link.path)
                              setMobileOpen(false)
                            }}
                            className="block w-full text-left text-sm text-[#0f172a]/60 hover:text-[#D91A5F] pl-2 py-1 cursor-pointer"
                          >
                            {link.label}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
