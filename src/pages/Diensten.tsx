import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const beveiligingServices = [
  { title: 'Objectbeveiliging', desc: 'Beveiliging van kantoorpanden, winkels, bouwplaatsen en industrieterreinen.' },
  { title: 'Evenementenbeveiliging', desc: 'Crowd management en toegangscontrole voor congressen, feesten en publieke events.' },
  { title: 'Horecabeveiliging', desc: 'Portiers en gastheerschap voor hotels, restaurants en nachtleven.' },
  { title: 'Surveillance & Rondes', desc: 'Cameraobservatie en contouren voor optimale veiligheid op uw locatie.' },
  { title: 'Toegangscontrole', desc: 'Beheer van toegang, receptiediensten en bezoekersregistratie.' },
]

const receptieServices = [
  { title: 'Receptiediensten', desc: 'Gastvrije ontvangst van bezoekers, bezoekersregistratie en telefoonafhandeling.' },
  { title: 'Gastheerschap', desc: 'Professioneel gastheerschap voor evenementen, congressen en bedrijfsbijeenkomsten.' },
  { title: 'Telefoonservice', desc: 'Centrale telefoonafhandeling en doorschakeling voor uw organisatie.' },
  { title: 'Bezoekersmanagement', desc: 'Registratie, badges en begeleiding van bezoekers op uw locatie.' },
  { title: 'Front Office', desc: 'Complete front office ondersteuning, van postverwerking tot agendabeheer.' },
]

const schoonmaakServices = [
  { title: 'Kantoor Schoonmaak', desc: 'Dagelijks facilitair onderhoud van werkplekken, vergaderruimtes en sanitaire voorzieningen.' },
  { title: 'Hotel Housekeeping', desc: 'Kwaliteitsgestuurde housekeeping voor hotels, appartementen en short-stay.' },
  { title: 'VvE Schoonmaak', desc: 'Onderhoud van trappenhuizen, liften, gangen en gemeenschappelijke ruimtes.' },
  { title: 'Zorgschoonmaak', desc: 'Hygiënisch onderhoud met protocollen voor infectiepreventie.' },
  { title: 'Glasbewassing', desc: 'Professionele glasbewassing voor kantoorpanden, winkels en hoogbouw.' },
  { title: 'Vloeronderhoud', desc: 'Periodiek vloeronderhoud, strippen, inpoetsen en dieptereiniging.' },
]

const features = [
  'Gecertificeerde medewerkers (VCU, SNA)',
  'Digitale kwaliteitsrapportages, altijd inzicht',
  'Flexibel inschalen als het druk wordt',
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
            Uw partner in <em className="text-[#D91A5F]">facility</em> services
          </h1>
          <p className="mt-8 text-[#fafaf8]/50 max-w-2xl leading-relaxed">
            Drie pijlers onder één dak: beveiliging, receptie en schoonmaak. 
            Altijd met dezelfde focus op kwaliteit en klanttevredenheid.
          </p>
        </div>
      </section>

      {/* Beveiliging */}
      <section id="beveiliging" className="scroll-mt-24 py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Pijler 01</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-6">
                <em className="text-[#D91A5F]">Beveiliging</em>
              </h2>
              <div className="editorial-rule-accent mb-6" />
              <p className="text-[#0f172a]/60 leading-relaxed mb-8">
                Onze beveiligers zijn meer dan een uniform. Zij zijn het visitekaartje van uw organisatie. 
                Alert, representatief en altijd gastgericht. Van objectbeveiliging tot evenementen, 
                wij zorgen voor een veilige omgeving.
              </p>
              <img src="/images/beveiliging.jpg" alt="Beveiliging" className="w-full h-64 object-cover" />
            </div>
            <div className="space-y-0">
              {beveiligingServices.map((s, i) => (
                <div key={s.title} className="group">
                  {i > 0 && <div className="editorial-rule" />}
                  <div className="py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-[#0f172a]/10 group-hover:text-[#D91A5F]/20 transition-colors">0{i + 1}</span>
                      <div>
                        <h3 className="font-display text-xl text-[#0f172a] group-hover:text-[#D91A5F] transition-colors">{s.title}</h3>
                        <p className="mt-1 text-sm text-[#0f172a]/50 leading-relaxed max-w-md">{s.desc}</p>
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

      {/* Receptie */}
      <section id="receptie" className="scroll-mt-24 py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="order-2 lg:order-1 space-y-0">
              {receptieServices.map((s, i) => (
                <div key={s.title} className="group">
                  {i > 0 && <div className="editorial-rule" />}
                  <div className="py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-[#0f172a]/10 group-hover:text-[#D91A5F]/20 transition-colors">0{i + 1}</span>
                      <div>
                        <h3 className="font-display text-xl text-[#0f172a] group-hover:text-[#D91A5F] transition-colors">{s.title}</h3>
                        <p className="mt-1 text-sm text-[#0f172a]/50 leading-relaxed max-w-md">{s.desc}</p>
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
                <em className="text-[#D91A5F]">Receptie</em>
              </h2>
              <div className="editorial-rule-accent mb-6" />
              <p className="text-[#0f172a]/60 leading-relaxed mb-8">
                De receptie is het hart van uw organisatie. Wij zorgen voor een warme, 
                professionele ontvangst die uw bezoekers direct het juiste gevoel geeft. 
                Gastvrijheid is ons vak.
              </p>
              <img src="/images/receptie.jpg" alt="Receptie" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Schoonmaak */}
      <section id="schoonmaak" className="scroll-mt-24 py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Pijler 03</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-6">
                <em className="text-[#D91A5F]">Schoonmaak</em>
              </h2>
              <div className="editorial-rule-accent mb-6" />
              <p className="text-[#0f172a]/60 leading-relaxed mb-8">
                Een schone werkomgeving draagt bij aan productiviteit, gezondheid en imago. 
                Wij verzorgen dagelijks facilitair onderhoud dat aansluit bij uw bedrijfsritme. 
                SNA gecertificeerd en altijd betrouwbaar.
              </p>
              <img src="/images/schoonmaak.jpg" alt="Schoonmaak" className="w-full h-64 object-cover" />
            </div>
            <div className="space-y-0">
              {schoonmaakServices.map((s, i) => (
                <div key={s.title} className="group">
                  {i > 0 && <div className="editorial-rule" />}
                  <div className="py-6">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-3xl text-[#0f172a]/10 group-hover:text-[#D91A5F]/20 transition-colors">0{i + 1}</span>
                      <div>
                        <h3 className="font-display text-xl text-[#0f172a] group-hover:text-[#D91A5F] transition-colors">{s.title}</h3>
                        <p className="mt-1 text-sm text-[#0f172a]/50 leading-relaxed max-w-md">{s.desc}</p>
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

      {/* Features */}
      <section className="py-20 sm:py-28 bg-white">
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
            Drie diensten, <em className="text-[#D91A5F]">één partner</em>
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
