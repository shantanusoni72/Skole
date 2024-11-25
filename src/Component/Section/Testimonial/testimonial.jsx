import React from 'react';
import './style.css';
import Button from '../../Util/Button/button';
import ParentWithChild from '../../../assets/illustration-people-3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Parents_1 from '../../../assets/parents-1.jpg';
import Parents_2 from '../../../assets/parents-2.jpg';
import Parents_3 from '../../../assets/parents-3.jpg';
import Parents_4 from '../../../assets/parents-4.jpg';
import Parents_5 from '../../../assets/parents-5.jpg';
import top from '../../../assets/tv-top.svg';
import bottom from '../../../assets/tv-bottom.svg';

export default function Testimonial(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='testimonial'>
      <h1>{props.data.shouted_heading}</h1>
      <div className="testimonial-row">
        <div className="testimonial-col-1">
          <img src={props.data.tv_images.top} alt="" />
          <Carousel
            containerClass='testimonial-carousel'
            responsive={responsive}
            infinite={true}
          >
            <div className='slide' style={{ backgroundImage: `url(${Parents_1})` }}>
              <p>Megan Timberland</p>
              <Button text="Watch" link="#" type="bordered" />
            </div>
            <div className='slide' style={{ backgroundImage: `url(${Parents_2})` }}>
              <p>Megan Timberland</p>
              <Button text="Watch" link="#" type="bordered" />
            </div>
            <div className='slide' style={{ backgroundImage: `url(${Parents_3})` }}>
              <p>Megan Timberland</p>
              <Button text="Watch" link="#" type="bordered" />
            </div>
            <div className='slide' style={{ backgroundImage: `url(${Parents_4})` }}>
              <p>Megan Timberland</p>
              <Button text="Watch" link="#" type="bordered" />
            </div>
            <div className='slide' style={{ backgroundImage: `url(${Parents_5})` }}>
              <p>Megan Timberland</p>
              <Button text="Watch" link="#" type="bordered" />
            </div>
          </Carousel>
          <img src={props.data.tv_images.bottom} alt="" />
        </div>
        <div className="testimonial-col-2">
          <h2>kids. Just watch what parents say.</h2>
          <p>None bigger than early education. Parents know that at KinderCare we make it our passion to nurture a sense of discovery.</p>
          <Button
            text="Watch all testimonials"
            link="#"
            type="bordered"
          />
        </div>
        <div className="testimonial-col-3">
          <img src={ParentWithChild} alt="" />
        </div>
      </div>
    </div>
  )
}
