import React, { useState, useEffect } from 'react';
import './SunsetEffect.css';

const SunsetEffect = () => {
    const [sunY, setSunY] = useState(10); // Initial vertical position of the sun

    useEffect(() => {
        const maxScroll = window.innerHeight * 0.25; // Sun sets after scrolling 25% of the viewport height
        const handleScroll = () => {
            const scrollPosition = Math.min(window.scrollY, maxScroll); // Limit scroll tracking to maxScroll
            const newSunY = 10 + (70 * scrollPosition / maxScroll); // Calculate new Y position for the sun
            setSunY(newSunY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ position: 'relative', height: 'auto' }}>
            <svg width="200" height="125" style={{ display: 'block', margin: 'auto', overflow: 'visible' }}>
                {/* Orange circle (sun) */}
                <circle cx="100" cy={sunY} r="30" fill="var(--flame)" className="sun"/>
                {/* Masking rect for sunset */}
                <rect x="50" y="79" width="100" height="50" fill="var(--rich-black)"/>
                {/* Path for the letter M with drawing effect */}
                <path d="M00 100 L50 20 L100 80 L150 20 L200 100" stroke="var(--alice-blue)" fill="var(--rich-black)" strokeWidth="7" strokeLinejoin="bevel" className="draw"/>
            </svg>
        </div>
    );
};

export default SunsetEffect;
