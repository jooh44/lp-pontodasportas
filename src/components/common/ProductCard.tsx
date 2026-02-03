
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './ProductCard.css';

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    tag?: string;
    onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, tag, onClick }) => {
    return (
        <div className="product-card group">
            <div className="product-card__image-wrapper">
                <img
                    src={image}
                    alt={title}
                    className="product-card__image"
                    loading="lazy"
                />
                {tag && <span className="product-card__tag">{tag}</span>}
            </div>
            <div className="product-card__content">
                <h4 className="product-card__title">{title}</h4>
                <p className="product-card__description">{description}</p>
                <button
                    className="product-card__button"
                    onClick={onClick}
                >
                    <FaWhatsapp size={18} />
                    Solicitar Orçamento
                </button>
            </div>
        </div>
    );
};
