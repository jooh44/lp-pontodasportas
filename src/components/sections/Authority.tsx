
import React from 'react';
import { content } from '../../data/content';
import { History, Truck, Ruler, Wrench } from 'lucide-react';
import './Authority.css';

const IconMap: Record<string, React.ReactNode> = {
    FaHistory: <History strokeWidth={1.5} />,
    FaTruck: <Truck strokeWidth={1.5} />,
    FaRulerCombined: <Ruler strokeWidth={1.5} />,
    FaTools: <Wrench strokeWidth={1.5} />
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
                            <div className="authority__icon-box">
                                {IconMap[item.icon] || <Wrench />}
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
