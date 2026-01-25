
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import { Button } from '../common/Button';
import logo from '../../assets/logo.webp';
import './Header.css';

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#hero' },
        { name: 'Linha L-30', href: '#esquadrias' },
        { name: 'Madeira', href: '#portas-entrada' },
        { name: 'Sobre Nós', href: '#sobre' },
    ];

    return (
        <header className={classNames('header', { 'header--scrolled': isScrolled })}>
            <div className="container header__container">
                <div className="header__logo">
                    <img src={logo} alt="Ponto das Portas" />
                </div>

                {/* Desktop Nav */}
                <nav className="header__nav desktop-only">
                    <ul className="header__menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="header__link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__actions desktop-only">
                    <Button
                        variant="whatsapp"
                        size="sm"
                        icon={<FaWhatsapp />}
                        onClick={() => window.open('https://wa.me/5519999999999', '_blank')}
                    >
                        Orçamento
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="header__toggle mobile-only"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={classNames('mobile-nav', { 'mobile-nav--open': isMobileMenuOpen })}>
                    <button
                        className="mobile-nav__close"
                        onClick={() => setIsMobileMenuOpen(false)}
                        aria-label="Fechar Menu"
                    >
                        <FaTimes />
                    </button>
                    <ul className="mobile-nav__menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="mobile-nav__link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>
                            <Button
                                variant="whatsapp"
                                fullWidth
                                icon={<FaWhatsapp />}
                                onClick={() => window.open('https://wa.me/5519999999999', '_blank')}
                            >
                                Solicitar Orçamento
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
