import React from 'react';
import { content } from '../../data/content';
import { FaCalendarCheck, FaHome, FaSmile, FaDoorOpen } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css';

const iconMap: { [key: string]: React.ElementType } = {
    FaCalendarCheck,
    FaHome,
    FaSmile,
    FaDoorOpen
};

export const StatsSection: React.FC = () => {
    const { stats } = content;
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="section stats-section" ref={ref}>
            <div className="container">
                <div className="stats__grid">
                    {stats.items.map((item) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <div key={item.id} className="stats__card">
                                <div className="stats__icon-wrapper">
                                    <Icon className="stats__icon" />
                                </div>
                                <div className="stats__content">
                                    <div className="stats__number">
                                        {inView ? (
                                            <CountUp
                                                end={item.number}
                                                duration={2.5}
                                                separator="."
                                            />
                                        ) : (
                                            0
                                        )}
                                        <span className="stats__suffix">{item.suffix}</span>
                                    </div>
                                    <div className="stats__label">{item.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
