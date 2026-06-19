import { useRef, useEffect } from 'react';
import {
  Code2,
  LayoutDashboard,
  Workflow,
  Plug,
  Database,
  Layers,
} from 'lucide-react';
import gsap from 'gsap';

const capabilities = [
  {
    icon: LayoutDashboard,
    title: 'Internal Dashboards',
    description: 'Real-time operational dashboards tailored to your KPIs.',
  },
  {
    icon: Workflow,
    title: 'Automation Portals',
    description: 'Self-service portals for common IT workflows and requests.',
  },
  {
    icon: Code2,
    title: 'Business Applications',
    description: 'Custom web apps built for specific operational needs.',
  },
  {
    icon: Plug,
    title: 'APIs & Integrations',
    description: 'Connect disparate systems with robust API solutions.',
  },
  {
    icon: Database,
    title: 'Data Platforms',
    description: 'Database-driven solutions for reporting and analytics.',
  },
  {
    icon: Layers,
    title: 'Workflow Tools',
    description: 'Streamline processes with custom workflow engines.',
  },
];

export default function InfrastructureMeetsCode() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll('.reveal-item');

    elements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
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

    return () => {
      gsap.killTweensOf(elements);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 md:py-40 bg-[#0a111f] overflow-hidden"
    >
      {/* Background gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#4ade80]/3 blur-[150px] pointer-events-none" />

      <div ref={contentRef} className="relative max-w-7xl mx-auto px-6">
        {/* Main heading */}
        <div className="text-center mb-16 md:mb-20 reveal-item">
          <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
            Beyond Infrastructure
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
            Infrastructure <span className="text-[#4ade80]">meets</span> code
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ITIFY is not limited to traditional IT support. When standard tools
            are not enough, we build custom solutions that bridge the gap between
            infrastructure operations and software development.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="reveal-item group p-6 bg-[#080d14]/60 border border-white/5 rounded hover:border-[#4ade80]/25 hover:bg-[#080d14] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded flex items-center justify-center bg-[#4ade80]/10 border border-[#4ade80]/20 mb-4 group-hover:bg-[#4ade80]/20 transition-all duration-300">
                  <Icon size={18} className="text-[#4ade80]" />
                </div>
                <h3 className="text-base font-medium text-white mb-2 tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal-item text-center">
          <p className="text-sm text-white/30 mb-6">
            From dashboards to APIs, we turn operational challenges into
            reliable software.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#4ade80]/30 rounded bg-[#4ade80]/5">
            <Code2 size={16} className="text-[#4ade80]" />
            <span className="text-sm text-[#4ade80]/80 font-medium">
              Custom development available for qualified projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
