import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Diensten', path: '/diensten' },
  { label: 'Over Ons', path: '/over-ons' },
  { label: 'Vacatures', path: '/vacatures' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-[#0f172a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Collective Clean"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-body tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#D91A5F]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-[#D91A5F]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile toggle only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0f172a]">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block font-display text-2xl ${
                  location.pathname === link.path
                    ? 'text-[#D91A5F]'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
