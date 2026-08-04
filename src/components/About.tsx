'use client';

import { Sparkles, Gem, Target, Wand2, Award, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const values = [
  { icon: Gem,      title: 'Luxury',       desc: 'Premium aesthetics and experiences in every detail.',    accent: '#e8739b', tag: 'Standard' },
  { icon: Target,   title: 'Precision',    desc: 'Flawless execution and coordination, every single time.', accent: '#e8739b', tag: 'Execution' },
  { icon: Wand2,    title: 'Creativity',   desc: 'Bespoke concepts, custom decor, and spatial artistry.',  accent: '#e8739b', tag: 'Design' },
  { icon: Sparkles, title: 'Quality',      desc: 'World-class vendors and state-of-the-art production.',   accent: '#e8739b', tag: 'Production' },
];

const pillars = [
  { num: '2026', label: 'Founded' },
  { num: '3+',   label: 'Visionaries' },
  { num: '100%', label: 'Dedicated' },
];

export default function About() {
  const [topRef, topVisible] = useReveal<HTMLDivElement>();
  const [valRef, valVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 bg-[#f8eee0] dark:bg-[#18141a] text-[#18141a] dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#f7a8c4]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#ffd97d]/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ─── Top: Label + Headline + Quote ─── */}
        <div
          ref={topRef}
          className={`transition-all duration-1000 ${topVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: headline */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fde8f1] dark:bg-white/10 border border-[#f7a8c4]/40 text-[10px] font-bold uppercase tracking-widest text-[#e8739b] mb-5">
                <Sparkles className="w-3 h-3" />
                <span>Our Story</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-[1.05] mb-6 text-[#18141a] dark:text-white">
                Events that<br />
                <span className="italic text-shimmer-dark">move people.</span>
              </h2>
              {/* Stat pills */}
              <div className="flex items-center gap-4 flex-wrap mt-8">
                {pillars.map((p) => (
                  <div key={p.label} className="flex items-center gap-3 px-4 py-2.5 bg-[#fff7ee] dark:bg-white/5 border border-[#f7a8c4]/30 rounded-full shadow-sm">
                    <span className="font-display text-lg font-normal text-shimmer-dark leading-none">{p.num}</span>
                    <span className="text-[10px] uppercase tracking-widest text-[#18141a] dark:text-white/90 font-bold">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: description + award badge */}
            <div className="flex flex-col gap-6">
              <p className="text-[#18141a] dark:text-white/90 text-sm font-normal leading-relaxed">
                Velora Event & Communication is a premier full-service event management
                firm. We bridge creative vision with flawless execution — turning every
                milestone into an unforgettable memory.
              </p>
              {/* Quote callout */}
              <div className="relative p-6 rounded-2xl border border-[#f7a8c4]/30 bg-[#fff7ee] dark:bg-white/5 shadow-sm">
                <div className="absolute -top-3 left-5">
                  <span className="font-display text-4xl leading-none text-[#e8739b]">"</span>
                </div>
                <p className="font-display text-base font-normal italic leading-snug text-[#18141a] dark:text-white">
                  We don't just plan events — we build the stage for your greatest moments.
                </p>
                <div className="flex items-center gap-2 mt-3 text-[10px] uppercase tracking-widest text-[#e8739b] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>The Velora Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Values Grid ─── */}
        <div
          ref={valRef}
          className={`transition-all duration-1000 delay-200 ${valVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#f7a8c4]/40" />
            <span className="text-[10px] uppercase tracking-widest text-[#18141a] dark:text-white/80 font-bold whitespace-nowrap">Core Values</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#f7a8c4]/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative bg-[#fff7ee] dark:bg-[#251d28] border border-[#f7a8c4]/30 rounded-2xl p-6 hover:border-[#f7a8c4]/70 hover:shadow-lg hover:shadow-pink-900/10 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Colored top-bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, #e8739b, #ffd97d)` }}
                  />

                  {/* Tag + Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#e8739b]">
                      {v.tag}
                    </span>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#e8739b]"
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-[#fde8f1] dark:bg-white/10"
                  >
                    <Icon className="w-5 h-5 text-[#e8739b]" />
                  </div>

                  <h4 className="font-display text-lg font-normal mb-2 text-[#18141a] dark:text-white group-hover:text-[#e8739b] transition-colors duration-300">
                    {v.title}
                  </h4>
                  {/* Dark crisp description text */}
                  <p className="text-[#2d2030] dark:text-white/90 text-xs font-normal leading-relaxed">
                    {v.desc}
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
