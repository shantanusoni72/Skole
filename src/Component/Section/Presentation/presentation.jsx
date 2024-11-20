import React, { useState } from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '../../Util/Button/button';
import IMG_1 from '../../../assets/illustration-people-1.svg';
import IMG_2 from '../../../assets/tree-4.svg';

import IMG_S_1_1 from '../../../assets/toddles.webp';
import IMG_S_1_2 from '../../../assets/gautam-arora-78Ae6N7rNvI-unsplash.jpg';

import IMG_S_2_1 from '../../../assets/h-15.jpg';
import IMG_S_2_2 from '../../../assets/leo-rivas-wtxcaDIdOCM-unsplash.jpg';
import IMG_S_2_3 from '../../../assets/anna-samoylova-w55SpMmoPgE-unsplash.jpg';

import IMG_S_3_1 from '../../../assets/h-05.jpg';
import IMG_S_3_2 from '../../../assets/h-18.jpg';
import IMG_S_3_3 from '../../../assets/h-30.jpg';

import IMG_S_4_1 from '../../../assets/news-1.webp';
import IMG_S_4_2 from '../../../assets/h-16.jpg';
import IMG_S_4_3 from '../../../assets/maggie-markel-oRbtEWw_l04-unsplash.jpg';

export default function Presentation() {
    const [activeSlider, setActiveSlider] = useState(1);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const toggleMultiSlider = (number) => {
        const currentSlider = document.querySelectorAll('.presentation-carousel');
        for (var i = 0; i < currentSlider.length; i++) {
            if (number === i + 1) {
                currentSlider[i].classList.remove('hidden');
            } else {
                currentSlider[i].classList.add('hidden');
            }
        }
    }

    return (
        <div className="presentation">
            <div className="presentation-slider">
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 1 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={IMG_S_1_1} alt="" />
                    <img className='presentation-slide' src={IMG_S_1_2} alt="" />
                </Carousel>
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 2 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={IMG_S_2_1} alt="" />
                    <img className='presentation-slide' src={IMG_S_2_2} alt="" />
                    <img className='presentation-slide' src={IMG_S_2_3} alt="" />
                </Carousel>
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 3 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={IMG_S_3_1} alt="" />
                    <img className='presentation-slide' src={IMG_S_3_2} alt="" />
                    <img className='presentation-slide' src={IMG_S_3_3} alt="" />
                </Carousel>
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 4 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={IMG_S_4_1} alt="" />
                    <img className='presentation-slide' src={IMG_S_4_2} alt="" />
                    <img className='presentation-slide' src={IMG_S_4_3} alt="" />
                </Carousel>
            </div>
            <div className="presentation-controller">
                <ol>
                    <li onClick={() => setActiveSlider(1)}><a>Home-like Environment</a></li>
                    <li onClick={() => setActiveSlider(2)}><a>Safety and Security</a></li>
                    <li onClick={() => setActiveSlider(3)}><a>Quality Educators</a></li>
                    <li onClick={() => setActiveSlider(4)}><a>Play to Learn</a></li>
                </ol>
            </div>
            <div className="presentation-image">
                <div className="presentation-image-inner">
                    <img src={IMG_1} alt="" />
                    <Button
                        text="Learn More"
                        link="#"
                        type="bordered"
                    />
                </div>
                <img src={IMG_2} alt="" />
            </div>
        </div>
    )
}
