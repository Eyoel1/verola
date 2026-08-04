import { Heart, Briefcase, Palette, Utensils, Building2, Volume2, Music, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: Heart,
    title: 'Wedding Planning',
    desc: 'From intimate ceremonies to grand celebrations, we craft weddings that reflect your unique love story.',
    img: 'https://images.pexels.com/photos/37827340/pexels-photo-37827340.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#f7a8c4',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    desc: 'High-impact corporate experiences — conferences, launches, and galas that elevate your brand.',
    img: 'https://images.pexels.com/photos/8761524/pexels-photo-8761524.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#ffd97d',
  },
  {
    icon: Palette,
    title: 'Decoration',
    desc: 'Impeccable styling and floral artistry that transforms any venue into a breathtaking setting.',
    img: 'https://images.pexels.com/photos/16120136/pexels-photo-16120136.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#fbc8da',
  },
  {
    icon: Utensils,
    title: 'Catering',
    desc: 'Exquisite cuisine blending Ethiopian flavors with international gastronomy for memorable dining.',
    img: 'https://images.pexels.com/photos/12309036/pexels-photo-12309036.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#ffe8a3',
  },
  {
    icon: Building2,
    title: 'Venue Setup',
    desc: 'Complete venue transformation — seating, staging, lighting, and ambiance, every detail perfected.',
    img: 'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#f7a8c4',
  },
  {
    icon: Volume2,
    title: 'Sound & Lighting',
    desc: 'State-of-the-art audio-visual production — crystal-clear sound and dramatic lighting design.',
    img: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#ffd97d',
  },
  {
    icon: Music,
    title: 'Entertainment',
    desc: 'Live performances, DJs, cultural shows, and curated entertainment that captivates every guest.',
    img: 'https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#fbc8da',
  },
  {
    icon: Users,
    title: 'Conference Planning',
    desc: 'End-to-end conference management — agenda, speakers, registration, and hospitality.',
    img: 'https://images.pexels.com/photos/8761547/pexels-photo-8761547.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    color: '#ffe8a3',
  },
];

export default function Services() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-28 bg-[#18141a] overflow-hidden">
      {/* Ambient orbs */}
      <div className="orb orb-1 w-[600px] h-[600px] top-[-150px] left-[-200px]" style={{ background: 'radial-gradient(circle, #f7a8c430, transparent)', opacity: 0.5 }} />
      <div className="orb orb-2 w-[500px] h-[500px] bottom-[-100px] right-[-150px]" style={{ background: 'radial-gradient(circle, #ffd97d20, transparent)', opacity: 0.4 }} />

      {/* Rotating deco ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#f7a8c4]/5 animate-rotate-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingRef} className={`text-center mb-16 reveal ${headingVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d]" />
            <span className="text-[#ffd97d] text-xs tracking-[0.4em] uppercase font-medium">What We Offer</span>
            <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#ffd97d] to-[#f7a8c4]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-white font-light leading-[1.05]">
            Our Signature <em className="text-shimmer not-italic">Services</em>
          </h2>
          <p className="text-white/50 mt-5 max-w-2xl mx-auto font-light text-[15px]">
            Hover over each service to explore — from concept to execution, every detail crafted to perfection.
          </p>
        </div>

        {/* Expanding panels grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-[480px] md:h-[560px]">
          {services.map((s, i) => (
            <ServicePanel key={s.title} service={s} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-cursor-hover
            className="btn-brand text-[#18141a] px-10 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold shadow-xl"
          >
            Plan Your Event
          </button>
        </div>
      </div>
    </section>
  );
}

function ServicePanel({ service, index }: { service: typeof services[0]; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`reveal-scale ${visible ? 'visible' : ''} group relative overflow-hidden rounded-2xl cursor-pointer min-h-full`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
      data-cursor-hover
    >
      {/* Background image */}
      <img
        src={service.img}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/50" />

      {/* Brand color glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${service.color}40, transparent 60%)` }}
      />

      {/* Index number — top right, faded */}
      <div className="absolute top-4 right-4 font-display text-2xl text-white/20 font-light leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon — top left, appears on expand */}
      <div
        className="absolute top-5 left-5 w-11 h-11 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500"
        style={{ background: `linear-gradient(135deg, ${service.color}, #ffd97d)` }}
      >
        <Icon size={20} className="text-white" />
      </div>

      {/* Content — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Title — always visible, rotates on expand */}
        <h3 className="font-display text-lg md:text-xl text-white font-normal leading-tight">
          {service.title}
        </h3>

        {/* Description — slides up on hover */}
        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-600">
          <div
            className="h-0.5 w-8 my-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"
            style={{ background: `linear-gradient(90deg, ${service.color}, #ffd97d)` }}
          />
          <p className="text-white/70 text-[13px] leading-relaxed">
            {service.desc}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 text-xs tracking-[0.15em] uppercase font-medium transition-colors"
            style={{ color: service.color }}
          >
            Enquire →
          </button>
        </div>
      </div>

      {/* Animated border accent — bottom line grows on hover */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700"
        style={{ background: `linear-gradient(90deg, ${service.color}, #ffd97d)` }}
      />
    </div>
  );
}
