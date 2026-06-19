import { Link } from 'react-router'
import HeroSlideshow from '../components/HeroSlideshow'
import TeamShowcase from '../components/TeamShowcase'
import Testimonials from '../components/Testimonials'
import MVO from '../components/MVO'

export default function Home() {
  return (
    <div>
      {/* ===== HERO SLIDESHOW ===== */}
      <HeroSlideshow />

      {/* ===== MANIFESTO ===== */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="editorial-rule-accent mb-10" />
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#0f172a] leading-snug max-w-4xl">
            Wij zijn uw <em className="text-[#D91A5F]">facilitaire partner</em>,
            met het oog van een hotelier en de betrouwbaarheid van een familiebedrijf.
          </p>
          <p className="mt-6 text-[#0f172a]/50 text-sm max-w-2xl leading-relaxed">
            Collective Facility Services bundelt beveiliging, receptie en schoonmaak.
            Voor organisaties die willen dat alles klopt. Één aanspreekpunt,
            één contract, drie keer zekerheid.
          </p>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                img: '/images/beveiliging.jpg',
                label: 'Beveiliging',
                title: 'Beveiliging',
                desc: 'Professionele beveiligingsdiensten voor kantoren, winkels, evenementen en vastgoed. Onze beveiligers zijn representatief, alert en klantgericht.',
                link: '/diensten#beveiliging',
              },
              {
                img: '/images/receptie.jpg',
                label: 'Receptie',
                title: 'Receptie',
                desc: 'Uw eerste indruk is onze zorg. Gastvrije receptiediensten voor bedrijven, hotels en organisaties. Professioneel, warm en efficiënt.',
                link: '/diensten#receptie',
              },
              {
                img: '/images/schoonmaak.jpg',
                label: 'Schoonmaak',
                title: 'Schoonmaak',
                desc: 'Dagelijks facilitair onderhoud en hospitality cleaning. Van kantoor tot hotel, van VvE tot zorginstelling. SNA gecertificeerd.',
                link: '/diensten#schoonmaak',
              },
            ].map((s) => (
              <Link key={s.title} to={s.link} className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-body text-white/80 tracking-widest uppercase bg-[#0f172a]/60 px-3 py-1.5">
                    {s.label}
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="font-display text-2xl sm:text-3xl text-[#0f172a] group-hover:text-[#D91A5F] transition-colors">
                    {s.title}
                  </h2>
                  <div className="editorial-rule-accent mt-3 mb-4" />
                  <p className="text-[#0f172a]/60 leading-relaxed text-sm">{s.desc}</p>
                  <span className="inline-flex items-center mt-4 text-sm font-body text-[#D91A5F]">
                    Meer over {s.label.toLowerCase()} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SHOWCASE (parallax) ===== */}
      <TeamShowcase />

      {/* ===== SECTORS ===== */}
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
            { num: '01', name: 'Kantoren & Bedrijven', desc: 'Van welkomstbalie tot veilig parkeerterrein, wij ontzorgen uw werkomgeving volledig.' },
            { num: '02', name: 'Hotels & Hospitality', desc: 'Gastvrije receptie, veilige gangen en brandschone kamers voor elke overnachting.' },
            { num: '03', name: 'Retail & Winkels', desc: 'Representatieve receptie, winkelbeveiliging en dagelijks schoonmaakonderhoud.' },
            { num: '04', name: 'Evenementen', desc: 'Crowdmanagement, toegangscontrole en hospitality voor zakelijke en publieke events.' },
            { num: '05', name: 'Zorginstellingen', desc: 'Hygiënisch onderhoud met infectieprotocollen en warme ontvangst voor bezoekers.' },
            { num: '06', name: 'VvE & Vastgoed', desc: 'Portiersdiensten, cameratoezicht en schoonmaak van gemeenschappelijke ruimtes.' },
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
                alt="Collective Facility Services team"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Waarom wij</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight mb-8">
                Meer dan<br /><em className="text-[#D91A5F]">facilitair</em>
              </h2>
              <div className="space-y-5">
                {[
                  'Drie diensten, één aanspreekpunt',
                  'Gecertificeerde medewerkers (VCU, SNA)',
                  'Digitale kwaliteitsrapportages, altijd inzicht',
                  'Flexibel inschalen als het druk wordt',
                  'Eén vast aanspreekpunt voor u',
                  'Snelle opstart, vaak binnen 2 weken',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D91A5F] mt-2 flex-shrink-0" />
                    <span className="text-[#0f172a]/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-[#0f172a]/10">
                <p className="font-display text-lg italic text-[#0f172a]/60">
                  "Flexibel als een moderne dienstverlener, scherp als een hotelier. Zo werken wij."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MVO ===== */}
      <MVO />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CERTS ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Compliance</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a]">Gecertificeerd &amp; gegarandeerd</h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto items-center justify-items-center">
            <img src="/images/cert-sna.png" alt="SNA NEN 4400-1 gecertificeerd" className="w-28 h-28 object-contain" />
            <img src="/images/cert-vcu.png" alt="VCU gecertificeerd" className="w-28 h-28 object-contain" />
            <img src="/images/cert-payok.png" alt="PayOK" className="w-28 h-28 object-contain" />
          </div>
        </div>
      </section>
    </div>
  )
}
