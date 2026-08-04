'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf9f5] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
    </main>
  );
}
