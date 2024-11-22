import React from 'react';
import './style.css';
import Hero from '../../Section/Hero/hero';
import Schedule from '../../Section/Schedule/schedule';
import Presentation from '../../Section/Presentation/presentation';
import Age from '../../Section/Age/age';
import News from '../../Section/News/news';
import Action from '../../Section/Action/action';
import Testimonial from '../../Section/Testimonial/testimonial';

export default function Home(props) {
  return (
    <div className='home'>
      <Hero intro_data={props.data.intro_section} />
      <Presentation data={props.data.presentation_section} />
      <Age data={props.data.age_section} />
      <Schedule data={props.data.schedule_section} />
      <News data={props.data.news_section} />
      <Testimonial />
      <Action data={props.data.action_section} />
    </div>
  )
}
