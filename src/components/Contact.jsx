import React from 'react';
import './style/Contact.css';

function Contact() {
  return (
    <section id="contact">
      <h2>Kontak</h2>
      <form>
        <input type="text" placeholder="Nama" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Pesan"></textarea>
        <button type="submit">Kirim</button>
      </form>
    </section>
  );
}

export default Contact;