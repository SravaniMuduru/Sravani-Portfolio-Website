import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll effect
      setIsScrolled(window.scrollY > 100);
      
      // Back to top button visibility
      const backToTopButton = document.querySelector('.back-to-top');
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
      
      // Determine active section
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <ParticlesBackground />
      <Header activeSection={activeSection} isScrolled={isScrolled} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;