import React, { useRef } from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';
// import { motion } from 'motion/react';

export default function Intro(props) {
    // const scrollRef = useRef(null);

    return (
        <div className='intro' ref={scrollRef}>
            <div className="intro-col-1">
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={1} initiallyVisible={true}>
                {/* <motion.div 
                    viewport={{root: scrollRef}}
                    initial={{translateX: 300, scale: 1.5}} 
                    whileInView={{translateX: 0, scale: 1}}
                    transition={2} 
                > */}
                    <h1>{props.intro_data.shouted_heading}</h1>
                {/* </motion.div> */}
                </ScrollAnimation>
            </div>
            <div className="intro-col-2">
                <h2>{props.intro_data.normal_heading}</h2>
                <p>{props.intro_data.paragraph}</p>
            </div>
        </div>
    )
}
