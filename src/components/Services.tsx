import { Heart, Briefcase, Palette, Utensils, Building2, Volume2, Music, Users } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const services = [
  {
    icon: Heart,
    title: 'Wedding Planning',
    desc: 'From intimate ceremonies to grand celebrations, we craft weddings that reflect your unique love story.',
    img: 'https://images.pexels.com/photos/37827340/pexels-photo-37827340.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#f7a8c4',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    desc: 'High-impact corporate experiences — conferences, launches, and galas that elevate your brand.',
    img: 'https://images.pexels.com/photos/8761524/pexels-photo-8761524.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#ffd97d',
  },
  {
    icon: Palette,
    title: 'Decoration',
    desc: 'Impeccable styling and floral artistry that transforms any venue into a breathtaking setting.',
    img: 'https://images.pexels.com/photos/16120136/pexels-photo-16120136.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#f7a8c4',
  },
  {
    icon: Utensils,
    title: 'Catering',
    desc: 'Exquisite cuisine blending Ethiopian flavors with international gastronomy for memorable dining.',
    img: 'https://images.pexels.com/photos/12309036/pexels-photo-12309036.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#ffd97d',
  },
  {
    icon: Building2,
    title: 'Venue Setup',
    desc: 'Complete venue transformation — seating, staging, lighting, and ambiance, every detail perfected.',
    img: 'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#f7a8c4',
  },
  {
    icon: Volume2,
    title: 'Sound & Lighting',
    desc: 'State-of-the-art audio-visual production — crystal-clear sound and dramatic lighting design.',
    img: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#ffd97d',
  },
  {
    icon: Music,
    title: 'Entertainment',
    desc: 'Live performances, DJs, cultural shows, and curated entertainment that captivates every guest.',
    img: 'https://images.pexels.com/photos/8186275/pexels-photo-8186275.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#f7a8c4',
  },
  {
    icon: Users,
    title: 'Conference Planning',
    desc: 'End-to-end conference management — agenda, speakers, registration, and hospitality.',
    img: 'https://images.pexels.com/photos/8761547/pexels-photo-8761547.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800',
    accent: '#ffd97d',
  },
];

export default function Services() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(175deg, #fdf9f5 0%, #fff6f9 50%, #fdf9f5 100%)' }}>

      {/* Decorative blobs */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f7a8c425 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffd97d20 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingRef} className={`text-center mb-16 reveal ${headingVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f7a8c4]" />
            <span className="text-[#e8739b] text-[10px] tracking-[0.5em] uppercase font-medium">What We Offer</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f7a8c4]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#18141a] font-light leading-[1.05]">
            Our Signature{' '}
            <em className="not-italic" style={{
              background: 'linear-gradient(100deg, #e8739b, #f7a8c4, #ffd97d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Services</em>
          </h2>
          <p className="text-[#5a4a58] mt-5 max-w-xl mx-auto font-light text-[15px] leading-relaxed">
            Hover over each service to explore — from concept to execution, every detail crafted to perfection.
          </p>
        </div>

        {/* Expanding panels */}
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
            className="btn-brand text-[#18141a] px-10 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold shadow-lg"
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
      style={{
        transitionDelay: `${(index % 4) * 80}ms`,
        boxShadow: '0 4px 24px rgba(247,168,196,0.15)',
      }}
      data-cursor-hover
    >
      {/* Background image */}
      <img
        src={service.img}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Light-to-transparent overlay — keeps it from going dark */}
      <div className="absolute inset-0 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to top, rgba(24,20,26,0.78) 0%, rgba(24,20,26,0.25) 50%, rgba(24,20,26,0.05) 100%)' }} />

      {/* Brand colour wash on hover — warm tint instead of black */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${service.accent}55 0%, transparent 55%)` }}
      />

      {/* Index number — top right */}
      <div className="absolute top-4 right-4 font-display text-2xl font-light leading-none"
        style={{ color: `${service.accent}60` }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon badge — slides in on hover */}
      <div
        className="absolute top-5 left-5 w-10 h-10 rounded-full flex items-center justify-center shadow-lg
                   opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500"
        style={{ background: `linear-gradient(135deg, ${service.accent}, #ffd97d)` }}
      >
        <Icon size={18} className="text-white" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-lg md:text-xl text-white font-normal leading-tight">
          {service.title}
        </h3>

        <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
          <div
            className="h-[2px] w-8 my-3 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-75 rounded-full"
            style={{ background: `linear-gradient(90deg, ${service.accent}, #ffd97d)` }}
          />
          <p className="text-white/80 text-[13px] leading-relaxed">{service.desc}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-opacity hover:opacity-80"
            style={{ color: service.accent }}
          >
            Enquire →
          </button>
        </div>
      </div>

      {/* Bottom grow line */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 rounded-full"
        style={{ background: `linear-gradient(90deg, ${service.accent}, #ffd97d)` }}
      />
    </div>
  );
}
