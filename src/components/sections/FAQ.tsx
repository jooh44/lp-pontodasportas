
import React, { useState } from 'react';
import { content } from '../../data/content';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

export const FAQ: React.FC = () => {
    const { faq } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section faq">
            <div className="container" data-aos="fade-up">
                <h2 className="section-title text-center">{faq.title}</h2>
                <div className="faq__list">
                    {faq.items.map((item, index) => (
                        <div
                            key={index}
                            className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
                            onClick={() => toggle(index)}
                        >
                            <div className="faq__question">
                                <h3>{item.question}</h3>
                                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            <div className="faq__answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
