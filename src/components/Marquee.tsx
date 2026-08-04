const items = [
  'Wedding Planning',
  'Corporate Events',
  'Conference Planning',
  'Decoration',
  'Catering',
  'Venue Setup',
  'Sound & Lighting',
  'Entertainment',
];

export default function Marquee() {
  return (
    <section className="bg-[#18141a] py-7 overflow-hidden border-y border-[#f7a8c4]/20 relative">
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-0 w-40 h-40 -translate-y-1/2 bg-[#f7a8c4] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-40 h-40 -translate-y-1/2 bg-[#ffd97d] opacity-10 blur-3xl pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-5 mx-8 shrink-0">
            <span className="font-display text-2xl text-white/30 font-light hover:text-[#f7a8c4] transition-colors duration-400">{item}</span>
            <span className="text-shimmer text-xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
