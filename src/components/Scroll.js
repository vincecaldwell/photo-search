//jshint esversion:6
import React from 'react';

const Scroll = (props) => {
  return (
    <div className="scroll-field"style={ {overflowY: 'scroll', border: '2px solid black', height: '500px' } }>
      {props.children}
    </div>
  );
};

export default Scroll;