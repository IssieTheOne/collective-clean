import { Link } from 'react-router'
import { Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-[#fafaf8]/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-sm inline-block px-3 py-2 mb-4">
              <img
                src="/images/logo-final.png"
                alt="Collective Facility Services"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-[#fafaf8]/60 leading-relaxed">
              Uw landelijke partner in beveiliging, receptie en schoonmaak.
            </p>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-xs font-body text-[#fafaf8]/40 tracking-widest uppercase mb-5">Diensten</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/diensten#beveiliging" className="hover:text-[#D91A5F] transition-colors">Beveiliging</Link></li>
              <li><Link to="/diensten#receptie" className="hover:text-[#D91A5F] transition-colors">Receptie</Link></li>
              <li><Link to="/diensten#schoonmaak" className="hover:text-[#D91A5F] transition-colors">Schoonmaak</Link></li>
              <li><Link to="/diensten#schoonmaak" className="hover:text-[#D91A5F] transition-colors">Hotel Housekeeping</Link></li>
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
                <a href="mailto:info@collectivefacilityservices.nl" className="hover:text-[#D91A5F] transition-colors flex items-center gap-2">
                  <Mail size={14} className="flex-shrink-0 text-[#D91A5F]" />
                  info@collectivefacilityservices.nl
                </a>
              </li>
              <li>
                <a href="tel:+31208965142" className="hover:text-[#D91A5F] transition-colors flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0 text-[#D91A5F]" />
                  +31 20 896 51 42
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

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#fafaf8]/30">
          <p>&copy; 2026 Collective Facility Services B.V.</p>
          <div className="flex items-center gap-6">
            <span>Privacybeleid</span>
            <span>Algemene Voorwaarden</span>
            <a
              href="https://www.itify.be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#D91A5F] transition-colors"
            >
              Made with <Heart size={12} className="text-[#D91A5F] fill-[#D91A5F]" /> by ITIFY
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
