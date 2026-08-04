'use client';

import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Heart, Briefcase, Sparkles } from 'lucide-react';
import Particles from './Particles';

const slides = [
  {
    img: 'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    label: 'Weddings',
    icon: Heart,
    accent: '#f7a8c4',
  },
  {
    img: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    label: 'Corporate Events',
    icon: Briefcase,
    accent: '#ffd97d',
  },
  {
    img: 'https://images.pexels.com/photos/16935999/pexels-photo-16935999.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600',
    label: 'Luxury Decor',
    icon: Sparkles,
    accent: '#fbc8da',
  },
];

const words = ['Reality', 'Excellence', 'Memory', 'Magic'];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Slide auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Typewriter word cycle
  useEffect(() => {
    const fade = setTimeout(() => setWordVisible(false), 3000);
    const swap = setTimeout(() => {
      setWordIdx((p) => (p + 1) % words.length);
      setWordVisible(true);
    }, 3500);
    return () => { clearTimeout(fade); clearTimeout(swap); };
  }, [wordIdx]);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ActiveIcon = slides[active].icon;

  return (
    <section id="home" ref={sectionRef} className="relative h-screen min-h-[680px] overflow-hidden">

      {/* ── Background slides ── */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1200"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={slide.label}
              className="h-full w-full object-cover"
              style={{
                transform: i === active ? 'scale(1.08)' : 'scale(1)',
                transition: 'transform 7s ease-out',
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-black/75 z-10" />

      {/* ── Animated brand orbs ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div
          className="orb orb-1 w-[500px] h-[500px] top-[-100px] left-[-150px]"
          style={{ background: 'radial-gradient(circle, #f7a8c430, #ffd97d15)' }}
        />
        <div
          className="orb orb-2 w-[400px] h-[400px] bottom-[-80px] right-[-120px]"
          style={{ background: 'radial-gradient(circle, #ffd97d25, #f7a8c415)' }}
        />
      </div>

      {/* ── Floating geometric shapes ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Rotating ring top-right */}
        <div
          className="absolute top-20 right-20 w-40 h-40 rounded-full border border-white/10 animate-rotate-slow"
          style={{ borderImage: 'linear-gradient(135deg, #f7a8c440, #ffd97d40) 1' }}
        />
        <div className="absolute top-20 right-20 w-28 h-28 rounded-full border border-[#f7a8c4]/20 animate-rotate-rev" style={{ margin: '24px' }} />

        {/* Diamond bottom-left */}
        <div
          className="absolute bottom-40 left-16 w-8 h-8 bg-[#f7a8c4]/20 animate-float-b"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '1s' }}
        />
        {/* Triangle mid-right */}
        <div
          className="absolute top-1/2 right-32 w-6 h-6 bg-[#ffd97d]/25 animate-float"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '2s' }}
        />
        {/* Circle mid-left */}
        <div className="absolute top-1/3 left-24 w-5 h-5 rounded-full bg-[#fbc8da]/30 animate-float-b" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* ── Particles ── */}
      <div className="absolute inset-0 z-10">
        <Particles count={24} hero />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Category badge */}
        <div className="animate-fade-up-delay1 mb-7">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5">
            <ActiveIcon size={15} className="text-[#ffd97d]" />
            <span className="text-white/80 text-xs tracking-[0.35em] uppercase">
              {slides[active].label}
            </span>
            <div className="w-2 h-2 rounded-full bg-[#f7a8c4] animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[90px] text-white font-light animate-fade-up-delay2 leading-[1.05]">
          Where Vision
          <br />
          Becomes{' '}
          <span
            className="text-shimmer inline-block transition-all duration-500"
            style={{
              opacity: wordVisible ? 1 : 0,
              transform: wordVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {words[wordIdx]}
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/65 text-base md:text-lg mt-8 max-w-2xl font-light animate-fade-up-delay3 leading-relaxed">
          We don't just plan events — we build the infrastructure for your success.
          <br />
          Premier event management &amp; production in Addis Ababa, Ethiopia.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delay4">
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            data-cursor-hover
            className="btn-brand text-[#18141a] px-9 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold shadow-xl"
          >
            Explore Services
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-cursor-hover
            className="btn-outline-brand px-9 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-medium"
          >
            <span className="relative z-10">Plan Your Event</span>
          </button>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-24 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-[3px] rounded-full transition-all duration-600 ${
                i === active
                  ? 'w-10 bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d]'
                  : 'w-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Scroll bounce */}
        <div className="scroll-indicator">
          <div className="w-8 h-12 rounded-full border border-white/30 flex items-start justify-center pt-2 mx-auto">
            <div
              className="w-1.5 h-3 rounded-full bg-gradient-to-b from-[#f7a8c4] to-[#ffd97d]"
              style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
            />
          </div>
          <ChevronDown className="text-white/40 mt-1 mx-auto" size={20} />
        </div>
      </div>
    </section>
  );
}
