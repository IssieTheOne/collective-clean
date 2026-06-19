import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scrollY / vh, 1);

      if (videoRef.current) {
        const scale = 1 + progress * 0.1;
        videoRef.current.style.transform = `scale(${scale})`;
      }
      if (contentRef.current) {
        const opacity = 1 - progress * 1.5;
        const translateY = progress * 60;
        contentRef.current.style.opacity = String(Math.max(opacity, 0));
        contentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[#05080e]"
    >
      {/* Video Background - Datacenter */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ transformOrigin: 'center center' }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05080e] via-[#05080e]/50 to-[#05080e]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05080e]/70 to-transparent" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-5xl will-change-transform"
      >
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#4ade80]/80 font-medium mb-4 md:mb-6">
          ITIFY // INFRASTRUCTURE EXPERTS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] tracking-tight mb-6 md:mb-8">
          IT engineering that
          <br />
          keeps your business <span className="text-[#4ade80]">moving</span>.
        </h1>
        <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-8 md:mb-10">
          ITIFY helps organizations design, improve, automate, and support their
          IT environments. From VMware and HPE compute to Azure, monitoring,
          scripting, and custom software, we deliver practical solutions that are
          built around real business needs.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => onNavigate('contact')}
            className="group flex items-center gap-2 px-6 py-3.5 bg-[#4ade80] text-[#05080e] font-semibold rounded hover:bg-[#22d3ee] transition-all duration-300 text-sm tracking-wide shadow-glow hover:shadow-glow-lg"
          >
            Book a consultation
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/80 font-medium rounded hover:border-[#4ade80]/50 hover:text-[#4ade80] transition-all duration-300 text-sm tracking-wide backdrop-blur-sm"
          >
            View our expertise
          </button>
        </div>
        <p className="mt-8 text-xs text-white/30 tracking-wide">
          Infrastructure expertise. Custom development. Project driven delivery.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-glow">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
          Scroll
        </span>
        <ChevronDown size={16} className="text-white/30" />
      </div>
    </section>
  );
}
