import React from 'react';
import './style.css';
import Button from '../../Util/Button/button';


export default function News(props) {

  return (
    <div className='news-container'>
      <h1 id="heading">News</h1>
      <div className="news">
        {
          props.data.map((item, index) => (
            <div className="news-card">
              <label>{item.tag}</label>
              <img src={item.image} alt=""></img>
              <a href={item.url}>{item.heading}</a>
            </div>
          ))
        }
      </div>
      <Button
          text="View all"
          link="#"
          type="bordered"
        />
    </div>
  )
}
