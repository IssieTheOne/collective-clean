import { ArrowLeft, ExternalLink, Calendar, Building2, CheckCircle2 } from 'lucide-react';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const projectsData: Record<string, {
  title: string;
  client: string;
  industry: string;
  duration: string;
  image: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  testimonial?: string;
}> = {
  'enterprise-migration': {
    title: 'Enterprise Infrastructure Migration',
    client: 'Financial Services Institution',
    industry: 'Banking & Finance',
    duration: '6 months',
    image: '/images/project-infra.jpg',
    problem: `The client's legacy on-premise infrastructure was reaching end-of-life with critical support contracts expiring. Performance bottlenecks were causing 15-minute login times during peak hours, and the aging SAN was presenting significant data loss risks. Compliance auditors flagged the lack of redundancy and disaster recovery capabilities as high-priority remediation items.`,
    solution: `ITIFY designed and executed a phased migration strategy:

    • Deployed new HPE ProLiant DL380 Gen10 servers with VMware vSphere 7.0
    • Implemented a new HPE MSA 2060 SAN with redundant controllers
    • Redesigned the network core with Cisco Nexus switches and proper VLAN segmentation
    • Migrated 200+ VMs using VMware vMotion with zero downtime
    • Implemented Veeam Backup & Replication with 3-2-1 backup strategy
    • Established disaster recovery site with automated failover testing`,
    technologies: ['VMware vSphere 7.0', 'HPE ProLiant DL380', 'HPE MSA 2060', 'Cisco Nexus 9K', 'Veeam B&R v12', 'Windows Server 2022'],
    outcomes: [
      '40% improvement in application response times',
      '99.97% uptime achieved (up from 97.2%)',
      'Login times reduced from 15 minutes to under 30 seconds',
      'Full compliance readiness for financial audits',
      'Zero data loss during 6-month migration period',
      'Automated DR testing reduced RTO from 24h to 2h',
    ],
  },
  'hybrid-cloud': {
    title: 'Hybrid Cloud Integration Platform',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    duration: '4 months',
    image: '/images/project-cloud.jpg',
    problem: `The healthcare organization needed to modernize their IT delivery while maintaining strict compliance with patient data protection regulations. Their 800+ staff required secure remote access to applications, but the existing VPN infrastructure was unreliable and provided poor user experience. Shadow IT was becoming a concern as departments adopted unsanctioned cloud tools.`,
    solution: `ITIFY architected and implemented a comprehensive hybrid cloud solution:

    • Configured Azure AD with seamless AD Connect synchronization
    • Deployed Microsoft 365 with conditional access policies
    • Implemented Intune MDM for 600+ devices
    • Established SSO integration for 25+ business applications
    • Configured DLP policies for HIPAA compliance
    • Deployed Azure Sentinel for security monitoring`,
    technologies: ['Azure AD Premium', 'Microsoft 365 E3', 'Intune', 'AD Connect', 'Conditional Access', 'Azure Sentinel'],
    outcomes: [
      'Secure cloud access for 800+ users across 12 locations',
      'Zero-trust architecture with MFA on all access points',
      'Full HIPAA compliance with automated policy enforcement',
      'Reduced IT support tickets by 45% through self-service',
      'Eliminated shadow IT through sanctioned M365 adoption',
      'Single sign-on across all clinical and business applications',
    ],
  },
  'automation-platform': {
    title: 'IT Automation & Self-Service Platform',
    client: 'Manufacturing Group',
    industry: 'Manufacturing',
    duration: '5 months',
    image: '/images/project-automation.jpg',
    problem: `The manufacturing company's IT team was spending 60% of their time on repetitive manual tasks: user provisioning, password resets, server deployments, and report generation. This left little capacity for strategic initiatives. Turnaround times for common requests were 3-5 days, frustrating business units and creating shadow IT risks.`,
    solution: `ITIFY built a comprehensive automation platform integrating multiple technologies:

    • Developed 45+ PowerShell automation scripts for common tasks
    • Built Python-based REST API for ServiceNow integrations
    • Created self-service portal for user provisioning and requests
    • Automated server deployment with Ansible playbooks
    • Developed real-time monitoring dashboard with PowerBI
    • Implemented automated compliance reporting`,
    technologies: ['PowerShell 7', 'Python 3.11', 'ServiceNow', 'Ansible', 'REST APIs', 'PowerBI', 'SQL Server'],
    outcomes: [
      '75% reduction in manual IT operational tasks',
      'Deployment time reduced from 3 days to 4 hours',
      'Self-service portal handling 80% of common requests',
      'Full audit trail for all automated processes',
      'IT team freed up for 3 strategic modernization projects',
      'Annual cost savings of approximately EUR 180,000',
    ],
  },
};

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#080d14] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Project not found</h2>
          <button
            onClick={onBack}
            className="text-[#4ade80] hover:underline"
          >
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080d14]">
      {/* Hero image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d14] via-[#080d14]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d14]/60 to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-6 md:left-12">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-sm text-white/60 hover:text-[#4ade80] transition-colors duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </button>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 rounded bg-[#4ade80]/15 text-[#4ade80] border border-[#4ade80]/20">
                {project.industry}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/40">
                <Calendar size={12} />
                {project.duration}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="flex items-center gap-2 text-sm text-white/50">
              <Building2 size={14} />
              {project.client}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
                The Challenge
              </h2>
              <p className="text-white/50 text-base leading-relaxed whitespace-pre-line">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
                Our Solution
              </h2>
              <p className="text-white/50 text-base leading-relaxed whitespace-pre-line">
                {project.solution}
              </p>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-6">
                Key Outcomes
              </h2>
              <div className="space-y-4">
                {project.outcomes.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-[#0a111f] border border-white/5 rounded"
                  >
                    <CheckCircle2 size={18} className="text-[#4ade80] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-white/60">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="p-6 bg-[#0a111f] border border-white/5 rounded">
              <h3 className="text-xs uppercase tracking-wider text-white/30 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 rounded bg-white/5 text-white/50 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="p-6 bg-[#0a111f] border border-white/5 rounded">
              <h3 className="text-xs uppercase tracking-wider text-white/30 mb-4">
                Project Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/30">Industry</span>
                  <span className="text-white/60">{project.industry}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/30">Duration</span>
                  <span className="text-white/60">{project.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/30">Status</span>
                  <span className="text-[#4ade80]">Completed</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-[#4ade80]/5 border border-[#4ade80]/20 rounded">
              <h3 className="text-sm font-medium text-white mb-2">
                Similar project in mind?
              </h3>
              <p className="text-xs text-white/40 mb-4">
                Let us discuss how we can help with your infrastructure challenges.
              </p>
              <button
                onClick={onBack}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4ade80] text-[#05080e] text-sm font-semibold rounded hover:bg-[#22d3ee] transition-all duration-300"
              >
                Contact us
                <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
