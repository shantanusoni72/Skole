import React from 'react';
import './style.css';
import Hero from '../../Section/Hero/hero';
import Schedule from '../../Section/Schedule/schedule';
import Age from '../../Section/Age/age';
import News from '../../Section/News/news';
import Action from '../../Section/Action/action';
import Testimonial from '../../Section/Testimonial/testimonial';
import * as Interface from '../../../interface';

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <Age />
      <Schedule />
      <News
        data={Interface.news_content} 
      /> 
      <Testimonial />
       <Action
        data={Interface.actionInfo} 
      />
    </div>
  )
}
