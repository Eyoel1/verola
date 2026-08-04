import { Sparkles, Gem, Target, Wand2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const values = [
  { icon: Gem,      title: 'Luxury',     desc: 'Premium experiences in every detail' },
  { icon: Target,   title: 'Precision',  desc: 'Flawless execution, every time' },
  { icon: Wand2,    title: 'Creativity', desc: 'Unique concepts that captivate' },
  { icon: Sparkles, title: 'Quality',    desc: 'Uncompromising standards throughout' },
];

export default function About() {
  const [leftRef,   leftVisible]   = useReveal<HTMLDivElement>();
  const [rightRef,  rightVisible]  = useReveal<HTMLDivElement>();
  const [valRef,    valVisible]    = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-28 bg-[#fdf9f5] overflow-hidden">

      {/* Soft background gradient wash — echoes logo colours */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 10% 20%, #fde8f180 0%, transparent 50%), ' +
            'radial-gradient(ellipse at 90% 80%, #fff6dc90 0%, transparent 50%)',
        }}
      />

      {/* Faint diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #f7a8c4 0px, #f7a8c4 1px, transparent 1px, transparent 36px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ── SECTION LABEL ── */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d]" />
          <span className="text-[#e8739b] text-xs tracking-[0.4em] uppercase font-medium">Our Story</span>
        </div>

        {/* ── TWO-COLUMN SPLIT ── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-24">

          {/* LEFT — photo stack */}
          <div
            ref={leftRef}
            className={`reveal-left ${leftVisible ? 'visible' : ''} relative`}
          >
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/16935999/pexels-photo-16935999.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Velora team at work"
                className="w-full h-[520px] object-cover"
              />
              {/* Gradient overlay — brand tones */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, #f7a8c430 0%, transparent 40%, #ffd97d20 100%)',
                }}
              />
            </div>

            {/* Floating accent card */}
            <div
              className="absolute -bottom-8 -right-6 lg:-right-10 glass-card rounded-2xl px-6 py-5 shadow-xl border border-[#f7a8c4]/30 max-w-[200px]"
            >
              <div className="font-display text-4xl text-shimmer-dark font-light leading-none mb-1">
                100<span className="text-2xl">%</span>
              </div>
              <p className="text-[#5a4a58] text-[12px] leading-snug font-light">
                Dedication to every event, every time
              </p>
            </div>

            {/* Small decorative gradient pill — top-left */}
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-60 blur-2xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #f7a8c4, #ffd97d)' }}
            />
          </div>

          {/* RIGHT — copy */}
          <div ref={rightRef} className={`reveal-right ${rightVisible ? 'visible' : ''}`}>
            <h2 className="font-display text-4xl md:text-5xl xl:text-[56px] text-[#18141a] font-light leading-[1.1] mb-6">
              Crafting Events That<br />
              <em className="text-shimmer-dark not-italic">Leave a Mark</em>
            </h2>

            {/* Gradient rule */}
            <div className="h-[2px] w-16 rounded-full mb-8" style={{ background: 'linear-gradient(90deg, #f7a8c4, #ffd97d)' }} />

            <p className="text-[#5a4a58] text-[16px] leading-[1.85] font-light mb-6">
              Velora Event &amp; Communication is a premier, full-service event management and
              production firm — founded on the principles of luxury, quality, precision, and
              creativity.
            </p>
            <p className="text-[#5a4a58] text-[16px] leading-[1.85] font-light mb-10">
              Based in Addis Ababa, Ethiopia, we specialize in transforming corporate visions
              and personal milestones into unforgettable realities. Every event we touch is a
              testament to our uncompromising standards and passion for excellence.
            </p>

            {/* Inline stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#f7a8c4]/25">
              {[
                { num: '2026', label: 'Founded' },
                { num: 'AAU', label: 'Headquartered' },
                { num: '3+', label: 'Visionaries' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl text-shimmer-dark font-light leading-none mb-1">
                    {s.num}
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#e8739b] font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── VALUES GRID ── */}
        <div ref={valRef} className={`reveal ${valVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d]" />
            <span className="text-[#e8739b] text-xs tracking-[0.4em] uppercase font-medium">
              Core Principles
            </span>
            <div className="h-[1.5px] w-10 bg-gradient-to-r from-[#ffd97d] to-[#f7a8c4]" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative bg-white rounded-2xl px-6 py-8 text-center
                             shadow-[0_4px_24px_rgba(247,168,196,0.12)]
                             hover:shadow-[0_12px_40px_rgba(247,168,196,0.28)]
                             hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                  style={{ transitionDelay: `${i * 80}ms` }}
                  data-cursor-hover
                >
                  {/* Brand gradient wash on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(160deg, #fde8f180 0%, #fff6dc80 100%)',
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{ background: 'linear-gradient(90deg, #f7a8c4, #ffd97d)' }}
                  />

                  {/* Icon circle */}
                  <div className="relative inline-flex mb-5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, #fde8f1, #fff6dc)',
                        border: '1.5px solid #f7a8c440',
                      }}
                    >
                      <Icon size={22} className="text-[#e8739b]" />
                    </div>
                  </div>

                  <h4 className="font-display text-xl text-[#18141a] font-light mb-2 relative">
                    {v.title}
                  </h4>
                  <p className="text-[#5a4a58] text-[13px] leading-relaxed relative">
                    {v.desc}
                  </p>

                  {/* Subtle index */}
                  <div className="font-display text-xs text-[#e8739b]/30 mt-4 tracking-widest">
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
