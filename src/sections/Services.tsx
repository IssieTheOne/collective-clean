import { useEffect, useRef } from 'react';
import {
  Server,
  Cloud,
  Cpu,
  Cog,
  Database,
  Code2,
  Activity,
  FolderKanban,
} from 'lucide-react';

const services = [
  {
    icon: Server,
    title: 'Infrastructure Engineering',
    description:
      'Design, implementation, and support for business critical IT environments, including servers, virtualization, storage, networking, and identity platforms.',
    tags: ['VMware', 'HPE', 'Windows Server', 'Networking'],
  },
  {
    icon: Cpu,
    title: 'VMware and Virtualization',
    description:
      'Expert support for VMware environments, migrations, optimization, troubleshooting, and infrastructure modernization.',
    tags: ['vSphere', 'vCenter', 'Migration', 'Optimization'],
  },
  {
    icon: Cloud,
    title: 'HPE Compute Solutions',
    description:
      'Specialized expertise in HPE compute environments, helping businesses deploy, manage, and optimize reliable server infrastructure.',
    tags: ['ProLiant', 'iLO', 'BladeSystems', 'SAN'],
  },
  {
    icon: Database,
    title: 'Cloud and Azure Solutions',
    description:
      'Cloud engineering, hybrid infrastructure, Azure services, identity integration, and secure cloud adoption.',
    tags: ['Azure AD', 'Hybrid', 'Intune', 'M365'],
  },
  {
    icon: Cog,
    title: 'Automation and Scripting',
    description:
      'Reducing manual work through smart scripts, technical automation, reporting tools, and repeatable workflows.',
    tags: ['PowerShell', 'Python', 'Bash', 'Ansible'],
  },
  {
    icon: Code2,
    title: 'Custom Software Solutions',
    description:
      'Development of internal tools, portals, dashboards, APIs, business applications, and custom systems tailored to operational needs.',
    tags: ['React', 'Node.js', 'REST APIs', 'SQL'],
  },
  {
    icon: Activity,
    title: 'Monitoring and Reliability',
    description:
      'Monitoring setup, alerting, technical health checks, incident visibility, and proactive infrastructure improvement.',
    tags: ['PRTG', 'Nagios', 'Zabbix', 'Grafana'],
  },
  {
    icon: FolderKanban,
    title: 'IT Project Delivery',
    description:
      'Technical coordination, project planning, stakeholder communication, implementation support, and structured delivery from idea to production.',
    tags: ['Agile', 'ITIL', 'ServiceNow', 'Scrum'],
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const update = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (e.currentTarget as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (e.currentTarget as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    };

    grid.addEventListener('mousemove', update);
    return () => grid.removeEventListener('mousemove', update);
  }, []);

  return (
    <section id="services" className="relative w-full py-32 md:py-40 bg-[#0a111f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
            Services built for
            <br />
            <span className="text-[#4ade80]">modern IT</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl leading-relaxed">
            From infrastructure engineering to custom software development,
            ITIFY delivers comprehensive technology solutions that keep your
            business moving forward.
          </p>
        </div>

        {/* Service Grid */}
        <div
          ref={gridRef}
          className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-1 rounded"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group p-6 flex flex-col min-h-[260px] cursor-default"
              >
                <div className="mb-5">
                  <div className="w-11 h-11 rounded flex items-center justify-center bg-[#4ade80]/10 border border-[#4ade80]/20 group-hover:bg-[#4ade80]/20 group-hover:border-[#4ade80]/40 transition-all duration-300">
                    <Icon size={20} className="text-[#4ade80]" />
                  </div>
                </div>
                <h3 className="text-base font-medium text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 text-white/40 border border-white/5 group-hover:border-[#4ade80]/20 group-hover:text-[#4ade80]/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
