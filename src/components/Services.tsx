'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Briefcase, Building2, ChevronLeft, ChevronRight, Heart, Music, Palette, Sparkles, Utensils, Users, Volume2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  { icon: Heart, title: 'Wedding Planning', desc: 'From intimate ceremonies to grand celebrations, we craft weddings that tell your unique love story.', img: 'https://images.pexels.com/photos/37827340/pexels-photo-37827340.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'Love & Celebration' },
  { icon: Briefcase, title: 'Corporate Events', desc: 'High-impact conferences, launches, and galas that elevate your brand and impress every stakeholder.', img: 'https://images.pexels.com/photos/8761524/pexels-photo-8761524.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'Business Excellence' },
  { icon: Palette, title: 'Decoration', desc: 'Impeccable styling and floral artistry that transforms any venue into a breathtaking setting.', img: 'https://images.pexels.com/photos/16120136/pexels-photo-16120136.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'Spatial Artistry' },
  { icon: Utensils, title: 'Catering', desc: 'Exquisite cuisine blending Ethiopian flavors with international gastronomy for memorable dining.', img: 'https://images.pexels.com/photos/12309036/pexels-photo-12309036.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'Culinary Excellence' },
  { icon: Building2, title: 'Venue Setup', desc: 'Complete venue transformation, from seating and staging to lighting and ambiance.', img: 'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'Full Transformation' },
  { icon: Volume2, title: 'Sound & Lighting', desc: 'State-of-the-art audio-visual production with crystal-clear sound and dramatic lighting.', img: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'AV Production' },
  { icon: Music, title: 'Entertainment', desc: 'Live performances, DJs, and cultural shows curated to captivate every guest.', img: 'https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'Live Experiences' },
  { icon: Users, title: 'Conference Planning', desc: 'Agenda, speakers, registration, and hospitality managed seamlessly end to end.', img: 'https://images.pexels.com/photos/8761547/pexels-photo-8761547.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400', tag: 'Event Management' },
];

const AUTO_SLIDE_INTERVAL = 4000;

export default function Services() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const goTo = (index: number) => setActiveIndex((index + services.length) % services.length);

  useEffect(() => {
    if (!paused) timer.current = setInterval(() => goTo(activeIndex + 1), AUTO_SLIDE_INTERVAL);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [activeIndex, paused]);

  return (
    <section id="services" className="relative overflow-hidden bg-[#fdf9f5] py-24 text-[#18141a] transition-colors duration-500 dark:bg-[#18141a] dark:text-white">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#f7a8c4]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-4 h-96 w-96 rounded-full bg-[#ffd97d]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div ref={headingRef} className={`mb-12 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end ${headingVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-1000`}>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f7a8c4]/40 bg-[#fde8f1] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#e8739b] dark:bg-white/10">
              <Sparkles className="h-3.5 w-3.5" /> What We Offer
            </div>
            <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl md:text-5xl text-[#18141a] dark:text-white">
              Our Signature <span className="italic text-shimmer-dark">Services</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 self-start md:self-auto">
            <span className="text-xs font-semibold tracking-widest text-[#9b7b8e] dark:text-white/60">
              {String(activeIndex + 1).padStart(2, '0')} <span className="mx-1 text-[#d7bdca]">/</span> {String(services.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => { setPaused(true); goTo(activeIndex - 1); }}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#f7a8c4]/40 bg-white transition hover:bg-[#fde8f1] dark:bg-white/10 text-[#18141a] dark:text-white"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => { setPaused(true); goTo(activeIndex + 1); }}
              className="grid h-11 w-11 place-items-center rounded-full bg-[#e8739b] text-white transition hover:bg-[#d95e8b]"
              aria-label="Next service"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card deck */}
        <div className="relative py-4" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex min-h-[470px] items-stretch justify-center gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const selected = index === activeIndex;
              const previous = index === (activeIndex - 1 + services.length) % services.length;
              const next = index === (activeIndex + 1) % services.length;
              const visible = selected || previous || next;
              return (
                <article
                  key={service.title}
                  onClick={() => { setPaused(true); setActiveIndex(index); }}
                  className={`relative shrink-0 cursor-pointer overflow-hidden rounded-[2rem] border transition-all duration-700 ${
                    selected
                      ? 'w-[min(82vw,540px)] border-[#f7a8c4]/60 bg-[#251d28] shadow-2xl shadow-pink-500/20'
                      : visible
                      ? 'hidden w-[230px] border-[#5a4a58]/45 bg-[#251d28] opacity-100 hover:border-[#f7a8c4]/70 md:block'
                      : 'hidden'
                  }`}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${selected ? 'scale-105' : 'scale-100'}`}
                  />
                  {/* High contrast dark gradient overlay over image */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      selected
                        ? 'bg-gradient-to-t from-[#18141a] via-[#18141a]/60 to-black/30'
                        : 'bg-gradient-to-t from-[#18141a]/95 via-[#18141a]/50 to-[#18141a]/20'
                    }`}
                  />

                  {/* Top tag & index */}
                  <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                    <span className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest ${
                      selected ? 'bg-white/95 text-[#e8739b] shadow-md' : 'bg-black/40 text-white/90 backdrop-blur'
                    }`}>
                      {service.tag}
                    </span>
                    <span className="font-display text-3xl text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content with high contrast drop shadow */}
                  <div className="absolute inset-x-5 bottom-6 sm:inset-x-7 sm:bottom-8">
                    <div className={`mb-4 grid h-11 w-11 place-items-center rounded-full transition-all ${
                      selected ? 'bg-[#f7a8c4] text-[#18141a] shadow-lg' : 'bg-white/20 text-white backdrop-blur'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className={`font-display leading-none text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transition-all ${
                      selected ? 'text-2xl sm:text-3xl font-normal text-[#f7a8c4]' : 'text-xl font-normal'
                    }`}>
                      {service.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ${selected ? 'mt-3 max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-sm font-light leading-relaxed text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
                        {service.desc}
                      </p>
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#f7a8c4] hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                      >
                        Enquire now <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-7 flex justify-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => { setPaused(true); setActiveIndex(index); }}
              aria-label={`Show ${service.title}`}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-[#e8739b]' : 'w-2 bg-[#f7a8c4]/50 hover:bg-[#f7a8c4]'}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-cursor-hover
            className="btn-brand rounded-full px-9 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#18141a] shadow-lg transition-all hover:shadow-xl"
          >
            Plan Your Custom Event
          </button>
        </div>
      </div>
    </section>
  );
}
