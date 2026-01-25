
import React from 'react';
import { content } from '../../data/content';
import { Button } from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import './ProductShowcase.css';

export const ProductShowcase: React.FC = () => {
    const { products } = content;

    return (
        <div id="produtos" className="product-showcase">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2 className="section-title">{products.title}</h2>
                    <p className="section-subtitle">{products.subtitle}</p>
                </div>
            </div>

            <div className="product-showcase__list">
                {products.items.map((item, index) => (
                    <section
                        key={item.id}
                        id={item.id}
                        className={`product-section ${index % 2 !== 0 ? 'product-section--reverse' : ''}`}
                    >
                        <div className="container product-section__container">
                            <div className="product-section__image-wrapper" data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}>
                                <img src={item.image} alt={item.title} className="product-section__image" />
                                {item.tag && <span className="product-section__tag">{item.tag}</span>}
                            </div>

                            <div className="product-section__content" data-aos={index % 2 !== 0 ? "fade-right" : "fade-left"}>
                                <h3 className="product-section__title">{item.title}</h3>
                                <p className="product-section__description">{item.description}</p>
                                <Button
                                    variant="whatsapp"
                                    icon={<FaWhatsapp />}
                                    onClick={() => window.open('https://wa.me/5519999999999', '_blank')}
                                >
                                    Solicitar Orçamento
                                </Button>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};
