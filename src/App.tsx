import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdf9f5] overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
