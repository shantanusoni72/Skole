import React from 'react';
import './style.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Age(props) {
    return (
        <div className='age-container'>
            <div className="age-row-1">
                <h1>{props.data.shouted_heading}</h1>
            </div>
            <div className="age-row-2">
                <h1>{props.data.normal_heading}</h1>
            </div>
            <div className="age-row-3">
                {
                    props.data.content.map((item, index) => (
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
