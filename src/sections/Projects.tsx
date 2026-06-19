import { useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import gsap from 'gsap';

interface ProjectsProps {
  onNavigate: (id: string) => void;
}

const projects = [
  {
    id: 'enterprise-migration',
    title: 'Enterprise Infrastructure Migration',
    client: 'Financial Services',
    image: '/images/project-infra.jpg',
    problem:
      'Legacy on-premise infrastructure reaching end-of-life with growing performance bottlenecks and compliance risks.',
    solution:
      'Designed and executed a phased migration to modern HPE compute with VMware vSphere, including SAN replacement and network redesign.',
    technologies: ['VMware vSphere', 'HPE ProLiant', 'Veeam', 'Cisco Nexus'],
    outcome:
      '40% performance improvement, 99.9% uptime achieved, full compliance readiness.',
  },
  {
    id: 'hybrid-cloud',
    title: 'Hybrid Cloud Integration',
    client: 'Healthcare Organization',
    image: '/images/project-cloud.jpg',
    problem:
      'Need for secure cloud adoption while maintaining on-premise critical systems and patient data compliance.',
    solution:
      'Built hybrid Azure environment with AD Connect, conditional access policies, and seamless SSO integration across all applications.',
    technologies: ['Azure AD', 'Microsoft 365', 'Intune', 'AD Connect'],
    outcome:
      'Secure cloud access for 800+ users, zero-trust architecture, HIPAA compliant.',
  },
  {
    id: 'automation-platform',
    title: 'IT Automation Platform',
    client: 'Manufacturing Company',
    image: '/images/project-automation.jpg',
    problem:
      'Excessive manual IT operations consuming 60% of team capacity, leading to delays and human errors.',
    solution:
      'Developed comprehensive automation suite including user provisioning, server deployment, monitoring alerts, and reporting dashboards.',
    technologies: ['PowerShell', 'Python', 'ServiceNow', 'REST APIs'],
    outcome:
      '75% reduction in manual tasks, deployment time from days to hours, full audit trail.',
  },
];

export default function Projects({ onNavigate }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-32 md:py-40 bg-[#080d14]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
              Projects that
              <br />
              <span className="text-[#4ade80]">deliver results</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="group flex items-center gap-2 text-sm text-white/50 hover:text-[#4ade80] transition-colors duration-300 self-start md:self-auto"
          >
            View all projects
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative bg-[#0a111f] border border-white/5 rounded overflow-hidden hover:border-[#4ade80]/30 transition-all duration-500 cursor-pointer"
              onClick={() => onNavigate(`project-${project.id}`)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a111f] via-[#0a111f]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/20 backdrop-blur-sm">
                    {project.client}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={16} className="text-white/60" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-[#4ade80] transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="space-y-3 mb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">
                      Problem
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/30 mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-wider text-[#4ade80]/60 mb-1">
                    Outcome
                  </p>
                  <p className="text-sm text-[#4ade80]/80 font-medium">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-xs text-white/25 text-center">
          Projects can be published as case studies, anonymized client stories,
          or internal product showcases.
        </p>
      </div>
    </section>
  );
}
