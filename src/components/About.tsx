import { useReveal } from '../hooks/useReveal';

export default function About() {
  const [ref1, vis1] = useReveal<HTMLDivElement>();
  const [ref2, vis2] = useReveal<HTMLDivElement>();
  const [ref3, vis3] = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-28 bg-velora-gradient overflow-hidden">
      {/* Animated orbs */}
      <div className="orb orb-1 w-[600px] h-[600px] top-[-150px] right-[-200px] opacity-30"
        style={{ background: 'radial-gradient(circle, #fde8f1, #fff6dc)' }} />
      <div className="orb orb-3 w-[400px] h-[400px] bottom-[-100px] left-[-100px] opacity-25"
        style={{ background: 'radial-gradient(circle, #fff6dc, #fde8f1)' }} />

      {/* Rotating deco ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#f7a8c4]/10 animate-rotate-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#ffd97d]/10 animate-rotate-rev pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <div ref={ref1} className={`text-center mb-20 reveal ${vis1 ? 'visible' : ''}`}>
          <span className="text-[#e8739b] text-xs tracking-[0.4em] uppercase font-medium">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-[#18141a] font-light">
            Crafting Excellence <em className="text-shimmer-dark not-italic">Since 2026</em>
          </h2>
          <div className="ornament-divider w-48 mx-auto mt-6">
            <span className="text-[#f7a8c4] text-lg">✦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <div ref={ref2} className={`reveal-left ${vis2 ? 'visible' : ''} relative`}>
            {/* Blob morph behind image */}
            <div
              className="absolute -inset-8 animate-morph opacity-20 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #f7a8c4, #ffd97d)', zIndex: 0 }}
            />
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/35985211/pexels-photo-35985211.jpeg?auto=compress&cs=tinysrgb&h=700&w=550"
                alt="Elegant event setup"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: '4/5' }}
              />
              <img
                src="https://images.pexels.com/photos/8452759/pexels-photo-8452759.jpeg?auto=compress&cs=tinysrgb&h=400&w=350"
                alt="Table decoration"
                className="absolute -bottom-10 -right-6 rounded-2xl shadow-2xl border-4 border-white object-cover w-52 animate-float"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Floating badge */}
              <div
                className="absolute -top-6 -left-6 glass-card rounded-2xl shadow-2xl px-6 py-4 animate-float"
                style={{ animationDelay: '1.2s' }}
              >
                <div className="font-display text-3xl text-shimmer-dark font-light">100%</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#5a4a58] mt-1">Dedication</div>
              </div>

              {/* Pulse ring on image corner */}
              <div className="absolute -top-3 -right-3 w-6 h-6">
                <div className="absolute inset-0 rounded-full bg-[#f7a8c4]" style={{ animation: 'pulse-ring 2.5s ease infinite' }} />
                <div className="absolute inset-1.5 rounded-full bg-[#ffd97d]" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div ref={ref3} className={`reveal-right ${vis3 ? 'visible' : ''}`}>
            <h3 className="font-display text-2xl md:text-3xl text-[#18141a] font-light leading-relaxed">
              A premier, full-service event management &amp; production firm
            </h3>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d] mt-5 mb-6 origin-left" style={{ animation: 'lineGrow 1.2s ease forwards' }} />
            <p className="text-[#5a4a58] leading-relaxed text-[15px]">
              Headquartered in Addis Ababa, Ethiopia, Velora Event &amp; Communication is dedicated to
              delivering seamless, high-impact experiences. Founded in 2026 by three visionary partners,
              we bridge the gap between creative event planning and technical execution.
            </p>
            <p className="text-[#5a4a58] mt-4 leading-relaxed text-[15px]">
              Founded on the principles of luxury, quality, precision, creativity, and strategic
              communication — we specialize in transforming corporate visions and personal milestones
              into unforgettable realities.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {[
                { t: 'Luxury', d: 'Premium experiences', delay: 0 },
                { t: 'Precision', d: 'Flawless execution', delay: 100 },
                { t: 'Creativity', d: 'Unique concepts', delay: 200 },
                { t: 'Quality', d: 'Uncompromising standards', delay: 300 },
              ].map((v) => (
                <div
                  key={v.t}
                  className="glass-card rounded-xl px-4 py-3 hover:shadow-lg transition-all duration-400 hover:-translate-y-1"
                  style={{ transitionDelay: `${v.delay}ms` }}
                  data-cursor-hover
                >
                  <div className="font-display text-lg text-shimmer-dark">{v.t}</div>
                  <div className="text-xs text-[#5a4a58] mt-0.5">{v.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
