import React from 'react';

const input = props => {
  return (
    <div id={props.id}>
        <label>{props.label}</label>
        <i className={props.iconClass}></i>
        <input  type="number" min="0" max={props.maxIn} required
                value={props.inValue}
                onChange={props.changeHandler}/>
    </div>
  );
};

export default input;
