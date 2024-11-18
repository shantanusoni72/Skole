import React from 'react';
import './style.css';

export default function Button(props) {
  return (
    props.type === 'bordered' ?
      <a className='button bordered' href={props.link}>{props.text}</a>
      :
      <a className='button' href={props.link}>{props.text}</a>
  )
}
