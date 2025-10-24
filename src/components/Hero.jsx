import React from 'react';
import './style/Hero.css';

function Hero() {
  const handleButtonClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="content">
      <h1>Mobile Developer & UI/UX Designer</h1>
      <p>I am M. Firmansyah, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium quis cum optio incidunt velit distinctio, ullam a dolor id dolorum, et quidem recusandae minus qui magnam quaerat aliquam! Vitae?.</p>
      <a href="#projects" className="button" onClick={handleButtonClick}>View Projects</a>
      <div className="social">
        <a href="https://github.com/Firmank123" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt="GitHub" />
        </a>
        <a href="https://t.me/Mikaziku" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/material-outlined/24/ffffff/telegram-app.png" alt="Telegram" />
        </a>
        <a href="#home" rel="noopener noreferrer">
          {/* TODO: Add LinkedIn profile link */}
          <img src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
}

export default Hero;