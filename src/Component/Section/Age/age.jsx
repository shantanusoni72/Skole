import React from 'react';
import './style.css';
import IMG_1 from '../../../assets/hero.jpg';
import IMG_2 from '../../../assets/toddles.webp';
import IMG_3 from '../../../assets/preschool.webp';
import IMG_4 from '../../../assets/flex-school.webp';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Age() {
    const age_content = [
        {
            'section': 'Infants',
            'image': IMG_1,
            'desc': 'Your baby will give you the most important information for the experience.',
            'timing': '3-12 months 9:00 - 11:00h',
            'url': '#'
        },
        {
            'section': 'Toddles',
            'image': IMG_2,
            'desc': 'During this time, his physical growth and motor development will slow.',
            'timing': '1-3 years 11:00 - 15:00h',
            'url': '#'
        },
        {
            'section': 'Preschool',
            'image': IMG_3,
            'desc': 'Your child is advancing from infancy toward and into the preschool years.',
            'timing': '3-5 years 16:00 - 17:00h',
            'url': '#'
        },
        {
            'section': 'Flex-Care',
            'image': IMG_4,
            'desc': 'Your child should feel confident in her ability to meet the complex challenges.',
            'timing': '5-12 years 19:00 - 21:00h',
            'url': '#'
        },
    ]
    
    return (
        <div className='age-container'>
            <div className="age-row-1">
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft' duration={1.5} initiallyVisible={true}>
                    <h1>Ages</h1>
                </ScrollAnimation>
            </div>
            <div className="age-row-2">
                <h1>we meet kids where they are.</h1>
            </div>
            <div className="age-row-3">
                {
                    age_content.map((item, index) => (
                        <div id={`age-card-${index + 1}`} className="age-card">
                            <h2>{item.section}</h2>
                            <img src={item.image} alt={item.section} />
                            <p>{item.desc}</p>
                            <label>{item.timing}</label>
                            <div className="vantam-eye">
                                <div className="inner">
                                    <a href={item.url}><span></span></a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
