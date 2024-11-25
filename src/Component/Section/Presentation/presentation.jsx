import React, { useState } from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';
import Button from '../../Util/Button/button';

export default function Presentation(props) {
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

    return (
        <div className="presentation">
            <div className="presentation-slider">
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 1 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={props.data.carousel.first.image_1} alt="" />
                    <img className='presentation-slide' src={props.data.carousel.first.image_2} alt="" />
                </Carousel>
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 2 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={props.data.carousel.second.image_1} alt="" />
                    <img className='presentation-slide' src={props.data.carousel.second.image_2} alt="" />
                    <img className='presentation-slide' src={props.data.carousel.second.image_3} alt="" />
                </Carousel>
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 3 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={props.data.carousel.third.image_1} alt="" />
                    <img className='presentation-slide' src={props.data.carousel.third.image_2} alt="" />
                    <img className='presentation-slide' src={props.data.carousel.third.image_3} alt="" />
                </Carousel>
                <Carousel
                    containerClass={`presentation-carousel ${activeSlider === 4 ? "" : "hidden"}`}
                    responsive={responsive}
                    infinite={true}
                >
                    <img className='presentation-slide' src={props.data.carousel.fourth.image_1} alt="" />
                    <img className='presentation-slide' src={props.data.carousel.fourth.image_2} alt="" />
                    <img className='presentation-slide' src={props.data.carousel.fourth.image_3} alt="" />
                </Carousel>
            </div>
            <div className="presentation-controller">
                <ol>
                    <li className={`${activeSlider === 1 ? "selected" : ""}`} onClick={() => setActiveSlider(1)}><a>{props.data.slide_controls[0]}</a></li>
                    <li className={`${activeSlider === 2 ? "selected" : ""}`} onClick={() => setActiveSlider(2)}><a>{props.data.slide_controls[1]}</a></li>
                    <li className={`${activeSlider === 3 ? "selected" : ""}`} onClick={() => setActiveSlider(3)}><a>{props.data.slide_controls[2]}</a></li>
                    <li className={`${activeSlider === 4 ? "selected" : ""}`} onClick={() => setActiveSlider(4)}><a>{props.data.slide_controls[3]}</a></li>
                </ol>
            </div>
            <div className="presentation-image">
                <div className="presentation-image-inner">
                    <img src={props.data.action.image_1} alt="" />
                    <Button
                        text={props.data.action.button.text}
                        link={props.data.action.button.link}
                        type={props.data.action.button.type}
                    />
                </div>
                <img src={props.data.action.image_2} alt="" />
            </div>
        </div>
    )
}
