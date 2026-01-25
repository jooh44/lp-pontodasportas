
import React from 'react';
import { content } from '../../data/content';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
    const { testimonials } = content;
    // Duplicate 3x to ensure there's enough content for infinite scroll without gaps
    const tickerItems = [...testimonials.items, ...testimonials.items, ...testimonials.items];

    return (
        <section id="depoimentos" className="section testimonials">
            <div className="container" data-aos="fade-up">
                <div className="section-header text-center">
                    <h2 className="section-title">{testimonials.title}</h2>
                    <p className="section-subtitle">{testimonials.subtitle}</p>
                </div>
            </div>

            <div className="testimonials__ticker-wrapper">
                <div className="testimonials__track">
                    {tickerItems.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="testimonial-card">
                            <div className="testimonial-card__header">
                                <div className="testimonial-card__user-info">
                                    <h4 className="testimonial-card__name">{item.name}</h4>
                                    <span className="testimonial-card__role">{item.role} • {item.location}</span>
                                </div>
                                <FcGoogle className="testimonial-card__google-icon" />
                            </div>

                            <div className="testimonial-card__stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                            </div>

                            <p className="testimonial-card__text">"{item.text}"</p>

                            <div className="testimonial-card__date">Há 2 semanas</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
