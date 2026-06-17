import { Link } from 'react-router'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#fafaf8]/70">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="text-sm font-body text-[#D91A5F] tracking-widest uppercase mb-4">Start de samenwerking</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#fafaf8] leading-[1.1]">
                Klaar voor een<br />
                <em className="text-[#D91A5F]">schone</em> start?
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-[#fafaf8]/60 mb-6 max-w-md lg:ml-auto">
                Plan een vrijblijvende kennismaking of vraag een offerte aan. Wij reageren binnen 24 uur.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors"
                >
                  Offerte aanvragen
                </Link>
                <a
                  href="tel:+31201234567"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-[#fafaf8] text-sm font-body tracking-wide hover:border-[#D91A5F] hover:text-[#D91A5F] transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  +31 20 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo.png"
              alt="Collective Clean"
              className="h-20 w-auto mb-6"
            />
            <p className="text-sm text-[#fafaf8]/60 leading-relaxed">
              Uw landelijke partner in professionele schoonmaak en hospitality services.
            </p>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-xs font-body text-[#fafaf8]/40 tracking-widest uppercase mb-5">Diensten</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/diensten#hospitality" className="hover:text-[#D91A5F] transition-colors">Hotel Housekeeping</Link></li>
              <li><Link to="/diensten#zakelijk" className="hover:text-[#D91A5F] transition-colors">Kantoor Schoonmaak</Link></li>
              <li><Link to="/diensten#zakelijk" className="hover:text-[#D91A5F] transition-colors">VvE Onderhoud</Link></li>
              <li><Link to="/diensten#zakelijk" className="hover:text-[#D91A5F] transition-colors">Zorgschoonmaak</Link></li>
            </ul>
          </div>

          {/* Certificeringen */}
          <div>
            <h3 className="text-xs font-body text-[#fafaf8]/40 tracking-widest uppercase mb-5">Certificeringen</h3>
            <ul className="space-y-3 text-sm">
              <li>SNA NEN 4400-1</li>
              <li>VCU gecertificeerd</li>
              <li>PayOK</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-body text-[#fafaf8]/40 tracking-widest uppercase mb-5">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#D91A5F]" />
                <span>Weesperstraat 100F<br />1112 AP Diemen</span>
              </li>
              <li>
                <a href="mailto:info@collectiveclean.nl" className="hover:text-[#D91A5F] transition-colors flex items-center gap-2">
                  <Mail size={14} className="flex-shrink-0 text-[#D91A5F]" />
                  info@collectiveclean.nl
                </a>
              </li>
              <li>
                <a href="tel:+31201234567" className="hover:text-[#D91A5F] transition-colors flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0 text-[#D91A5F]" />
                  +31 20 123 4567
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.google.com/maps/search/Weesperstraat+100F+Diemen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D91A5F] hover:underline"
                >
                  <ExternalLink size={12} />
                  Bekijk op Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#fafaf8]/30">
          <p>&copy; 2025 Collective Clean B.V.</p>
          <div className="flex gap-6">
            <span>Privacybeleid</span>
            <span>Algemene Voorwaarden</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
