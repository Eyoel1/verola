import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#18141a] text-white/70 overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-1.5 gradient-line" />

      {/* Ambient orbs */}
      <div className="orb orb-1 w-[400px] h-[400px] top-[-100px] left-[-80px]" style={{ background: 'radial-gradient(circle, #f7a8c420, transparent)', opacity: 0.4 }} />
      <div className="orb orb-2 w-[300px] h-[300px] bottom-[-80px] right-[-60px]" style={{ background: 'radial-gradient(circle, #ffd97d18, transparent)', opacity: 0.35 }} />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/Velora_1.png" alt="Velora" className="h-14 animate-glow rounded-full" />
              <div>
                <div className="font-display text-2xl text-white leading-none">
                  Velora<span className="text-shimmer">.</span>
                </div>
                <div className="text-[8px] tracking-[0.35em] uppercase text-[#f7a8c4] mt-1">Events & Communications</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-light max-w-xs">
              We don't just plan events — we build the infrastructure for your success. Premier event
              management &amp; production in Addis Ababa, Ethiopia.
            </p>
            {/* Animated line */}
            <div className="h-0.5 w-20 gradient-line mt-5 origin-left" />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    data-cursor-hover
                    className="text-sm hover:text-[#f7a8c4] transition-colors nav-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <Phone className="text-[#f7a8c4] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={16} />
                <a href="tel:+251956535210" className="hover:text-[#f7a8c4] transition-colors" data-cursor-hover>+251 956 535 210</a>
              </li>
              <li className="flex items-start gap-3 group">
                <MessageCircle className="text-[#ffd97d] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={16} />
                <a href="https://wa.me/251911715064" className="hover:text-[#ffd97d] transition-colors" data-cursor-hover>+251 911 715 064</a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="text-[#fbc8da] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={16} />
                <a href="mailto:Samrawit.endale@Velora.com" className="hover:text-[#fbc8da] transition-colors break-all" data-cursor-hover>Samrawit.endale@Velora.com</a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="text-[#ffe8a3] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={16} />
                <span>22 next to Zerihun building, IPS building 2nd floor, Addis Ababa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {year} Velora Event &amp; Communication. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-display italic">
            Luxury · Quality · Precision · Creativity
          </p>
        </div>
      </div>
    </footer>
  );
}
