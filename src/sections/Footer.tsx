import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative w-full bg-[#05080e] border-t border-white/5">
      {/* Giant CTA text */}
      <div className="py-20 md:py-28 text-center px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white/10 tracking-tight">
          READY WHEN YOU ARE.
        </h2>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-10 border-t border-white/5">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="ITIFY"
                className="h-7 w-auto brightness-0 invert-[0.85] sepia-[0.3] hue-rotate-[100deg] saturate-[1.5]"
              />
              <span className="text-[#4ade80] font-medium tracking-wide">
                ITIFY
              </span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-xs">
              IT Engineering and Custom Solutions. Infrastructure expertise,
              custom development, project driven delivery.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-wider text-white/30 mb-4">
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="block text-sm text-white/40 hover:text-[#4ade80] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-wider text-white/30 mb-4">
              Services
            </h4>
            <nav className="space-y-2.5">
              {[
                'Infrastructure Engineering',
                'Cloud & Azure',
                'Automation & Scripting',
                'Custom Development',
              ].map((service) => (
                <button
                  key={service}
                  onClick={() => onNavigate('services')}
                  className="block text-sm text-white/40 hover:text-[#4ade80] transition-colors duration-300"
                >
                  {service}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-wider text-white/30 mb-4">
              Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href="mailto:ismail.boushabi@itify.be"
                className="group flex items-center gap-1.5 text-sm text-white/40 hover:text-[#4ade80] transition-colors duration-300"
              >
                Email
                <ArrowUpRight
                  size={10}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://itify.be"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-white/40 hover:text-[#4ade80] transition-colors duration-300"
              >
                itify.be
                <ArrowUpRight
                  size={10}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {currentYear} ITIFY. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            IT Engineering & Custom Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
