// Header.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Header.css';

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [headerClass, setHeaderClass] = useState("TopOfPage");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const headerHeight = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--nav-scroll-height'), 10);

            if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
                setHeaderClass("ScrollDown");
            } else if (currentScrollY < lastScrollY) {
                setHeaderClass("ScrollUp");
            }

            if (currentScrollY === 0) {
                setHeaderClass("TopOfPage");
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={headerClass}>
            <Navbar />
        </header>
    );
};

export default Header;
