import './style.css';
import Button from '../../Util/Button/button';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
            {
              props.data.carousel.map((item, index) => (
                <div className='slide' key={index} style={{ backgroundImage: `url(${item.image})` }}>
                  <p>{item.name}</p>
                  <Button text="Watch" link={item.link} type="bordered" />
                </div>
              ))
            }
          </Carousel>
          <img src={props.data.tv_images.bottom} alt="" />
        </div>
        <div className="testimonial-col-2">
          <div className="testimonial-col-2-part-1">
            <h2>{props.data.content.title}</h2>
            <p>{props.data.content.desc}</p>
            <Button
              text={props.data.content.button.text}
              link={props.data.content.button.link}
              type={props.data.content.button.type}
            />
          </div>
          <div className="testimonial-col-2-part-2">
            <img src={props.data.side_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
