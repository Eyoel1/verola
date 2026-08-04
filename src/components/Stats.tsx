import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { num: 2026, suffix: '', label: 'Year Established', sub: 'Founded with vision' },
  { num: 3, suffix: '', label: 'Visionary Partners', sub: 'Leading with passion' },
  { num: 10, suffix: '+', label: 'Services Offered', sub: 'Full-service production' },
  { num: 100, suffix: '%', label: 'Dedication', sub: 'To every detail' },
];

export default function Stats() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: 'linear-gradient(135deg, #f7a8c4, #fbc8da, #ffd97d, #ffe8a3, #f7a8c4)',
          backgroundSize: '300% 300%',
        }}
      />
      {/* Top/bottom wave dividers */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-white/20 blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20 blur-sm" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${visible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 160}ms`, animationFillMode: 'both' }}
            >
              {/* Pulse circle behind number */}
              <div className="relative inline-block">
                <div
                  className="absolute inset-0 rounded-full bg-white/25"
                  style={{
                    width: '80px', height: '80px',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                    animation: visible ? `pulse-ring 2.8s ease infinite ${i * 400}ms` : 'none',
                  }}
                />
                <div className="stat-number text-5xl md:text-6xl text-white font-light relative z-10">
                  <CountUp target={stat.num} suffix={stat.suffix} start={visible} delay={i * 160} />
                </div>
              </div>
              <div className="text-white/90 text-xs tracking-[0.25em] uppercase mt-2">{stat.label}</div>
              <div className="text-white/60 text-xs mt-1 font-light">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, suffix, start, delay }: { target: number; suffix: string; start: boolean; delay: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const wait = setTimeout(() => {
      const duration = 2200;
      const startTime = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, delay);
    return () => { clearTimeout(wait); cancelAnimationFrame(frame); };
  }, [start, target, delay]);

  return <>{current}{suffix}</>;
}
