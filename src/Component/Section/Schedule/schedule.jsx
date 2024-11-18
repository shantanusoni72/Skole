import React from 'react';
import './style.css';
import Button from '../../Util/Button/button';
import Person_2 from '../../../assets/illustration-people-2.svg';
import Snail from '../../../assets/snail.svg';
import Path from '../../../assets/path.svg';

export default function Schedule() {
    return (
        <div className='schedule'>
            <div className="schedule-row-1">
                <h1>Come</h1>
            </div>
            <div className="schedule-row-2">
                <img src={Person_2} alt="" />
                <div className="schedule-row-2-col-2">
                    <h1>over and look around.</h1>
                    <p>
                        We will explain everything you are intereste. Join our new session. If you have any questions or
                        enquiries please feel free to contact us on the following details provided below or alternatively
                        you can complete our online enquiry form also located below and we will get back to you as soon
                        as possible…
                    </p>
                    <div className="button-group">
                        <Button text="Schedule a Tour" link="#" />
                        <p>or</p>
                        <Button text="Join Our New Session" link="#" type="bordered" />
                    </div>
                </div>
            </div>
            <div className="schedule-row-3">
                <img src={Path} alt="" />
            </div>
            <div className="schedule-row-4">
                <h2>London, <br />United Kingdom</h2>
                <h2>20 Manchester Square <br />London W1U 360</h2>
                <h2>Phone: <br />(+1) 541-754-3010</h2>
                <h2>Email: <br />hi@kindergarten.com</h2>
            </div>
            <div className="schedule-row-5">
                <img src={Snail} alt="" />
            </div>
        </div>
    )
}
