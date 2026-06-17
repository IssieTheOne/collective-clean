import { motion } from 'framer-motion'
import { Leaf, Users, HeartHandshake } from 'lucide-react'

const pillars = [
  {
    icon: Leaf,
    title: 'Duurzaamheid',
    desc: 'Wij werken met milieuvriendelijke schoonmaakmiddelen en streven naar minimaal water- en energieverbruik. Duurzaamheid is geen optie, het is onze standaard.',
  },
  {
    icon: Users,
    title: 'Diversiteit',
    desc: 'Ons team is een afspiegeling van de samenleving. Wij geloven dat diversiteit leidt tot kracht, creativiteit en een rijkere bedrijfscultuur.',
  },
  {
    icon: HeartHandshake,
    title: 'Inclusie & Gelijkwaardigheid',
    desc: 'Iedereen verdient gelijke kansen. Wij bieden een werkomgeving waar respect, gelijkwaardigheid en persoonlijke groei voorop staan.',
  },
]

export default function MVO() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-body text-[#D91A5F] tracking-[0.2em] uppercase mb-4">MVO</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#0f172a] leading-tight">
            Maatschappelijk <em className="text-[#D91A5F]">Verantwoord</em> Ondernemen
          </h2>
          <div className="editorial-rule-accent mt-5" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[#0f172a]/10">
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D91A5F]/10 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-[#D91A5F]" />
              </div>
              <h3 className="font-display text-2xl text-[#0f172a] mb-3">{p.title}</h3>
              <p className="text-sm text-[#0f172a]/50 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
