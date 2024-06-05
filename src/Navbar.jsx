import { HashLink as Link } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';
import "./Navbar.css"

const Navbar = () => {

    const [sunY, setSunY] = useState(50); // Starting position of the sun, slightly above the horizon.

    const handleMouseEnter = () => {
        setSunY(0); // Sun pops up to this position on hover.
    };

    const handleMouseLeave = () => {
        setSunY(50); // Sun returns to the initial position on unhover.
    };

    return (
        <nav>
            <div>
                {/* <Link smooth to="/#home">Home</Link> */}
                <a href='/'>
                    {/* <svg width="50" height="31.25" viewBox='0 0 200 125' id='testSvg'>
                        <path id="path-8v6sgh2f6ng" d="M150,110C164.71969,110,176.96335,120.60112,179.51256,134.58493L150,170L120.48744,134.58493C123.03665,120.60112,135.28031,110,150,110Z" fill="var(--flame)" stroke="none" transform="translate(-50 -90)"></path>
                        <path id="path-amvk5rfxurl" d="M0,100L50,20L100,80L150,20L200,100" fill="transparent" stroke="var(--alice-blue)" strokeWidth="7" strokeLinejoin="bevel"></path>
                    </svg> */}

                    <div style={{ position: 'relative', height: 'auto' }}>
                        <svg width="50" height="31.25" viewBox='0 0 200 125' style={{ display: 'block', margin: 'auto', overflow: 'visible' }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            {/* Orange circle (sun) */}
                            <circle cx="100" cy={sunY} r="30" fill="var(--flame)" className="sun"/>
                            {/* Masking rect for sunset */}
                            {/* <rect x="50" y="79" width="100" height="50" fill="var(--rich-black-trans)"/> */}
                            {/* Path for the letter M with drawing effect */}
                            <path d="M00 100 L50 20 L100 80 L150 20 L200 100" stroke="var(--alice-blue)" fill="var(--rich-black)" strokeWidth="7" strokeLinejoin="bevel"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div className="navStyleOptions">
                <ul>
                    <li className="navBarItems"><Link smooth to="/#about">About</Link></li>
                    <li className="navBarItems"><Link smooth to="/#experience">Experience</Link></li>
                    <li className="navBarItems"><Link smooth to="/#projects">Projects</Link></li>
                    <li className="navBarItems"><Link smooth to="/#contact">Contact</Link></li>
                </ul>
                <div className='navBarItems'>
                    <a id="resume-button" className="button" href="">Resume</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
