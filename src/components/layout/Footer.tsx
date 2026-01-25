
import React from 'react';
import { content } from '../../data/content';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.webp';
import './Footer.css';

export const Footer: React.FC = () => {
    const { footer } = content;

    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__col">
                    <img src={logo} alt="Ponto das Portas" className="footer__logo" />
                    <p className="footer__contact">
                        <FaMapMarkerAlt /> {footer.address}
                    </p>
                    <p className="footer__contact">
                        <FaWhatsapp /> {footer.phone}
                    </p>
                </div>
                <div className="footer__col">
                    <h4>Social</h4>
                    <a href={`https://instagram.com/${footer.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="footer__social">
                        <FaInstagram /> {footer.instagram}
                    </a>
                </div>
            </div>
            <div className="footer__bottom">
                <p>{footer.copyright}</p>
            </div>
        </footer>
    );
};
