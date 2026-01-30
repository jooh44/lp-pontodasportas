
import React from 'react';
import { content } from '../../data/content';
import { Button } from '../common/Button';
import { trackEvent, AnalyticsEvents } from '../../utils/analytics';
import { FaWhatsapp } from 'react-icons/fa';
import './CTASection.css';

export const CTASection: React.FC = () => {
    const { ctaSection } = content;

    return (
        <section className="cta-section">
            <div className="cta-section__overlay"></div>
            <div
                className="cta-section__bg"
                style={{ backgroundImage: `url(${ctaSection.backgroundImage})` }}
            ></div>

            <div className="container cta-section__container" data-aos="zoom-in">
                <div className="cta-section__content">
                    <h2 className="cta-section__title">{ctaSection.title}</h2>
                    <p className="cta-section__subtitle">{ctaSection.subtitle}</p>
                    <Button
                        variant="whatsapp"
                        size="lg"
                        icon={<FaWhatsapp />}
                        onClick={() => {
                            trackEvent(AnalyticsEvents.WHATSAPP_CLICK, { location: 'cta_section_main' });
                            window.open('https://wa.me/5519993337602', '_blank');
                        }}
                        className="btn--cta"
                    >
                        {ctaSection.buttonText}
                    </Button>
                </div>
            </div>
        </section>
    );
};
