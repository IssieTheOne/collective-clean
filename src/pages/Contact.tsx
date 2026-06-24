import { useForm, ValidationError } from '@formspree/react'
import { Send, CheckCircle, Phone } from 'lucide-react'

export default function Contact() {
  const [state, handleSubmit] = useForm('xwvjjejk')

  if (state.succeeded) {
    return (
      <div>
        <section className="bg-[#0f172a] py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-6">Contact</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#fafaf8] leading-[0.95] max-w-4xl">
              Laten we <em className="text-[#D91A5F]">kennismaken</em>
            </h1>
          </div>
        </section>
        <section className="py-20 sm:py-28 bg-[#fafaf8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="bg-white border border-[#0f172a]/8 p-12 text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#D91A5F]/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-[#D91A5F]" />
              </div>
              <h3 className="font-display text-2xl text-[#0f172a] mb-2">Bedankt voor uw bericht!</h3>
              <p className="text-[#0f172a]/50">
                Wij hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f172a] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-6">Contact</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#fafaf8] leading-[0.95] max-w-4xl">
            Laten we <em className="text-[#D91A5F]">kennismaken</em>
          </h1>
          <p className="mt-8 text-[#fafaf8]/50 max-w-2xl leading-relaxed">
            Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? 
            Wij reageren binnen 24 uur.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 sm:py-28 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Info */}
            <div className="space-y-10">
              <div>
                <h3 className="font-display text-xl text-[#0f172a] mb-4">Contactgegevens</h3>
                <div className="editorial-rule-accent mb-6" />
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">Adres</p>
                    <p className="text-[#0f172a]/70">Weesperstraat 100F</p>
                    <p className="text-[#0f172a]/70">1112 AP Diemen</p>
                    <a
                      href="https://www.google.com/maps/search/Weesperstraat+100F+Diemen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-1 text-xs text-[#D91A5F] hover:underline"
                    >
                      Bekijk op Google Maps →
                    </a>
                  </div>
                  <div>
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">E-mail</p>
                    <a href="mailto:info@collectivefacilityservices.nl" className="text-[#D91A5F] hover:underline">
                      info@collectivefacilityservices.nl
                    </a>
                  </div>
                  <div>
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">Telefoon</p>
                    <a href="tel:+31208965142" className="text-[#D91A5F] hover:underline">
                      +31 20 896 51 42
                    </a>
                  </div>
                  <div>
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">Bereikbaar</p>
                    <p className="text-[#0f172a]/70">Ma - Vr: 08:00 - 18:00</p>
                    <p className="text-[#0f172a]/70">Schoonmaak: 24/7 mogelijk</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-[#0f172a]/8">
                <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-4">Adres</p>
                <p className="text-sm text-[#0f172a]/60">
                  Weesperstraat 100F<br />
                  1112 AP Diemen
                </p>
                <a
                  href="https://www.google.com/maps/search/Weesperstraat+100F+Diemen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-sm text-[#D91A5F] hover:underline"
                >
                  Bekijk op Google Maps →
                </a>
              </div>

              <div className="pt-8 border-t border-[#0f172a]/8">
                <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-4">Bel direct</p>
                <a
                  href="tel:+31208965142"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors"
                >
                  <Phone size={16} />
                  +31 20 896 51 42
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-[#0f172a]/8 p-8 sm:p-10">
                <h3 className="font-display text-2xl text-[#0f172a] mb-2">Vraag een offerte aan</h3>
                <div className="editorial-rule-accent mb-8" />

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="naam" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                      Naam *
                    </label>
                    <input
                      type="text" id="naam" name="naam" required
                      className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F] transition-colors"
                      placeholder="Uw naam"
                    />
                    <ValidationError field="naam" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="bedrijf" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                      Bedrijf
                    </label>
                    <input
                      type="text" id="bedrijf" name="bedrijf"
                      className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F] transition-colors"
                      placeholder="Bedrijfsnaam"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="email" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email" id="email" name="email" required
                      className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F] transition-colors"
                      placeholder="uw@email.nl"
                    />
                    <ValidationError field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel" id="telefoon" name="telefoon"
                      className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F] transition-colors"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="dienst" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                    Gewenste dienst
                  </label>
                  <select
                    id="dienst" name="dienst"
                    className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F] transition-colors"
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="beveiliging">Beveiliging</option>
                    <option value="receptie">Receptie</option>
                    <option value="schoonmaak-kantoor">Schoonmaak Kantoor</option>
                    <option value="schoonmaak-hotel">Schoonmaak Hotel</option>
                    <option value="vve">VvE Onderhoud</option>
                    <option value="zorg">Zorgschoonmaak</option>
                    <option value="retail">Retail Cleaning</option>
                    <option value="evenementen">Evenementen</option>
                    <option value="anders">Combinatie / Maatwerk</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="bericht" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="bericht" name="bericht" rows={4}
                    className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#D91A5F] transition-colors resize-none"
                    placeholder="Vertel ons meer over uw wensen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#D91A5F] text-white text-sm font-body tracking-wide hover:bg-[#b0154a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="mr-2" />
                  {state.submitting ? 'Versturen...' : 'Verstuur aanvraag'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
