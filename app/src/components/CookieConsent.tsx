import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Shield, BarChart3, Megaphone, Settings } from 'lucide-react'

interface CookieSettings {
  necessary: boolean
  preferences: boolean
  statistics: boolean
  marketing: boolean
}

const defaultSettings: CookieSettings = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [settings, setSettings] = useState<CookieSettings>(defaultSettings)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const saveConsent = (s: CookieSettings) => {
    localStorage.setItem('cookie-consent', JSON.stringify(s))
    setVisible(false)
  }

  const acceptAll = () => saveConsent({ necessary: true, preferences: true, statistics: true, marketing: true })
  const acceptSelection = () => saveConsent(settings)
  const acceptNecessary = () => saveConsent({ ...defaultSettings })

  const toggle = (key: keyof CookieSettings) => {
    if (key === 'necessary') return
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Left: Text */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={18} className="text-[#D91A5F]" />
              <h3 className="text-sm font-semibold text-[#0f172a]">Cookie-instellingen</h3>
            </div>
            <p className="text-sm text-[#0f172a]/60 leading-relaxed max-w-2xl">
              Wij gebruiken cookies om uw ervaring te verbeteren. 
              Kies hieronder welke cookies u accepteert.
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1 mt-3 text-sm text-[#D91A5F] hover:underline"
            >
              {expanded ? <>Minder tonen <ChevronUp size={14} /></> : <>Details tonen <ChevronDown size={14} /></>}
            </button>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 lg:w-80">
            <button
              onClick={acceptAll}
              className="flex-1 px-6 py-3.5 bg-[#D91A5F] text-white text-sm font-semibold tracking-wide hover:bg-[#b0154a] transition-colors rounded-sm"
            >
              Alle cookies toestaan
            </button>
            <button
              onClick={acceptSelection}
              className="flex-1 px-6 py-3.5 border border-[#0f172a]/20 text-[#0f172a] text-sm font-semibold tracking-wide hover:border-[#D91A5F] hover:text-[#D91A5F] transition-colors rounded-sm"
            >
              Selectie toestaan
            </button>
            <button
              onClick={acceptNecessary}
              className="flex-1 px-6 py-3 border border-[#0f172a]/10 text-[#0f172a]/60 text-sm font-medium tracking-wide hover:border-[#0f172a]/30 hover:text-[#0f172a] transition-colors rounded-sm"
            >
              Alleen noodzakelijke cookies
            </button>
          </div>
        </div>

        {/* Expanded Detail */}
        {expanded && (
          <div className="mt-6 pt-6 border-t border-[#0f172a]/8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { key: 'necessary' as const, label: 'Noodzakelijk', icon: Shield, desc: 'Essentieel voor de werking van de website.', required: true },
                { key: 'preferences' as const, label: 'Voorkeuren', icon: Settings, desc: 'Onthoudt uw instellingen.', required: false },
                { key: 'statistics' as const, label: 'Statistieken', icon: BarChart3, desc: 'Helpt ons de website te verbeteren.', required: false },
                { key: 'marketing' as const, label: 'Marketing', icon: Megaphone, desc: 'Voor gepersonaliseerde advertenties.', required: false },
              ].map((cat) => (
                <div key={cat.key} className="p-4 bg-[#fafaf8] border border-[#0f172a]/5 rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <cat.icon size={16} className="text-[#D91A5F]" />
                      <span className="text-sm font-medium text-[#0f172a]">{cat.label}</span>
                    </div>
                    <button
                      onClick={() => toggle(cat.key)}
                      disabled={cat.required}
                      className={`relative w-11 h-6 rounded-full transition-colors ${
                        settings[cat.key] ? 'bg-[#D91A5F]' : 'bg-[#0f172a]/20'
                      } ${cat.required ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                    >
                      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        settings[cat.key] ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                  <p className="text-xs text-[#0f172a]/50">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
