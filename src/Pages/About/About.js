import React from 'react';
import './About.css';
import img from '../../Assets/myProfile.png';

import Typewriter from 'typewriter-effect';
const About = () => {
    return (
        <div className='mt-24 about lg:mx-28 mx-5'>
            <div className='lg:flex justify-around items-center'>
                <div className='ml-5'>
                    <h1 className='text-[#FF2E59] text-5xl font-sans-serif'>Hello! I'm</h1>
                    <p className='name-title'>Shuvo Gosh</p>
                    <p className='text-3xl mb-3 font-sans-serif'>
                    <Typewriter
                            options={{
                                strings: ['React Developer','Front-End Develover', 'MERN Stack Develover'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <p className='resume'>Download Resume</p>

                </div>
                <div>
                    <img className='lg:w-[400px]' src={img} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default About;