import React from 'react';
import './MapSection.css';

export const MapSection: React.FC = () => {
    return (
        <section className="map-section">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5553306029024!2d-47.0049431!3d-22.966597999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cdc74b0144ef%3A0x31d22a62aff6bda0!2sPonto%20Das%20Portas!5e0!3m2!1spt-BR!2sbr!4v1770086975152!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Ponto das Portas"
            ></iframe>
        </section>
    );
};
