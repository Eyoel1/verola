import { Sparkles, Gem, Target, Wand2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const values = [
  { icon: Gem, title: 'Luxury', desc: 'Premium experiences in every detail' },
  { icon: Target, title: 'Precision', desc: 'Flawless execution, every time' },
  { icon: Wand2, title: 'Creativity', desc: 'Unique concepts that captivate' },
  { icon: Sparkles, title: 'Quality', desc: 'Uncompromising standards throughout' },
];

export default function About() {
  const [quoteRef, quoteVisible] = useReveal<HTMLDivElement>();
  const [valuesRef, valuesVisible] = useReveal<HTMLDivElement>();
  const [storyRef, storyVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-[#18141a]">

      {/* ── Full-bleed parallax background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/16935999/pexels-photo-16935999.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Event venue"
          className="h-full w-full object-cover opacity-30"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18141a] via-[#18141a]/85 to-[#18141a]" />
        {/* Brand color wash */}
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 30% 40%, #f7a8c440, transparent 50%), radial-gradient(ellipse at 70% 60%, #ffd97d30, transparent 50%)' }}
        />
      </div>

      {/* Ambient orbs */}
      <div className="orb orb-1 w-[500px] h-[500px] top-[10%] left-[-150px] z-0" style={{ background: 'radial-gradient(circle, #f7a8c430, transparent)', opacity: 0.4 }} />
      <div className="orb orb-2 w-[400px] h-[400px] bottom-[20%] right-[-100px] z-0" style={{ background: 'radial-gradient(circle, #ffd97d25, transparent)', opacity: 0.35 }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">

        {/* ── Section label ── */}
        <div className={`text-center mb-12 reveal ${quoteVisible ? 'visible' : ''}`} ref={quoteRef}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d]" />
            <span className="text-[#ffd97d] text-xs tracking-[0.4em] uppercase font-medium">Our Story</span>
            <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#ffd97d] to-[#f7a8c4]" />
          </div>
        </div>

        {/* ── Cinematic quote ── */}
        <div ref={quoteRef} className={`reveal ${quoteVisible ? 'visible' : ''} max-w-4xl mx-auto text-center mb-20`}>
          {/* Decorative quote mark */}
          <div className="text-shimmer font-display text-7xl leading-none mb-4 opacity-50">"</div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-[56px] text-white font-light leading-[1.25] italic">
            We don't just plan events — we build the{' '}
            <span className="text-shimmer not-italic">infrastructure</span>{' '}
            for your success.
          </h2>

          {/* Animated divider */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#f7a8c4]" />
            <span className="text-[#f7a8c4] text-sm">✦</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#f7a8c4]" />
          </div>
        </div>

        {/* ── Story + stats row ── */}
        <div ref={storyRef} className={`reveal ${storyVisible ? 'visible' : ''} grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto`}>
          {/* Founded */}
          <div className="text-center md:text-left">
            <div className="font-display text-5xl text-shimmer font-light mb-2">2026</div>
            <div className="text-[#ffd97d] text-[10px] tracking-[0.3em] uppercase font-medium mb-3">Founded</div>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Established by three visionary partners with a shared passion for excellence.
            </p>
          </div>

          {/* Based in */}
          <div className="text-center md:text-left md:border-l md:border-r md:border-[#f7a8c4]/15 md:px-8">
            <div className="font-display text-5xl text-shimmer font-light mb-2">Addis</div>
            <div className="text-[#ffd97d] text-[10px] tracking-[0.3em] uppercase font-medium mb-3">Headquartered</div>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Addis Ababa, Ethiopia — serving clients across the nation and beyond.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center md:text-left">
            <div className="font-display text-5xl text-shimmer font-light mb-2">3</div>
            <div className="text-[#ffd97d] text-[10px] tracking-[0.3em] uppercase font-medium mb-3">Visionaries</div>
            <p className="text-white/50 text-[14px] leading-relaxed">
              Bridging the gap between creative event planning and technical execution.
            </p>
          </div>
        </div>

        {/* ── Description paragraph ── */}
        <div ref={storyRef} className={`reveal ${storyVisible ? 'visible' : ''} max-w-3xl mx-auto text-center mb-20`}>
          <p className="text-white/60 text-[16px] leading-[1.8] font-light">
            Velora Event &amp; Communication is a premier, full-service event management &amp; production firm.
            Founded on the principles of luxury, quality, precision, creativity, and strategic communication —
            we specialize in transforming corporate visions and personal milestones into unforgettable realities.
          </p>
        </div>

        {/* ── Values pillars ── */}
        <div ref={valuesRef} className={`reveal ${valuesVisible ? 'visible' : ''}`}>
          <div className="text-center mb-10">
            <span className="text-white/40 text-xs tracking-[0.3em] uppercase">Our Core Principles</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative glass-card-dark rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  style={{ transitionDelay: `${i * 100}ms` }}
                  data-cursor-hover
                >
                  {/* Top gradient line that grows on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600"
                    style={{ background: 'linear-gradient(90deg, #f7a8c4, #ffd97d)' }}
                  />

                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 30%, #f7a8c410, transparent 70%)' }}
                  />

                  {/* Icon */}
                  <div className="relative inline-flex mb-4">
                    <div className="absolute inset-[-8px] rounded-full bg-[#f7a8c4]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-14 h-14 rounded-full border border-[#f7a8c4]/30 flex items-center justify-center group-hover:border-[#f7a8c4] transition-colors duration-400">
                      <Icon size={24} className="text-[#f7a8c4] group-hover:scale-110 transition-transform duration-400" />
                    </div>
                  </div>

                  <h4 className="font-display text-xl text-white font-light mb-2 group-hover:text-shimmer transition-all duration-400">
                    {v.title}
                  </h4>
                  <p className="text-white/40 text-[13px] leading-relaxed group-hover:text-white/60 transition-colors duration-400">
                    {v.desc}
                  </p>

                  {/* Animated number */}
                  <div className="font-display text-xs text-white/15 mt-3 tracking-widest">
                    0{i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
