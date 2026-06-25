import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'Home',
    path: '/',
    dropdown: [
      { label: 'Diensten', path: '/diensten' },
      { label: 'Over Ons', path: '/over-ons' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    label: 'Diensten',
    path: '/diensten',
    dropdown: [
      { label: 'Facilitair', path: '/diensten#facilitair' },
      { label: 'Schoonmaak', path: '/diensten#schoonmaak' },
      { label: 'Catering', path: '/diensten#catering' },
    ],
  },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Werken bij', path: '/vacatures' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
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
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
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
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`ml-1 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                  {location.pathname === item.path && !item.dropdown && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-[#D91A5F]" />
                  )}
                </Link>

                {item.dropdown && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-2 bg-white border border-[#0f172a]/8 shadow-lg min-w-[200px] py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.path}
                        to={d.path}
                        className="block px-4 py-2.5 text-sm text-[#0f172a]/70 hover:text-[#D91A5F] hover:bg-[#fafaf8] transition-colors"
                      >
                        {d.label}
                      </Link>
                    ))}
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
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.path}
                        to={d.path}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-[#0f172a]/60 hover:text-[#D91A5F]"
                      >
                        {d.label}
                      </Link>
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
