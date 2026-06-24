import { Link } from 'react-router'
import { ArrowRight, MapPin, Clock, Briefcase, CheckCircle, Send } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'

const vacancies = [
  {
    id: 'beveiliger',
    title: 'Beveiliger',
    location: 'Amsterdam / Diemen',
    type: 'Fulltime / Parttime',
    category: 'Beveiliging',
    intro: 'Als beveiliger bij Collective Facility Services ben jij het visitekaartje van onze opdrachtgevers. Jij zorgt voor een veilige omgeving met een gastvrije uitstraling.',
    tasks: [
      'Toezicht houden op locatie en preventief handelen',
      'Ontvangen en registreren van bezoekers',
      'Uitvoeren van surveillance rondes',
      'Rapporteren van incidenten en bijzonderheden',
      'Naleven van veiligheidsprotocollen',
    ],
    requirements: [
      'Beveiligingsdiploma (SVPB of vergelijkbaar)',
      'Representatief en communicatief vaardig',
      'Flexibele werkhouding',
      'Beheersing van de Nederlandse taal',
      'Eigen vervoer is een pré',
    ],
    offer: [
      'Salaris conform cao Beveiliging',
      'Reiskostenvergoeding',
      'Mogelijkheid tot doorgroeien naar teamleider',
      'Werk bij diverse opdrachtgevers',
      'Opleidingen en training',
    ],
  },
  {
    id: 'receptioniste',
    title: 'Receptioniste / Receptionist',
    location: 'Amsterdam / Diemen',
    type: 'Fulltime / Parttime',
    category: 'Receptie',
    intro: 'Als receptioniste ben jij het eerste gezicht van onze opdrachtgevers. Jij ontvangt gasten met een warme glimlach en zorgt voor een professionele indruk.',
    tasks: [
      'Ontvangen en begeleiden van bezoekers',
      'Telefoonafhandeling en doorschakeling',
      'Bezoekersregistratie en badgeuitgifte',
      'Ondersteunen bij mailroom en postverwerking',
      'Samenwerken met het facility team',
    ],
    requirements: [
      'Representatief en gastvrij',
      'Goede communicatieve vaardigheden',
      'Ervaring in een receptie- of hospitalityfunctie is een pré',
      'Beheersing van Nederlands en Engels',
      'Flexibele instelling',
    ],
    offer: [
      'Salaris conform cao Schoonmaak- en Glazenwassersbedrijf',
      'Reiskostenvergoeding',
      'Training in hospitality en gastheerschap',
      'Werken bij gerenommeerde opdrachtgevers',
      'Prettige werksfeer in een hecht team',
    ],
  },
  {
    id: 'schoonmaker-hospitality',
    title: 'Schoonmaker Hospitality',
    location: 'Amsterdam',
    type: 'Fulltime',
    category: 'Schoonmaak',
    intro: 'Als schoonmaker hospitality ben jij verantwoordelijk voor het schoonmaken van hotelkamers en publieke ruimtes. Jij zorgt ervoor dat elke gast een perfecte hygienebeleving ervaart.',
    tasks: [
      'Schoonmaken en verzorgen van hotelkamers (stay-over en check-out)',
      'Reiniging van publieke ruimtes zoals lobby\'s, gangen en liften',
      'Rapportage van technische storingen en bijzonderheden',
      'Samenwerken met het hospitality team',
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
      'Mogelijkheid tot doorgroeien naar teamleider',
      'Werk in een dynamisch en prettig team',
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
        className="group w-full sm:w-auto min-w-[320px] bg-[#0f172a] px-12 py-5 text-white transition-all duration-300 hover:bg-[#D91A5F] hover:shadow-[0_8px_30px_rgba(217,26,95,0.3)]"
      >
        <span className="flex items-center justify-center gap-4 text-base font-semibold tracking-wide">
          <Briefcase size={22} strokeWidth={2} className="text-[#D91A5F] group-hover:text-white transition-colors" />
          Solliciteer op deze functie
          <ArrowRight size={22} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
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
            Wij zijn altijd op zoek naar gemotiveerde collega's voor beveiliging, receptie en schoonmaak. 
            Bekijk onze openstaande vacatures en solliciteer direct.
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
                Waarom <em className="text-[#D91A5F]">wij</em>?
              </h2>
              <div className="editorial-rule-accent mt-4" />
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { title: 'Drie disciplines', desc: 'Werk in beveiliging, receptie of schoonmaak, met doorgroeimogelijkheden tussen de teams.' },
                { title: 'Flexibel', desc: 'Fulltime, parttime of oproepbasis. Samen zoeken we naar wat het beste past.' },
                { title: 'Gecertificeerd', desc: 'Werkgever met SNA, VCU en PayOK certificering. Goede arbeidsvoorwaarden.' },
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
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-body text-[#D91A5F] tracking-widest uppercase bg-[#D91A5F]/5 px-3 py-1">{v.category}</span>
                    <span className="flex items-center gap-1 text-xs text-[#0f172a]/40"><MapPin size={12} />{v.location}</span>
                    <span className="flex items-center gap-1 text-xs text-[#0f172a]/40"><Clock size={12} />{v.type}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#0f172a] mb-3">{v.title}</h3>
                  <p className="text-[#0f172a]/60 leading-relaxed max-w-3xl">{v.intro}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-px bg-[#0f172a]/10">
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-4"><Briefcase size={16} className="text-[#D91A5F]" /><h4 className="font-display text-sm text-[#0f172a]">Wat ga je doen</h4></div>
                    <ul className="space-y-2">{v.tasks.map((t) => (<li key={t} className="flex items-start gap-2 text-sm text-[#0f172a]/60"><span className="w-1 h-1 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />{t}</li>))}</ul>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-4"><CheckCircle size={16} className="text-[#D91A5F]" /><h4 className="font-display text-sm text-[#0f172a]">Wat vragen wij</h4></div>
                    <ul className="space-y-2">{v.requirements.map((r) => (<li key={r} className="flex items-start gap-2 text-sm text-[#0f172a]/60"><span className="w-1 h-1 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />{r}</li>))}</ul>
                  </div>
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-2 mb-4"><Briefcase size={16} className="text-[#D91A5F]" /><h4 className="font-display text-sm text-[#0f172a]">Wat bieden wij</h4></div>
                    <ul className="space-y-2">{v.offer.map((o) => (<li key={o} className="flex items-start gap-2 text-sm text-[#0f172a]/60"><span className="w-1 h-1 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />{o}</li>))}</ul>
                  </div>
                </div>

                <div className="bg-[#fafaf8] border-t border-[#0f172a]/8 px-8 py-8 sm:px-10 sm:py-10">
                  <SollicitatieForm vacancyTitle={v.title} />
                </div>
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
                en vertel ons waarom jij bij Collective Facility Services past. Wij nemen contact 
                met je op zodra er een passende functie beschikbaar is.
              </p>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-[#0f172a]/20 text-[#0f172a] text-sm font-body tracking-wide hover:border-[#D91A5F] hover:text-[#D91A5F] transition-colors">
                Open sollicitatie versturen <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white border border-[#0f172a]/10 p-8">
              <h3 className="font-display text-xl text-[#0f172a] mb-4">Wij zoeken onder andere</h3>
              <div className="space-y-3">
                {[
                  'Beveiligers (fulltime / parttime)',
                  'Receptionistes / Receptionisten',
                  'Schoonmakers (fulltime / parttime)',
                  'Teamleiders',
                  'Hospitality medewerkers',
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
