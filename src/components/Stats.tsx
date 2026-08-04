'use client';

import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { from: 1990, num: 2026, suffix: '', label: 'Year Established', sub: 'Founded with vision' },
  { from: 0,    num: 3,    suffix: '',  label: 'Visionary Partners', sub: 'Leading with passion' },
  { from: 0,    num: 10,   suffix: '+', label: 'Services Offered', sub: 'Full-service production' },
  { from: 0,    num: 100,  suffix: '%', label: 'Dedication', sub: 'To every detail' },
];

export default function Stats() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-[#18141a] dark:bg-[#120d15] text-white border-y border-[#f7a8c4]/20 shadow-inner">
      {/* Ambient background glows */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 50%, #f7a8c425 0%, transparent 60%), radial-gradient(circle at 70% 50%, #ffd97d20 0%, transparent 60%)' }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 lg:gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${visible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 160}ms`, animationFillMode: 'both' }}
            >
              <div className="relative inline-block">
                <div
                  className="absolute inset-0 rounded-full bg-[#f7a8c4]/20"
                  style={{
                    width: '85px', height: '85px',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                    animation: visible ? `pulse-ring 2.8s ease infinite ${i * 400}ms` : 'none',
                  }}
                />
                {/* Bold, bright gold counter text with drop shadow */}
                <div className="stat-number relative z-10 text-4xl sm:text-5xl md:text-6xl font-light text-[#ffd97d] drop-shadow-[0_4px_16px_rgba(255,217,125,0.4)]">
                  <CountUp from={stat.from} target={stat.num} suffix={stat.suffix} start={visible} delay={i * 160} />
                </div>
              </div>
              {/* Ultra-clear bold label */}
              <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-xs sm:tracking-[0.25em]">
                {stat.label}
              </div>
              {/* Crisp high contrast subtext */}
              <div className="mt-1 text-xs font-medium text-[#f7a8c4]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ from, target, suffix, start, delay }: { from: number; target: number; suffix: string; start: boolean; delay: number }) {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const wait = setTimeout(() => {
      const duration = target >= 2000 ? 1800 : 1400;
      const startTime = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        setCurrent(Math.round(from + eased * (target - from)));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, delay);
    return () => { clearTimeout(wait); cancelAnimationFrame(frame); };
  }, [start, from, target, delay]);

  return <>{current}{suffix}</>;
}
