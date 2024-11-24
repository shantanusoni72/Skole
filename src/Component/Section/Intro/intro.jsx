import React from 'react';
import './style.css';

export default function Intro(props) {

    return (
        <div className='intro'>
            <div className="intro-col-1">
                <h1>{props.intro_data.shouted_heading}</h1>
            </div>
            <div className="intro-col-2">
                <h2>{props.intro_data.normal_heading}</h2>
                <p>{props.intro_data.paragraph}</p>
            </div>
        </div>
    )
}
