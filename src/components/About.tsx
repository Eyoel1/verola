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

          {/* Values */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative rounded-2xl p-7 text-center overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background: 'white',
                    boxShadow: '0 2px 20px rgba(247,168,196,0.10)',
                    transitionDelay: `${i * 70}ms`,
                  }}
                  data-cursor-hover
                >
                  {/* Gradient fill on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: 'linear-gradient(145deg, #fde8f1, #fff6dc)' }} />

                  {/* Left accent bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"
                    style={{ background: 'linear-gradient(180deg, #f7a8c4, #ffd97d)' }} />

                  <div className="relative">
                    <div className="inline-flex w-12 h-12 rounded-full items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, #fde8f1, #fff6dc)' }}>
                      <Icon size={20} className="text-[#e8739b]" />
                    </div>
                    <h4 className="font-display text-xl text-[#18141a] font-light mb-1">{v.title}</h4>
                    <p className="text-[#5a4a58] text-[12px] leading-relaxed">{v.desc}</p>
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
