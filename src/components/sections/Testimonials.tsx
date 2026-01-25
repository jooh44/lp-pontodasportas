
import React from 'react';
import { content } from '../../data/content';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
    const { testimonials } = content;

    return (
        <section id="depoimentos" className="section testimonials">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2 className="section-title">{testimonials.title}</h2>
                    <p className="section-subtitle">{testimonials.subtitle}</p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.items.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <FaQuoteLeft className="testimonial__quote-icon" />
                            <div className="testimonial__stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="testimonial__text">"{item.text}"</p>

                            <div className="testimonial__author">
                                <img src={item.avatar} alt={item.name} className="testimonial__avatar" />
                                <div className="testimonial__info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role} • {item.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
