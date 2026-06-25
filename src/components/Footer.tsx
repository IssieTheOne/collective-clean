import { Link } from 'react-router'
import { Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-[#0f172a]/70 border-t border-[#0f172a]/8">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/logo-final.png"
              alt="Collective Facility Services"
              className="h-24 w-auto mb-4"
            />
            <p className="text-sm text-[#0f172a]/50 leading-relaxed">
              Uw landelijke partner in beveiliging, receptie en schoonmaak.
            </p>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-xs font-body text-[#0f172a]/40 tracking-widest uppercase mb-5">Diensten</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/diensten#beveiliging" className="text-[#0f172a]/70 hover:text-[#D91A5F] transition-colors">Beveiliging</Link></li>
              <li><Link to="/diensten#receptie" className="text-[#0f172a]/70 hover:text-[#D91A5F] transition-colors">Receptie</Link></li>
              <li><Link to="/diensten#schoonmaak" className="text-[#0f172a]/70 hover:text-[#D91A5F] transition-colors">Schoonmaak</Link></li>
            </ul>
          </div>

          {/* Certificeringen */}
          <div>
            <h3 className="text-xs font-body text-[#0f172a]/40 tracking-widest uppercase mb-5">Certificeringen</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-[#0f172a]/70">SNA NEN 4400-1</li>
              <li className="text-[#0f172a]/70">VCU gecertificeerd</li>
              <li className="text-[#0f172a]/70">PayOK</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-body text-[#0f172a]/40 tracking-widest uppercase mb-5">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#D91A5F]" />
                <span className="text-[#0f172a]/70">Weesperstraat 100F<br />1112 AP Diemen</span>
              </li>
              <li>
                <a href="mailto:info@collectivefacilityservices.nl" className="text-[#0f172a]/70 hover:text-[#D91A5F] transition-colors flex items-center gap-2">
                  <Mail size={14} className="flex-shrink-0 text-[#D91A5F]" />
                  info@collectivefacilityservices.nl
                </a>
              </li>
              <li>
                <a href="tel:+31208965142" className="text-[#0f172a]/70 hover:text-[#D91A5F] transition-colors flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0 text-[#D91A5F]" />
                  +31 20 896 51 42
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.google.com/maps/search/Weesperstraat+100F+Diemen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D91A5F] hover:underline text-sm"
                >
                  <ExternalLink size={12} />
                  Bekijk op Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#0f172a]/8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#0f172a]/40">
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
