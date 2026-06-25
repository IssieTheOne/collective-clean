import React from 'react'
import { motion } from 'framer-motion'

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    text: "Collective Facility Services is al jaren onze dienstverlener naar grote tevredenheid. Ze denken in oplossingen, zijn goed bereikbaar en hebben fijne, positieve medewerkers. De samenwerking is uitstekend.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Margreet van Dijk",
    role: "Facility Manager",
    company: "Boutique Hotel Amsterdam",
  },
  {
    text: "Dankzij Collective Facility Services ziet ons kantoor er elke dag professioneel en schoon uit. Ze werken flexibel en discreet buiten kantooruren. Een betrouwbare partner die we van harte aanbevelen.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Peter Jansen",
    role: "Office Manager",
    company: "Zuidas Kantoren B.V.",
  },
  {
    text: "Wij werken al jaren samen voor receptie en schoonmaak. De hospitality-mentaliteit van het team is uniek. Onze gasten merken het verschil. Echt een aanwinst voor ons hotel.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Lisa Bakker",
    role: "Front Office Manager",
    company: "The Canal House Hotel",
  },
  {
    text: "Wat ik waardeer aan Collective Facility Services is de transparantie. We ontvangen wekelijkse kwaliteitsrapportages en hebben een vast aanspreekpunt. Dat geeft vertrouwen.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Ahmed Benali",
    role: "Hoofd Vastgoed",
    company: "VvE De Oever",
  },
  {
    text: "In de zorg is hygiëne levensbelangrijk. Wij werken met hun schoonmaakteam en beveiliging. Ze werken volgens strikte protocollen. Onze medewerkers en cliënten voelen zich veilig.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Sanne de Vries",
    role: "Locatiemanager",
    company: "Zorgcentrum De Horizon",
  },
  {
    text: "Flexibel, betrouwbaar en altijd representatief. Ons winkelteam merkt het verschil: klanten maken complimenten over hoe schoon alles erbij ligt.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    name: "Thomas Vermeer",
    role: "Store Manager",
    company: "Amsterdam Fashion Outlet",
  },
  {
    text: "Snelle opstart, heldere communicatie en een team dat zich echt committed. Van schoonmaak tot receptie, het klopt. Een echte facility partner.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Fleur Hendriks",
    role: "Directeur",
    company: "PerMens Uitzendbureau",
  },
  {
    text: "We schakelden Collective Facility Services in voor een groot congres. Het team schaalde op zonder problemen en alles was brandschoon. Professioneel tot en met.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Jeroen van den Berg",
    role: "Event Manager",
    company: "RAI Amsterdam",
  },
  {
    text: "De medewerkers van Collective Facility Services zijn altijd vriendelijk en werken hard. Ze zijn een verlengstuk van ons team geworden. We kunnen ze met een gerust hart aanbevelen.",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Emma Scholten",
    role: "HR Manager",
    company: "Tech Campus Almere",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

function TestimonialsColumn({
  className,
  testimonials: columnTestimonials,
  duration = 10,
}: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((index) => (
          <React.Fragment key={index}>
            {columnTestimonials.map(({ text, image, name, role, company }, i) => (
              <div
                className="p-8 sm:p-10 rounded-2xl border border-[#0f172a]/8 bg-white shadow-sm max-w-xs w-full"
                key={`${index}-${i}`}
              >
                <p className="text-sm text-[#0f172a]/70 leading-relaxed italic">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#0f172a] tracking-tight leading-5">
                      {name}
                    </span>
                    <span className="text-xs text-[#0f172a]/50 tracking-tight leading-5">
                      {role}
                    </span>
                    <span className="text-xs text-[#D91A5F] tracking-tight">
                      {company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#0f172a]/10 rounded-full">
            <span className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight mt-5">
            Wat onze <em className="text-[#D91A5F]">klanten</em> zeggen
          </h2>
          <p className="text-[#0f172a]/50 mt-4">
            Een selectie van opdrachtgevers die ons vertrouwen voor hun facility services.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={28} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={25} />
        </div>
      </div>
    </section>
  )
}
