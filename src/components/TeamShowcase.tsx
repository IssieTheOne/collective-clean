import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const images = [
  { src: '/images/team-beveiliging.jpg', alt: 'Beveiligingsteam', className: 'w-48 h-64 sm:w-56 sm:h-72', x: '0%', y: '0%', delay: 0 },
  { src: '/images/team-receptie.jpg', alt: 'Receptieteam', className: 'w-40 h-52 sm:w-48 sm:h-60', x: '55%', y: '-10%', delay: 0.15 },
  { src: '/images/team-schoonmaak.jpg', alt: 'Schoonmaakteam', className: 'w-44 h-56 sm:w-52 sm:h-68', x: '25%', y: '55%', delay: 0.3 },
]

const accordionItems = [
  {
    title: 'Missie & Visie',
    content: 'Wij geloven dat facilitaire diensten meer zijn dan een checklist. Het is het creëren van een omgeving waar mensen zich veilig, welkom en geïnspireerd voelen. Onze visie is om dé facilitaire partner te zijn die organisaties ontzorgt, zodat zij zich kunnen focussen op hun kernactiviteiten.',
  },
  {
    title: 'Kernwaarden',
    content: 'Gastgericht, kwaliteitsgericht, mensgericht en betrouwbaar. Dat zijn de pijlers waarop wij bouwen. Elke beslissing, elke interactie, elke dienstverlening wordt getoetst aan deze waarden. Zo zorgen wij voor consistentie in alles wat wij doen.',
  },
  {
    title: 'Ons team',
    content: 'Goed werk leveren kan alleen met de beste mensen. En die hebben we. Onze kracht is dat wij niet alleen goed zijn in wat wij doen, maar vooral dat wij graag doen wat we doen. We scholen, begeleiden, stimuleren en enthousiasmeren. Dat levert een organisatie vol medewerkers op die voldoening halen uit hun werkzaamheden.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function TeamShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">Collective Facility Services</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#0f172a]">
            Met de <em className="text-[#D91A5F]">beste mensen</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Scattered Images */}
          <div className="relative h-[400px] sm:h-[500px]">
            {images.map((img) => (
              <motion.div
                key={img.src}
                custom={img.delay}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true, margin: '-50px' }}
                className={`absolute ${img.className} overflow-hidden shadow-xl`}
                style={{ left: img.x, top: img.y }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}

            {/* Stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-4 bg-[#0f172a] text-white p-6 z-10"
            >
              <span className="font-display text-4xl sm:text-5xl text-[#D91A5F]">200+</span>
              <p className="text-sm text-white/60 mt-1">Gemotiveerde<br />collega&apos;s</p>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-[#0f172a]/60 leading-relaxed mb-8">
              Goed werk leveren, kan alleen met de beste mensen. En die hebben we. 
              Onze kracht is dat wij niet alleen goed zijn in wat wij doen, maar vooral 
              dat wij graag doen wat we doen.
            </p>

            {/* Accordion */}
            <div className="space-y-0">
              {accordionItems.map((item, i) => (
                <div key={item.title} className="border-b border-[#0f172a]/10">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className={`font-display text-lg transition-colors ${
                      openIndex === i ? 'text-[#D91A5F]' : 'text-[#0f172a] group-hover:text-[#D91A5F]'
                    }`}>
                      {item.title}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#0f172a]/40 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openIndex === i ? 'rotate-180 text-[#D91A5F]' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm text-[#0f172a]/60 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
