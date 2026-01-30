
import React, { useRef } from 'react';
import { content } from '../../data/content';
import { Button } from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import './ProductShowcase.css';

export const ProductShowcase: React.FC = () => {
    const { products } = content;
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section id="produtos" className="product-showcase" ref={containerRef}>
            <div className="container">
                <div /* data-aos="fade-up" */>
                    <div className="section-header">
                        <h2 className="section-title">{products.title}</h2>
                        <p className="section-subtitle">{products.subtitle}</p>
                    </div>
                </div>

                <div className="product-categories-list">
                    {products.categories.map((category) => (
                        <div key={category.id} className="product-category-group" data-aos="fade-up">
                            <h3 className="category-title">{category.title}</h3>
                            <p className="category-description">{category.description}</p>

                            <div className="products-grid">
                                {category.items.map((item) => (
                                    <article key={item.id} className="product-card group">
                                        <div className="product-card__image-wrapper">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="product-card__image"
                                                loading="lazy"
                                            />
                                            {item.tag && <span className="product-card__tag">{item.tag}</span>}
                                        </div>
                                        <div className="product-card__content">
                                            <h4 className="product-card__title">{item.title}</h4>
                                            <p className="product-card__description">{item.description}</p>
                                            <Button
                                                variant="whatsapp"
                                                fullWidth
                                                icon={<FaWhatsapp />}
                                                onClick={() => window.open('https://wa.me/5519993337602', '_blank')}
                                            >
                                                Orçamento
                                            </Button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
