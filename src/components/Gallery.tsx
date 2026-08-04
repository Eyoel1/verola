import { useReveal } from '../hooks/useReveal';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg?auto=compress&cs=tinysrgb&h=800&w=800', cat: 'Weddings', span: 'lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=500&w=700', cat: 'Corporate', span: '' },
  { src: 'https://images.pexels.com/photos/16935999/pexels-photo-16935999.jpeg?auto=compress&cs=tinysrgb&h=500&w=700', cat: 'Decoration', span: '' },
  { src: 'https://images.pexels.com/photos/13230484/pexels-photo-13230484.jpeg?auto=compress&cs=tinysrgb&h=800&w=600', cat: 'Sound & Lighting', span: 'lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/8761782/pexels-photo-8761782.jpeg?auto=compress&cs=tinysrgb&h=500&w=700', cat: 'Conferences', span: '' },
  { src: 'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=500&w=700', cat: 'Venue Setup', span: '' },
  { src: 'https://images.pexels.com/photos/25956380/pexels-photo-25956380.jpeg?auto=compress&cs=tinysrgb&h=500&w=700', cat: 'Celebrations', span: '' },
  { src: 'https://images.pexels.com/photos/36154338/pexels-photo-36154338.jpeg?auto=compress&cs=tinysrgb&h=500&w=700', cat: 'Ceremonies', span: '' },
];

const categories = ['All', 'Weddings', 'Corporate', 'Decoration', 'Conferences'];

export default function Gallery() {
  const [headingRef, headingVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="relative py-28 bg-velora-dark overflow-hidden">
      {/* Animated orbs */}
      <div className="orb orb-1 w-[500px] h-[500px] top-[-100px] left-[-100px]" style={{ background: 'radial-gradient(circle, #f7a8c430, transparent)', opacity: 0.5 }} />
      <div className="orb orb-2 w-[400px] h-[400px] bottom-[-80px] right-[-80px]" style={{ background: 'radial-gradient(circle, #ffd97d25, transparent)', opacity: 0.4 }} />

      {/* Rotating deco */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#f7a8c4]/5 animate-rotate-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div ref={headingRef} className={`text-center mb-14 reveal ${headingVisible ? 'visible' : ''}`}>
          <span className="text-[#ffd97d] text-xs tracking-[0.4em] uppercase font-medium">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-white font-light">
            Moments We've <em className="text-shimmer not-italic">Created</em>
          </h2>
          <div className="ornament-divider w-48 mx-auto mt-6">
            <span className="text-[#f7a8c4] text-lg">✦</span>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat}
              data-cursor-hover
              className={`px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase transition-all duration-400 ${
                i === 0
                  ? 'bg-gradient-to-r from-[#f7a8c4] to-[#ffd97d] text-[#18141a] font-semibold shadow-lg shadow-[#f7a8c4]/30'
                  : 'border border-white/15 text-white/50 hover:border-[#f7a8c4] hover:text-[#f7a8c4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <GalleryItem key={i} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ img, index }: { img: typeof galleryImages[0]; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal-scale ${visible ? 'visible' : ''} group relative overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
      data-cursor-hover
    >
      <img
        src={img.src}
        alt={img.cat}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Animated corner accent */}
      <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent to-[#f7a8c4]" />
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#f7a8c4] to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-[#ffd97d] text-[10px] tracking-[0.3em] uppercase font-medium">{img.cat}</span>
      </div>
    </div>
  );
}
