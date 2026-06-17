import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const hospitalityServices = [
  { title: 'Housekeeping', desc: 'Dagelijkse kamerreiniging, stay-over en check-out cleaning met kwaliteitscontrole per kamer.' },
  { title: 'Public Area Cleaning', desc: 'Reiniging van lobby\'s, gangen, liften, fitnessruimtes en alle gemeenschappelijke ruimtes.' },
  { title: 'Linen Handling', desc: 'Opname, sortering en registratie van hoteltextiel in samenwerking met uw wasserij.' },
  { title: 'Periodieke Reiniging', desc: 'Dieptereiniging van tapijten, meubels en vloeren volgens een vast onderhoudsplan.' },
  { title: 'Supervisie', desc: 'Ervaren teamleiders die het team aansturen en kwaliteit bewaken volgens KPI\'s.' },
]

const regularServices = [
  { title: 'Kantoor Schoonmaak', desc: 'Dagelijks facilitair onderhoud van werkplekken, vergaderruimtes, keukens en sanitaire voorzieningen.' },
  { title: 'VvE Schoonmaak', desc: 'Onderhoud van trappenhuizen, liften, gangen en gemeenschappelijke ruimtes in appartementencomplexen.' },
  { title: 'Zorgschoonmaak', desc: 'Hygiënisch onderhoud met protocollen voor infectiepreventie en gebiedsgebonden werkwijzen.' },
  { title: 'Retail Cleaning', desc: 'Schoonmaakonderhoud voor winkels en showrooms, altijd representatief voor uw klanten.' },
  { title: 'Glasbewassing', desc: 'Professionele glasbewassing voor kantoorpanden, winkels en hoogbouw.' },
  { title: 'Vloeronderhoud', desc: 'Periodiek vloeronderhoud, strippen, inpoetsen en dieptereiniging voor alle vloertypes.' },
]

const features = [
  'Gecertificeerde medewerkers (VCU, VOG)',
  'Digitale kwaliteitsrapportages',
  'Flexibele opschaling',
  'Transparante urenregistratie',
  'Periodieke evaluaties',
  'SLA-gestuurde dienstverlening',
]

export default function Diensten() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f172a] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-6">Diensten</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#fafaf8] leading-[0.95] max-w-4xl">
            Wat wij <em className="text-[#D91A5F]">doen</em>, doen wij goed
          </h1>
          <p className="mt-8 text-[#fafaf8]/50 max-w-2xl leading-relaxed">
            Twee specialistische pijlers: hospitality cleaning voor de hotelbranche, 
            en reguliere schoonmaak voor kantoren, zorg, retail en vastgoed. 
            Altijd met dezelfde focus op kwaliteit.
          </p>
        </div>
      </section>

      {/* Hospitality */}
      <section id="hospitality" className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Pijler 01</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-6">
                Hospitality<br /><em className="text-[#D91A5F]">Cleaning</em>
              </h2>
              <div className="editorial-rule-accent mb-6" />
              <p className="text-[#0f172a]/60 leading-relaxed mb-8">
                Hotel schoonmaak is een vak apart. Uw gasten verwachten een vlekkeloze 
                hygienebeleving bij elke kamerbezetting. Wij leveren kwaliteitsgestuurde 
                housekeeping met ervaren hospitality-professionals.
              </p>
              <img
                src="/images/hospitality.jpg"
                alt="Hotel housekeeping"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-0">
              {hospitalityServices.map((s, i) => (
                <div key={s.title} className="group">
                  {i > 0 && <div className="editorial-rule" />}
                  <div className="py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-[#0f172a]/10 group-hover:text-[#D91A5F]/20 transition-colors">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-[#0f172a] group-hover:text-[#D91A5F] transition-colors">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#0f172a]/50 leading-relaxed max-w-md">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="editorial-rule" />
            </div>
          </div>
        </div>
      </section>

      {/* Regular */}
      <section id="zakelijk" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="order-2 lg:order-1 space-y-0">
              {regularServices.map((s, i) => (
                <div key={s.title} className="group">
                  {i > 0 && <div className="editorial-rule" />}
                  <div className="py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-[#0f172a]/10 group-hover:text-[#D91A5F]/20 transition-colors">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-[#0f172a] group-hover:text-[#D91A5F] transition-colors">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#0f172a]/50 leading-relaxed max-w-md">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="editorial-rule" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Pijler 02</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-6">
                Zakelijke<br /><em className="text-[#D91A5F]">Schoonmaak</em>
              </h2>
              <div className="editorial-rule-accent mb-6" />
              <p className="text-[#0f172a]/60 leading-relaxed mb-8">
                Een schone werkomgeving draagt bij aan productiviteit, gezondheid en het 
                imago van uw organisatie. Wij verzorgen dagelijks facilitair onderhoud dat 
                volledig aansluit bij uw bedrijfsritme.
              </p>
              <img
                src="/images/kantoor.jpg"
                alt="Kantoor schoonmaak"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0f172a] leading-tight mb-4">
                In elke dienst,<br /><em className="text-[#D91A5F]">hetzelfde</em> commitment
              </h2>
              <div className="editorial-rule-accent" />
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />
                  <span className="text-[#0f172a]/70 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-[#fafaf8] leading-tight mb-6">
            Benieuwd naar de <em className="text-[#D91A5F]">mogelijkheden</em>?
          </h2>
          <p className="text-[#fafaf8]/50 max-w-xl mx-auto mb-8">
            Neem contact op voor een vrijblijvende offerte of plan een kennismaking.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors"
          >
            Offerte aanvragen
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
