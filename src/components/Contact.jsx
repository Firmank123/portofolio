import React from 'react';
import './style/Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
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
    </section>
  );
}

export default Contact;