import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '../common/Button';
import { FaWhatsapp } from 'react-icons/fa';
import { content } from '../../data/content';
import './HeroSlider.css';

export const Hero: React.FC = () => {
    const { hero } = content;
    const containerRef = useRef<HTMLDivElement>(null);

    // Lazy initialization for immediate correct image selection
    const [bgImages] = useState<string[]>(() => {
        // Default to Desktop if SSR
        if (typeof window === 'undefined') return [];

        const isMobile = window.innerWidth < 768;

        // Desktop Images (Unsplash High Res)
        const desktopImages = [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000&fm=webp",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=2000&fm=webp",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000&fm=webp"
        ];

        // Mobile Images (You can upload local files 'hero-mobile-1.webp' to public/ OR use these vertical crops)
        // For now using Unsplash Vertical Crops as placeholders until you upload specific ones
        const mobileImages = [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=65&w=720&h=1280&fm=webp",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=65&w=720&h=1280&fm=webp",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=65&w=720&h=1280&fm=webp"
        ];

        return isMobile ? mobileImages : desktopImages;
    });

    // Handle resize (Simplified: reload on huge width changes could be added, but keeping it stable for now)
    useEffect(() => {
        // Optional: Add logic here if dynamic switching on resize is strictly needed
    }, []);

    useGSAP(() => {
        if (bgImages.length === 0) return;

        const images = gsap.utils.toArray<HTMLElement>('.hero-slider__bg');

        // Initial state
        gsap.set(images, { opacity: 0, scale: 1.1 });
        gsap.set(images[0], { opacity: 1, zIndex: 1 });

        const timeline = gsap.timeline({ repeat: -1 });

        images.forEach((img, i) => {
            const nextIndex = (i + 1) % images.length;
            const nextImg = images[nextIndex];

            // Zoom effect for current image (happens while visible)
            timeline
                .to(img, {
                    scale: 1, // Zoom out effect (1.1 -> 1)
                    duration: 6,
                    ease: "power1.inOut",
                }, i * 6) // Start at correct interval

                // Crossfade to next image
                .to(nextImg, {
                    opacity: 1,
                    scale: 1.1, // Reset scale for next
                    duration: 2,
                    ease: "power2.inOut",
                    zIndex: 2 // Bring to front
                }, (i * 6) + 4) // Overlap last 2 seconds

                // Reset current image after fade out
                .set(img, {
                    opacity: 0,
                    zIndex: 0
                });
        });

    }, { scope: containerRef, dependencies: [bgImages] });

    if (bgImages.length === 0) return null; // Or a loader

    return (
        <section id="hero" className="hero-slider" ref={containerRef}>
            <div className="hero-slider__bg-wrapper">
                {bgImages.map((src, index) => (
                    <div
                        key={index}
                        className="hero-slider__bg"
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
            </div>

            <div className="hero-slider__overlay"></div>

            <div className="hero-slider__content">
                <div data-aos="fade-up">
                    <div className="hero-slider__badges">
                        {hero.badges.map((badge, index) => (
                            <span key={index} className="hero-badge">{badge}</span>
                        ))}
                    </div>
                    <h1 className="hero-slider__headline" dangerouslySetInnerHTML={{ __html: hero.headline }}></h1>
                    <p className="hero-slider__subheadline" dangerouslySetInnerHTML={{ __html: hero.subheadline }}></p>

                    <div className="hero-slider__actions">
                        <Button
                            variant="whatsapp"
                            size="lg"
                            icon={<FaWhatsapp />}
                            onClick={() => window.open(hero.link, '_blank')}
                        >
                            {hero.cta}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn--hero-slider"
                        >
                            Ver Produtos
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
