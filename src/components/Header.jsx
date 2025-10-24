import React, { useState, useEffect } from 'react';
import './style/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="me">
        <a>M. Firmansyah</a>
      </div>
      <div className="menu">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </div>
      <div className="theme-toggle">
        <button id="theme-button">🌙</button>
      </div>
    </div>
  );
}

export default Header;