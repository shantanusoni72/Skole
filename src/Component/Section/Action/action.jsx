import React from 'react';
import './style.css';
import HelpSVG from '../../../assets/help.svg';
import HomeSVG from '../../../assets/house.svg';
import PaperSVG from '../../..//assets/description.svg';

export default function Action() {
    const actionInfo = [
        {
            'image': HelpSVG,
            'heading': 'Any Questions?',
            'message':
                { 
                    'text': 'Make an Enquiry',
                    'link': '#'
                }
        },
        {
            'image': HomeSVG,
            'heading': 'See it Yourself!',
            'message':
                { 
                    'text': 'Book a visit',
                    'link': '#'
                }
        }, 
        {
            'image': PaperSVG,
            'heading': 'Ready to Join?',
            'message':
                { 
                    'text': 'Register here',
                    'link': '#'
                }
        }, 
    ]

    return (
    <div className='action'>
        {
            actionInfo.map((item, index) => (
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
