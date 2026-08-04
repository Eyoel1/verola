import { Sparkles, Gem, Target, Wand2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const values = [
  { icon: Gem,      title: 'Luxury',     desc: 'Premium experiences in every detail' },
  { icon: Target,   title: 'Precision',  desc: 'Flawless execution, every time' },
  { icon: Wand2,    title: 'Creativity', desc: 'Unique concepts that captivate' },
  { icon: Sparkles, title: 'Quality',    desc: 'Uncompromising standards throughout' },
];

const pillars = [
  { num: '2026', label: 'Founded', detail: 'Born from a passion for extraordinary events' },
  { num: 'AAU',  label: 'Based in Addis', detail: 'Serving clients across Ethiopia and beyond' },
  { num: '3',    label: 'Visionaries', detail: 'A team united by creativity and excellence' },
];

export default function About() {
  const [topRef,  topVisible]  = useReveal<HTMLDivElement>();
  const [midRef,  midVisible]  = useReveal<HTMLDivElement>();
  const [valRef,  valVisible]  = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #fff6f9 0%, #fffdf7 50%, #fff6f9 100%)' }}>

      {/* ── decorative blobs ── */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f7a8c422 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffd97d1a 0%, transparent 70%)', transform: 'translate(30%, 30%)' }} />

      {/* ── large faded display word ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[18vw] font-light leading-none tracking-tight"
          style={{ color: '#f7a8c4', opacity: 0.06 }}>
          Velora
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">

        {/* ── top: label + headline ── */}
        <div ref={topRef} className={`reveal ${topVisible ? 'visible' : ''} text-center mb-20`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#f7a8c4]" />
            <span className="text-[#e8739b] text-[10px] tracking-[0.5em] uppercase font-medium">Our Story</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#f7a8c4]" />
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-[88px] text-[#18141a] font-light leading-[1.0] mb-8">
            Events that
            <br />
            <em className="not-italic" style={{
              background: 'linear-gradient(100deg, #e8739b 0%, #f7a8c4 35%, #ffd97d 65%, #f5c535 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>move people.</em>
          </h2>

          {/* Gradient rule */}
          <div className="mx-auto h-[2px] w-24 rounded-full mb-10"
            style={{ background: 'linear-gradient(90deg, #f7a8c4, #ffd97d)' }} />

          <p className="text-[#5a4a58] text-[17px] leading-[1.9] font-light max-w-2xl mx-auto">
            Velora Event &amp; Communication is a premier full-service event management and
            production firm. We bridge the gap between creative vision and flawless execution —
            turning every milestone into an unforgettable memory.
          </p>
        </div>

        {/* ── middle: three pillars ── */}
        <div ref={midRef} className={`reveal ${midVisible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-0 mb-20 border border-[#f7a8c4]/20 rounded-3xl overflow-hidden`}>
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className={`group relative px-10 py-12 text-center transition-all duration-500 hover:bg-white/70
                ${i < pillars.length - 1 ? 'md:border-r border-b md:border-b-0 border-[#f7a8c4]/20' : ''}`}
            >
              {/* Hover gradient wash */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-none"
                style={{ background: 'linear-gradient(160deg, #fde8f150, #fff6dc50)' }} />

              <div className="relative">
                <div className="font-display text-6xl md:text-7xl font-light leading-none mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #e8739b, #ffd97d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                  {p.num}
                </div>
                <div className="text-[10px] tracking-[0.4em] uppercase text-[#e8739b] font-medium mb-3">
                  {p.label}
                </div>
                <p className="text-[#5a4a58] text-[13px] leading-relaxed font-light">
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── bottom: quote + values ── */}
        <div ref={valRef} className={`reveal ${valVisible ? 'visible' : ''}`}>

          {/* Pull quote */}
          <div className="text-center mb-16">
            <p className="font-display text-2xl md:text-3xl text-[#18141a] font-light italic leading-[1.5] max-w-3xl mx-auto">
              "We don't just plan events — we build the stage for your greatest moments."
            </p>
          </div>

          {/* Values — horizontal interactive list */}
          <div className="max-w-4xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative flex items-center gap-6 py-7 px-4 md:px-8 transition-all duration-500 hover:px-8 md:hover:px-10 overflow-hidden"
                  data-cursor-hover
                >
                  {/* Hover background sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, #fde8f160 0%, #fff6dc40 60%, transparent 100%)' }}
                  />

                  {/* Large faded number */}
                  <div
                    className="font-display text-5xl md:text-6xl font-light leading-none w-16 text-right shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      color: '#f7a8c4',
                      opacity: 0.3,
                    }}
                  >
                    0{i + 1}
                  </div>

                  {/* Icon in a ring */}
                  <div
                    className="relative shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      border: '1.5px solid #f7a8c440',
                      background: 'linear-gradient(135deg, #fde8f140, #fff6dc40)',
                    }}
                  >
                    <Icon
                      size={22}
                      className="text-[#e8739b] transition-all duration-500 group-hover:text-[#e8739b]"
                    />
                    {/* Ring pulse on hover */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none"
                      style={{ border: '1.5px solid #f7a8c4', }}
                    />
                  </div>

                  {/* Title + desc */}
                  <div className="relative flex-1">
                    <h4 className="font-display text-2xl md:text-3xl text-[#18141a] font-light leading-none mb-1 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(100deg, #18141a, #18141a)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      <span className="group-hover:text-shimmer-dark transition-all duration-500">{v.title}</span>
                    </h4>
                    <p className="text-[#5a4a58] text-[13px] leading-relaxed font-light max-w-sm">
                      {v.desc}
                    </p>
                  </div>

                  {/* Arrow that slides in */}
                  <div
                    className="relative shrink-0 w-10 h-10 rounded-full flex items-center justify-center opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    style={{ background: 'linear-gradient(135deg, #f7a8c4, #ffd97d)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Bottom divider */}
                  {i < values.length - 1 && (
                    <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, #f7a8c430, transparent)' }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
