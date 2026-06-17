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
    <nav className="border-b border-[#0f172a]/8 bg-[#fafaf8]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="Collective Clean"
              className="h-10 w-auto rounded-sm"
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
                    : 'text-[#0f172a]/60 hover:text-[#0f172a]'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-[#D91A5F]" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center text-sm font-body text-[#0f172a] border-b border-[#D91A5F] pb-0.5 hover:text-[#D91A5F] transition-colors"
            >
              Offerte aanvragen
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#0f172a]"
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#0f172a]/8 bg-[#fafaf8]">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block font-display text-2xl ${
                  location.pathname === link.path
                    ? 'text-[#D91A5F]'
                    : 'text-[#0f172a]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#0f172a]/8">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body text-[#D91A5F]"
              >
                Offerte aanvragen →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
