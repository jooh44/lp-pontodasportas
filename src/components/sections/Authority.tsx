
import React from 'react';
import { content } from '../../data/content';
import { FaHistory, FaTruck, FaRulerCombined, FaTools } from 'react-icons/fa';
import './Authority.css';

const IconMap: Record<string, React.ReactNode> = {
    FaHistory: <FaHistory />,
    FaTruck: <FaTruck />,
    FaRulerCombined: <FaRulerCombined />,
    FaTools: <FaTools />
};

export const Authority: React.FC = () => {
    const { authority } = content;

    return (
        <section id="sobre" className="section authority">
            <div className="container" data-aos="fade-up">
                <h2 className="section-title text-center">{authority.title}</h2>
                <div className="authority__grid">
                    {authority.items.map((item) => (
                        <div key={item.id} className="authority__item">
                            <div className="authority__icon">
                                {IconMap[item.icon] || <FaTools />}
                            </div>
                            <h3 className="authority__title">{item.title}</h3>
                            <p className="authority__description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
