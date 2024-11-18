import React from 'react';
import './style.css';

export default function Action(props) {

    return (
        <div className='action'>
            {
                props.data.map((item, index) => (
                    <a className="action-box" href={item.message.link}>
                        <img src={item.image} alt="" />
                        <h2>{item.heading}</h2>
                        <p>{item.message.text}</p>
                    </a>
                ))
            }
        </div>
    )
}
