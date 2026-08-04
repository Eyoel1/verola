import { useReveal } from '../hooks/useReveal';

const testimonials = [
  { text: 'Velora transformed our corporate gala into an unforgettable evening. Every detail was flawlessly executed — from the lighting to the catering. Truly world-class.', name: 'Dawit T.', role: 'Corporate Client', initial: 'D', color: '#f7a8c4' },
  { text: 'Our wedding was a dream come true. The team understood our vision from day one and delivered beyond our expectations. Pure elegance.', name: 'Hanna & Yonas', role: 'Wedding Couple', initial: 'H', color: '#ffd97d' },
  { text: 'Professional, creative, and incredibly detail-oriented. Velora managed our international conference with precision and grace. Highly recommended.', name: 'Selam A.', role: 'Conference Organizer', initial: 'S', color: '#fbc8da' },
];

export default function Testimonials() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-28 bg-velora-gradient overflow-hidden">
      <div className="orb orb-1 w-[500px] h-[500px] top-[-100px] left-[-100px]" style={{ background: 'radial-gradient(circle, #fde8f1, transparent)', opacity: 0.4 }} />
      <div className="orb orb-3 w-[400px] h-[400px] bottom-[-80px] right-[-80px]" style={{ background: 'radial-gradient(circle, #fff6dc, transparent)', opacity: 0.35 }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={headingRef} className={`text-center mb-16 reveal ${headingVisible ? 'visible' : ''}`}>
          <span className="text-[#e8739b] text-xs tracking-[0.4em] uppercase font-medium">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-[#18141a] font-light">
            Words from Our <em className="text-shimmer-dark not-italic">Clients</em>
          </h2>
          <div className="ornament-divider w-48 mx-auto mt-6">
            <span className="text-[#f7a8c4] text-lg">✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} glass-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden`}
      style={{ transitionDelay: `${index * 150}ms` }}
      data-cursor-hover
    >
      {/* Decorative quote mark */}
      <div
        className="text-6xl font-display leading-none mb-2 absolute -top-1 -left-1 opacity-20"
        style={{ color: t.color }}
      >
        "
      </div>

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] origin-left"
        style={{
          background: `linear-gradient(90deg, ${t.color}, #ffd97d)`,
          transform: visible ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.8s ease',
          transitionDelay: `${index * 150 + 200}ms`,
        }}
      />

      <p className="text-[#5a4a58] leading-relaxed text-[15px] italic font-light relative z-10 mt-4">{t.text}</p>

      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#f7a8c4]/20">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display text-xl shadow-lg"
          style={{ background: `linear-gradient(135deg, ${t.color}, #ffd97d)` }}
        >
          {t.initial}
        </div>
        <div>
          <div className="font-display text-lg text-[#18141a]">{t.name}</div>
          <div className="text-xs tracking-wide uppercase" style={{ color: t.color }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}
