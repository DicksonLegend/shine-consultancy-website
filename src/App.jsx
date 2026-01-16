import { useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import Careers from './sections/Careers';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  // Scroll fade-in animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections with fade-section class
    const sections = document.querySelectorAll('.fade-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app">
      <Hero />
      <div className="fade-section"><About /></div>
      <div className="fade-section"><Services /></div>
      <div className="fade-section"><WhyChooseUs /></div>
      <div className="fade-section"><Careers /></div>
      <div className="fade-section"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
