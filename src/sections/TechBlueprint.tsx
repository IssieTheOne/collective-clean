import { useRef, useEffect, useState } from 'react';

export default function TechBlueprint() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const width = 1920;
  const height = 1080;
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const usableWidth = width - margin.left - margin.right;
  const usableHeight = height - margin.top - margin.bottom;
  const gridCols = 12;
  const gridRows = 8;
  const cellW = usableWidth / gridCols;
  const cellH = usableHeight / gridRows;
  const c = (col: number) => margin.left + col * cellW;
  const r = (row: number) => margin.top + row * cellH;

  const lines = [
    { id: 'l1', x1: c(1), y1: r(2), x2: c(5), y2: r(2), width: 2, glow: 2 },
    { id: 'l2', x1: c(5), y1: r(2), x2: c(5), y2: r(6), width: 4, glow: 3 },
    { id: 'l3', x1: c(5), y1: r(6), x2: c(9), y2: r(6), width: 2, glow: 2 },
    { id: 'l4', x1: c(9), y1: r(6), x2: c(9), y2: r(3), width: 3, glow: 3 },
    { id: 'l5', x1: c(9), y1: r(3), x2: c(11), y2: r(3), width: 2, glow: 2 },
    { id: 'l6', x1: c(2), y1: r(2), x2: c(2), y2: r(7), width: 2, glow: 2 },
    { id: 'l7', x1: c(2), y1: r(7), x2: c(7), y2: r(7), width: 3, glow: 3 },
    { id: 'l8', x1: c(7), y1: r(7), x2: c(7), y2: r(4), width: 2, glow: 2 },
    { id: 'l9', x1: c(7), y1: r(4), x2: c(10), y2: r(4), width: 4, glow: 4 },
    { id: 'l10', x1: c(10), y1: r(4), x2: c(10), y2: r(1), width: 2, glow: 2 },
    { id: 'l11', x1: c(0), y1: r(1), x2: c(6), y2: r(1), width: 2, glow: 2 },
    { id: 'l12', x1: c(6), y1: r(1), x2: c(6), y2: r(5), width: 3, glow: 3 },
    { id: 'l13', x1: c(6), y1: r(5), x2: c(3), y2: r(5), width: 2, glow: 2 },
    { id: 'l14', x1: c(3), y1: r(5), x2: c(3), y2: r(3), width: 2, glow: 2 },
    { id: 'l15', x1: c(3), y1: r(3), x2: c(8), y2: r(3), width: 2, glow: 2 },
    { id: 'l16', x1: c(8), y1: r(3), x2: c(8), y2: r(7), width: 3, glow: 3 },
    { id: 'l17', x1: c(8), y1: r(7), x2: c(11), y2: r(7), width: 2, glow: 2 },
    { id: 'l18', x1: c(11), y1: r(7), x2: c(11), y2: r(2), width: 2, glow: 2 },
    { id: 'l19', x1: c(11), y1: r(2), x2: c(12), y2: r(2), width: 2, glow: 2 },
    { id: 'l20', x1: c(4), y1: r(1), x2: c(4), y2: r(6), width: 1, glow: 1 },
    { id: 'l21', x1: c(0), y1: r(4), x2: c(12), y2: r(4), width: 1, glow: 1 },
  ];

  const totalLength = lines.reduce(
    (sum, line) => sum + Math.hypot(line.x2 - line.x1, line.y2 - line.y1) * (line.width * 15),
    0
  );

  let cumLength = 0;
  const lineData = lines.map((line) => {
    const length = Math.hypot(line.x2 - line.x1, line.y2 - line.y1) * (line.width * 15);
    const startP = cumLength / totalLength;
    const endP = (cumLength + length) / totalLength;
    const midP = (startP + endP) / 2;
    cumLength += length;
    return { ...line, length, startP, endP, midP };
  });

  // Build glow wipes at junctions
  const glowWipes: Array<{
    id: string;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    strokeW: number;
    width: number;
    startP: number;
    endP: number;
    fromT: number;
    toT: number;
    pathD: string;
  }> = [];

  const eps = 0.01;
  const pointsEqual = (a: { x: number; y: number }, b: { x: number; y: number }) =>
    Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps;

  const getT = (
    line: { x1: number; y1: number; x2: number; y2: number },
    point: { x: number; y: number }
  ) => {
    const dx = line.x2 - line.x1;
    const dy = line.y2 - line.y1;
    const len = Math.hypot(dx, dy);
    if (len < 0.001) return 0;
    if (Math.abs(dx) > Math.abs(dy)) return (point.x - line.x1) / dx;
    return (point.y - line.y1) / dy;
  };

  for (let i = 0; i < lineData.length; i++) {
    for (let j = 0; j < lineData.length; j++) {
      if (i === j) continue;
      const line1 = lineData[i];
      const line2 = lineData[j];
      const iStart = { x: line1.x1, y: line1.y1 };
      const iEnd = { x: line1.x2, y: line1.y2 };
      const jStart = { x: line2.x1, y: line2.y1 };
      const jEnd = { x: line2.x2, y: line2.y2 };

      let matchIndex = 0;
      const checkPairs = [
        [iStart, jStart],
        [iStart, jEnd],
        [iEnd, jStart],
        [iEnd, jEnd],
      ];
      for (const [p1, p2] of checkPairs) {
        if (pointsEqual(p1, p2)) {
          const x1 = p1.x;
          const y1 = p1.y;
          const x2 = p2.x;
          const y2 = p2.y;
          glowWipes.push({
            id: `glow_${i}_${j}_${matchIndex}`,
            x1,
            y1,
            x2,
            y2,
            strokeW: (line1.width + line2.width) * 2,
            width: Math.max(line1.width, line2.width),
            startP: line1.midP,
            endP: line2.midP,
            fromT: getT(line1, { x: x1, y: y1 }),
            toT: getT(line2, { x: x2, y: y2 }),
            pathD: `M ${x1} ${y1} L ${(x1 + x2) / 2} ${(y1 + y2) / 2} L ${x2} ${y2}`,
          });
          matchIndex++;
        }
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full" style={{ height: '200vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        {/* SVG Blueprint */}
        <svg
          ref={svgRef}
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none block"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="20" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ff" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#0ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0ff" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Glow wipes */}
          {glowWipes.map((w) => {
            const prog = Math.max(0, Math.min(1, (scrollProgress - w.startP) / (w.endP - w.startP)));
            const isActive = prog > 0 && prog < 1;
            return (
              <path
                key={w.id}
                d={w.pathD}
                fill="none"
                stroke="#0ff"
                strokeWidth={w.strokeW * 4}
                strokeLinecap="round"
                opacity={isActive ? 0.5 : 0}
                filter="url(#glow)"
                style={{
                  transition: 'stroke-dashoffset 0.1s linear, opacity 0.3s ease',
                  strokeDasharray: w.pathD ? '1 1000' : '0 1000',
                  strokeDashoffset: isActive ? 1 - prog : 1,
                }}
              />
            );
          })}

          {/* Main lines */}
          {lineData.map((l) => {
            const prog = Math.max(0, Math.min(1, (scrollProgress - l.startP) / (l.endP - l.startP)));
            return (
              <line
                key={l.id}
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke="#0ff"
                strokeWidth={l.width}
                strokeLinecap="square"
                opacity={prog > 0 ? 1 : 0.6}
                filter="url(#glow)"
                style={{
                  transition: 'stroke-dashoffset 0.1s linear, opacity 0.2s ease',
                  strokeDasharray: l.length,
                  strokeDashoffset: l.length * (1 - prog),
                }}
              />
            );
          })}
        </svg>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h2
              className="text-5xl md:text-7xl font-light text-white tracking-tight mb-6"
              style={{
                opacity: scrollProgress > 0.3 ? 1 : 0,
                transform: `translateY(${scrollProgress > 0.3 ? 0 : 30}px)`,
                transition: 'opacity 0.6s ease, transform 0.6s ease',
              }}
            >
              Why <span className="text-[#4ade80]">ITIFY</span>
            </h2>
            <div
              className="flex gap-8 md:gap-16 justify-center mb-8"
              style={{
                opacity: scrollProgress > 0.5 ? 1 : 0,
                transition: 'opacity 0.8s ease 0.2s',
              }}
            >
              {['Precision', 'Velocity', 'Integrity'].map((word) => (
                <span
                  key={word}
                  className="text-lg md:text-xl text-[#4ade80]/80 font-medium tracking-wide uppercase"
                >
                  {word}
                </span>
              ))}
            </div>
            <p
              className="text-white/50 text-base md:text-lg max-w-md mx-auto"
              style={{
                opacity: scrollProgress > 0.7 ? 1 : 0,
                transition: 'opacity 0.8s ease 0.4s',
              }}
            >
              Engineering digital foundations with unwavering clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
