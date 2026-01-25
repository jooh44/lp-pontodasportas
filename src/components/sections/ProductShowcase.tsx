
import React, { useRef } from 'react';
import { content } from '../../data/content';
import { Button } from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProductShowcase.css';

gsap.registerPlugin(ScrollTrigger);

export const ProductShowcase: React.FC = () => {
    const { products } = content;
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray('.product-section');

        sections.forEach((section: any) => {
            const img = section.querySelector('.product-section__image');
            const text = section.querySelector('.product-section__content');

            gsap.fromTo(img,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 65%", // Started later (was 80%)
                        toggleActions: "play none none reverse" // Removed scrub for cleaner entrance
                    }
                }
            );

            gsap.fromTo(text,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    delay: 0.2, // Slight delay after image
                    scrollTrigger: {
                        trigger: section,
                        start: "top 65%", // Started later (was 70%)
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <div id="produtos" className="product-showcase" ref={containerRef}>
            <div className="container">
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
                            <div className="product-section__image-wrapper">
                                <img src={item.image} alt={item.title} className="product-section__image" />
                                {item.tag && <span className="product-section__tag">{item.tag}</span>}
                            </div>

                            <div className="product-section__content">
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
