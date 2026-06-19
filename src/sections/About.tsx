import { useRef, useEffect } from 'react';
import { Target, Zap, Users, Globe } from 'lucide-react';
import gsap from 'gsap';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Focused' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description:
      'Every solution is engineered with meticulous attention to detail and aligned with your business objectives.',
  },
  {
    icon: Zap,
    title: 'Velocity',
    description:
      'We move fast without cutting corners. Agile delivery that respects your timelines and budget.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We work alongside your team, not above it. Clear communication and shared ownership of outcomes.',
  },
  {
    icon: Globe,
    title: 'Scale',
    description:
      'Solutions designed to grow with you. From single-server setups to enterprise-wide deployments.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.about-reveal');
    items.forEach((el, i) => {
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
      gsap.killTweensOf(items);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-32 md:py-40 bg-[#080d14]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main about content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div className="about-reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
              About ITIFY
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-8">
              Built on hands-on
              <br />
              <span className="text-[#4ade80]">engineering</span> experience
            </h2>
          </div>
          <div className="about-reveal flex flex-col justify-end">
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-6">
              ITIFY was created to bring practical, senior level IT expertise to
              organizations that need more than standard support. We combine
              infrastructure engineering, cloud knowledge, automation, and custom
              development to solve real operational challenges.
            </p>
            <p className="text-white/40 text-base leading-relaxed">
              Our approach is simple: understand the environment, identify what
              matters, and deliver solutions that are clean, reliable, and built
              to last. We understand both technical depth and business pressure —
              and we know how to balance them.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 about-reveal">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-[#0a111f] border border-white/5 rounded"
            >
              <p className="text-3xl md:text-4xl font-light text-[#4ade80] mb-2">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="about-reveal">
          <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight mb-10 text-center">
            What drives <span className="text-[#4ade80]">us</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group p-6 bg-[#0a111f] border border-white/5 rounded hover:border-[#4ade80]/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-[#4ade80]/10 border border-[#4ade80]/20 mb-4 group-hover:bg-[#4ade80]/20 transition-all duration-300">
                    <Icon size={18} className="text-[#4ade80]" />
                  </div>
                  <h4 className="text-base font-medium text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
