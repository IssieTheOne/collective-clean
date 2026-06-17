import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-end bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Pristine hotel lobby"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-16 sm:pb-24 pt-32 w-full">
          <div className="max-w-4xl">
            <p className="text-sm font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-6">
              Schoonmaak &middot; Hospitality &middot; Facility
            </p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#fafaf8] leading-[0.95] tracking-tight">
              Schoonmaak<br />
              <em className="text-[#D91A5F]">excellence</em><br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-[#fafaf8]/60">voor elke ruimte</span>
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors"
              >
                Offerte aanvragen
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="/diensten"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#fafaf8]/20 text-[#fafaf8] text-sm font-body tracking-wide hover:border-[#D91A5F] hover:text-[#D91A5F] transition-colors"
              >
                Bekijk diensten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MANIFESTO ===== */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="editorial-rule-accent mb-10" />
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0f172a] leading-snug max-w-4xl">
            Wij zijn niet zomaar een schoonmaakbedrijf. Wij zijn uw <em className="text-[#D91A5F]">facilitaire partner</em> — 
            met de precisie van een hotelier en de betrouwbaarheid van een familiebedrijf.
          </p>
          <p className="mt-6 text-[#0f172a]/50 text-sm max-w-2xl leading-relaxed">
            Collective Clean combineert hospitality-ervaring met zakelijke schoonmaak. 
            Voor hotels die elke kamerbezetting perfect willen. Voor kantoren die productiviteit 
            door reinheid verhogen. Voor zorginstellingen waar hygiëne levensbaar is.
          </p>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Hospitality */}
            <div>
              <div className="relative">
                <img
                  src="/images/hospitality.jpg"
                  alt="Hotel housekeeping"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <span className="absolute top-4 left-4 text-xs font-body text-white/80 tracking-widest uppercase bg-[#0f172a]/60 px-3 py-1.5">
                  Hospitality
                </span>
              </div>
              <div className="mt-8">
                <h2 className="font-display text-3xl sm:text-4xl text-[#0f172a]">Hospitality Cleaning</h2>
                <div className="editorial-rule-accent mt-4 mb-6" />
                <p className="text-[#0f172a]/60 leading-relaxed">
                  Housekeeping, stay-over en check-out cleaning, public area reiniging, 
                  linen handling en supervisie. Voor hotels, appartementen en short-stay 
                  accommodaties die elke gast een perfecte hygienebeleving willen bieden.
                </p>
                <Link
                  to="/diensten#hospitality"
                  className="inline-flex items-center mt-6 text-sm font-body text-[#D91A5F] hover:underline"
                >
                  Meer over hospitality →
                </Link>
              </div>
            </div>

            {/* Zakelijk */}
            <div className="lg:mt-16">
              <div className="relative">
                <img
                  src="/images/kantoor.jpg"
                  alt="Kantoor schoonmaak"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <span className="absolute top-4 left-4 text-xs font-body text-white/80 tracking-widest uppercase bg-[#0f172a]/60 px-3 py-1.5">
                  Zakelijk
                </span>
              </div>
              <div className="mt-8">
                <h2 className="font-display text-3xl sm:text-4xl text-[#0f172a]">Zakelijke Schoonmaak</h2>
                <div className="editorial-rule-accent mt-4 mb-6" />
                <p className="text-[#0f172a]/60 leading-relaxed">
                  Dagelijks facilitair onderhoud voor kantoren, VvE's, retail, scholen en zorg. 
                  SLA-gestuurd, met digitale kwaliteitsrapportages en flexibele inzet. 
                  Representatief, transparant en betrouwbaar.
                </p>
                <Link
                  to="/diensten#zakelijk"
                  className="inline-flex items-center mt-6 text-sm font-body text-[#D91A5F] hover:underline"
                >
                  Meer over zakelijke schoonmaak →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTORS — Editorial list ===== */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Branches</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight">
                Vakwerk voor <em>elke</em> sector
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-[#0f172a]/50 text-sm leading-relaxed">
                Elke branche vraagt een eigen aanpak. Wij passen onze werkwijze aan op uw specifieke eisen, 
                openingstijden en kwaliteitsnormen.
              </p>
            </div>
          </div>

          <div className="editorial-rule mb-0" />
          {[
            { num: '01', name: 'Hotels & Hospitality', desc: 'Boutique hotels, resorts, appartementen en short-stay' },
            { num: '02', name: 'Kantoren & Bedrijven', desc: 'Dagelijkse schoonmaak voor kantoorpanden en bedrijfsruimtes' },
            { num: '03', name: 'Zorginstellingen', desc: 'Hygiënisch onderhoud met protocollen voor infectiepreventie' },
            { num: '04', name: 'Retail & Winkels', desc: 'Representatief onderhoud voor winkels en showrooms' },
            { num: '05', name: 'Onderwijs', desc: 'Schoonmaak afgestemd op lestijden en vakanties' },
            { num: '06', name: 'VvE & Vastgoed', desc: 'Onderhoud van appartementencomplexen en vastgoedportefeuilles' },
          ].map((s) => (
            <div key={s.num} className="group">
              <div className="editorial-rule mb-0" />
              <div className="py-6 grid sm:grid-cols-12 gap-4 items-center cursor-default">
                <span className="sm:col-span-1 font-display text-2xl text-[#0f172a]/15 group-hover:text-[#D91A5F]/30 transition-colors">
                  {s.num}
                </span>
                <h3 className="sm:col-span-4 font-display text-xl sm:text-2xl text-[#0f172a] group-hover:text-[#D91A5F] transition-colors">
                  {s.name}
                </h3>
                <p className="sm:col-span-7 text-sm text-[#0f172a]/50 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="editorial-rule" />
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Werkwijze</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight">
              Van kennismaking tot kwaliteitsgarantie
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Kennismaking', desc: 'We bespreken uw wensen, eisen en werkterrein.' },
              { step: '02', title: 'Locatieschouw', desc: 'Professionele opname en risico-inventarisatie.' },
              { step: '03', title: 'Maatwerkofferte', desc: 'Een heldere, transparante offerte op maat.' },
              { step: '04', title: 'Implementatie', desc: 'Snelle opstart met getraind team en protocollen.' },
              { step: '05', title: 'Monitoring', desc: 'Continue kwaliteitscontrole en periodieke evaluatie.' },
            ].map((p, i, arr) => (
              <div key={p.step} className="relative">
                <span className="font-display text-5xl text-[#0f172a]/8">{p.step}</span>
                <h3 className="mt-3 font-display text-lg text-[#0f172a]">{p.title}</h3>
                <p className="mt-2 text-sm text-[#0f172a]/50 leading-relaxed">{p.desc}</p>
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 h-px bg-[#0f172a]/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/team.jpg"
                alt="Collective Clean team"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Waarom wij</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-8">
                Meer dan<br /><em className="text-[#D91A5F]">schoonmaken</em>
              </h2>
              <div className="space-y-5">
                {[
                  'Gecertificeerde medewerkers (VCU, VOG, SNA)',
                  'Digitale kwaliteitsrapportages in real-time',
                  'Flexibele opschaling bij piekmomenten',
                  'Vast aanspreekpunt voor persoonlijke service',
                  'Snelle opstart — binnen 2 weken operationeel',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />
                    <span className="text-[#0f172a]/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-[#0f172a]/10">
                <p className="font-display text-lg italic text-[#0f172a]/60">
                  "Wij combineren de flexibiliteit van een moderne dienstverlener met de kwaliteitseisen 
                  van de hospitalitybranche."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTS ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Compliance</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a]">Gecertificeerd &amp; gegarandeerd</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#0f172a]/10">
            {[
              { name: 'SNA NEN 4400-1', desc: 'Gecertificeerd schoonmaakbedrijf volgens de strengste norm' },
              { name: 'VCU', desc: 'Veiligheid, gezondheid en milieu gecertificeerd' },
              { name: 'PayOK', desc: 'Betalingsgarantie voor financiële zekerheid' },
              { name: 'NBBU', desc: 'Lid van de brancheorganisatie uitzendbureaus' },
            ].map((cert) => (
              <div key={cert.name} className="bg-white p-8 sm:p-10">
                <h3 className="font-display text-xl text-[#0f172a] mb-2">{cert.name}</h3>
                <p className="text-sm text-[#0f172a]/50 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
