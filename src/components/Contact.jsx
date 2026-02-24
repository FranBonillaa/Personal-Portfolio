import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <div style={{ width: '90%', maxWidth: 'none', margin: '0 auto', padding: '0 2rem' }} className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Contacto
        </h2>
        
        <p className="text-xl text-gray-300 mb-12">
          ¿Hablamos de tu próximo proyecto? Estoy listo para colaborar contigo.
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Email
            </h3>
            <p className="text-lg text-blue-400">
              fran.bonilla@example.com
            </p>
          </div>
          
          <div className="contact-item">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Redes Sociales
            </h3>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="cta-button">
          <button className="contact-btn">
            Enviar Mensaje
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
