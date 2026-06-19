import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import gsap from 'gsap';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    text: "ITIFY transformed our aging infrastructure into a modern, reliable platform. Their VMware expertise and methodical approach meant zero downtime during a complete server refresh. Highly recommended for any serious IT project.",
    name: "Thomas Vermeulen",
    role: "IT Director",
    company: "Financial Services Firm",
  },
  {
    text: "Working with ITIFY felt like having a senior engineer on our team. They understood our Azure migration challenges immediately, built a solid hybrid architecture, and delivered ahead of schedule. The documentation alone was worth the investment.",
    name: "Sophie De Clercq",
    role: "CTO",
    company: "Healthcare Group",
  },
  {
    text: "We had been struggling with manual provisioning for years. ITIFY built an automation suite that reduced our deployment time from three days to under four hours. Their PowerShell and Python skills are exceptional.",
    name: "Marc Janssens",
    role: "Infrastructure Manager",
    company: "Manufacturing Company",
  },
  {
    text: "The custom dashboard ITIFY built for our operations team gives us real-time visibility into our entire infrastructure. It has reduced our mean time to resolution by over 60 percent. Exactly what we needed.",
    name: "Elena Popescu",
    role: "Head of Operations",
    company: "Logistics Provider",
  },
  {
    text: "ITIFY handled our ServiceNow implementation with precision and care. They understood both the technical configuration and the process design, which made the rollout smooth across all departments.",
    name: "Pieter Van den Berg",
    role: "Service Delivery Manager",
    company: "Public Sector Agency",
  },
  {
    text: "What impressed us most was their ability to communicate complex technical decisions in plain language. No jargon, no surprises — just clear, practical IT engineering that delivered results from day one.",
    name: "Anouk Martens",
    role: "CIO",
    company: "Retail Chain",
  },
  {
    text: "Our HPE server environment needed urgent optimization. ITIFY identified performance bottlenecks we did not even know existed and implemented fixes that improved response times by 40 percent.",
    name: "Bram Willems",
    role: "Systems Administrator",
    company: "Legal Practice",
  },
  {
    text: "From network redesign to Active Directory hardening, ITIFY delivered enterprise-grade work. Their attention to security detail and compliance requirements gave our auditors complete confidence.",
    name: "Camille Dubois",
    role: "Compliance Officer",
    company: "Insurance Provider",
  },
  {
    text: "ITIFY built a custom API integration between our legacy systems and modern cloud services. The solution is robust, well-documented, and has been running without issues for over a year. Exactly the kind of reliability we need.",
    name: "Lucas Peeters",
    role: "Digital Transformation Lead",
    company: "Energy Company",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 md:p-8 rounded bg-[#0d1522] border border-white/[0.06] hover:border-[#4ade80]/20 transition-all duration-400 group">
      <Quote size={20} className="text-[#4ade80]/30 mb-4 group-hover:text-[#4ade80]/50 transition-colors" />
      <p className="text-sm text-white/60 leading-relaxed mb-6">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4ade80]/20 to-[#22d3ee]/20 flex items-center justify-center border border-[#4ade80]/20">
          <span className="text-xs font-medium text-[#4ade80]">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-white/80 tracking-tight">
            {testimonial.name}
          </p>
          <p className="text-[11px] text-white/35">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollingColumn({
  items,
  duration = 20,
  className = '',
}: {
  items: Testimonial[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex flex-col gap-5">
            {items.map((t, i) => (
              <TestimonialCard key={`${index}-${i}`} testimonial={t} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll('.testimonial-reveal');
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
    return () => { gsap.killTweensOf(items); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 md:py-40 bg-[#080d14] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 testimonial-reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
            Trusted by <span className="text-[#4ade80]">IT leaders</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            See what technology leaders and operations managers say about
            working with ITIFY.
          </p>
        </div>

        {/* Scrolling Columns */}
        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[720px] overflow-hidden">
          <ScrollingColumn items={firstColumn} duration={22} className="flex-1 max-w-sm" />
          <ScrollingColumn items={secondColumn} duration={18} className="hidden md:block flex-1 max-w-sm" />
          <ScrollingColumn items={thirdColumn} duration={25} className="hidden lg:block flex-1 max-w-sm" />
        </div>
      </div>
    </section>
  );
}
