import React from 'react';
import './style.css';
import tree_1_svg from '../../../assets/tree-1.svg';
import tree_2_svg from '../../../assets/tree-2.svg';
import foxy_svg from '../../../assets/fox-color.svg';
import Button from '../../Util/Button/button';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-row-1">
        <div className="footer-row-1-col-1">
          <ScrollAnimation animateIn="rotateInUpRight" animateOnce={true}>
            <img className="tree-1" src={tree_1_svg} alt="" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInDown" animateOnce={true}>
            <img className="foxy" src={foxy_svg} alt="" />
          </ScrollAnimation>
        </div>
        <div className="footer-row-1-col-2">
          <ScrollAnimation animateIn="rotateInUpLeft" animateOnce={true}>
            <img className="tree-2" src={tree_2_svg} alt="" />
          </ScrollAnimation>
        </div>
      </div>
      <div className="footer-row-inner">
        <div className="footer-row-2">
          <div className="footer-row-2-col outer">
            <div className="footer-row-2-col">
              <ul>
                <li><a href="#">Admissions</a></li>
                <li><a href="#">Programs</a></li>
                <li><a href="#">School Calendar</a></li>
              </ul>
            </div>
            <div className="footer-row-2-col">
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Location</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-row-2-col">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="116" height="41" viewBox="0 0 116 41"><path fill="#0A303A" d="M11.6 38.2a21.2 21.2 0 0 0 9.4 2.3c2.2 0 4.2-.3 6-1 1.7-.8 3-1.8 4-3a7.1 7.1 0 0 0 0-8.3c-.8-1.1-1.8-2.2-3-3a49 49 0 0 0-4.3-2.8l-1.5-.8-.6-.3a15 15 0 0 1-1.6-1c-.4-.3-.7-.7-.7-1.1 0-.6.3-1 .8-1.5.5-.4 1.2-.5 2-.5 1 0 1.9 0 2.7.2l3.4 1 2.3-5.2a16.8 16.8 0 0 0-8.4-2.4c-2.2 0-4 .4-5.6 1.1a8.7 8.7 0 0 0-3.7 3 7.1 7.1 0 0 0-.1 8.2c.8 1.2 1.8 2.1 2.9 2.9l.4.3 4 2.4 1.3.8.8.5 1.6 1c.5.3.7.7.7 1 0 .6-.3 1.1-1 1.6s-1.6.7-2.7.7a16.8 16.8 0 0 1-6.6-1.8l-2.5 5.7zM43.3 40v-6.6l1.4-1 4 7.6H57l-7-11.6 5.5-4.1-4.6-5.3-7.6 6.5V10.3l-7.6.5V40h7.6zM81 30a9.6 9.6 0 0 1-5.7 9.3c-1.8.8-3.8 1.2-6 1.2a12 12 0 0 1-8.3-2.8c-2-1.8-3-4.5-3-8 0-2.2.4-4.1 1.4-5.8a10 10 0 0 1 4.2-3.7c1.8-.9 3.7-1.3 5.9-1.3s4.2.4 6 1.3c1.7.8 3 2 4 3.7 1 1.7 1.5 3.7 1.5 6zm-11.6 4.2c1.2 0 2.1-.3 2.7-1 .7-.8 1-1.9 1-3.3s-.3-2.5-1-3.4a3 3 0 0 0-2.6-1.4c-1.1 0-2 .4-2.7 1.3-.7.8-1 1.9-1 3.3s.3 2.5 1 3.3c.5.8 1.4 1.2 2.6 1.2zM91.9 40V10.3l-7.6.5V40h7.6zm24-10.5c0-2-.3-3.7-1-5.3a9 9 0 0 0-3.3-3.9 11.8 11.8 0 0 0-11-.1 11 11 0 0 0-3.9 3.8 11 11 0 0 0-1.4 5.8c0 2.3.5 4.2 1.5 5.8 1 1.6 2.5 2.8 4.3 3.6 1.9.9 4 1.3 6.4 1.3a16 16 0 0 0 4.8-.7 11 11 0 0 0 3.6-1.5l-2.1-5.2a12 12 0 0 1-5.6 1.4c-1.3 0-2.3-.2-3-.7a3.7 3.7 0 0 1-1.6-2H116v-2.3zM106 25c.9 0 1.6.4 2 1 .4.6.7 1.2.7 2h-5.3c0-.8.2-1.5.8-2 .5-.7 1.1-1 1.8-1zM1.3 13.1c1.1.1 2.1.5 4.1.7 2 .3 1.7 1 1.6 1.4-.2.4-1.1 1.4-2.3.9-1.2-.6-2.5-.2-3-.3-.6 0-.8-.5-1-1-.3-.6-.4-1.8.7-1.7zm1.8-6c.1-.6 1-1.3 1.5-1 .5.3 1.5 1.5 3 2.9 1.4 1.3.5 2 .2 2.3-.3.2-1.4.2-2-1-.8-1-2-1.4-2.5-1.8C3 8 3 7.7 3.1 7zm6.7-5.7c.4-.5 1.4-1.3 1.7-.7.3.5 1 3.8 1.5 5.4.4 1.7-1 2.5-1.4 2.6-.3 0-.8-.9-1-2.2 0-1.3-1-3.2-1.2-3.8-.2-.5 0-.8.4-1.3z"></path></svg></a>
          </div>
          <div className="footer-row-2-col address">
            <ul>
              <li>London</li>
              <li>United Kingdom</li>
              <li><a href="#">Google Maps</a></li>
              <li>Phone: <a href="tel:(+1) 541-754-3010">(+1) 541-754-3010</a></li>
              <li><a href="mailto:hi@kindergarten.com">hi@kindergarten.com</a></li>
            </ul>
          </div>
          <div className="footer-row-2-col">
            <Button
              text="Book a Visit"
              link="#"
            />
            <div className="footer-row-2-col-5-inner">
              <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
              <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
              <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="footer-row-3">
          <div className="footer-row-3-col-1">
            <p>© 2024 Kindergarten Theme by VamTam. All rights reserved. | Icons by Freepik</p>
          </div>
          <div className="footer-row-3-col-2">
            <ul>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">School Calender</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
