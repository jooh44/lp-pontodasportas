
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './HeroTicker.css';

const doorImages = [
    '/products/door-solid.png',
    '/products/window-l30.png',
    '/products/door-internal.png',
    '/products/window-integrated.png',
    '/products/door-solid.png',
];

interface HeroTickerProps {
    direction?: 'up' | 'down';
    speed?: number;
}

export const HeroTicker: React.FC<HeroTickerProps> = ({ direction = 'down', speed = 20 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!trackRef.current) return;

        const target = trackRef.current;

        // Clone content for seamless loop
        const content = Array.from(target.children);
        content.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            (duplicatedItem as HTMLElement).setAttribute('aria-hidden', 'true');
            target.appendChild(duplicatedItem);
        });

        const totalHeight = target.scrollHeight / 2; // Since we duplicated

        // Set initial position
        if (direction === 'up') {
            gsap.set(target, { y: 0 });
            gsap.to(target, {
                y: -totalHeight,
                duration: speed,
                ease: "none",
                repeat: -1,
            });
        } else {
            gsap.set(target, { y: -totalHeight });
            gsap.to(target, {
                y: 0,
                duration: speed,
                ease: "none",
                repeat: -1,
            });
        }

    }, { scope: containerRef });

    return (
        <div className="hero-ticker-vertical" ref={containerRef}>
            <div className="hero-ticker__column">
                <div className="hero-ticker__track" ref={trackRef}>
                    {doorImages.map((src, index) => (
                        <div key={index} className="hero-ticker__item-vertical">
                            <img src={src} alt="Produto Vertical" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
