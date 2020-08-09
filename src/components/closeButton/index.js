import React from 'react';
import './index.css';

const CloseButton = (props) => {
  return (
    <div onClick={props.onClick} className="close-button">
      <svg version="1.1" x="0px" y="0px" width={props.width} height={props.height} viewBox="0 0 357 357">
        <g id="close">
          <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
            214.2,178.5"/>
        </g>
      </svg>
    </div>
  );
}

export default CloseButton;