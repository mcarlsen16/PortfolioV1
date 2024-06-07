import { HashLink as Link } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    const [sunY, setSunY] = useState(50); // Starting position of the sun, slightly above the horizon.
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        setSunY(0); // Sun pops up to this position on hover.
    };

    const handleMouseLeave = () => {
        setSunY(50); // Sun returns to the initial position on unhover.
    };
    
    const location = useLocation();

    const isActive = (link) => location.hash === link ? 'active' : '';

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden'; // Toggle body scroll
        document.body.classList.toggle('menu-open', !isMobileMenuOpen);
    };

    useEffect(() => {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            if (isMobileMenuOpen) {
                mainContent.classList.add('blur');
            } else {
                mainContent.classList.remove('blur');
            }
        }
    }, [isMobileMenuOpen]);

    return (
        <nav>
            <div>
                <a href='/'>
                    <div style={{ position: 'relative', height: 'auto' }}>
                        <svg width="50" height="31.25" viewBox='0 0 200 125' style={{ display: 'block', margin: 'auto', overflow: 'visible' }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <circle cx="100" cy={sunY} r="30" fill="var(--flame)" className="sun"/>
                            <path d="M00 100 L50 20 L100 80 L150 20 L200 100" stroke="var(--alice-blue)" fill="var(--rich-black)" strokeWidth="7" strokeLinejoin="bevel"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div className={`navStyleOptions ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <ul>
                    <li className={`navBarItems ${isActive('#about')}`} onClick={toggleMobileMenu}>
                        <Link smooth to="/#about">About</Link>
                    </li>
                    <li className={`navBarItems ${isActive('#experience')}`} onClick={toggleMobileMenu}>
                        <Link smooth to="/#experience">Experience</Link>
                    </li>
                    <li className={`navBarItems ${isActive('#projects')}`} onClick={toggleMobileMenu}>
                        <Link smooth to="/#projects">Projects</Link>
                    </li>
                    <li className={`navBarItems ${isActive('#contact')}`} onClick={toggleMobileMenu}>
                        <Link smooth to="/#contact">Contact</Link>
                    </li>
                    <li className={`navBarItems ${isActive('#contact')}`} onClick={toggleMobileMenu}>
                        <a id="resume-button" className="button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </li>
                </ul>
            </div>
            <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {isMobileMenuOpen && <div className="backdrop blur" onClick={toggleMobileMenu}></div>}
        </nav>
    );
};

export default Navbar;
