import { Link } from 'react-router'
import { ArrowRight, MapPin, Clock, Briefcase, CheckCircle, Send } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'

const vacancies = [
  {
    id: 'schoonmaker-hospitality',
    title: 'Schoonmaker Hospitality',
    location: 'Amsterdam',
    type: 'Fulltime',
    category: 'Hospitality',
    intro: 'Als schoonmaker hospitality ben jij verantwoordelijk voor het schoonmaken van hotelkamers en publieke ruimtes. Jij zorgt ervoor dat elke gast een perfecte hygienebeleving ervaart bij aankomst.',
    tasks: [
      'Schoonmaken en verzorgen van hotelkamers (stay-over en check-out)',
      'Reiniging van publieke ruimtes zoals lobby\'s, gangen en liften',
      'Rapportage van technische storingen en bijzonderheden',
      'Samenwerken met het hospitality team voor optimale gastbeleving',
      'Naleven van veiligheids- en kwaliteitsprotocollen',
    ],
    requirements: [
      'Ervaring in de schoonmaak is een pré, niet vereist',
      'Representatief en gastgericht',
      'Nauwkeurig en kwaliteitsbewust',
      'Flexibele werkhouding',
      'Beheersing van de Nederlandse taal',
    ],
    offer: [
      'Salaris conform cao Schoonmaak- en Glazenwassersbedrijf',
      'Reiskostenvergoeding',
      'Opleiding en training on the job',
      ' Mogelijkheid tot doorgroeien naar teamleider',
      'Werk in een dynamisch en prettig team',
    ],
  },
  {
    id: 'teamleider-schoonmaak',
    title: 'Teamleider Schoonmaak',
    location: 'Almere',
    type: 'Fulltime',
    category: 'Leidinggevend',
    intro: 'Als teamleider schoonmaak stuur jij een team van schoonmakers aan bij onze opdrachtgevers. Je bent het eerste aanspreekpunt voor zowel het team als de klant en zorgt voor een optimale kwaliteit en tevredenheid.',
    tasks: [
      'Aansturen en coachen van het schoonmaakteam op locatie',
      'Uitvoeren van kwaliteitscontroles volgens KPI\'s',
      'Begeleiden van nieuwe medewerkers (onboarding)',
      'Opstellen van werkroosters en indelen van personeel',
      'Contact onderhouden met de opdrachtgever',
      'Rapportage van uitgevoerde werkzaamheden',
    ],
    requirements: [
      'Minimaal 1 jaar ervaring in een leidinggevende functie',
      'Ervaring in de schoonmaakbranche is een pré',
      'Goede communicatieve vaardigheden',
      'Oplossingsgericht en besluitvaardig',
      'Beheersing van de Nederlandse taal, Engels is een pré',
      'Flexibele instelling qua werktijden',
    ],
    offer: [
      'Salaris conform cao, schaal teamleider',
      'Reiskostenvergoeding',
      'Mogelijkheid tot het volgen van leiderschapstrainingen',
      'Doe je werk bij gerenommeerde opdrachtgevers',
      'Werken binnen een professioneel en groeiend bedrijf',
    ],
  },
]

function SollicitatieForm({ vacancyTitle }: { vacancyTitle: string }) {
  const [state, handleSubmit] = useForm('xwvjjejk')
  const [showForm, setShowForm] = useState(false)

  if (state.succeeded) {
    return (
      <div className="p-6 bg-[#f0fdf4] border border-green-200 text-center">
        <CheckCircle size={24} className="text-green-600 mx-auto mb-2" />
        <p className="text-sm text-green-700 font-medium">Bedankt! Wij nemen binnen 24 uur contact op.</p>
      </div>
    )
  }

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        className="inline-flex items-center px-6 py-3 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors"
      >
        Solliciteer op deze functie
        <ArrowRight size={16} className="ml-2" />
      </button>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white border-t border-[#0f172a]/10">
      <input type="hidden" name="onderwerp" value={`Sollicitatie: ${vacancyTitle}`} />
      <input type="hidden" name="vacature" value={vacancyTitle} />
      <p className="text-sm text-[#0f172a]/60 mb-4">Solliciteren op: <strong className="text-[#0f172a]">{vacancyTitle}</strong></p>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-1.5">Naam *</label>
          <input type="text" name="naam" required className="w-full px-3 py-2.5 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F]" placeholder="Uw naam" />
          <ValidationError field="naam" errors={state.errors} />
        </div>
        <div>
          <label className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-1.5">E-mail *</label>
          <input type="email" name="email" required className="w-full px-3 py-2.5 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F]" placeholder="uw@email.nl" />
          <ValidationError field="email" errors={state.errors} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-1.5">Telefoon</label>
          <input type="tel" name="telefoon" className="w-full px-3 py-2.5 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F]" placeholder="+31 6 12345678" />
        </div>
        <div>
          <label className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-1.5">Woonplaats</label>
          <input type="text" name="woonplaats" className="w-full px-3 py-2.5 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F]" placeholder="Amsterdam" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-1.5">Motivatie / Korte toelichting</label>
        <textarea name="bericht" rows={3} className="w-full px-3 py-2.5 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F] resize-none" placeholder="Waarom past deze functie bij jou?" />
      </div>
      <div className="flex gap-3">
        <button type="submit" disabled={state.submitting} className="inline-flex items-center px-6 py-3 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors disabled:opacity-50">
          <Send size={14} className="mr-2" />
          {state.submitting ? 'Versturen...' : 'Verstuur sollicitatie'}
        </button>
        <button type="button" onClick={() => setShowForm(false)} className="px-4 py-3 text-sm text-[#0f172a]/50 hover:text-[#0f172a] transition-colors">
          Annuleren
        </button>
      </div>
    </form>
  )
}

