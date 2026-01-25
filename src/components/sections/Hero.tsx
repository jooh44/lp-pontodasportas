
import React, { useEffect } from 'react';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import { content } from '../../data/content';
import './HeroSplit.css';

export const Hero: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const { hero } = content;

    return (
        <section id="hero" className="hero-split">
            <div className="hero-split__content">
                <div className="hero-split__text-wrapper" data-aos="fade-right">
                    <h1 className="hero-split__headline">{hero.headline}</h1>
                    <p className="hero-split__subheadline">{hero.subheadline}</p>

                    <div className="hero-split__actions">
                        <Button
                            variant="whatsapp"
                            size="lg"
                            icon={<FaWhatsapp />}
                            onClick={() => window.open(hero.link, '_blank')}
                        >
                            {hero.cta}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn--hero-secondary-split"
                        >
                            Ver Produtos
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hero-split__image-wrapper" data-aos="fade-left">
                <div className="hero-split__image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop)' }}></div>
            </div>
        </section>
    );
};
