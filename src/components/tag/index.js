import React from 'react';
import CloseButton from '../closeButton';
import './index.css';

const Tag = (props) => {
  return (
    <div className="tag">
      <div className="tag-text">{props.value}</div>
      <CloseButton onClick={props.onClickCross} height="10px" width="10px" />
    </div>
  );
}

export default Tag;