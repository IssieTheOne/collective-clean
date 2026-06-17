import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

const values = [
  { title: 'Gastgericht', desc: 'Wij denken vanuit de eindgebruiker. Een schone ruimte is meer dan schoon; het is een beleving.' },
  { title: 'Kwaliteitsgericht', desc: 'KPI-metingen, digitale controles en periodieke evaluaties waarborgen consistente topkwaliteit.' },
  { title: 'Mensgericht', desc: 'Onze medewerkers zijn ons visitekaartje. Wij investeren in training, welzijn en doorgroeimogelijkheden.' },
  { title: 'Betrouwbaar', desc: 'Transparante communicatie, heldere afspraken en continuïteit van dienstverlening. Altijd.' },
]

const compliance = [
  { title: 'SNA NEN 4400-1', desc: 'Als SNA-gecertificeerd bedrijf voldoen wij aan de strengste eisen op het gebied van beloning, belasting en premies.' },
  { title: 'VCU', desc: 'Veiligheid, gezondheid en milieu staan centraal. Onze medewerkers werken volgens VCU-veiligheidsprotocollen.' },
  { title: 'PayOK', desc: 'Betalingsgarantie via PayOK zorgt voor financiële zekerheid en transparantie.' },
  { title: 'NBBU', desc: 'Lid van de Nederlandse Bond van Bemiddelings- en Uitzendondernemingen. Wij werken volgens de NBBU-cao.' },
  { title: 'VOG', desc: 'Alle medewerkers beschikken over een Verklaring Omtrent het Gedrag voor extra zekerheid.' },
  { title: 'Training', desc: 'Iedere medewerker doorloopt een uitgebreid onboardingtraject met vaktrainingen en hospitality-coaching.' },
]

const differentiators = [
  'Hospitality-mindset in elke dienstverlening',
  'Digitale kwaliteitsrapportages en realtime inzicht',
  'Flexibele opschaling bij piekmomenten',
  'Vast aanspreekpunt voor optimale communicatie',
  'Investeren in medewerkers door training',
  'Transparante prijsopbouw zonder verborgen kosten',
]

export default function OverOns() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f172a] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-6">Over Ons</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#fafaf8] leading-[0.95] max-w-4xl">
            Wij zijn uw <em className="text-[#D91A5F]">facilitaire</em> partner
          </h1>
          <p className="mt-8 text-[#fafaf8]/50 max-w-2xl leading-relaxed">
            Collective Clean is meer dan een schoonmaakbedrijf. Met jarenlange ervaring 
            in de hotelbranche en zakelijke dienstverlening brengen wij een unieke combinatie 
            van flexibiliteit, kwaliteit en gastgerichtheid.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#0f172a]/8 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '150+', label: 'Medewerkers' },
              { num: '50+', label: 'Opdrachtgevers' },
              { num: '8+', label: 'Jaar ervaring' },
              { num: '98%', label: 'Klanttevredenheid' },
            ].map((s) => (
              <div key={s.label}>
                <span className="font-display text-3xl sm:text-4xl text-[#D91A5F]">{s.num}</span>
                <p className="mt-1 text-sm text-[#0f172a]/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Missie</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-6">
                Schoonmaak als <em className="text-[#D91A5F]">beleving</em>
              </h2>
              <p className="text-[#0f172a]/60 leading-relaxed mb-6">
                Wij geloven dat schoonmaak meer is dan het verwijderen van vuil. Het is het creëren 
                van een omgeving waar mensen zich comfortabel, gezond en geïnspireerd voelen. 
                Of het nu gaat om een hotelkamer, een kantoorpand of een zorginstelling — 
                wij zorgen voor de hygienebeleving die past bij uw organisatie.
              </p>
              <div className="editorial-rule-accent" />
            </div>
            <div>
              <img
                src="/images/team.jpg"
                alt="Collective Clean team"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Kernwaarden</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-12">
            Waar wij voor <em className="text-[#D91A5F]">staan</em>
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-[#0f172a]/10">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 sm:p-10">
                <h3 className="font-display text-2xl text-[#0f172a] mb-3">{v.title}</h3>
                <p className="text-sm text-[#0f172a]/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-6">
                Wat maakt ons<br /><em className="text-[#D91A5F]">anders</em>?
              </h2>
              <div className="editorial-rule-accent mb-6" />
              <p className="text-[#0f172a]/60 leading-relaxed">
                Veel schoonmaakbedrijven bieden standaard diensten aan. Wij gaan verder. 
                Met onze hospitality-achtergrond begrijpen wij dat schoonmaak een wezenlijk 
                onderdeel is van de gastbeleving.
              </p>
            </div>
            <div className="space-y-5">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />
                  <span className="text-[#0f172a]/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Compliance</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-12">
            Certificeringen<br />&amp; <em className="text-[#D91A5F]">veiligheid</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0f172a]/10">
            {compliance.map((c) => (
              <div key={c.title} className="bg-white p-8">
                <h3 className="font-display text-lg text-[#0f172a] mb-2">{c.title}</h3>
                <p className="text-sm text-[#0f172a]/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-[#fafaf8] leading-tight mb-6">
            Kennismaken?
          </h2>
          <p className="text-[#fafaf8]/50 max-w-xl mx-auto mb-8">
            Wij komen graag bij u langs om de mogelijkheden te bespreken.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors"
          >
            Plan een kennismaking
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
