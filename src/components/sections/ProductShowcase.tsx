
import React from 'react';
import { content } from '../../data/content';
import { ProductCard } from '../common/ProductCard';
import { FaDoorOpen } from 'react-icons/fa';
import './ProductShowcase.css';

export const ProductShowcase: React.FC = () => {
    const { products } = content;

    return (
        <section id="produtos" className="product-showcase">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <FaDoorOpen className="section-title-icon" />
                        {products.title}
                    </h2>
                    <p className="section-subtitle">{products.subtitle}</p>
                </div>

                <div className="product-categories-list">
                    {products.categories.map((category) => (
                        <div id={category.id} key={category.id} className="product-category-group">
                            <h3 className="category-title">{category.title}</h3>
                            <p className="category-description">{category.description}</p>

                            <div className="products-grid">
                                {category.items.map((item) => (
                                    <div key={item.id} className="product-item-wrapper">
                                        <ProductCard
                                            title={item.title}
                                            description={item.description}
                                            image={item.image}
                                            onClick={() => {
                                                const message = `Olá, gostaria de um orçamento da ${item.title}.`;
                                                const encodedMessage = encodeURIComponent(message);
                                                window.open(`https://wa.me/5519993337602?text=${encodedMessage}`, '_blank');
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
