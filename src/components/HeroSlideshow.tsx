import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 'schoonmaak',
    image: '/images/schoonmaak.jpg',
    eyebrow: 'Schoonmaak',
    title: 'Schoon,',
    titleEm: 'representatief',
    desc: 'Dagelijks facilitair onderhoud en hospitality cleaning. SNA gecertificeerd, altijd betrouwbaar.',
    cta: 'Bekijk schoonmaak',
    ctaLink: '/diensten#schoonmaak',
  },
  {
    id: 'facilitair',
    image: '/images/beveiliging.jpg',
    eyebrow: 'Facilitair',
    title: 'Beveiliging',
    titleEm: 'Receptie',
    desc: 'Beveiliging en receptie onder één dak. Onze medewerkers zijn het visitekaartje van uw organisatie.',
    cta: 'Bekijk facilitair',
    ctaLink: '/diensten#facilitair',
  },
  {
    id: 'catering',
    image: '/images/catering.png',
    eyebrow: 'Catering',
    title: 'Smaakvol',
    titleEm: 'gastvrij',
    desc: 'Van zakelijke lunches tot evenementencatering. Smaakvol, gastvrij en altijd op maat.',
    cta: 'Bekijk catering',
    ctaLink: '/diensten#catering',
  },
]

export default function HeroSlideshow() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  const goTo = useCallback((index: number) => {
    setActive(index)
    setProgress(0)
  }, [])

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next()
          return 0
        }
        return prev + 1.5
      })
    }, 80)
    return () => clearInterval(interval)
  }, [next, active])

  const slide = slides[active]

  return (
    <section className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.image} alt={s.eyebrow} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-10 flex items-center">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="overflow-hidden mb-4">
            <p
              key={`eyebrow-${active}`}
              className="text-sm font-body text-[#D91A5F] tracking-[0.2em] uppercase animate-slideUp"
            >
              {slide.eyebrow}
            </p>
          </div>

          {/* Title */}
          <div className="overflow-hidden">
            <h1
              key={`title-${active}`}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#fafaf8] leading-[0.95] animate-slideUp"
            >
              {slide.title}<br />
              <em className="text-[#D91A5F]">{slide.titleEm}</em>
            </h1>
          </div>

          {/* Description */}
          <div className="overflow-hidden mt-6">
            <p
              key={`desc-${active}`}
              className="text-[#fafaf8]/60 max-w-lg leading-relaxed text-sm sm:text-base animate-slideUp animation-delay-100"
            >
              {slide.desc}
            </p>
          </div>

          {/* CTA */}
          <div className="overflow-hidden mt-8">
            <Link
              key={`cta-${active}`}
              to={slide.ctaLink}
              className="inline-flex items-center px-8 py-4 bg-[#D91A5F] text-white text-sm font-body font-semibold tracking-wide hover:bg-[#b0154a] transition-colors animate-slideUp animation-delay-200"
            >
              {slide.cta}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Navigation Arrows - desktop only */}
        <div className="hidden sm:flex absolute right-6 lg:right-10 bottom-32 gap-2">
          <button onClick={prevSlide} className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#D91A5F] transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#D91A5F] transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex bg-white/95 backdrop-blur-sm shadow-lg">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`relative flex-1 flex items-center gap-3 sm:gap-4 py-4 px-3 sm:px-6 text-left transition-colors ${
                  i === active ? 'bg-white' : 'bg-white/60 hover:bg-white/80'
                }`}
              >
                {/* Thumbnail */}
                <img
                  src={s.image}
                  alt={s.eyebrow}
                  className="hidden sm:block w-14 h-14 object-cover rounded-sm flex-shrink-0"
                />
                <div className="min-w-0">
                  <span className={`block text-sm font-body tracking-wide truncate ${
                    i === active ? 'text-[#0f172a] font-semibold' : 'text-[#0f172a]/50'
                  }`}>
                    {s.eyebrow}
                  </span>
                </div>
                {/* Progress bar */}
                {i === active && (
                  <span className="absolute bottom-0 left-0 h-0.5 bg-[#D91A5F] transition-all duration-100" style={{ width: `${progress}%` }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
