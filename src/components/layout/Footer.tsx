
import React from 'react';
import { content } from '../../data/content';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.webp';
import './Footer.css';

export const Footer: React.FC = () => {
    const { footer } = content;

    return (
        <footer id="footer" className="footer">
            <div className="container footer__container">
                {/* Brand Column */}
                <div className="footer__col footer__brand">
                    <img src={logo} alt="Ponto das Portas" className="footer__logo" />
                    <p className="footer__mission">
                        Transformando projetos em realidade com esquadrias de alto padrão desde 2006.
                    </p>
                    <div className="footer__socials">
                        <a href={`https://instagram.com/${footer.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href={`https://wa.me/5519993337602`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Navigation Column */}
                <div className="footer__col">
                    <h4 className="footer__title">Navegação</h4>
                    <nav className="footer__nav">
                        <a href="#hero">Início</a>
                        <a href="#produtos">Produtos</a>
                        <a href="#sobre">Sobre Nós</a>
                        <a href="#depoimentos">Depoimentos</a>
                    </nav>
                </div>

                {/* Contact Column */}
                <div className="footer__col">
                    <h4 className="footer__title">Contato</h4>
                    <p className="footer__contact-item">
                        <FaMapMarkerAlt />
                        <span>{footer.address}</span>
                    </p>
                    <p className="footer__contact-item">
                        <FaWhatsapp />
                        <span>{footer.phone}</span>
                    </p>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <p>{footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
};
