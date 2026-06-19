import { useState, useRef, useEffect } from 'react';
import { Mail, Globe, MapPin, Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface ContactProps {
  onNavigate: (id: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    need: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.contact-reveal');
    items.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      gsap.killTweensOf(items);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-32 md:py-40 bg-[#080d14]"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#4ade80]/3 blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 contact-reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-[#4ade80]/70 font-medium mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
            Ready when <span className="text-[#4ade80]">you</span> are
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Let us discuss how ITIFY can help your organization build, improve,
            or automate its IT environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="contact-reveal">
              <h3 className="text-lg font-medium text-white mb-6">
                Contact details
              </h3>
              <div className="space-y-5">
                <a
                  href="mailto:ismail.boushabi@itify.be"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-[#4ade80]/10 border border-[#4ade80]/20 group-hover:bg-[#4ade80]/20 transition-all duration-300">
                    <Mail size={16} className="text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">
                      Email
                    </p>
                    <p className="text-sm text-white/70 group-hover:text-[#4ade80] transition-colors">
                      ismail.boushabi@itify.be
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-[#4ade80]/10 border border-[#4ade80]/20">
                    <Globe size={16} className="text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">
                      Website
                    </p>
                    <p className="text-sm text-white/70">itify.be</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded flex items-center justify-center bg-[#4ade80]/10 border border-[#4ade80]/20">
                    <MapPin size={16} className="text-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">
                      Location
                    </p>
                    <p className="text-sm text-white/70">Belgium</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick navigation */}
            <div className="contact-reveal pt-8 border-t border-white/5">
              <h4 className="text-sm font-medium text-white/60 mb-4">
                Explore
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Services', 'Projects', 'About'].map((item) => (
                  <button
                    key={item}
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="group flex items-center gap-1.5 text-xs text-white/40 hover:text-[#4ade80] transition-colors duration-300"
                  >
                    {item}
                    <ArrowRight
                      size={10}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 contact-reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a111f] border border-white/5 rounded p-6 md:p-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center mb-4">
                    <Send size={24} className="text-[#4ade80]" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    Message sent
                  </h3>
                  <p className="text-sm text-white/40">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#080d14] border border-white/10 rounded text-sm text-white placeholder-white/20 focus:border-[#4ade80]/50 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#080d14] border border-white/10 rounded text-sm text-white placeholder-white/20 focus:border-[#4ade80]/50 focus:outline-none transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#080d14] border border-white/10 rounded text-sm text-white placeholder-white/20 focus:border-[#4ade80]/50 focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#080d14] border border-white/10 rounded text-sm text-white placeholder-white/20 focus:border-[#4ade80]/50 focus:outline-none transition-colors"
                        placeholder="+32 ..."
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
                      What do you need help with?
                    </label>
                    <select
                      name="need"
                      value={formData.need}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#080d14] border border-white/10 rounded text-sm text-white focus:border-[#4ade80]/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#080d14]">
                        Select a service...
                      </option>
                      <option value="infrastructure" className="bg-[#080d14]">
                        Infrastructure Engineering
                      </option>
                      <option value="vmware" className="bg-[#080d14]">
                        VMware & Virtualization
                      </option>
                      <option value="cloud" className="bg-[#080d14]">
                        Cloud & Azure Solutions
                      </option>
                      <option value="automation" className="bg-[#080d14]">
                        Automation & Scripting
                      </option>
                      <option value="security" className="bg-[#080d14]">
                        Identity & Security
                      </option>
                      <option value="database" className="bg-[#080d14]">
                        Database Management
                      </option>
                      <option value="custom" className="bg-[#080d14]">
                        Custom Software Development
                      </option>
                      <option value="project" className="bg-[#080d14]">
                        IT Project Delivery
                      </option>
                      <option value="other" className="bg-[#080d14]">
                        Other
                      </option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[10px] uppercase tracking-wider text-white/30 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#080d14] border border-white/10 rounded text-sm text-white placeholder-white/20 focus:border-[#4ade80]/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-3.5 bg-[#4ade80] text-[#05080e] font-semibold rounded hover:bg-[#22d3ee] transition-all duration-300 text-sm tracking-wide"
                  >
                    Send request
                    <Send
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
