import React, { useState, useEffect } from 'react';
import './style.css';
import Carousel from 'react-multi-carousel';
import Button from '../../Util/Button/button';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Presentation(props) {
    const [activeSlider, setActiveSlider] = useState(1);
    const [transform, setTransform] = useState("translateX(0)");

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition =
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 50;
    
          const start = 0; // Start percentage
          const end = 40; // End percentage
          const translateXSpeed = 100; // Translate distance in px
    
          if (scrollPosition >= start && scrollPosition <= end) {
            const progress = (scrollPosition - start) / (end - start); // Normalize progress
            setTransform(`translateX(${progress * translateXSpeed}px)`);
          } else if (scrollPosition < start) {
            setTransform("translateX(-300px)");
          } else {
            setTransform(`translateX(${translateXSpeed}px)`);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
      }, []);

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

    return (<>
        <div className="presentation">
            <div className="presentation-slider">
                {
                    activeSlider === 1 ?
                        <Carousel
                            containerClass="presentation-carousel"
                            responsive={responsive}
                            infinite={true}
                        >
                            <img className='presentation-slide' src={props.data.carousel.first.image_1} alt="" />
                            <img className='presentation-slide' src={props.data.carousel.first.image_2} alt="" />
                        </Carousel>
                        : activeSlider === 2 ?
                            <Carousel
                                containerClass="presentation-carousel"
                                responsive={responsive}
                                infinite={true}
                            >
                                <img className='presentation-slide' src={props.data.carousel.second.image_1} alt="" />
                                <img className='presentation-slide' src={props.data.carousel.second.image_2} alt="" />
                                <img className='presentation-slide' src={props.data.carousel.second.image_3} alt="" />
                            </Carousel>
                            : activeSlider === 3 ?
                                <Carousel
                                    containerClass="presentation-carousel"
                                    responsive={responsive}
                                    infinite={true}
                                >
                                    <img className='presentation-slide' src={props.data.carousel.third.image_1} alt="" />
                                    <img className='presentation-slide' src={props.data.carousel.third.image_2} alt="" />
                                    <img className='presentation-slide' src={props.data.carousel.third.image_3} alt="" />
                                </Carousel>
                                : activeSlider === 4 ?
                                    <Carousel
                                        containerClass="presentation-carousel"
                                        responsive={responsive}
                                        infinite={true}
                                    >
                                        <img className='presentation-slide' src={props.data.carousel.fourth.image_1} alt="" />
                                        <img className='presentation-slide' src={props.data.carousel.fourth.image_2} alt="" />
                                        <img className='presentation-slide' src={props.data.carousel.fourth.image_3} alt="" />
                                    </Carousel> : null
                }
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
                    <img style={{ transform, transition: "transform 0.2s ease-out",}} src={props.data.action.image_1} alt="" />
                    <Button
                        text={props.data.action.button.text}
                        link={props.data.action.button.link}
                        type={props.data.action.button.type}
                    />
                </div>
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                    <img src={props.data.action.image_2} alt="" />
                </ScrollAnimation>
            </div>
        </div>
        <div className="presentation-button">
            <Button
                text={props.data.action.button.text}
                link={props.data.action.button.link}
                type={props.data.action.button.type}
            />
        </div>
    </>)
}