export default function Vacatures() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f172a] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-6">Vacatures</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#fafaf8] leading-[0.95] max-w-4xl">
            Word onderdeel van <em className="text-[#D91A5F]">ons team</em>
          </h1>
          <p className="mt-8 text-[#fafaf8]/50 max-w-2xl leading-relaxed">
            Wij zijn altijd op zoek naar gemotiveerde collega's die samen met ons 
            willen werken aan schone en gastvrije ruimtes. Bekijk onze openstaande 
            vacatures en solliciteer direct.
          </p>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-16 sm:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Werken bij</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0f172a] leading-tight">
                Waarom <em className="text-[#D91A5F]">Collective Clean</em>?
              </h2>
              <div className="editorial-rule-accent mt-4" />
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Groei mee', desc: 'Wij investeren in jouw ontwikkeling met trainingen en doorgroeimogelijkheden.' },
                { title: 'Flexibel', desc: 'Fulltime, parttime of oproepbasis — wij zoeken samen naar de beste invulling.' },
                { title: 'Gecertificeerd', desc: 'Werkgever met SNA, VCU en NBBU certificering. Goede arbeidsvoorwaarden.' },
                { title: 'Teamspirit', desc: 'Werken in een hecht team met collega\'s die elkaar helpen en inspireren.' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-display text-lg text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#0f172a]/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-baseline justify-between mb-12">
            <div>
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Openstaande functies</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0f172a]">Vacatures</h2>
            </div>
            <span className="hidden sm:block text-sm text-[#0f172a]/40">{vacancies.length} openstaand</span>
          </div>

          <div className="space-y-8">
            {vacancies.map((v) => (
              <div key={v.id} className="border border-[#0f172a]/10 bg-[#fafaf8]">
                {/* Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-body text-[#D91A5F] tracking-widest uppercase bg-[#D91A5F]/5 px-3 py-1">
                      {v.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#0f172a]/40">
                      <MapPin size={12} />
                      {v.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#0f172a]/40">
                      <Clock size={12} />
                      {v.type}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0f172a] mb-3">{v.title}</h3>
                  <p className="text-[#0f172a]/60 leading-relaxed max-w-3xl">{v.intro}</p>
                </div>

                {/* Details */}
                <div className="grid sm:grid-cols-3 gap-px bg-[#0f172a]/10">
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase size={16} className="text-[#D91A5F]" />
                      <h4 className="font-display text-sm text-[#0f172a]">Wat ga je doen</h4>
                    </div>
                    <ul className="space-y-2">
                      {v.tasks.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-sm text-[#0f172a]/60">
                          <span className="w-1 h-1 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle size={16} className="text-[#D91A5F]" />
                      <h4 className="font-display text-sm text-[#0f172a]">Wat vragen wij</h4>
                    </div>
                    <ul className="space-y-2">
                      {v.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-[#0f172a]/60">
                          <span className="w-1 h-1 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase size={16} className="text-[#D91A5F]" />
                      <h4 className="font-display text-sm text-[#0f172a]">Wat bieden wij</h4>
                    </div>
                    <ul className="space-y-2">
                      {v.offer.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm text-[#0f172a]/60">
                          <span className="w-1 h-1 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inline Formspree Form */}
                <SollicitatieForm vacancyTitle={v.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section className="py-16 sm:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-[#0f172a] leading-tight mb-4">
                Geen passende vacature <em className="text-[#D91A5F]">gevonden</em>?
              </h2>
              <div className="editorial-rule-accent mb-6" />
              <p className="text-[#0f172a]/60 leading-relaxed mb-6">
                Wij zijn altijd op zoek naar goede mensen. Stuur een open sollicitatie 
                en vertel ons waarom jij bij Collective Clean past. Wij nemen contact 
                met je op zodra er een passende functie beschikbaar is.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-[#0f172a]/20 text-[#0f172a] text-sm font-body tracking-wide hover:border-[#D91A5F] hover:text-[#D91A5F] transition-colors"
              >
                Open sollicitatie versturen
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white border border-[#0f172a]/10 p-8">
              <h3 className="font-display text-xl text-[#0f172a] mb-4">Wij zoeken onder andere</h3>
              <div className="space-y-3">
                {[
                  'Schoonmakers (fulltime / parttime)',
                  'Teamleiders schoonmaak',
                  'Hospitality medewerkers',
                  'Glasbewassers',
                  'Vloerspecialisten',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D91A5F] flex-shrink-0" />
                    <span className="text-sm text-[#0f172a]/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
