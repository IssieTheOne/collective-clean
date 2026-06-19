import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-[#080d14]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav('hero')}
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/logo.png"
            alt="ITIFY"
            className="h-8 w-auto brightness-0 invert-[0.85] sepia-[0.3] hue-rotate-[100deg] saturate-[1.5] group-hover:brightness-110 transition-all duration-300"
          />
          <span className="text-[#4ade80] font-medium text-lg tracking-wide">
            ITIFY
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-sm text-white/70 hover:text-[#4ade80] transition-colors duration-300 tracking-wide uppercase font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="text-sm px-5 py-2.5 border border-[#4ade80]/40 text-[#4ade80] hover:bg-[#4ade80]/10 hover:border-[#4ade80]/70 transition-all duration-300 rounded font-medium tracking-wide"
          >
            Start Project
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white/80 hover:text-[#4ade80] transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-[#080d14]/95 backdrop-blur-lg border-b border-white/5 md:hidden">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left text-white/70 hover:text-[#4ade80] transition-colors duration-300 tracking-wide uppercase font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('contact')}
              className="mt-2 text-sm px-5 py-3 border border-[#4ade80]/40 text-[#4ade80] hover:bg-[#4ade80]/10 transition-all duration-300 rounded font-medium tracking-wide text-center"
            >
              Start Project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
