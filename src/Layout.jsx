import React from 'react';
import Header from './Header';
import Landing from './sections/Landing';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer'

const Layout = () => {
    return (
        <div>
            <Header />
            {/* <div style={{position:'fixed', bottom:"0px", right:"40px", writingMode:"vertical-rl", marginBottom: '20px', fontFamily:'var(--font-mono)', fontSize:'15px' }}>
                <a href='mailto:matthewdcarlsen@gmail.com'>matthewdcarlsen@gmail.com</a>
            </div> */}
            <div className='content'>
                <Landing />
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
