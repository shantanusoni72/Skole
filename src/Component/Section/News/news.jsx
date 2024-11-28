import React from 'react';
import './style.css';
import Button from '../../Util/Button/button';


export default function News(props) {

  return (
    <div className='news-container'>
      <h1 id="heading">{props.data.simple_heading}</h1>
      <div className="news">
        {
          props.data.content.map((item, index) => (
            <div className="news-card">
              <label>{item.tag}</label>
              <img src={item.image} alt=""></img>
              <a href={item.url}>{item.heading}</a>
            </div>
          ))
        }
      </div>
      <div className="news-button">
        <Button
          text={props.data.button.text}
          link={props.data.button.link}
          type={props.data.button.type}
        />
      </div>
    </div>
  )
}
