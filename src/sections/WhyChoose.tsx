import { useRef, useEffect } from 'react';
import { Cpu, Wrench, Link2, MessageSquare } from 'lucide-react';
import gsap from 'gsap';

const reasons = [
  {
    icon: Cpu,
    number: '01',
    title: 'Deep infrastructure knowledge',
    description:
      'Enterprise-grade expertise across VMware, HPE, Azure, Windows Server, networking, and identity management. We have operated in complex environments and know what works.',
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Strong hands-on engineering',
    description:
      'We do not just advise — we implement, configure, troubleshoot, and optimize. Every recommendation is backed by practical execution capability.',
  },
  {
    icon: Link2,
    number: '03',
    title: 'IT operations meet custom software',
    description:
      'A rare combination: we understand both infrastructure and code. When off-the-shelf tools fall short, we build what you need — dashboards, portals, automation, APIs.',
  },
  {
    icon: MessageSquare,
    number: '04',
    title: 'Clear communication & project delivery',
    description:
      'No jargon, no surprises. Structured project approach with regular updates, clear scope definition, and transparent progress tracking from start to finish.',
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.why-reveal');
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          delay: i * 0.12,
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
      gsap.killTweensOf(items);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 md:py-40 bg-[#0a111f]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - header */}
          <div className="lg:col-span-4 why-reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
              Why ITIFY
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              Four reasons to
              <br />
              <span className="text-[#4ade80]">work with us</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed">
              We bring a rare blend of deep technical expertise, practical
              implementation skills, and clear communication that makes complex
              IT projects succeed.
            </p>
          </div>

          {/* Right column - reasons list */}
          <div className="lg:col-span-8 space-y-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.number}
                  className="why-reveal group flex gap-5 p-6 bg-[#080d14]/40 border border-white/5 rounded hover:border-[#4ade80]/20 hover:bg-[#080d14] transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded flex items-center justify-center bg-[#4ade80]/10 border border-[#4ade80]/20 group-hover:bg-[#4ade80]/20 transition-all duration-300">
                      <Icon size={20} className="text-[#4ade80]" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] text-[#4ade80]/40 font-mono">
                        {reason.number}
                      </span>
                      <h3 className="text-base font-medium text-white tracking-tight group-hover:text-[#4ade80] transition-colors duration-300">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
