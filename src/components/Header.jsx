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
      <div className="social">
        <a href="https://github.com/Firmank123" className="git">
          <img src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt="GitHub" />
          GitHub
        </a>
        <a href="https://t.me/firmank123" className="tg">
          <img src="https://img.icons8.com/material-outlined/24/ffffff/telegram-app.png" alt="Telegram" />
          Telegram
        </a>
      </div>
    </div>
  );
}

export default Header;