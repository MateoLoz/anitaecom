import React from 'react';
import { EvalNav } from '../../navbar/navbar';
import './styles/contact.css';
import '../../styles/mainBackground.css';

export const ContactPage = () => {
  return (
    <div className="app-container">
      <EvalNav />
      <div className="main-content">
        <div className="main-container">
      <h1>Contacto</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3>Correo Electrónico</h3>
              <p>info@anita-fashion.com</p>
            </div>
            <div className="contact-item">
              <h3>Teléfono</h3>
              <p>+54 9 11 1234-5678</p>
            </div>
            <div className="contact-item">
              <h3>Dirección</h3>
              <p>Av. Córdoba 1234, Buenos Aires, Argentina</p>
            </div>
            <div className="contact-item">
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 10:00 - 18:00</p>
              <p>Sábado: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Formulario de Contacto</h2>
          <form className="contact-form-container">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>

        <div className="contact-map">
          <h2>Ubícanos</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.773590347645!2d-58.38158968483584!3d-34.60368918042998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca40420f201f%3A0x473b8f64b9b1d961!2sC%C3%B3rdoba%201234%2C%20C1054%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1686493667978!5m2!1ses!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};
