import React from 'react';
import './style.css';
import Hero from '../../Section/Hero/hero';
import Action from '../../Section/Action/action';
import Testimonial from '../../Section/Testimonial/testimonial';

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <Testimonial />
      <Action />
    </div>
  )
}
