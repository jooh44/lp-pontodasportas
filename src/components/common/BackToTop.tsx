import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

export const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        // Show button when page is near bottom (footer visible)
        // Adjust threshold as needed. 150px close to bottom.
        const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;

        setIsVisible(scrolledToBottom);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <FaArrowUp />
        </button>
    );
};
