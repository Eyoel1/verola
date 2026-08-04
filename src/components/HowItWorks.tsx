'use client';

import { MessageSquare, Sparkles, CalendarCheck, Crown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'Deep-dive session to capture your story, style, and vision.',
    color: '#f7a8c4',
    bg: '#fde8f1',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'Design & Plan',
    desc: 'Custom mood boards, spatial layouts, and comprehensive timelines.',
    color: '#e8739b',
    bg: '#fde8f1',
  },
  {
    step: '03',
    icon: CalendarCheck,
    title: 'Production',
    desc: 'Full vendor coordination, decor, sound, lighting, and catering.',
    color: '#f5c535',
    bg: '#fff6dc',
  },
  {
    step: '04',
    icon: Crown,
    title: 'Your Day',
    desc: 'We run everything. You relax and soak in every moment.',
    color: '#e8739b',
    bg: '#fde8f1',
  },
];

export default function HowItWorks() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="relative py-24 bg-[#fdf9f5] dark:bg-[#18141a] text-[#18141a] dark:text-white transition-colors duration-500 overflow-hidden">
      {/* Subtle orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f7a8c4]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fde8f1] dark:bg-white/10 border border-[#f7a8c4]/40 text-[10px] font-bold uppercase tracking-widest text-[#e8739b] mb-4">
              <Sparkles className="w-3 h-3" />
              <span>Our Process</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light leading-tight">
              How It <span className="italic text-shimmer-dark">Works</span>
            </h2>
          </div>
          <p className="text-[#5a4a58] dark:text-white/70 text-sm font-light leading-relaxed max-w-xs md:text-right">
            Four seamless steps from first conversation to unforgettable celebration.
          </p>
        </div>

        {/* Steps — horizontal timeline */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block relative mb-0">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f7a8c4]/40 to-transparent" style={{ top: '32px' }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="group relative bg-white dark:bg-[#251d28] border border-[#f7a8c4]/20 rounded-2xl p-6 hover:border-[#f7a8c4]/60 hover:shadow-xl hover:shadow-pink-100/30 transition-all duration-500 hover:-translate-y-1.5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Step number + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-4xl font-light text-[#f7a8c4]/40 leading-none group-hover:text-[#e8739b]/60 transition-colors duration-300">
                      {s.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{ background: s.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-normal mb-2 group-hover:text-[#e8739b] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[#5a4a58] dark:text-white/60 text-xs leading-relaxed font-light">
                    {s.desc}
                  </p>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-brand text-sm font-semibold text-[#18141a] shadow-md hover:shadow-xl transition-all"
            >
              <span>Start Your Journey</span>
              <Sparkles className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
