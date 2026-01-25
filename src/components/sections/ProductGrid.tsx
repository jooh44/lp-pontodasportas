
import React from 'react';
import { content } from '../../data/content';
import { ProductCard } from '../common/ProductCard';
import './ProductGrid.css';

export const ProductGrid: React.FC = () => {
    const { products } = content;

    return (
        <section id="produtos" className="section product-grid">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">{products.title}</h2>
                    <p className="section-subtitle">{products.subtitle}</p>
                </div>

                <div className="product-grid__container">
                    {products.items.map((item, index) => (
                        <ProductCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            tag={item.tag}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
