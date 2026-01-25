
import React from 'react';
import { Button } from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import './ProductCard.css';

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    tag?: string;
    delay?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, tag, delay = 0 }) => {
    return (
        <div className="product-card" data-aos="fade-up" data-aos-delay={delay}>
            <div className="product-card__image-container">
                {tag && <span className="product-card__tag">{tag}</span>}
                <img src={image} alt={title} className="product-card__image" />
            </div>
            <div className="product-card__content">
                <h3 className="product-card__title">{title}</h3>
                <p className="product-card__description">{description}</p>
                <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    icon={<FaWhatsapp />}
                    onClick={() => window.open('https://wa.me/5519999999999', '_blank')}
                    className="product-card__btn"
                >
                    Orçar Agora
                </Button>
            </div>
        </div>
    );
};
