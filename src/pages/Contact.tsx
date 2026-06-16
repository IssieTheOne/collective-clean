import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    naam: '', bedrijf: '', email: '', telefoon: '', dienst: '', bericht: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f172a] py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-body text-[#c65d3b] tracking-[0.2em] uppercase mb-6">Contact</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#fafaf8] leading-[0.95] max-w-4xl">
            Laten we <em className="text-[#c65d3b]">kennismaken</em>
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
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">Locatie</p>
                    <p className="text-[#0f172a]/70">Amsterdam & Almere</p>
                    <p className="text-[#0f172a]/70">Landelijk inzetbaar</p>
                  </div>
                  <div>
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">E-mail</p>
                    <a href="mailto:info@collectiveclean.nl" className="text-[#c65d3b] hover:underline">
                      info@collectiveclean.nl
                    </a>
                  </div>
                  <div>
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">Telefoon</p>
                    <a href="tel:+31201234567" className="text-[#c65d3b] hover:underline">
                      +31 20 123 4567
                    </a>
                  </div>
                  <div>
                    <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-1">Bereikbaar</p>
                    <p className="text-[#0f172a]/70">Ma - Vr: 08:00 - 18:00</p>
                    <p className="text-[#0f172a]/70">Schoonmaak: 24/7 mogelijk</p>
                  </div>
                </div>
              </div>

              {/* Mini certs */}
              <div className="pt-8 border-t border-[#0f172a]/8">
                <p className="text-[#0f172a]/40 uppercase tracking-wider text-xs mb-4">Gecertificeerd</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <span className="text-[#0f172a]/60">SNA NEN 4400-1</span>
                  <span className="text-[#0f172a]/60">VCU</span>
                  <span className="text-[#0f172a]/60">PayOK</span>
                  <span className="text-[#0f172a]/60">NBBU</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-[#0f172a]/8 p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#c65d3b]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={24} className="text-[#c65d3b]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#0f172a] mb-2">Bedankt voor uw aanvraag!</h3>
                  <p className="text-[#0f172a]/50">
                    Wij hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.
                  </p>
                </div>
              ) : (
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
                        value={form.naam} onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#c65d3b] transition-colors"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label htmlFor="bedrijf" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                        Bedrijf
                      </label>
                      <input
                        type="text" id="bedrijf" name="bedrijf"
                        value={form.bedrijf} onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#c65d3b] transition-colors"
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
                        value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#c65d3b] transition-colors"
                        placeholder="uw@email.nl"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefoon" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel" id="telefoon" name="telefoon"
                        value={form.telefoon} onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#c65d3b] transition-colors"
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
                      value={form.dienst} onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#c65d3b] transition-colors"
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="hospitality">Hospitality Cleaning</option>
                      <option value="kantoor">Kantoor Schoonmaak</option>
                      <option value="vve">VvE Onderhoud</option>
                      <option value="zorg">Zorgschoonmaak</option>
                      <option value="retail">Retail Cleaning</option>
                      <option value="onderwijs">Onderwijs</option>
                      <option value="glazenwassen">Glasbewassing</option>
                      <option value="vloer">Vloeronderhoud</option>
                      <option value="anders">Anders / Maatwerk</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="bericht" className="block text-xs text-[#0f172a]/50 uppercase tracking-wider mb-2">
                      Bericht
                    </label>
                    <textarea
                      id="bericht" name="bericht" rows={4}
                      value={form.bericht} onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#0f172a]/10 bg-[#fafaf8] text-sm focus:outline-none focus:border-[#c65d3b] transition-colors resize-none"
                      placeholder="Vertel ons meer over uw wensen..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#c65d3b] text-white text-sm font-body tracking-wide hover:bg-[#b05030] transition-colors"
                  >
                    <Send size={16} className="mr-2" />
                    Verstuur aanvraag
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
