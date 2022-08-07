import React from 'react';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import ScrollToTop from '../Shared/ScrollToTop';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <About/>
            <AboutMe/>
            <Education/>
            <Skills/>
            <ScrollToTop/>
        </div>
    );
};

export default Home;