import React from 'react';
import './index.css';
import { FALLBACK_IMAGE } from '../../config/vars';

const Image = (props) => {
  return <img 
    className={`u-image ${props.className}`}
    src={props.imageSrc} 
    alt={props.alt}
    onError={(event) => {
      event.target.src = FALLBACK_IMAGE;
    }}
  />;
}

export default Image;