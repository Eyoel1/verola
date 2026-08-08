'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+251 956 535 210', href: 'tel:+251956535210', color: '#e8739b' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+251 911 715 064', href: 'https://wa.me/251911715064', color: '#e8739b' },
  { icon: Mail, label: 'Email', value: 'info@veloraevents.et', href: 'mailto:info@veloraevents.et', color: '#e8739b' },
  { icon: MapPin, label: 'Office', value: '22 next to Zerihun building, IPS building 2nd floor, Addis Ababa', href: 'https://maps.app.goo.gl/qTf5YvNYG334Jjge9', color: '#e8739b' },
];

const eventTypes = ['Wedding Planning', 'Corporate Events', 'Conference Planning', 'Decoration', 'Catering', 'Venue Setup', 'Sound & Lighting', 'Entertainment'];

export default function Contact() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();
  const [formRef, formVisible] = useReveal<HTMLDivElement>();
  const [infoRef, infoVisible] = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const selectEl = form.querySelector('select');
    const textareaEl = form.querySelector('textarea');
    const eventType = selectEl ? selectEl.value : '';
    const details = textareaEl ? textareaEl.value : '';

    const subject = encodeURIComponent(`Event Inquiry from ${name} (${eventType})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Type: ${eventType}\n\nDetails:\n${details}`
    );

    // Open user's email app prefilled to info@veloraevents.et
    window.location.href = `mailto:info@veloraevents.et?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#f4e6d4] dark:bg-[#18141a] text-[#18141a] dark:text-white transition-colors duration-500 overflow-hidden">
      <div className="orb orb-2 w-[500px] h-[500px] bottom-[-150px] right-[-100px]" style={{ background: 'radial-gradient(circle, #fde8f1, #fff6dc, transparent)', opacity: 0.3 }} />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingRef} className={`text-center mb-16 reveal ${headingVisible ? 'visible' : ''}`}>
          <span className="text-[#e8739b] text-xs tracking-[0.4em] uppercase font-bold">Get in Touch</span>
          <h2 className="font-display text-3xl md:text-5xl mt-4 font-light text-[#18141a] dark:text-white">
            Let's Plan Your <em className="text-shimmer-dark not-italic">Event</em>
          </h2>
          {/* Bold, crisp dark text */}
          <p className="text-[#18141a] dark:text-white/90 mt-5 max-w-2xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
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
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 bg-[#fff7ee] dark:bg-[#251d28] border border-[#f7a8c4]/30 dark:border-white/10 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Hover gradient sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${info.color}08, transparent 70%)` }}
                  />

                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-400 group-hover:scale-110 shadow-lg bg-[#e8739b] text-white"
                  >
                    <Icon size={20} />
                  </div>
                  <div className="relative min-w-0">
                    <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#e8739b]">{info.label}</div>
                    <div className="text-[#18141a] dark:text-white font-semibold mt-1 text-sm sm:text-base break-words group-hover:text-[#e8739b] transition-colors">{info.value}</div>
                  </div>
                </a>
              );
            })}

            {/* Map link card */}
            <a
              href="https://maps.app.goo.gl/qTf5YvNYG334Jjge9"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden shadow-md mt-4 group relative h-48 border border-[#f7a8c4]/30 dark:border-white/10"
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
                <p className="text-white font-medium text-sm sm:text-base mt-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">22 next to Zerihun building, IPS building 2nd floor</p>
                <p className="text-[#ffd97d] text-xs mt-2 tracking-wide uppercase font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">View on Google Maps →</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div ref={formRef} className={`reveal-right ${formVisible ? 'visible' : ''}`}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#fff7ee] dark:bg-[#251d28] border border-[#f7a8c4]/30 dark:border-white/10 rounded-2xl shadow-2xl p-8 space-y-5 relative overflow-hidden"
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
                  <label className="text-xs tracking-[0.15em] uppercase text-[#18141a] dark:text-white/90 font-bold block mb-2">Event Type</label>
                  <select
                    className="w-full bg-[#f8eee0] dark:bg-[#18141a] border border-[#f7a8c4]/40 dark:border-white/15 rounded-lg px-4 py-3 text-[15px] text-[#18141a] dark:text-white font-medium focus:border-[#e8739b] focus:ring-2 focus:ring-[#f7a8c4]/20 focus:outline-none transition-all"
                  >
                    {eventTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#fff7ee] dark:bg-[#18141a] text-[#18141a] dark:text-white font-medium">{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="text-xs tracking-[0.15em] uppercase text-[#18141a] dark:text-white/90 font-bold block mb-2">Tell us about your event</label>
                <textarea
                  rows={4}
                  placeholder="Date, location, number of guests, and any details you'd like to share..."
                  className="w-full bg-[#f8eee0] dark:bg-[#18141a] border border-[#f7a8c4]/40 dark:border-white/15 rounded-lg px-4 py-3 text-[15px] text-[#18141a] dark:text-white font-medium focus:border-[#e8739b] focus:ring-2 focus:ring-[#f7a8c4]/20 focus:outline-none transition-all resize-none placeholder:text-[#2d2030]/60 dark:placeholder:text-white/50"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`w-full py-4 rounded-full text-sm tracking-[0.15em] uppercase font-semibold flex items-center justify-center gap-2 transition-all duration-500 ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'btn-brand text-[#18141a] shadow-xl hover:shadow-2xl'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} /> Inquiry Sent to info@veloraevents.et!
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
      <label className="text-xs tracking-[0.15em] uppercase text-[#18141a] dark:text-white/90 font-bold block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full bg-[#f8eee0] dark:bg-[#18141a] border border-[#f7a8c4]/40 dark:border-white/15 rounded-lg px-4 py-3 text-[15px] text-[#18141a] dark:text-white font-medium focus:border-[#e8739b] focus:ring-2 focus:ring-[#f7a8c4]/20 focus:outline-none transition-all placeholder:text-[#2d2030]/60 dark:placeholder:text-white/50"
      />
    </div>
  );
}
