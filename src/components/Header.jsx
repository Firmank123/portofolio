import React, { useState, useEffect } from 'react';
import './style/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleMenuClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="me">
          <a>M. Firmansyah</a>
        </div>
        <div className="menu">
          <a href="#home" onClick={(e) => handleMenuClick(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={(e) => handleMenuClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#projects" onClick={(e) => handleMenuClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#skills" onClick={(e) => handleMenuClick(e, 'skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#contact" onClick={(e) => handleMenuClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>
        <div className="theme-toggle">
          <button id="theme-button">🌙</button>
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <a>Navigation</a>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
          </div>
          <div className="sidebar-menu">
            <a href="#home" onClick={(e) => handleMenuClick(e, 'home')} className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" onClick={(e) => handleMenuClick(e, 'about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#projects" onClick={(e) => handleMenuClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills" onClick={(e) => handleMenuClick(e, 'skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#contact" onClick={(e) => handleMenuClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
        </div>
      </div>
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;