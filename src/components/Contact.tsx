import { useState, FormEvent } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+251 956 535 210', href: 'tel:+251956535210', color: '#f7a8c4' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+251 911 715 064', href: 'https://wa.me/251911715064', color: '#ffd97d' },
  { icon: Mail, label: 'Email', value: 'Samrawit.endale@Velora.com', href: 'mailto:Samrawit.endale@Velora.com', color: '#fbc8da' },
  { icon: MapPin, label: 'Office', value: '22 next to Zerihun building, IPS building 2nd floor, Addis Ababa', href: 'https://maps.app.goo.gl/qTf5YvNYG334Jjge9', color: '#ffe8a3' },
];

const eventTypes = ['Wedding Planning', 'Corporate Events', 'Conference Planning', 'Decoration', 'Catering', 'Venue Setup', 'Sound & Lighting', 'Entertainment'];

export default function Contact() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();
  const [formRef, formVisible] = useReveal<HTMLDivElement>();
  const [infoRef, infoVisible] = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#fdf9f5] overflow-hidden">
      <div className="orb orb-2 w-[500px] h-[500px] bottom-[-150px] right-[-100px]" style={{ background: 'radial-gradient(circle, #fde8f1, #fff6dc, transparent)', opacity: 0.3 }} />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingRef} className={`text-center mb-16 reveal ${headingVisible ? 'visible' : ''}`}>
          <span className="text-[#e8739b] text-xs tracking-[0.4em] uppercase font-medium">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-[#18141a] font-light">
            Let's Plan Your <em className="text-shimmer-dark not-italic">Event</em>
          </h2>
          <p className="text-[#5a4a58] mt-5 max-w-2xl mx-auto font-light text-[15px]">
            Ready to create something extraordinary? Reach out and let's start building the infrastructure
            for your success.
          </p>
          <div className="ornament-divider w-48 mx-auto mt-6">
            <span className="text-[#f7a8c4] text-lg">✦</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div ref={infoRef} className={`reveal-left ${infoVisible ? 'visible' : ''} space-y-4`}>
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group flex items-start gap-5 bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Hover gradient sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${info.color}08, transparent 70%)` }}
                  />

                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}, #ffd97d)`,
                    }}
                  >
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className="relative">
                    <div className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: info.color }}>{info.label}</div>
                    <div className="text-[#18141a] mt-1 text-[15px] group-hover:text-[#e8739b] transition-colors">{info.value}</div>
                  </div>
                </a>
              );
            })}

            {/* Map link card */}
            <a
              href="https://maps.app.goo.gl/qTf5YvNYG334Jjge9"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="block rounded-2xl overflow-hidden shadow-md mt-4 group relative h-48"
              style={{ background: 'linear-gradient(135deg, #18141a, #2d2030)' }}
            >
              {/* Animated grid pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(#f7a8c440 1px, transparent 1px), linear-gradient(90deg, #f7a8c440 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
              {/* Pulsing pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#f7a8c4]" style={{ animation: 'pulse-ring 2.5s ease infinite' }} />
                  <MapPin className="text-[#f7a8c4] relative z-10 animate-float" size={36} />
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <p className="text-white/80 text-sm mt-8">22 next to Zerihun building, IPS building 2nd floor</p>
                <p className="text-shimmer text-xs mt-2 tracking-wide uppercase font-medium">View on Google Maps →</p>
              </div>
            </a>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {['Instagram', 'Facebook', 'TikTok', 'LinkedIn'].map((s) => (
                <button
                  key={s}
                  data-cursor-hover
                  className="px-5 py-2 rounded-full border border-[#f7a8c4]/30 text-[#e8739b] text-xs tracking-wide hover:bg-gradient-to-r hover:from-[#f7a8c4] hover:to-[#ffd97d] hover:text-white hover:border-transparent transition-all duration-400"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className={`reveal-right ${formVisible ? 'visible' : ''}`}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-2xl p-8 space-y-5 relative overflow-hidden"
            >
              {/* Animated top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-line" />

              {/* Corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#f7a8c4] opacity-10 blur-3xl pointer-events-none" />

              <div className="grid sm:grid-cols-2 gap-5 relative">
                <Field label="Full Name" name="name" type="text" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5 relative">
                <Field label="Phone" name="phone" type="tel" placeholder="+251 ..." />
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-[#5a4a58] block mb-2">Event Type</label>
                  <select
                    className="w-full bg-[#fdf9f5] border border-[#f7a8c4]/25 rounded-lg px-4 py-3 text-[15px] text-[#18141a] focus:border-[#e8739b] focus:ring-2 focus:ring-[#f7a8c4]/20 focus:outline-none transition-all"
                  >
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="text-xs tracking-[0.15em] uppercase text-[#5a4a58] block mb-2">Tell us about your event</label>
                <textarea
                  rows={4}
                  placeholder="Date, location, number of guests, and any details you'd like to share..."
                  className="w-full bg-[#fdf9f5] border border-[#f7a8c4]/25 rounded-lg px-4 py-3 text-[15px] text-[#18141a] focus:border-[#e8739b] focus:ring-2 focus:ring-[#f7a8c4]/20 focus:outline-none transition-all resize-none placeholder:text-[#5a4a58]/40"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                data-cursor-hover
                className={`w-full py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold flex items-center justify-center gap-2 transition-all duration-500 ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'btn-brand text-[#18141a] shadow-xl hover:shadow-2xl'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    Send Inquiry <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type, placeholder }: { label: string; name: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs tracking-[0.15em] uppercase text-[#5a4a58] block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full bg-[#fdf9f5] border border-[#f7a8c4]/25 rounded-lg px-4 py-3 text-[15px] text-[#18141a] focus:border-[#e8739b] focus:ring-2 focus:ring-[#f7a8c4]/20 focus:outline-none transition-all placeholder:text-[#5a4a58]/40"
      />
    </div>
  );
}
