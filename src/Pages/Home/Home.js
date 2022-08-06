import React from 'react';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import ScrollToTop from '../Shared/ScrollToTop';

const Home = () => {
    return (
        <div>
            <About/>
            <AboutMe/>
            <Education/>
            <ScrollToTop/>
        </div>
    );
};

export default Home;