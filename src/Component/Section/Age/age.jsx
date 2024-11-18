import React from 'react';
import './style.css';
import IMG_1 from '../../../assets/hero.jpg';
import IMG_2 from '../../../assets/toddles.webp';
import IMG_3 from '../../../assets/preschool.webp';
import IMG_4 from '../../../assets/flex-school.webp';
import moo_IMG from '../../../assets/moo.svg';

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
            <div className="age-main-text">
                <div className="age-row-1">
                    <h1>Age</h1>
                </div>
                <div className="age-row-2">
                    <h1>we meet kids where they are.</h1>
                </div>
                <div className="age-row-3">
                    {
                        age_content.map((item, index) => (
                            <div className="age-card">
                                <h2>{item.section}</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 140" preserveAspectRatio="none">
                                    <defs>
                                        <clipPath id="customShape">
                                            <path d="M13.458 10.261C22.109 1.753 117.468 0 165.338 0c24.845 0 42.971 2.45 54.378 7.35a15 15 0 0 1 8.978 12.031c8.644 73.539 6.725 112.16-5.757 115.864-19.33 5.736-193.21 4.678-207.557 4.678C1.033 139.923 0 88.903 0 69.71c0-19.193 4.806-50.94 13.458-59.449z" />
                                        </clipPath>
                                    </defs>
                                    <image
                                        href={item.image}
                                        width="234"
                                        height="140"
                                        clip-path="url(#customShape)"
                                        preserveAspectRatio="xMidYMid slice" />
                                </svg>
                                <p>{item.desc}</p>
                                <label>{item.timing}</label>
                                <a href={item.url}>s</a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="moo-img">
                <img src={moo_IMG} alt="" />
            </div>
        </div>
    )
}
