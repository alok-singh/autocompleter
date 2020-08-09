import React from 'react';
import Image from '../image';

import './index.css';

const Tag = (props) => {
  return (
    <div className="list-item" onClick={props.onClickItem}>
      <Image className="item-image" imageSrc={props.imageSrc} alt={props.title} />
      <div className="item-description">
        <div className="item-title">{props.title}</div>
        <div className="item-type">{props.type}</div>
        <div className="item-year">{props.year}</div>
      </div>
    </div>
  );
}

export default Tag;