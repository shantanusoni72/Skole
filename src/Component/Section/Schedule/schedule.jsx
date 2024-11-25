import React from 'react';
import './style.css';
import Button from '../../Util/Button/button';
import Person_2 from '../../../assets/illustration-people-2.svg';
import Snail from '../../../assets/snail.svg';
import Leaf_1 from '../../../assets/leaf-1.svg';
import Leaf_2 from '../../../assets/leaf-2.svg';
import Tree_1 from '../../../assets/illustration-tree-2.svg';

export default function Schedule(props) {
    return (
        <div className='schedule'>
            <div className="schedule-row-1">
                <h1>{props.data.shouted_heading}</h1>
            </div>
            <div className="schedule-row-2">
                <img src={Person_2} alt="" />
                <div className="schedule-row-2-col-2">
                    <h1>{props.data.normal_heading}</h1>
                    <p>{props.data.paragraph}</p>
                    <div className="button-group">
                        <Button text="Schedule a Tour" link="#" />
                        <p>or</p>
                        <Button text="Join Our New Session" link="#" type="bordered" />
                    </div>
                </div>
            </div>
            <div className="schedule-row-3">
                <div className="schedule-row-3-col">
                    <img className="leaf_2" src={Leaf_2} alt="" />
                    <img src={Leaf_1} alt="" />
                </div>
                <img src={Tree_1} alt="" />
            </div>
            <div className="schedule-row-4">
                <h2>London, <br />United Kingdom</h2>
                <h2>20 Manchester Square <br />London W1U 360</h2>
                <h2>Phone: <br />{props.data.contact.phone}</h2>
                <h2>Email: <br />{props.data.contact.email}</h2>
            </div>
            <div className="schedule-row-5">
                <img className="snail" src={Snail} alt="" />
            </div>
        </div>
    )
}
