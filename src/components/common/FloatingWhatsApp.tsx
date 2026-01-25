
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingWhatsApp.css';

export const FloatingWhatsApp: React.FC = () => {
    return (
        <a
            href="https://wa.me/5519993337602?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Falar no WhatsApp"
        >
            <FaWhatsapp className="floating-whatsapp__icon" />
            <span className="floating-whatsapp__tooltip">Orçamento Rápido</span>
        </a>
    );
};
