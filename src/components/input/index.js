import React from 'react';
import './index.css';

const Input = (props) => {
  return (
    <input 
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      className="u-input"
      value={props.value} 
      onChange={props.onChange} 
    />
  );
}

export default Input;