'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('velora-theme');
    if (saved === 'dark') { setDark(true); document.documentElement.classList.add('dark'); }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('velora-theme', next ? 'dark' : 'light');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { threshold: 0.4 }
    );
    links.forEach(({ href }) => { const el = document.querySelector(href); if (el) observer.observe(el); });

    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 dark:bg-[#18141a]/95 backdrop-blur-xl shadow-[0_4px_32px_rgba(247,168,196,0.15)] py-3'
        : 'bg-transparent py-5'
    }`}>
      {scrolled && <div className="absolute bottom-0 left-0 right-0 h-[1.5px] gradient-line" />}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('#home')} className="flex items-center gap-3 group">
          <div className="relative">
            <img src="/Velora_1.png" alt="Velora" className={`transition-all duration-500 ${scrolled ? 'h-11' : 'h-14'}`} />
            <div className="absolute inset-0 rounded-full animate-glow opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden sm:block">
            <div className={`font-display text-xl leading-none transition-colors ${scrolled ? 'text-[#18141a] dark:text-white' : 'text-white'}`}>
              Velora<span className="text-shimmer-dark">.</span>
            </div>
            <div className={`text-[8px] tracking-[0.35em] uppercase font-bold mt-0.5 ${scrolled ? 'text-[#e8739b]' : 'text-[#fbc8da]'}`}>
              Events &amp; Communications
            </div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              data-cursor-hover
              className={`nav-link text-sm font-semibold tracking-wide transition-colors duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-[#e8739b]'
                  : scrolled
                  ? 'text-[#18141a] dark:text-white/90 hover:text-[#e8739b]'
                  : 'text-white hover:text-[#f7a8c4]'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            data-cursor-hover
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
              scrolled
                ? 'border-[#f7a8c4]/40 bg-[#fde8f1] hover:bg-[#f7a8c4]/30 text-[#e8739b]'
                : 'border-white/20 bg-white/10 hover:bg-white/20 text-white'
            }`}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => handleNav('#contact')}
            data-cursor-hover
            className="btn-brand text-[#18141a] text-sm px-7 py-2.5 rounded-full font-bold tracking-wide relative overflow-hidden"
          >
            <span className="relative z-10">Get in Touch</span>
          </button>
        </div>

        {/* Mobile: dark toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleDark}
            className={`w-8 h-8 rounded-full flex items-center justify-center border ${
              scrolled ? 'border-[#f7a8c4]/40 text-[#e8739b]' : 'border-white/20 text-white'
            }`}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button onClick={() => setOpen(!open)}>
            {open
              ? <X className={scrolled ? 'text-[#18141a] dark:text-white' : 'text-white'} size={26} />
              : <Menu className={scrolled ? 'text-[#18141a] dark:text-white' : 'text-white'} size={26} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/98 dark:bg-[#18141a]/98 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 shadow-xl border-t border-pink-100 dark:border-white/10">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left text-[#18141a] dark:text-white/90 font-semibold hover:text-[#e8739b] transition-colors text-sm tracking-wide py-1"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-brand text-[#18141a] text-sm px-6 py-3 rounded-full font-bold tracking-wide mt-2"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
