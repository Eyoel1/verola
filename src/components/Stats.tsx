'use client';

import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { from: 1990, num: 2026, suffix: '', label: 'Year Established', sub: 'Founded with vision' },
  { from: 0,    num: 3,    suffix: '+', label: 'Visionary Partners', sub: 'Leading with passion' },
  { from: 0,    num: 10,   suffix: '+', label: 'Services Offered', sub: 'Full-service production' },
  { from: 0,    num: 100,  suffix: '%', label: 'Dedication', sub: 'To every detail' },
];

export default function Stats() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 animate-gradient"
        style={{ background: 'linear-gradient(135deg, #f7a8c4, #fbc8da, #ffd97d, #ffe8a3, #f7a8c4)', backgroundSize: '300% 300%' }}
      />
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
                  <CountUp from={stat.from} target={stat.num} suffix={stat.suffix} start={visible} delay={i * 160} />
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

function CountUp({ from, target, suffix, start, delay }: { from: number; target: number; suffix: string; start: boolean; delay: number }) {
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const wait = setTimeout(() => {
      const duration = target >= 2000 ? 1800 : 1400; // faster for small numbers
      const startTime = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // fast-start easing: rushes in quickly then decelerates
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
