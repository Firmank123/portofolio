import React from 'react';
import './style/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="me">
        <a>M. Firmansyah</a>
      </div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="theme-toggle">
        <button id="theme-button">🌙</button>
      </div>
    </div>
  );
}

export default Header;