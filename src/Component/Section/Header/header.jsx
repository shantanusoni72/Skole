import React, { useState } from 'react';
import './style.css';
import Button from '../../Util/Button/button';

export default function Header() {
  const [getToggleDotMenu, setToggleDotMenu] = useState('home');

  const toggleMobileMenu = () => {
    const mobilemenu = document.querySelector('.mobile-menu');
    mobilemenu.classList.toggle('hidden');
  }

  const textOnMouseOver = (id) => {
    document.querySelector('#' + id + ' .svg').classList.add('show');
    var color;
    if (id === 'home') {
      color = '#E74C25';
    } else if (id === 'about') {
      color = '#0A303A';
    } else if (id === 'programs') {
      color = '#6572AE';
    } else if (id === 'admissions') {
      color = '#38BC83';
    } else if (id === 'parents') {
      color = '#A79201';
    } else {
      color = '#11A5E4';
    }
    document.querySelector('#' + id + ' .span').style.color = color;
  }

  const textOnMouseOut = (id) => {
    document.querySelector('#' + id + ' .svg').classList.remove('show');
    document.querySelector('#' + id + ' .span').style.color = 'var(--blue)';
  }

  return (
    <div className="top">
      <div className='header'>
        <div className="header-start">
          <div className="header-image">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="110" viewBox="0 0 116 41"><g fill="none" fill-rule="evenodd" transform="translate(-1)"><path fill="#0A303A" fill-rule="nonzero" d="M12.6 38.2a21.2 21.2 0 0 0 9.4 2.3c2.2 0 4.2-.3 6-1 1.7-.8 3-1.8 4-3a7.1 7.1 0 0 0 0-8.3c-.8-1.1-1.8-2.2-3-3a49 49 0 0 0-4.3-2.8l-1.5-.8-.6-.3a15 15 0 0 1-1.6-1c-.4-.3-.7-.7-.7-1.1 0-.6.3-1 .8-1.5.5-.4 1.2-.5 2-.5 1 0 1.9 0 2.7.2l3.4 1 2.3-5.2a16.8 16.8 0 0 0-8.4-2.4c-2.2 0-4 .4-5.6 1.1a8.7 8.7 0 0 0-3.7 3 7.1 7.1 0 0 0-.1 8.2c.8 1.2 1.8 2.1 2.9 2.9l.4.3 4 2.4 1.3.8.8.5 1.6 1c.5.3.7.7.7 1 0 .6-.3 1.1-1 1.6s-1.6.7-2.7.7a16.8 16.8 0 0 1-6.6-1.8l-2.5 5.7zM44.3 40v-6.6l1.4-1 4 7.6H58l-7-11.6 5.5-4.1-4.6-5.3-7.6 6.5V10.3l-7.6.5V40h7.6zM82 30a9.6 9.6 0 0 1-5.7 9.3c-1.8.8-3.8 1.2-6 1.2a12 12 0 0 1-8.3-2.8c-2-1.8-3-4.5-3-8 0-2.2.4-4.1 1.4-5.8a10 10 0 0 1 4.2-3.7c1.8-.9 3.7-1.3 5.9-1.3s4.2.4 6 1.3c1.7.8 3 2 4 3.7 1 1.7 1.5 3.7 1.5 6zm-11.6 4.2c1.2 0 2.1-.3 2.7-1 .7-.8 1-1.9 1-3.3s-.3-2.5-1-3.4a3 3 0 0 0-2.6-1.4c-1.1 0-2 .4-2.7 1.3-.7.8-1 1.9-1 3.3s.3 2.5 1 3.3c.5.8 1.4 1.2 2.6 1.2zM92.9 40V10.3l-7.6.5V40h7.6zm24-10.5c0-2-.3-3.7-1-5.3a9 9 0 0 0-3.3-3.9 11.8 11.8 0 0 0-11-.1 11 11 0 0 0-3.9 3.8 11 11 0 0 0-1.4 5.8c0 2.3.5 4.2 1.5 5.8 1 1.6 2.5 2.8 4.3 3.6 1.9.9 4 1.3 6.4 1.3a16 16 0 0 0 4.8-.7 11 11 0 0 0 3.6-1.5l-2.1-5.2a12 12 0 0 1-5.6 1.4c-1.3 0-2.3-.2-3-.7a3.7 3.7 0 0 1-1.6-2H117v-2.3zm-12.5-1.6c0-.7.2-1.4.8-2 .5-.6 1.1-.9 1.8-.9.9 0 1.6.4 2 1 .4.6.7 1.2.7 2h-5.3z"></path><path fill="#F68F29" d="M4.1 7c-.1.7-.2 1 .2 1.5.5.4 1.7.7 2.4 1.9.7 1.1 1.8 1.1 2 .9.4-.2 1.3-1-.1-2.3l-3-3c-.5-.2-1.4.5-1.5 1z"></path><path fill="#E74C25" d="M1.7 14.8c.2.5.4 1 1 1 .5.1 1.8-.3 3 .3 1.2.5 2.1-.5 2.3-.9 0-.3.4-1-1.6-1.4-2-.2-3-.6-4-.7-1 0-1 1.1-.7 1.7z"></path><path fill="#56BD7D" d="M10.8 1.4c-.3.5-.6.8-.4 1.3.2.6 1.2 2.5 1.3 3.8 0 1.3.6 2.2 1 2.2.2 0 1.7-1 1.3-2.6-.5-1.6-1.2-5-1.5-5.4-.3-.6-1.3.2-1.7.7z"></path></g></svg></a>
          </div>
          <div className="header-menu">
            <ul>
              <li id="home"><a href="#" onClick={() => setToggleDotMenu('home')}>
                {
                  getToggleDotMenu === 'home' ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#E74C25"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span style={{ color: 'var(--orange)' }}>Home</span>
                    </> : <>
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#E74C25"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span 
                        className="span"
                        onMouseOver={ () => textOnMouseOver('home') } 
                        onMouseOut={ () => textOnMouseOut('home') }
                      >Home</span>
                    </>
                }
              </a></li>
              <li id="about"><a href="#" onClick={() => setToggleDotMenu('about')}>
                {
                  getToggleDotMenu === 'about' ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#0A303A"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span style={{ color: 'var(--blue)' }}>About</span>
                    </> : <>
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#0A303A"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span 
                        className="span"
                        onMouseOver={ () => textOnMouseOver('about') } 
                        onMouseOut={ () => textOnMouseOut('about') }
                      >About</span>
                    </>
                }
              </a></li>
              <li id="programs"><a href="#" onClick={() => setToggleDotMenu('programs')}>
                {
                  getToggleDotMenu === 'programs' ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#6572AE"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span style={{ color: 'var(--purple)' }}>Programs</span>
                    </> : <>
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#6572AE"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span 
                        className="span"
                        onMouseOver={ () => textOnMouseOver('programs') } 
                        onMouseOut={ () => textOnMouseOut('programs') }
                      >Programs</span>
                    </>
                }
              </a></li>
              <li id="admissions"><a href="#" onClick={() => setToggleDotMenu('admissions')}>
                {
                  getToggleDotMenu === 'admissions' ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#38BC83"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span style={{ color: 'var(--green)' }}>Admissions</span>
                    </> :
                    <>
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#38BC83"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span
                        className="span"
                        onMouseOver={ () => textOnMouseOver('admissions') } 
                        onMouseOut={ () => textOnMouseOut('admissions') }
                      >Admissions</span>
                    </>
                }
              </a></li>
              <li id="parents"><a href="#" onClick={() => setToggleDotMenu('parents')}>
                {
                  getToggleDotMenu === 'parents' ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#A79201"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span style={{ color: 'var(--gold)' }}>Parents</span>
                    </> :
                    <>
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#A79201"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span
                        className="span"
                        onMouseOver={ () => textOnMouseOver('parents') } 
                        onMouseOut={ () => textOnMouseOut('parents') }
                      >Parents</span>
                    </>
                }
              </a></li>
              <li id="location"><a href="#" onClick={() => setToggleDotMenu('location')}>
                {
                  getToggleDotMenu === 'location' ?
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#11A5E4"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span style={{ color: 'var(--blue-light)' }}>Location</span>
                    </> :
                    <>
                      <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#11A5E4"><path d="M480.2-240Q380-240 310-309.8q-70-69.8-70-170T309.8-650q69.8-70 170-70T650-650.2q70 69.8 70 170T650.2-310q-69.8 70-170 70Z" />
                      </svg>
                      <span
                        className="span"
                        onMouseOver={ () => textOnMouseOver('location') } 
                        onMouseOut={ () => textOnMouseOut('location') }
                      >Location</span>
                    </>
                }
              </a></li>
            </ul>
          </div>
          <svg className="menuSVG" onClick={toggleMobileMenu} xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </div>
        <div className="header-end">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" /></svg>
          <a className='link' href="tel:+1 541-754-3010​">+1 541-754-3010​</a>
          <Button
            text="Book a Visit"
            link="#"
          />
        </div>
      </div>
      <div className="horizontal-waves"></div>
      <div className="mobile-menu hidden">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Programs</a>
          </li>
          <li>
            <a href="#">Admissions</a>
          </li>
          <li>
            <a href="#">Parents</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
